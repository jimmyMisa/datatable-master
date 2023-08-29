import { 
    ProductAssets as Assets, 
    config 
} from "modules/product/ProductAssets.js";

function contentLines() {
	return config().contentLines
}

export { contentLines };
