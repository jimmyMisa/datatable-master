import {ClientFieldManager} from "modules/client/functions/client.fields.js";
import {ClientButtonManager} from "modules/client/functions/client.buttons.js";
import {configure} from "modules/client/functions/client.configure.js";
import { FIELD } from "common/structure/FIELD/FIELD.js";
import {getConfig} from 'modules/client/client_config.js';


function configure(){
    var lang = "FR";
    var domain = "DEFAULT";
    var page = "CLIENT_LIST";
    FIELD.init({lang, domain});
    
    getConfig().component.fields = ClientFieldManager.getAll({page});
    getConfig().component.buttons = ClientButtonManager.getAll({page});

}

export {
	configure
}