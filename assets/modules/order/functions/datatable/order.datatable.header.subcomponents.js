import { 
	OrderAssets as Assets,
	config,
    getText,
	datatable
} from "modules/order/OrderAssets.js";
import { toggleOrder } from "modules/common/datatableUtils.js";

function headerColumns() {
	return {
		orderBy:"id",
		order:"ASC",
		columns:[{
			name:"id",
			label:"ID",
		},{
			name:"order_name",
			label:getText("CLIENT_NAME").TH,
		},{
			name:"order_phone",
			label:getText("CLIENT_PHONE").TH,
		}],
	}
}

function sortColumns(headerColumn){
	return () => {

		var { name = "", index = null, order:columnOrder = null } = headerColumn;
		config().headerColumns.orderBy = name;
		var order = toggleOrder(columnOrder);
		config().headerColumns.order = order;
		config().headerColumns.columns.map((column) => {
			return column.order = null;
		})
		config().headerColumns.columns[index].order = order;
		config().instance.refresh()
		datatable().reload();
	}
}

export { headerColumns, sortColumns };
