import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { ClientAssets } from "modules/client/ClientAssets.js";

function editButton() {
    return (params) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_EDIT_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
            //required_fields: Object.values([lastname, password, confirm_password]),
        });
        button.onSuccess = () =>{
            ClientAssets.get().ClientConfig.params.editModal(params).show();
            console.log(params)
        }
        return button
    }
}
function removeButton() {
    return (params) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_REMOVE_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
            //required_fields: Object.values([lastname, password, confirm_password]),
        });
        button.onSuccess = () =>{
            ClientAssets.get().ClientConfig.params.removeModal(params).show();
            console.log(params)
        }
        return button
    }
}
function detailButton() {
    return (params) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_DETAIL_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
            //required_fields: Object.values([lastname, password, confirm_password]),
        });
        button.onSuccess = () =>{
            ClientAssets.get().ClientConfig.params.detailModal(params).show();
            console.log(params)
        }
        return button
    }
}
function saveEditButton() {
    return (fields) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_SAVE_EDIT_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
            required_fields: Object.values([fields.name, fields.phone]),
        });
        button.onSuccess = () =>{
            var data = {
                id:fields.id,
                name:fields.name.value,
                phone:fields.phone.value,
            }
            ClientAssets.get().ClientDatatable.edit(data)
        }
        return button
    }
}
function cancelEditButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CANCEL_EDIT_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
    return button
}
function saveRemoveButton() {
    return (field) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_SAVE_REMOVE_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
        });
        button.onSuccess = () =>{
            ClientAssets.get().ClientDatatable.remove(field.id)
        }
        return button
    }
}
function cancelRemoveButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CANCEL_REMOVE_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
    return button
}
function closeDetailButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CLOSE_DETAIL_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
    return button
}

export {
	editButton,
	removeButton,
	detailButton,
	saveEditButton,
	cancelEditButton,
	saveRemoveButton,
	cancelRemoveButton,
	closeDetailButton,
};
