import { ClientConfig } "modules/client/ClientConfig/ClientConfig.js"
import { ClientDatatable } "modules/client/ClientDatatable/ClientDatatable.js"
import { ComponentAssets } from "common/classes/ComponentAssets.js"

import { CreateClientModal } from "vue/components/client/ClientTable/ClientTableComponents/CreateClientModal/CreateClientModal.jsx"
import { EditClientModal } from "vue/components/client/ClientTable/ClientTableComponents/EditClientModal/EditClientModal.jsx"
import { RemoveClientModal } from "vue/components/client/ClientTable/ClientTableComponents/RemoveClientModal/RemoveClientModal.jsx"
import { DetailClientModal } from "vue/components/client/ClientTable/ClientTableComponents/DetailClientModal/DetailClientModal.jsx"

class ClientAssets{
	static ClientConfig = ClientConfig;
	static ClientDatatable = ClientDatatable;
	static ComponentAssets = ComponentAssets;
	static CreateClientModal = CreateClientModal;
	static EditClientModal = EditClientModal;
	static RemoveClientModal = RemoveClientModal;
	static DetailClientModal = DetailClientModal;
}

export {
	ClientAssets
}