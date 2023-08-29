import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { 
	ProductAssets as Assets,
    config,
    datatable 
} from "modules/product/ProductAssets.js";

function searchInput(){
	var field = ComponentAssets.FieldManager.create("CLIENT_SEARCH", config().displayPage);
	field.onInput = (params={}) =>{
		var {value, event, input} = params;
		config().searchInput.value = value;
		config().instance.refresh();
		datatable().reload();
	}
    return field;
}

export {
	searchInput
}