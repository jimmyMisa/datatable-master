import { ComponentAssets } from "common/classes/ComponentAssets.js"

function editButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_EDIT_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
}
function removeButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_REMOVE_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
}
function detailButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_DETAIL_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
}
function saveEditButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_SAVE_EDIT_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
}
function cancelEditButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CANCEL_EDIT_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
}
function saveRemoveButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_SAVE_REMOVE_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
}
function cancelRemoveButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CANCEL_REMOVE_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
}
function closeDetailButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CLOSE_DETAIL_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
}

export {
	editButtonm,
	removeButtonm,
	detailButtonm,
	saveEditButtonm,
	cancelEditButtonm,
	saveRemoveButtonm,
	cancelRemoveButtonm,
	closeDetailButtonm,
};
