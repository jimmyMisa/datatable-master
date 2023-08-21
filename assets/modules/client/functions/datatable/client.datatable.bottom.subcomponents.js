import { ClientAssets } "modules/client/ClientAssets.js";

function pagination() {
	return {
		page:1,
		pages:2,
		prev: () =>{
			//TODO add restriction
			ClientAssets.ClientConfig.params.pagination.page = ClientAssets.ClientConfig.params.pagination.page - 1;
			ClientAssets.ClientDatatable.reload();
		},
		next: () =>{
			//TODO add restriction
			ClientAssets.ClientConfig.params.pagination.page = ClientAssets.ClientConfig.params.pagination.page + 1;
			ClientAssets.ClientDatatable.reload();
		},
		goto: (page) =>{
			ClientAssets.ClientConfig.params.pagination.page = page;
			ClientAssets.ClientDatatable.reload();
		},
	}
}

export { pagination };
