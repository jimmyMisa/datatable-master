import { ComponentAssets } from "common/classes/ComponentAssets.js"

function addButton(){
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_ADD_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
    return button
}

function saveButton(){
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_REGISTER,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
    return button
}

function cancelSaveButton(){
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CANCEL_REGISTER,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
    return button
}


export {
    addButton,
    saveButton,
    cancelSaveButton
}