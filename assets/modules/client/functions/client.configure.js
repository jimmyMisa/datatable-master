import {ClientFieldManager} from "modules/client/functions/client.fields.js";
import {ClientButtonManager} from "modules/client/functions/client.buttons.js";
import {ClientDatatableManager} from "modules/client/classes/ClientDatatableManager.js";
import { FIELD } from "common/structure/FIELD/FIELD.js";
import {getConfig} from 'modules/client/client_config.js';


function configure(){
    var lang = "FR";
    var domain = "DEFAULT";
    var page = "CLIENT_LIST";
    FIELD.init({lang, domain});
    
    getConfig().components.fields = ClientFieldManager.getAll({page});
    getConfig().components.buttons = ClientButtonManager.getAll({page});

    getConfig().components.datatableConfig = ClientDatatableManager.getConfiguration();

}

export {
	configure
}