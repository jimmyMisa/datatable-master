import { ClientAssets } "modules/client/ClientAssets.js";

function headerColumns() {
	return {
		orderBy:"createdAt",
		order:"DESC",
		columns:[{
			name:"name",
			label:ClientAssets.ComponentAssets.getText("CLIENT_NAME").TH,
		},{
			name:"phone",
			label:ClientAssets.ComponentAssets.getText("CLIENT_PHONE").TH,
		}],
	}
}

export { headerColumns };
