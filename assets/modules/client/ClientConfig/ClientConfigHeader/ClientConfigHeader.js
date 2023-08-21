import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";

class ClientConfigHeader{
	static configure(){
        //HEADER COLUMNS
        ClientConfig.params.headerColumns = ClientDatatableAssets.headerColumns();
	}
}

export {
	ClientConfigHeader
}