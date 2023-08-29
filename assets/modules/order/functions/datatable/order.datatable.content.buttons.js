import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { OrderDatatableAssets } from "modules/order/classes/datatable/OrderDatatableAssets.js";
import { 
    OrderAssets as Assets,
    config,
    datatable
} from "modules/order/OrderAssets.js";

function editButton() {
    return (params) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_EDIT_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
        });
        button.onSuccess = () =>{
            config().editModal(params).show();
        }
        return button
    }
}
function removeButton() {
    return (params) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_REMOVE_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
        });
        button.onSuccess = () =>{
            config().removeModal(params).show();
        }
        return button
    }
}
function detailButton() {
    return (params) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_DETAIL_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
        });
        button.onSuccess = () =>{
            config().detailModal(params).show();
        }
        return button
    }
}
function saveEditButton() {
    return (fields, instance={}) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_SAVE_EDIT_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
            required_fields: Object.values([fields.client, fields.product]),
        });
        button.onSuccess = () =>{
            config().loadingEditModal = true;
            config().instance.refresh()
            var callback = (result)=>{
                var { modal } = instance.$refs;
                config().loadingEditModal = false;
                config().instance.refresh()
                if (result.code==200) {
                    $(modal).modal("hide")
                }
            }
            var data = {
                id:fields.id,
                client_id:fields.client.value,
                product_id:fields.product.value
            }
            datatable().edit({data,callback})
        }
        return button
    }
}
function cancelEditButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CANCEL_EDIT_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
    });
    return button
}
function saveRemoveButton() {
    return (field, instance={}) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_SAVE_REMOVE_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
        });
        button.onSuccess = () =>{
            config().loadingRemoveModal = true;
            config().instance.refresh()
            var callback = (result)=>{
                var { modal } = instance.$refs;
                config().loadingRemoveModal = false;
                config().instance.refresh()
                if (result.code==200) {
                    $(modal).modal("hide")
                }
            }
            datatable().remove({id:field.id, callback})
        }
        return button
    }
}
function cancelRemoveButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CANCEL_REMOVE_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
    });
    return button
}
function closeDetailButton() {
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CLOSE_DETAIL_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
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
