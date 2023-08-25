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
			label:getText("CLIENT_NAME").TH,
		},{
			name:"product_phone",
			label:getText("CLIENT_PHONE").TH,
		}],
	}
}

export { headerColumns };
