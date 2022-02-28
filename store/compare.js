export const state = () => ({
    items: [],
    total: null,
    loading: false
});

export const mutations = {
    initCompare(state, payload) {
        state.items = payload.items;
        state.total = payload.total;
    },

    setItems(state, payload) {
        if (state.total !== null) {
            const existItem = state.items.find(item => item.id === payload.id);
            if (!existItem) {
                state.items.push({
                    id: payload.id
                });
                state.total = state.total + 1;
            }
        } else {
            state.items.push({
                id: payload.id
            });
            state.total = state.total + 1;
        }
    },
    removeItem(state, payload) {
        const index = state.items.findIndex(item => item.id === payload.id);
        state.total = state.total - 1;
        state.items.splice(index, 1);
    }
};
export const actions = {
    addItemToCompare({ commit, state }, payload) {
        commit('setItems', payload);
        const params = {
            items: state.items,
            total: state.total
        };

        this.$cookies.set('compare', params, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    removeItemFromCompare({ commit, state }, payload) {
        commit('removeItem', payload);
        const params = {
            items: state.items,
            total: state.total
        };

        this.$cookies.set('compare', params, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};
