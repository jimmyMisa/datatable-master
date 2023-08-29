import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";
import styles from "./OrderTable.scss?module";
import CreateOrderModal from "vue/components/order/OrderTable/OrderTableComponents/CreateOrderModal/CreateOrderModal.jsx"
import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { OrderTableOverride } from "vue/components/order/OrderTable/OrderTableOverride.jsx";
import { 
	OrderAssets as Assets, 
	getText, 
	config
} from "modules/order/OrderAssets.js";
import { 
    PwLoading,
} from "pw-components-jsx-dev";

export default C.make({
	...CommonTable.getMethods(),
	...OrderTableOverride.getMethods(),

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
									<h5>Liste des commandes</h5>
								</div>
								<div class="col-4">{this.renderDatatableCreate()}</div>
							</div>
							{this.renderDatatableBody()}
						</div>
					</div>
				</div>
			</div>
			
		);
	},
});