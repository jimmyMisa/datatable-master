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
		config().editFields = editField
		config().editFields.client.options = window.client_options;
		config().editFields.product.options = window.product_options;

		var modal = {
			show(){
				console.log(refs)
				modal.instance = showModal(Assets.editModal(), {});
				setTimeout(() =>{
					var {contentLine={}} = params;
					var {client_id, product_id} = contentLine;
					//TODO setup default value
					editField.client.value = client_id;
					editField.product.value = product_id;
					editField.client.refresh();
				}, 100)
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