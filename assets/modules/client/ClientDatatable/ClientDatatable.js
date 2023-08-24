import { ClientApi } from "modules/client/classes/ClientApi.js";
import { 
	ClientAssets as Assets,
    config,
    datatable
} from "modules/client/ClientAssets.js";
import { calculatePageNumbers } from "modules/common/datatableUtils.js";

class ClientDatatable{
	static reload(){
		var data = {
			page:config().pagination.page,
			size:config().pageSize.value,
			orderBy:config().headerColumns.orderBy,
			order:config().headerColumns.order,
			key:config().searchInput.value,
		}
		var then = (result={})=>{
			var {datas=[], total=0, totalFiltered=0, size=10} = result;
	        config().contentLines = datas;
			config().pageSize.field().value = size;
        	config().pagination.pages = calculatePageNumbers(totalFiltered, size);
			config().instance.refresh()
		}
		ClientApi.listApi(data, then)
		//TODO setup Ajax
	}
	static add(params){
		var {name, phone, then=()=>{}} = params
		config().instance.refresh()

		var callback = (result)=> {
			if (result.code==200) {
				then()
				datatable().reload();
			}
			config().instance.refresh()
		}
		ClientApi.createApi({name,phone}, callback)
		//TODO setup Ajax
	}
	static edit(params){
		var {id, name, phone, then=()=>{}} = params
		config().instance.refresh()

		var callback = (result)=> {
			if (result.code==200) {
				then()
				datatable().reload();
			}
			config().instance.refresh()
		}
		ClientApi.editApi(id, {name,phone}, callback)
		//TODO setup Ajax
	}
	static remove(id, then=()=>{}){
		config().instance.refresh()
		var callback = (result)=> {
			if (result.code==200) {
				then()
				datatable().reload();
			}
			config().instance.refresh()
		}
		ClientApi.removeApi(id, callback)
		//TODO setup Ajax
	}
}

export {
	ClientDatatable
}