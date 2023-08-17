import ClientTable from "vue/components/common/ClientTable/ClientTable";
import { C } from "vue/helper/V01Component";
import { setChildView } from "vue/helper/renderVue.js";
import {getConfig} from './client_config.js';

function main() {

    getConfig().component = {};

    configure();

	setChildView("#app", ClientTable, getConfig().components);
}

export { main, getConfig };
