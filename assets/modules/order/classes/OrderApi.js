import { Api } from "modules/common/Api.js";

class OrderApi{
	static apis = {};

	static init(){
		OrderApi.apis.listAction = new Api({url: window.api_list_order});
		OrderApi.apis.createAction = new Api({url: window.api_create_order});
		OrderApi.apis.getAction = new Api({url: window.api_get_order});
		OrderApi.apis.editAction = new Api({url: window.api_edit_order});
		OrderApi.apis.removeAction = new Api({url: window.api_remove_order});
	}
	static listApi(params={}){
		var {data={}, then=()=>{}}=params;
		OrderApi.apis.listAction.run({data: json_encode(data), then})
	}
	static createApi(params={}){
		var {data={}, then=()=>{}}=params;
		var query = data;
		var data = {
			query: json_encode(query)
		}
		OrderApi.apis.createAction.run({data, then})
	}
	static editApi(params={}){
		var {data={}, then=()=>{}}=params;
		var query = data;
		var data = {
			query: json_encode(query)
		}
		OrderApi.apis.editAction.run({data, then})
	}
	static getApi(params={}){
		var {id, then=()=>{}}=params;
		var query = {
			id: id
		}
		var data = {
			query: json_encode(query)
		}
		OrderApi.apis.getAction.run({data, then})
	}
	static removeApi(params={}){
		var {id, then=()=>{}}=params;
		var query = {
			id: id
		}
		var data = {
			query: json_encode(query)
		}
		OrderApi.apis.removeAction.run({data, then})
	}
}

export {
	OrderApi
}