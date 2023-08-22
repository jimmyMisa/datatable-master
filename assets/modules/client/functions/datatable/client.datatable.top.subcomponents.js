import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { ClientAssets } from "modules/client/ClientAssets.js";

function pageSize() {
	var pageSize = {
		f:null,
		value:10,
		options: [5, 10, 25, 50, 100],
		field:() =>{
			if(pageSize.f){
				return pageSize.f
			}
			var field = ComponentAssets.FieldManager.create("PAGE_SIZE", ClientAssets.get().ClientConfig.params.displayPage);
			field.value = pageSize.value
			field.options = pageSize.options.map((key) =>{
				return {
		            value: key,
		            content: key,
		        }
			});
			field.onChange = () =>{
				ClientAssets.get().ClientConfig.params.pageSize.value = ClientAssets.get().ClientConfig.params.pageSize.field().value;
				ClientAssets.get().ClientDatatable.reload();
			}
			pageSize.f = field
			return field
		},
	}
	return pageSize
}

export { pageSize };
