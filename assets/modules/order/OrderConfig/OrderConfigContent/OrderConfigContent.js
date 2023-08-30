import { OrderDatatableAssets } from "modules/order/classes/datatable/OrderDatatableAssets.js";
import { 
    OrderAssets as Assets,
    config
} from "modules/order/OrderAssets.js";

class OrderConfigContent{
    static configure(){
        config().contentLines = OrderDatatableAssets.contentLines();
        config().loadingContent = OrderDatatableAssets.loadingContent();
        config().checkboxRows = OrderDatatableAssets.checkboxRows();

        //CONTENT COLUMNS ACTIONS
        config().editButton = OrderDatatableAssets.editButton();
        config().removeButton = OrderDatatableAssets.removeButton();
        config().detailButton = OrderDatatableAssets.detailButton();

        //CONTENT MODALS
        config().editModal = OrderDatatableAssets.editModal();
        config().removeModal = OrderDatatableAssets.removeModal();
        config().detailModal = OrderDatatableAssets.detailModal();

        //CONTENT BUTTONS
        config().saveEditButton = OrderDatatableAssets.saveEditButton();
        config().cancelEditButton = OrderDatatableAssets.cancelEditButton();

        config().saveRemoveButton = OrderDatatableAssets.saveRemoveButton();
        config().cancelRemoveButton =OrderDatatableAssets.cancelRemoveButton();

        config().closeDetailButton = OrderDatatableAssets.closeDetailButton();
    }
}

export {
    OrderConfigContent
}