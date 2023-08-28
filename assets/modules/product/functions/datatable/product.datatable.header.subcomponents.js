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

export { headerColumns };
