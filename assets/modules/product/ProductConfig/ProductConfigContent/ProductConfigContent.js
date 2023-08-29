import { ProductDatatableAssets } from "modules/product/classes/datatable/ProductDatatableAssets.js";
import { 
    ProductAssets as Assets,
    config
} from "modules/product/ProductAssets.js";

class ProductConfigContent{
    static configure(){
        config().contentLines = ProductDatatableAssets.contentLines();
        config().loadingContent = ProductDatatableAssets.loadingContent();

        //CONTENT COLUMNS ACTIONS
        config().editButton = ProductDatatableAssets.editButton();
        config().removeButton = ProductDatatableAssets.removeButton();
        config().detailButton = ProductDatatableAssets.detailButton();

        //CONTENT MODALS
        config().editModal = ProductDatatableAssets.editModal();
        config().removeModal = ProductDatatableAssets.removeModal();
        config().detailModal = ProductDatatableAssets.detailModal();

        //CONTENT BUTTONS
        config().saveEditButton = ProductDatatableAssets.saveEditButton();
        config().cancelEditButton = ProductDatatableAssets.cancelEditButton();

        config().saveRemoveButton = ProductDatatableAssets.saveRemoveButton();
        config().cancelRemoveButton =ProductDatatableAssets.cancelRemoveButton();

        config().closeDetailButton = ProductDatatableAssets.closeDetailButton();
    }
}

export {
    ProductConfigContent
}