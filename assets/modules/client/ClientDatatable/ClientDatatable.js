import { ClientAssets } "modules/client/ClientAssets.js";

class ClientDatatable{
	static reload(){
		var data = {
			page:ClientAssets.ClientConfig.params.pagination.value
			size:ClientAssets.ClientConfig.params.pageSize.value
			orderBy:ClientAssets.ClientConfig.params.headerColumns.orderBy
			order:ClientAssets.ClientConfig.params.headerColumns.order
			key:ClientAssets.ClientConfig.params.searchInput.value
		}

		//TODO setup Ajax
	}
}

export {
	ClientDatatable
}