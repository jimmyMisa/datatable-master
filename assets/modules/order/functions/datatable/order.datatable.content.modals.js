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
		name:params.contentLine.order_name,
		phone:params.contentLine.order_phone,
		labels:{
			id:getText("CLIENT_ID"),
			name:getText("CLIENT_NAME").LABEL.DEFAULT,
			phone:getText("CLIENT_PHONE").LABEL.DEFAULT
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