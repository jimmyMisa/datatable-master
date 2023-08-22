import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";
import styles from "./ClientTable.scss?module";
import CreateClientModal from "vue/components/client/ClientTable/ClientTableComponents/CreateClientModal/CreateClientModal.jsx"

import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { CommonTableOverride } from "vue/components/client/ClientTable/CommonTableOverride.jsx";
import { ClientAssets as Assets } from "modules/client/ClientAssets.js";

export default C.make({
	...CommonTable.getMethods(),
	...CommonTableOverride.getMethods(),

	getConfig(){
		return Assets.config();
	},
	$render(h, instance) {
		Assets.config().instance = this

		return (
			
			<div class="container mt-3">

				<div class="card">
					<div class="card-header">
						Liste des clients
						{this.renderDatatableCreate()}
					</div>
					<div class="card-body">
						{this.renderDatatableFull()}
					</div>
				</div>
			</div>
		);
	},
});