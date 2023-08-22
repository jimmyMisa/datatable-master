import { ClientAssets } from "modules/client/ClientAssets.js";

class ClientDatatable{
	static reload(){
		var data = {
			page:ClientAssets.get().ClientConfig.params.pagination.value,
			size:ClientAssets.get().ClientConfig.params.pageSize.value,
			orderBy:ClientAssets.get().ClientConfig.params.headerColumns.orderBy,
			order:ClientAssets.get().ClientConfig.params.headerColumns.order,
			key:ClientAssets.get().ClientConfig.params.searchInput.value,
		}
		ClientAssets.get().ClientConfig.params.instance.refresh()

		//TODO setup Ajax
	}
	static edit(params){
		console.log(params)
		ClientAssets.get().ClientConfig.params.instance.refresh()

		//TODO setup Ajax
	}
	static remove(id){
		console.log(id)
		ClientAssets.get().ClientConfig.params.instance.refresh()

		//TODO setup Ajax
	}
}

export {
	ClientDatatable
}