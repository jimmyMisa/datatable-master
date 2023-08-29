import { OrderDatatableAssets } from "modules/order/classes/datatable/OrderDatatableAssets.js";
import { 
    OrderAssets as Assets,
    config 
} from "modules/order/OrderAssets.js";

class OrderConfigTop{
	static configure(){ 
        //TOP BUTTONS
        config().addButton = OrderDatatableAssets.addButton();

        //TOP SEARCH
        config().searchInput = OrderDatatableAssets.searchInput();

        //TOP PAGESIZE
        config().pageSize = OrderDatatableAssets.pageSize();

        //TOP MODALS
        config().createModal = OrderDatatableAssets.createModal();

        config().saveButton = OrderDatatableAssets.saveButton();
        config().cancelSaveButton = OrderDatatableAssets.cancelSaveButton();
	}
}

export {
	OrderConfigTop
}