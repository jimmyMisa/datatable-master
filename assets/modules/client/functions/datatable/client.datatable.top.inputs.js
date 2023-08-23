import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { 
	ClientAssets as Assets,
    config 
} from "modules/client/ClientAssets.js";

function searchInput(){
    return ComponentAssets.FieldManager.create("CLIENT_SEARCH", config().displayPage);
}

export {
	searchInput
}