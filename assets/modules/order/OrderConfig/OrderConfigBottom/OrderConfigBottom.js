import { OrderDatatableAssets } from "modules/order/classes/datatable/OrderDatatableAssets.js";
import { 
	OrderAssets as Assets,
	config
} from "modules/order/OrderAssets.js";

class OrderConfigBottom{
	static configure(){
        //BOTTOM PAGINATION
        config().pagination = OrderDatatableAssets.pagination();

		//BOTTOM MODALS
        config().removeMultipleModal = OrderDatatableAssets.removeMultipleModal();

		// BOTTOM BUTTON
		config().removeMultipleButton = OrderDatatableAssets.removeMultipleButton();
		config().saveRemoveMultipleButton = OrderDatatableAssets.saveRemoveMultipleButton();
	}
}

export {
	OrderConfigBottom
}