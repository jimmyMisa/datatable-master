import { ClientApi } from "modules/client/classes/ClientApi.js";
import { 
	ClientAssets as Assets,
    config,
    datatable
} from "modules/client/ClientAssets.js";

class ClientDatatable{
	static reload(){
		var data = {
			page:config().pagination.value,
			size:config().pageSize.value,
			orderBy:config().headerColumns.orderBy,
			order:config().headerColumns.order,
			key:config().searchInput.value,
		}
		var then = (result={})=>{
			var {datas=[], total=null} = result;
	        config().contentLines = datas;
	        config().pagination.pages = total;
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