import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";
import { ClientAssets } from "modules/client/ClientAssets.js";

class ClientConfigHeader{
	static configure(){
        //HEADER COLUMNS
        ClientAssets.get().ClientConfig.params.headerColumns = ClientDatatableAssets.headerColumns();
	}
}

export {
	ClientConfigHeader
}