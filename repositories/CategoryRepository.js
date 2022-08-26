import Repository, { baseUrl, serializeQuery } from "./Repository";

export default class CategoryRepository {
	constructor(callback) {
		this.callback = callback;
	}

	async GetCategories() {
		const response = await Repository.get(
			`${baseUrl}/categories/?populate=*`
		).then((response) => {
			console.log("desde el repo", response);
			return response.data;
		});
		return response;
	}
}

// export default new ProductRepository();
