import { ClientAssets } "modules/client/ClientAssets.js";

function searchInput(){
    return FieldManager.create("CLIENT_SEARCH", ClientAssets.params.displayPage);
}

export {
	searchInput
}