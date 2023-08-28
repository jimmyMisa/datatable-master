import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";
import styles from "./OrderTable.scss?module";
import CreateOrderModal from "vue/components/order/OrderTable/OrderTableComponents/CreateOrderModal/CreateOrderModal.jsx"
import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { CommonTableOverride } from "vue/components/order/OrderTable/CommonTableOverride.jsx";
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
	...CommonTableOverride.getMethods(),

	getConfig(){
		return config();
	},
	//TODO use another file to autoprefix using getMethods
	renderDatatableContent(){
		if (!this.getConfig().contentLines.length) {
			return (
				<tr>
					<td colspan={this.getConfig().headerColumns.columns.length}>
						{getText("CLIENT_LIST").EMPTY_MESSAGE}
					</td>
				</tr>
			);
		}
		var trs = this.getConfig().contentLines.map((contentLine = {}, line) =>{
			return CommonTable.getMethod(this, "ContentLine")({contentLine, line})
		});
		return trs
	},
	/*renderDatatableHeaderColumn({headerColumn} = {}){
		return (
			<th>
				{headerColumn.label}
			</th>
		)
	},*/
	$render(h, instance) {
		config().instance = this;
		
		return (
			
			<div class="container mt-3">

				<div class="card">
					<div class="card-header">
						Liste des orders
						{this.renderDatatableCreate()}
					</div>
					<div class="card-body">
						{this.renderDatatableFull()}
						{this.renderDatatableLoadingContent()}
					</div>
				</div>
			</div>
		);
	},
});