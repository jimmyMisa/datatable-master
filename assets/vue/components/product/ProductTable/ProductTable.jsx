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
	$render(h, instance) {
		config().instance = this
		var {datatable_load={}}= config()
		
		return (
			
			<div class="container">
				<div class="layout-px-spacing">
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
								{this.renderDatatableLoadingContent()}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
});