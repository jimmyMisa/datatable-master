import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";
import styles from "./ProductTable.scss?module";
import CreateProductModal from "vue/components/product/ProductTable/ProductTableComponents/CreateProductModal/CreateProductModal.jsx"
import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { CommonTableOverride } from "vue/components/product/ProductTable/CommonTableOverride.jsx";
import { 
	ProductAssets as Assets, 
	getText, 
	config
} from "modules/product/ProductAssets.js";
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
		config().instance = this
		var {datatable_load={}}= config()
		
		return (
			
			<div class="container mt-3">

				<div class="card">
					<div class="card-header">
						Liste des products
						{this.renderDatatableCreate()}
					</div>
					<div class="card-body">
						{this.renderDatatableFull()}
                        <PwLoading
                            ref="loading"
                            config={{
                                isVisible: datatable_load.isLoading,
                                hasConfig:true
                            }}
                        />
					</div>
				</div>
			</div>
		);
	},
});