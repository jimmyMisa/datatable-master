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


import { ClientConfigAssets } from "./ClientConfigAssets.js";

class ClientConfig {
    static params = {};
    static init() {
        //GLOBAL CONFIGURAITONS
        ClientConfig.params.haveAction = true;
        ClientConfig.params.displayPage = "CLIENT_LIST";

        ClientConfigAssets.ClientConfigTop.configure();
        ClientConfigAssets.ClientConfigHeader.configure();
        ClientConfigAssets.ClientConfigContent.configure();
        ClientConfigAssets.ClientConfigBottom.configure();
    }
}

export { ClientConfig };