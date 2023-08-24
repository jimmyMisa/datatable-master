import ClientTable from "vue/components/client/ClientTable/ClientTable";
import { C } from "vue/helper/V01Component";
import { setChildView } from "vue/helper/renderVue.js";
import { 
    ClientAssets as Assets, 
    config 
} from "modules/client/ClientAssets.js";
import {FIELD} from "common/structure/FIELD/FIELD.js"
import { ClientApi } from "modules/client/classes/ClientApi.js";
import { calculatePageNumbers } from "modules/common/datatableUtils.js";

function main() {

    Assets.clientConfig().init();
    ClientApi.init();

    config().contentLines = {};

    ClientApi.listApi({
            page:config().pagination.page,
            size:config().pageSize.value,
            orderBy:config().headerColumns.orderBy,
            order:config().headerColumns.order,
            key:config().searchInput.value,
        }, (result)=>{
        var {datas=[], total=0, totalFiltered=0, size=10}= result;
        config().contentLines = datas;
        config().pageSize.field().value = size;
        
        config().pagination.pages = calculatePageNumbers(totalFiltered, size);
        config().instance.refresh()
    })

    setChildView("#app", ClientTable, {});
}

export { main };
