import { showModal } from "common/modal/modal.js"
import { ComponentAssets } from "common/classes/ComponentAssets.js";
import { 
	OrderAssets as Assets,
	config
} from "modules/order/OrderAssets.js";


function addFields(){
	return {
		client:ComponentAssets.FieldManager.create("ORDER_CLIENT", config().displayPage),
		product:ComponentAssets.FieldManager.create("ORDER_PRODUCT", config().displayPage)
	}
}

function createModal(){
	return ()=>{
		config().addFields = addFields()
		var client_options = [
			{
				value: 1,
				content: "p1"
			},
			{
				value: 2,
				content: "p2"
			}
		];
		config().addFields.client.options = window.client_options;
		config().addFields.product.options = window.product_options;

		var modal = {
			show(){
				modal.instance = showModal(Assets.createModal(), {})
			},
			hide(){
				modal.instance.hide();
			}
		}
		return modal;
	}
}

export {
	createModal
}