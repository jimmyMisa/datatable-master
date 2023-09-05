import { OrderApi } from "modules/order/classes/OrderApi.js";
import { 
	OrderAssets as Assets,
    config,
    datatable
} from "modules/order/OrderAssets.js";
import { calculatePageNumbers } from "modules/common/datatableUtils.js";

class OrderDatatable{
	static reload(){
		var data = {
			page:config().pagination.page,
			size:config().pageSize.field().value,
			orderBy:config().headerColumns.orderBy,
			order:config().headerColumns.order,
			key:config().searchInput.value,
		}
	    config().loadingContent.isVisible = true;
		if(config().instance){
			config().instance.refresh()
		}
		var then = (result={})=>{
			var {datas=[], total=0, totalFiltered=0, size=10} = result;
	        config().contentLines = datas;
	    	config().loadingContent.isVisible = false;
			config().pageSize.field().value = size;
			config().pagination.totalFiltered = totalFiltered;
        	config().pagination.pages = calculatePageNumbers(totalFiltered, size);
			config().instance.refresh()
		}
		OrderApi.listApi({data, then})
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
		OrderApi.createApi({data, then})
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
		OrderApi.editApi({data, then})
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
		OrderApi.removeApi({id, then})
	}
	static removeMultiple(params){
		var {ids, callback=()=>{}} = params
		config().instance.refresh()
		var then = (result)=> {
			callback(result)
			if (result.code==200) {
				datatable().reload();
			}
			config().instance.refresh()
		}
		OrderApi.removeMultipleApi({ids, then})
	}
	static switchValue(params){
		var {checked, id, field, callback=()=>{}} = params
		config().instance.refresh()
		var then = (result)=> {
			callback(result)
			datatable().reload();
			config().instance.refresh()
		}
		OrderApi.swithValueApi({checked, id, field, then})
	}
}

export {
	OrderDatatable
}