import {
    addButton,
    saveButton,
    cancelSaveButton,
    editButton,
    removeButton,
    detailButton,
    saveEditButton,
    cancelEditButton,
    saveRemoveButton,
    cancelRemoveButton,
    closeDetailButton,
} from "modules/client/functions/datatable/client.datatable.buttons.js";
import { searchInput } from "modules/client/functions/datatable/client.datatable.fields.js";
import {
    createModal,
    modalEdit,
    modalRemove,
    modalDetail,
} from "modules/client/functions/datatable/client.datatable.modals.js";
import {
    pageSize,
    headerColumns,
    contentLines,
    pagination,
} from "modules/client/functions/datatable/client.datatable.components.js";

class ClientConfig {
    static params = {};
    static init() {
        //GLOBAL CONFIGURAITONS
        ClientConfig.params.haveAction = true;

        //TOP
        (() => {
            //TOP BUTTONS
            (() => {
                ClientConfig.params.addButton = addButton();
            })();

            //TOP SEARCH
            (() => {
                ClientConfig.params.searchInput = searchInput();
            })();

            //TOP PAGESIZE
            (() => {
                ClientConfig.params.pageSize = pageSize();
            })();

            //TOP MODALS
            (() => {
                ClientConfig.params.createModal = createModal();

                //TOP ACTIONS
                (() => {
                    ClientConfig.params.saveButton = saveButton();
                    ClientConfig.params.cancelSaveButton = cancelSaveButton();
                })();
            })();
        })();

        //HEADER
        (() => {
            //HEADER COLUMNS
            (() => {
                ClientConfig.params.headerColumns = headerColumns();
            })();
        })();

        //CONTENT
        (() => {
            ClientConfig.params.contentLines = contentLines();

            //CONTENT COLUMNS ACTIONS
            (() => {
                ClientConfig.params.editButton = editButton();
                ClientConfig.params.removeButton = removeButton();
                ClientConfig.params.detailButton = detailButton();
            })();

            //CONTENT MODALS
            (() => {
                ClientConfig.params.modalEdit = modalEdit();
                ClientConfig.params.modalRemove = modalRemove();
                ClientConfig.params.modalDetail = modalDetail();

                //CONTENT BUTTONS
                (() => {
                    ClientConfig.params.saveEditButton = saveEditButton();
                    ClientConfig.params.cancelEditButton = cancelEditButton();

                    ClientConfig.params.saveRemoveButton = saveRemoveButton();
                    ClientConfig.params.cancelRemoveButton =
                        cancelRemoveButton();

                    ClientConfig.params.closeDetailButton = closeDetailButton();
                })();
            })();
        })();

        //BOTTOM
        (() => {
            //BOTTOM PAGINATION
            (() => {
                ClientConfig.params.pagination = pagination();
            })();
        })();
    }
}

export { ClientConfig };