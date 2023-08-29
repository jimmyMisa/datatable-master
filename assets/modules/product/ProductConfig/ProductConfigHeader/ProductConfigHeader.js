import { ProductDatatableAssets } from "modules/product/classes/datatable/ProductDatatableAssets.js";
import { 
	ProductAssets as Assets,
	config
} from "modules/product/ProductAssets.js";

class ProductConfigHeader{
	static configure(){
        //HEADER COLUMNS
        config().headerColumns = ProductDatatableAssets.headerColumns();
	}
}

export {
	ProductConfigHeader
}