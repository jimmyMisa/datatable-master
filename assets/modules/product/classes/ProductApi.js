import { Api } from "modules/common/Api.js";

class ProductApi{
	static apis = {};

	static init(){
		ProductApi.apis.listAction = new Api({url: window.api_list_product});
		ProductApi.apis.createAction = new Api({url: window.api_create_product});
		ProductApi.apis.getAction = new Api({url: window.api_get_product});
		ProductApi.apis.editAction = new Api({url: window.api_edit_product});
		ProductApi.apis.removeAction = new Api({url: window.api_remove_product});
	}
	static listApi(params={}){
		var {data={}, then=()=>{}}=params;
		ProductApi.apis.listAction.run({data: json_encode(data), then})
	}
	static createApi(params={}){
		var {data={}, then=()=>{}}=params;
		var query = data;
		var data = {
			query: json_encode(query)
		}
		ProductApi.apis.createAction.run({data, then})
	}
	static editApi(params={}){
		var {data={}, then=()=>{}}=params;
		var query = data;
		var data = {
			query: json_encode(query)
		}
		ProductApi.apis.editAction.run({data, then})
	}
	static getApi(params={}){
		var {id, then=()=>{}}=params;
		var query = {
			id: id
		}
		var data = {
			query: json_encode(query)
		}
		ProductApi.apis.getAction.run({data, then})
	}
	static removeApi(params={}){
		var {id, then=()=>{}}=params;
		var query = {
			id: id
		}
		var data = {
			query: json_encode(query)
		}
		ProductApi.apis.removeAction.run({data, then})
	}
}

export {
	ProductApi
}