import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";

import CreateClientModal from "vue/components/client/ClientTable/ClientTableComponents/CreateClientModal/CreateClientModal.jsx"

import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { 
	ClientAssets as Assets, 
	getText, 
	config
} from "modules/client/ClientAssets.js";

export default C.make({
	...CommonTable.getMethods(),
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
	renderDatatableHeaderColumn({headerColumn} = {}){
		return (
			<th>
				{headerColumn.label}
			</th>
		)
	},
	$render(h, instance) {
		config().instance = this
		return (
			<div>
				{this.renderDatatableFull()}
			</div>
		);
	},
});