import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";

import CreateClientModal from "vue/components/client/ClientTable/ClientTableComponents/CreateClientModal/CreateClientModal.jsx"

import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { ClientAssets } "modules/client/ClientAssets.js";

export default C.make({
	...CommonTable.getMethods,
	getConfig(){
		return ClientAssets.ClientConfig.params;
	},
	$render(h, instance) {
		var {config = {}} = this
		var {datatableConfig = {}} = config
		return (
			<div>
				{this.renderDatatableFull(datatableConfig)}
			</div>
		);
	},
});