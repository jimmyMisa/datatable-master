import { ProductApi } from "modules/product/classes/ProductApi.js";
import { 
	ProductAssets as Assets,
    config,
    datatable
} from "modules/product/ProductAssets.js";
import { calculatePageNumbers } from "modules/common/datatableUtils.js";

class ProductDatatable{
	static reload(){
		var data = {
			page:config().pagination.page,
			size:config().pageSize.field().value,
			orderBy:config().headerColumns.orderBy,
			order:config().headerColumns.order,
			key:config().searchInput.value,
		}
	    config().datatable_load.isLoading = true;
		config().instance.refresh()
		var then = (result={})=>{
			var {datas=[], total=0, totalFiltered=0, size=10} = result;
	        config().contentLines = datas;
	    	config().datatable_load.isLoading = false;
			config().pageSize.field().value = size;
        	config().pagination.pages = calculatePageNumbers(totalFiltered, size);
			config().instance.refresh()
		}
		ProductApi.listApi({data, then})
	}
	static add(params){
		var {data={}, callback=()=>{}} = params
		config().instance.refresh()

		var then = (result)=> {
			callback(result)
			if (result.code==200) {
				datatable().reload();
			}
			config().instance.refresh()
		}
		ProductApi.createApi({data, then})
	}
	static edit(params){
		var {data={}, callback=()=>{}} = params
		var then = (result)=> {
			callback(result)
			if (result.code==200) {
				datatable().reload();
			}
			config().instance.refresh()
		}
		ProductApi.editApi({data, then})
	}
	static remove(params){
		var {id, callback=()=>{}} = params
		config().instance.refresh()
		var then = (result)=> {
			callback(result)
			if (result.code==200) {
				datatable().reload();
			}
			config().instance.refresh()
		}
		ProductApi.removeApi({id, then})
	}
}

export {
	ProductDatatable
}