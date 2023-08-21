import { ClientAssets } "modules/client/ClientAssets.js";
import { showModal } from "common/modal/modal.js"

function addFields(){
	return {
		nom:FieldManager.create("CLIENT_NAME", ClientAssets.params.displayPage)
		phone:FieldManager.create("CLIENT_PHONE", ClientAssets.params.displayPage)
	}
}

function createModal(){
	ClientAssets.ClientConfig.params.addFields = addFields()
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

export {
	createModal
}