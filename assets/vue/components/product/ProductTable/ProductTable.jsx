import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";
import styles from "./ProductTable.scss?module";
import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { ProductTableOverride } from "vue/components/product/ProductTable/ProductTableOverride.jsx";
import { 
	ProductAssets as Assets, 
	getText, 
	config
} from "modules/product/ProductAssets.js";

export default C.make({
	...CommonTable.getMethods(),
	...ProductTableOverride.getMethods(),

	getConfig(){
		return config();
	},
	$render(h, instance) {
		config().instance = this
		
		return (
			
			<div class="container">
				
				<div class="layout-px-spacing">
					<div class="middle-content container-xxl p-0 mt-2">
						<div class="page-meta">
							<div class="row">
								<div class="col-8">
									<h5>Liste des produits</h5>
								</div>
							</div>
							{this.renderDatatableBody()}
						</div>
					</div>
				</div>
			</div>
		);
	},
});