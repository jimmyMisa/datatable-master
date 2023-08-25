import { ProductDatatableAssets } from "modules/product/classes/datatable/ProductDatatableAssets.js";
import { 
	ProductAssets as Assets,
	config
} from "modules/product/ProductAssets.js";

class ProductConfigBottom{
	static configure(){
        //BOTTOM PAGINATION
        config().pagination = ProductDatatableAssets.pagination();
	}
}

export {
	ProductConfigBottom
}