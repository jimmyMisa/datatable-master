import OrderTable from "vue/components/order/OrderTable/OrderTable";
import { C } from "vue/helper/V01Component";
import { setChildView } from "vue/helper/renderVue.js";
import { 
    OrderAssets as Assets, 
    config,
    datatable
} from "modules/order/OrderAssets.js";
import {FIELD} from "common/structure/FIELD/FIELD.js"
import { OrderApi } from "modules/order/classes/OrderApi.js";
import { calculatePageNumbers } from "modules/common/datatableUtils.js";

function main() {
    Assets.orderConfig().init();
    OrderApi.init();
    config().contentLines = {};
    if (!config().loadingContent) {
        config().loadingContent ={}
    }
    datatable().reload();
    setChildView("#app", OrderTable, {});
}

export { main };
