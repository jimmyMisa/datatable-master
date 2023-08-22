import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";
import { ClientAssets } from "modules/client/ClientAssets.js";

class ClientConfigTop{
	static configure(){
        //TOP BUTTONS
        ClientAssets.get().ClientConfig.params.addButton = ClientDatatableAssets.addButton();

        //TOP SEARCH
        ClientAssets.get().ClientConfig.params.searchInput = ClientDatatableAssets.searchInput();

        //TOP PAGESIZE
        ClientAssets.get().ClientConfig.params.pageSize = ClientDatatableAssets.pageSize();

        //TOP MODALS
        ClientAssets.get().ClientConfig.params.createModal = ClientDatatableAssets.createModal();

        ClientAssets.get().ClientConfig.params.saveButton = ClientDatatableAssets.saveButton();
        ClientAssets.get().ClientConfig.params.cancelSaveButton = ClientDatatableAssets.cancelSaveButton();
	}
}

export {
	ClientConfigTop
}