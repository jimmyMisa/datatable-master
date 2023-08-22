import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { ClientAssets } from "modules/client/ClientAssets.js";

function searchInput(){
    return ComponentAssets.FieldManager.create("CLIENT_SEARCH", ClientAssets.get().ClientConfig.params.displayPage);
}

export {
	searchInput
}