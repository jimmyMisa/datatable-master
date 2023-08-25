import { 
    ProductAssets as Assets, 
    config 
} from "modules/Product/ProductAssets.js";

function contentLines() {
	return config().contentLines
}

export { contentLines };
