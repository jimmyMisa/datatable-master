import { OrderConfigAssets } from "./OrderConfigAssets.js";
import { FIELD } from "common/structure/FIELD/FIELD.js";

class OrderConfig {
    static params = {};
    static init() {
        //GLOBAL CONFIGURAITONS
        OrderConfig.params.lang = "FR";
        OrderConfig.params.domain = "DEFAULT";
        OrderConfig.params.displayPage = "CLIENT_LIST";

        FIELD.init(OrderConfig.params);

        OrderConfig.params.haveAction = true;

        OrderConfigAssets.OrderConfigTop.configure();
        OrderConfigAssets.OrderConfigHeader.configure();
        OrderConfigAssets.OrderConfigContent.configure();
        OrderConfigAssets.OrderConfigBottom.configure();
    }
}

export { OrderConfig };
