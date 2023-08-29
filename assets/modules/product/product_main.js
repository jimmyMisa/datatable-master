import ProductTable from "vue/components/product/ProductTable/ProductTable";
import { C } from "vue/helper/V01Component";
import { setChildView } from "vue/helper/renderVue.js";
import { 
    ProductAssets as Assets, 
    config 
} from "modules/product/ProductAssets.js";
import {FIELD} from "common/structure/FIELD/FIELD.js"
import { ProductApi } from "modules/product/classes/ProductApi.js";
import { calculatePageNumbers } from "modules/common/datatableUtils.js";

function main() {

    Assets.productConfig().init();
    ProductApi.init();

    config().contentLines = {};
    config().datatable_load = {
        isLoading: true
    };

    var data = {
        page:config().pagination.page,
        size:config().pageSize.value,
        orderBy:config().headerColumns.orderBy,
        order:config().headerColumns.order,
        key:config().searchInput.value,
    }
    var then = (result)=>{
        var {datas=[], total=0, totalFiltered=0, size=10}= result;
        config().contentLines = datas;
        config().datatable_load.isLoading=false;
        config().pageSize.field().value = size;
        config().pagination.pages = calculatePageNumbers(totalFiltered, size);
        config().instance.refresh()
    }
    ProductApi.listApi({data, then})

    setChildView("#app", ProductTable, {});
}

export { main };
