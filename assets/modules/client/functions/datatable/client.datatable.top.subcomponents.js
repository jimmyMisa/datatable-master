import { ClientAssets } "modules/client/ClientAssets.js";

function pageSize() {
	return {
		value:10,
		options: [5, 10, 25, 50, 100],
		change: (value) =>{
			ClientAssets.ClientConfig.params.pageSize.value = value;
			ClientAssets.ClientDatatable.reload();
		},
	}
}

export { pageSize };
