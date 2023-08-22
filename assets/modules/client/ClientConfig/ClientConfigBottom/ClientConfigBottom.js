import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";
import { ClientAssets } from "modules/client/ClientAssets.js";

class ClientConfigBottom{
	static configure(){
        //BOTTOM PAGINATION
        ClientAssets.get().ClientConfig.params.pagination = ClientDatatableAssets.pagination();
	}
}

export {
	ClientConfigBottom
}