import { 
    OrderAssets as Assets, 
    config 
} from "modules/order/OrderAssets.js";

function contentLines() {
	return config().contentLines
}

function loadingContent() {
    var loadingContent = {
        isVisible: false,
        hasConfig: true,
        ref: "loading",
        mode:"grow",
        color:"primary",
        className : "custom_spinner",
    }
    return loadingContent
}

export { 
    contentLines, 
    loadingContent 
};
