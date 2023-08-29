import { showModal } from "common/modal/modal.js"
import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { 
	OrderAssets as Assets,
	refs,
	config,
	getText
} from "modules/order/OrderAssets.js";


function editFields(params){
	return {
		id: params.contentLine.id,
		client:ComponentAssets.FieldManager.create("CLIENT_NAME_ORDER", config().displayPage),
		product:ComponentAssets.FieldManager.create("PRODUCT_NAME_ORDER", config().displayPage),
	}
}

function editModal(){
	return (params) =>{
		var editField = editFields(params)
		editField.client.options = window.client_options;
		editField.product.options = window.product_options;
		config().editFields = editField

		var modal = {
			show(){
				modal.instance = showModal(Assets.editModal(), {});
				setTimeout(() =>{
					var {contentLine={}} = params;
					var {client_id, product_id} = contentLine;
					editField.client.value = params.contentLine.client_id;
					editField.product.value = params.contentLine.product_id;

					var client = editField.client
					var select = refs(client).select
					$(select).val(client_id).trigger('change');

					var product = editField.product
					var select = refs(product).select
					$(select).val(product_id).trigger('change');

				}, 500)
			},
			hide(){
				modal.instance.hide();
			}
		}
		return modal;
	}
}

function removeModal(){
	return (params) =>{
		config().removeParams = params.contentLine;
		config().removeText = () =>{
			return getText("ORDER_REMOVE_MESSAGE", {
				product:() =>{
					//TODO send this formation datatable actions
					return params.contentLine.product_name;
				},
				client:() =>{
					return params.contentLine.client_name;
				}
			})
		}
		var modal = {
			show(){
				modal.instance = showModal(Assets.removeModal(), {})
			},
			hide(){
				modal.instance.hide();
			},
		}
		return modal;
	}
}

function detailFields(params){
	return {
		id:params.contentLine.id,
		client:params.contentLine.client_name,
		product:params.contentLine.product_name,
		labels:{
			id:getText("CLIENT_ID"),
			client:getText("CLIENT_NAME_ORDER").LABEL.DEFAULT,
			product:getText("PRODUCT_NAME_ORDER").LABEL.DEFAULT
		}
	}
}

function detailModal(){
	return (params) =>{
		config().detailFields = detailFields(params)
		var modal = {
			show(){
				modal.instance = showModal(Assets.detailModal(), {})
			},
			hide(){
				modal.instance.hide();
			}
		}
		return modal;
	}
}

export { 
	editModal,
	removeModal,
	detailModal
 }