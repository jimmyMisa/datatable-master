import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";

class ClientConfigBottom{
	static configure(){
        //BOTTOM PAGINATION
        ClientConfig.params.pagination = ClientDatatableAssets.pagination();
	}
}

export {
	ClientConfigBottom
}