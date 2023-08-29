import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";
import styles from "./ClientTable.scss?module";
import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { ClientTableOverride } from "vue/components/client/ClientTable/ClientTableOverride.jsx";
import { 
	ClientAssets as Assets, 
	getText, 
	config
} from "modules/client/ClientAssets.js";

export default C.make({
	...CommonTable.getMethods(),
	...ClientTableOverride.getMethods(),

	getConfig(){
		return config();
	},
	$render(h, instance) {
		config().instance = this;
		
		return (
			<div class="container">
				
				<div class="layout-px-spacing">
					<div class="middle-content container-xxl p-0 mt-2">
						<div class="page-meta">
							<div class="row">
								<div class="col-8">
									<h5>Liste des clients</h5>
								</div>
								<div class="col-4">{this.renderDatatableCreate()}</div>
							</div>
							{this.renderDatatableBody()}
						</div>
					</div>
				</div>
			</div>
			
		)
	},
});