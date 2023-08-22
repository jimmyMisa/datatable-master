import { ClientAssets } from "modules/client/ClientAssets.js";
import { showModal } from "common/modal/modal.js"
import { ComponentAssets } from "common/classes/ComponentAssets.js"


function addFields(){
	return {
		nom:ComponentAssets.FieldManager.create("CLIENT_NAME", ClientAssets.get().ClientConfig.params.displayPage),
		phone:ComponentAssets.FieldManager.create("CLIENT_PHONE", ClientAssets.get().ClientConfig.params.displayPage)
	}
}

function createModal(){
	ClientAssets.get().ClientConfig.params.addFields = addFields()
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

export {
	createModal
}