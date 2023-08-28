import { OrderDatatableAssets } from "modules/order/classes/datatable/OrderDatatableAssets.js";
import { 
	OrderAssets as Assets,
	config
} from "modules/order/OrderAssets.js";

class OrderConfigHeader{
	static configure(){
        //HEADER COLUMNS
        config().headerColumns = OrderDatatableAssets.headerColumns();

		config().sortColumns = OrderDatatableAssets.sortColumns;
	}
}

export {
	OrderConfigHeader
}