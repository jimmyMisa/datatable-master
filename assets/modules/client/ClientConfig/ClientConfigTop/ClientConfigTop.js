import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";

class ClientConfigTop{
	static configure(){
        //TOP BUTTONS
        ClientConfig.params.addButton = ClientDatatableAssets.addButton();

        //TOP SEARCH
        ClientConfig.params.searchInput = ClientDatatableAssets.searchInput();

        //TOP PAGESIZE
        ClientConfig.params.pageSize = ClientDatatableAssets.pageSize();

        //TOP MODALS
        ClientConfig.params.createModal = ClientDatatableAssets.createModal();

        ClientConfig.params.saveButton = ClientDatatableAssets.saveButton();
        ClientConfig.params.cancelSaveButton = ClientDatatableAssets.cancelSaveButton();
	}
}

export {
	ClientConfigTop
}