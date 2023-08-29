import { 
	ProductAssets as Assets,
    getText 
} from "modules/product/ProductAssets.js";

function headerColumns() {
	return {
		orderBy:"product_name",
		order:"ASC",
		columns:[{
			name:"id",
			label:"ID",
		},{
			name:"product_name",
			label:getText("PRODUCT_NAME").TH,
		},{
			name:"product_unit_price",
			label:getText("PRODUCT_UNIT_PRICE").TH,
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
