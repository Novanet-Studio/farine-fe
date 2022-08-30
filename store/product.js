import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';

export const state = () => ({
    product: null,
    products: null,
    searchResults: null,
    cartProducts: null,
    wishlistItems: null,
    compareItems: null,
    brands: null,
    categories: null,
    total: 0
});

export const mutations = {
    setProducts(state, payload) {
        state.products = payload;
    },

    setCartProducts(state, payload) {
        state.cartProducts = payload;
    },
    setWishlistItems(state, payload) {
        state.wishlistItems = payload;
    },
    setCompareItems(state, payload) {
        state.compareItems = payload;
    },

    setProduct(state, payload) {
        state.product = payload;
    },

    setBrands(state, payload) {
        state.brands = payload;
    },

    setCategories(state, payload) {
        state.categories = payload;
    },

    setSearchResults(state, payload) {
        state.searchResults = payload;
    },

    setTotal(state, payload) {
        state.total = payload;
    }
};

export const actions = {
	async getCategories({ commit }, payload) {
		const response = Repository.get(
			`${baseUrl}/categories/?populate[products][populate]=%2A`
		).then((response) => {
			return response.data.data;
		});
		return response;
	},

    async getCartProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `filters[id]=${item}`;
            } else {
                query = query + `&filters[id]=${item}`;
            }
        });
        // return console.log(`${baseUrl}/products?populate=*&${query}`)
        const reponse = await Repository.get(`${baseUrl}/products?populate=*&${query}`)
            .then(response => {
                commit('setCartProducts', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        // return console.log(reponse.data);
         return reponse.data;
    },

    async getWishlishtProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `filters[id]=${item}`;
            } else {
                query = query + `&filters[id]=${item}`;
            }
        });
        // return console.log(`${baseUrl}/products?populate=*&${query}`)
        const reponse = await Repository.get(`${baseUrl}/products?populate=*&${query}`)
            .then(response => {
                commit('setWishlistItems', response.data.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse.data;
    },
    
    async getProductById({commit}, payload){
        let query = '';
        for (let i = 0; i < payload.length; i++) {
            if(query === ''){
                query = `filters[id]=${payload[i]}`;
            }else{
                query = query + `&filters[id]=${payload[i]}`;
            }
            
        }
        // return query; 
        const reponse = await Repository.get(`${baseUrl}/products?populate=*&${query}`)
        .then(response => {
            // commit('setProducts', response.data);
            return response.data;
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;

    },

	async getProductBrands({ commit }) {
		const reponse = await Repository.get(`${baseUrl}/brands`)
			.then((response) => {
				commit("setBrands", response.data);
				return response.data;
			})
			.catch((error) => ({ error: JSON.stringify(error) }));
		return reponse;
	},

	async getProductByCategories({ commit }) {
		const reponse = await Repository.get(
			`${baseUrl}/products?populate[products][populate]=%2A&filters[category][id]=${category}`
		)
			.then((response) => {
				return response.data.data;
			})
			.catch((error) => ({ error: JSON.stringify(error) }));
		return reponse;
	},

    async getProductsByBrands({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/brands?${query}`)
            .then(response => {
                if (response.data) {
                    const brands = response.data;
                    let products = [];
                    brands.forEach(brand => {
                        brand.products.forEach(product => {
                            products.push(product);
                        });
                    });
                    commit('setProducts', products);
                    commit('setTotal', products.length);
                    return products;
                } else {
                    return null;
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getProductsByPriceRange({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                commit('setSearchResults', response.data);
                commit('setTotal', response.data.length);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
