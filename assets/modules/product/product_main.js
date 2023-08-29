import ProductTable from "vue/components/product/ProductTable/ProductTable";
import { C } from "vue/helper/V01Component";
import { setChildView } from "vue/helper/renderVue.js";
import { 
    ProductAssets as Assets, 
    config ,
    datatable
} from "modules/product/ProductAssets.js";
import {FIELD} from "common/structure/FIELD/FIELD.js"
import { ProductApi } from "modules/product/classes/ProductApi.js";
import { calculatePageNumbers } from "modules/common/datatableUtils.js";

function main() {

    Assets.productConfig().init();
    ProductApi.init();

    config().contentLines = {};
    if (!config().loadingContent) {
        config().loadingContent ={}
    }
    datatable().reload();
    setChildView("#app", ProductTable, {});
}

export { main };
