import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";

import CreateClientModal from "vue/components/client/ClientTable/ClientTableComponents/CreateClientModal/CreateClientModal.jsx"

export default C.make({
	$render(h, instance) {
		var {config = {}} = this
		var {datatableConfig = {}} = config
		return (
			<div>
				{this.renderDatatable(datatableConfig)}
			</div>
		);
	},
});