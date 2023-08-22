import { ClientConfig } from "modules/client/ClientConfig/ClientConfig.js"
import { ClientDatatable } from "modules/client/ClientDatatable/ClientDatatable.js"
import { ComponentAssets } from "common/classes/ComponentAssets.js"

import CreateClientModal from "vue/components/client/ClientTable/ClientTableComponents/CreateClientModal/CreateClientModal.jsx"
import EditClientModal from "vue/components/client/ClientTable/ClientTableComponents/EditClientModal/EditClientModal.jsx"
import RemoveClientModal from "vue/components/client/ClientTable/ClientTableComponents/RemoveClientModal/RemoveClientModal.jsx"
import DetailClientModal from "vue/components/client/ClientTable/ClientTableComponents/DetailClientModal/DetailClientModal.jsx"

class ClientAssets{
	static get(){	
		return {
			ClientConfig,
			ClientDatatable,
			ComponentAssets,
			CreateClientModal,
			EditClientModal,
			RemoveClientModal,
			DetailClientModal,
		}
	}
	static config(key){
		if(!key){
			return ClientAssets.get().ClientConfig.params;
		}
		return ClientAssets.get().ClientConfig.params[key]
	}
}

export {
	ClientAssets
}