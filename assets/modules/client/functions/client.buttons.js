import {FieldManager} from "common/functions/getField.js"
import { getButton } from "common/functions/getButton.js";
import  Button from "common/classes/Button.js";
var BUTTON = getButton();

class ClientButtonManager{
    static getAll({page}){
        var clientButton = new ClientButton();
        clientButton.page = page
        var buttons = {
            openCreateModal:clientButton.openCreateModal(),
            saveCreate:clientButton.saveCreate(),
            openEditModal:clientButton.openEditModal(),
            saveEdit:clientButton.saveEdit(),
        }
        return buttons
    }
}

class ClientButton{
    page;
    openCreateModal(){
        var button = Button.create({
            BUTTON: BUTTON.CLIENT_CREATE_OPEN_MODAL,
            domain: FieldManager.domain,
        });
        button.always = () => {
            //Open Modal Create Client
            showCreateClientModal();
        };
        return button;
    }
    saveCreate(){
        var button = Button.create({
            BUTTON: BUTTON.CLIENT_CREATE_SAVE,
            domain: FieldManager.domain,
        });
        button.onSuccess = () => {
            //Save the client
            saveCreateClient();
        };
        return button;
    }
    openEditModal(){
        var button = Button.create({
            BUTTON: BUTTON.CLIENT_EDIT_OPEN_MODAL,
            domain: FieldManager.domain,
        });
        button.always = () => {
            //Open Modal Create Client
        };
        return button;
    }
    saveEdit(){
        var button = Button.create({
            BUTTON: BUTTON.CLIENT_EDIT_SAVE,
            domain: FieldManager.domain,
        });
        button.onSuccess = () => {
            //Save the client
        };
        return button;
    }
}

export { ClientButtonManager }