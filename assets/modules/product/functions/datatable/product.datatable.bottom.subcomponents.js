import { 
	ProductAssets as Assets,
    config,
    datatable
} from "modules/product/ProductAssets.js";

function pagination() {
	return {
		page:1,
		pages:0,
		prev: () =>{
			//TODO add restriction
			config().pagination.page = config().pagination.page - 1;
			datatable().reload();
		},
		next: () =>{
			//TODO add restriction
			config().pagination.page = config().pagination.page + 1;
			datatable().reload();
		},
		goto: (page) =>{
			return () =>{
				config().pagination.page = page;
				datatable().reload();
			}
		},
	}
}

export { pagination };
