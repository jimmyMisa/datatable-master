import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { 
	ProductAssets as Assets,
    config,
    datatable 
} from "modules/product/ProductAssets.js";

function pageSize() {
	var pageSize = {
		f:null,
		value:5,
		options: [1, 5, 10, 25, 50, 100],
		field:() =>{
			if(pageSize.f){
				return pageSize.f
			}
			var field = ComponentAssets.FieldManager.create("PAGE_SIZE", config().displayPage);
			field.value = pageSize.value
			field.options = pageSize.options.map((key) =>{
				return {
		            value: key,
		            content: key,
		        }
			});
			field.class = "datatable_select"
			field.onChange = (params={}) =>{
				var { value } = params;
				config().pagination.page = 1;
				config().pageSize.field().value = value;
				datatable().reload();
			}
			pageSize.f = field
			return field
		},
	}
	return pageSize
}

export { pageSize };
