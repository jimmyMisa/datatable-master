class ClientApi{
	static apis = {};

	static init(){
		ClientApi.apis.listAction = new Api({url: window.api_list_client});
		ClientApi.apis.createAction = new Api({url: window.api_create_client});
		ClientApi.apis.getAction = new Api({url: window.api_remove_client});
		ClientApi.apis.editAction = new Api({url: window.api_edit_client});
		ClientApi.apis.removeAction = new Api({url: window.api_get_client});
	}
	static listApi(data, then){
		ClientApi.listAction.run({data, then})
	}
	static createApi(data, then){
		ClientApi.createAction.run({data, then})
	}
	static editApi(id, data, then){
		ClientApi.editAction.run({{...data, id}, then})
	}
	static getApi(id, then){
		ClientApi.getAction.run({{id}, then})
	}
	static removeApi(id, then){
		ClientApi.removeAction.run({{id}, then})
	}
}