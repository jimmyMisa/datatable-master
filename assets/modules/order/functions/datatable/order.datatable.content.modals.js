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
		name:ComponentAssets.FieldManager.create("CLIENT_NAME", config().displayPage),
		phone:ComponentAssets.FieldManager.create("CLIENT_PHONE", config().displayPage),
	}
}

function editModal(){
	return (params) =>{
		var editField = editFields(params)
		config().editFields = editField
		var modal = {
			show(){
				modal.instance = showModal(Assets.editModal(), {});
				setTimeout(() =>{
					editField.name.value = params.contentLine.order_name;
					var phone = editField.phone
					$(refs(phone).input).val(params.contentLine.order_phone)
					editField.name.refresh();
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
			return getText("CLIENT_REMOVE_MESSAGE", {
				orderName:() =>{
					//TODO send this formation datatable actions
					return params.contentLine.order_name;
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