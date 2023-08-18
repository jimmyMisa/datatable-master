import ClientTable from "vue/components/common/ClientTable/ClientTable";
import { C } from "vue/helper/V01Component";
import { setChildView } from "vue/helper/renderVue.js";
import {getConfig} from './client_config.js';

import {configure} from "modules/client/functions/client.configure.js";

function main() {

    getConfig().component = {};

    configure();

    var datatableConfig = new DatatableConfig();
    datatable.draw(query);


	setChildView("#app", ClientTable, getConfig().components);
}

export { main, getConfig };
