import { ClientAssets } "modules/client/ClientAssets.js";
import { showModal } from "common/modal/modal.js"

function addFields(){
	return {
		name:FieldManager.create("CLIENT_NAME", ClientAssets.params.displayPage)
		phone:FieldManager.create("CLIENT_PHONE", ClientAssets.params.displayPage)
	}
}

function createModal(){
	ClientAssets.ClientConfig.params.addFields = addFields
	var modal = {
		show(){
			modal.instance = showModal(ClientAssets.CreateClientModal, {})
		},
		hide(){
			modal.instance.hide();
		}
	}
	return modal;
}

function editFields(){
	return {
		name:FieldManager.create("CLIENT_NAME", ClientAssets.params.displayPage)
		phone:FieldManager.create("CLIENT_PHONE", ClientAssets.params.displayPage)
	}
}

function editModal(){
	ClientAssets.ClientConfig.params.editFields = editFields
	var modal = {
		show(){
			ClientAssets.ClientConfig.params.editFields.name.value = lientAssets.ClientConfig.params.editButton.params.contentLine.name
			ClientAssets.ClientConfig.params.editFields.phone.value = lientAssets.ClientConfig.params.editButton.params.contentLine.phone
			modal.instance = showModal(ClientAssets.EditClientModal, {})
		},
		hide(){
			modal.instance.hide();
		}
	}
	return modal;
}

function removeModal(){
	ClientAssets.ClientConfig.params.removeText = () =>{
		return ClientAssets.ComponentAssets.getText("CLIENT_REMOVE_MESSAGE", {
			clientName:() =>{
				//TODO send this formation datatable actions
				ClientAssets.ClientConfig.params.removeButton.params.contentLine.name;
			}
		})
	}
	var modal = {
		show(){
			modal.instance = showModal(ClientAssets.RemoveClientModal, {})
		},
		hide(){
			modal.instance.hide();
		}
	}
	return modal;
}

function detailFields(){
	return {
		name:ClientAssets.ClientConfig.params.editButton.params.contentLine.name
		phone:ClientAssets.ClientConfig.params.editButton.params.contentLine.phone
		labels:{
			name:ClientAssets.ComponentAssets.getText("CLIENT_NAME").LABEL.DEFAULT
			phone:ClientAssets.ComponentAssets.getText("CLIENT_PHONE").LABEL.DEFAULT
		}
	}
}

function detailModal(){
	ClientAssets.ClientConfig.params.detailFields = detailFields
	var modal = {
		show(){
			modal.instance = showModal(ClientAssets.DetailClientModal, {})
		},
		hide(){
			modal.instance.hide();
		}
	}
	return modal;
}

export { 
	editModal,
	removeModal,
	detailModal
 }