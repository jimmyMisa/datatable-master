import { ProductConfigAssets } from "./ProductConfigAssets.js";
import { FIELD } from "common/structure/FIELD/FIELD.js";

class ProductConfig {
    static params = {};
    static init() {
        //GLOBAL CONFIGURAITONS
        ProductConfig.params.lang = "FR";
        ProductConfig.params.domain = "DEFAULT";
        ProductConfig.params.displayPage = "CLIENT_LIST";

        FIELD.init(ProductConfig.params);

        ProductConfig.params.haveAction = true;

        ProductConfigAssets.ProductConfigTop.configure();
        ProductConfigAssets.ProductConfigHeader.configure();
        ProductConfigAssets.ProductConfigContent.configure();
        ProductConfigAssets.ProductConfigBottom.configure();
    }
}

export { ProductConfig };
