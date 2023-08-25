import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";
import styles from "./ClientTable.scss?module";
import CreateClientModal from "vue/components/client/ClientTable/ClientTableComponents/CreateClientModal/CreateClientModal.jsx"
import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { CommonTableOverride } from "vue/components/client/ClientTable/CommonTableOverride.jsx";
import { 
	ClientAssets as Assets, 
	getText, 
	config
} from "modules/client/ClientAssets.js";

export default C.make({
	...CommonTable.getMethods(),
	...CommonTableOverride.getMethods(),

	getConfig(){
		return config();
	},
	$render(h, instance) {
		config().instance = this
		
		return (
			<div class="middle-content container-xxl p-0 mt-2">
				<div class="page-meta">
					<nav class="breadcrumb-style-one" aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								{this.renderDatatableCreate()}
							</li>
						</ol>
					</nav>
					<div class="card-body">
						{this.renderDatatableFull()}
					</div>
				</div>
			</div>
		)
	},
});