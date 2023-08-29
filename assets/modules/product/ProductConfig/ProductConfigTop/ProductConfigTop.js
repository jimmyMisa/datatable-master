import { ProductDatatableAssets } from "modules/product/classes/datatable/ProductDatatableAssets.js";
import { 
    ProductAssets as Assets,
    config 
} from "modules/product/ProductAssets.js";

class ProductConfigTop{
	static configure(){ 
        //TOP BUTTONS
        config().addButton = ProductDatatableAssets.addButton();

        //TOP SEARCH
        config().searchInput = ProductDatatableAssets.searchInput();

        //TOP PAGESIZE
        config().pageSize = ProductDatatableAssets.pageSize();

        //TOP MODALS
        config().createModal = ProductDatatableAssets.createModal();

        config().saveButton = ProductDatatableAssets.saveButton();
        config().cancelSaveButton = ProductDatatableAssets.cancelSaveButton();
	}
}

export {
	ProductConfigTop
}