import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";

class ClientConfigContent{
    static configure(){
        ClientConfig.params.contentLines = ClientDatatableAssets.contentLines();

        //CONTENT COLUMNS ACTIONS
        ClientConfig.params.editButton = ClientDatatableAssets.editButton();
        ClientConfig.params.removeButton = ClientDatatableAssets.removeButton();
        ClientConfig.params.detailButton = ClientDatatableAssets.detailButton();

        //CONTENT MODALS
        ClientConfig.params.editModal = ClientDatatableAssets.editModal();
        ClientConfig.params.removeModal = ClientDatatableAssets.removeModal();
        ClientConfig.params.detailModal = ClientDatatableAssets.detailModal();

        //CONTENT BUTTONS
        ClientConfig.params.saveEditButton = ClientDatatableAssets.saveEditButton();
        ClientConfig.params.cancelEditButton = ClientDatatableAssets.cancelEditButton();

        ClientConfig.params.saveRemoveButton = ClientDatatableAssets.saveRemoveButton();
        ClientConfig.params.cancelRemoveButton =ClientDatatableAssets.cancelRemoveButton();

        ClientConfig.params.closeDetailButton = ClientDatatableAssets.closeDetailButton();
    }
}

export {
    ClientConfigContent
}