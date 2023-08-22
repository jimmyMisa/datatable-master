import { ClientAssets } from "modules/client/ClientAssets.js";

function pagination() {
	return {
		page:1,
		pages:2,
		prev: () =>{
			//TODO add restriction
			ClientAssets.get().ClientConfig.params.pagination.page = ClientAssets.get().ClientConfig.params.pagination.page - 1;
			ClientAssets.get().ClientDatatable.reload();
		},
		next: () =>{
			//TODO add restriction
			ClientAssets.get().ClientConfig.params.pagination.page = ClientAssets.get().ClientConfig.params.pagination.page + 1;
			ClientAssets.get().ClientDatatable.reload();
		},
		goto: (page) =>{
			return () =>{
				ClientAssets.get().ClientConfig.params.pagination.page = page;
				ClientAssets.get().ClientDatatable.reload();
			}
		},
	}
}

export { pagination };
