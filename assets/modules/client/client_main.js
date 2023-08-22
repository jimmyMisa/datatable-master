import ClientTable from "vue/components/client/ClientTable/ClientTable";
import { C } from "vue/helper/V01Component";
import { setChildView } from "vue/helper/renderVue.js";
import { ClientAssets } from "modules/client/ClientAssets.js";
import {FIELD} from "common/structure/FIELD/FIELD.js"

function main() {

    ClientAssets.get().ClientConfig.init();


    setChildView("#app", ClientTable, {});
}

export { main };
