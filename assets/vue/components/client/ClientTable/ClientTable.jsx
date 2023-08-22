import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";

import CreateClientModal from "vue/components/client/ClientTable/ClientTableComponents/CreateClientModal/CreateClientModal.jsx"

import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { ClientAssets as Assets } from "modules/client/ClientAssets.js";

export default C.make({
	...CommonTable.getMethods(),
	getConfig(){
		return Assets.config();
	},
	$render(h, instance) {
		Assets.config().instance = this
		return (
			<div>
				{this.renderDatatableFull()}
			</div>
		);
	},
});