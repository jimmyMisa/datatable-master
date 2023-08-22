import { ClientAssets } from "modules/client/ClientAssets.js";
import { showModal } from "common/modal/modal.js"
import { ComponentAssets } from "common/classes/ComponentAssets.js"


function addFields(){
	return {
		name:ComponentAssets.FieldManager.create("CLIENT_NAME", ClientAssets.get().ClientConfig.params.displayPage),
		phone:ComponentAssets.FieldManager.create("CLIENT_PHONE", ClientAssets.get().ClientConfig.params.displayPage)
	}
}

function createModal(){
	ClientAssets.get().ClientConfig.params.addFields = addFields
	var modal = {
		show(){
			modal.instance = showModal(ClientAssets.get().CreateClientModal, {})
		},
		hide(){
			modal.instance.hide();
		}
	}
	return modal;
}

function editFields(params){
	return {
		id: params.contentLine.id,
		name:ComponentAssets.FieldManager.create("CLIENT_NAME", ClientAssets.get().ClientConfig.params.displayPage),
		phone:ComponentAssets.FieldManager.create("CLIENT_PHONE", ClientAssets.get().ClientConfig.params.displayPage)
	}
}

function editModal(){
	return (params) =>{
		ClientAssets.get().ClientConfig.params.editFields = editFields(params)
		var modal = {
			show(){
				modal.instance = showModal(ClientAssets.get().EditClientModal, {});
				setTimeout(() =>{
					ClientAssets.get().ClientConfig.params.editFields.name.value = params.contentLine.name;
					var phone = ClientAssets.get().ClientConfig.params.editFields.phone
					$(phone.instance.$refs[phone.id].$refs.input).val(params.contentLine.phone)
					ClientAssets.get().ClientConfig.params.editFields.name.refresh();
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
		ClientAssets.get().ClientConfig.params.removeParams = params.contentLine;
		ClientAssets.get().ClientConfig.params.removeText = () =>{
			return ClientAssets.get().ComponentAssets.getText("CLIENT_REMOVE_MESSAGE", {
				clientName:() =>{
					//TODO send this formation datatable actions
					return params.contentLine.name;
				}
			})
		}
		var modal = {
			show(){
				modal.instance = showModal(ClientAssets.get().RemoveClientModal, {})
			},
			hide(){
				modal.instance.hide();
			}
		}
		return modal;
	}
}

function detailFields(params){
	return {
		id:params.contentLine.id,
		name:params.contentLine.name,
		phone:params.contentLine.phone,
		labels:{
			id:ClientAssets.get().ComponentAssets.getText("CLIENT_ID"),
			name:ClientAssets.get().ComponentAssets.getText("CLIENT_NAME").LABEL.DEFAULT,
			phone:ClientAssets.get().ComponentAssets.getText("CLIENT_PHONE").LABEL.DEFAULT
		}
	}
}

function detailModal(){
	return (params) =>{
		ClientAssets.get().ClientConfig.params.detailFields = detailFields(params)
		var modal = {
			show(){
				modal.instance = showModal(ClientAssets.get().DetailClientModal, {})
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