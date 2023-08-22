import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";
import { ClientAssets } from "modules/client/ClientAssets.js";

class ClientConfigContent{
    static configure(){
        ClientAssets.get().ClientConfig.params.contentLines = ClientDatatableAssets.contentLines();

        //CONTENT COLUMNS ACTIONS
        ClientAssets.get().ClientConfig.params.editButton = ClientDatatableAssets.editButton();
        ClientAssets.get().ClientConfig.params.removeButton = ClientDatatableAssets.removeButton();
        ClientAssets.get().ClientConfig.params.detailButton = ClientDatatableAssets.detailButton();

        //CONTENT MODALS
        ClientAssets.get().ClientConfig.params.editModal = ClientDatatableAssets.editModal();
        ClientAssets.get().ClientConfig.params.removeModal = ClientDatatableAssets.removeModal();
        ClientAssets.get().ClientConfig.params.detailModal = ClientDatatableAssets.detailModal();

        //CONTENT BUTTONS
        ClientAssets.get().ClientConfig.params.saveEditButton = ClientDatatableAssets.saveEditButton();
        ClientAssets.get().ClientConfig.params.cancelEditButton = ClientDatatableAssets.cancelEditButton();

        ClientAssets.get().ClientConfig.params.saveRemoveButton = ClientDatatableAssets.saveRemoveButton();
        ClientAssets.get().ClientConfig.params.cancelRemoveButton =ClientDatatableAssets.cancelRemoveButton();

        ClientAssets.get().ClientConfig.params.closeDetailButton = ClientDatatableAssets.closeDetailButton();
    }
}

export {
    ClientConfigContent
}