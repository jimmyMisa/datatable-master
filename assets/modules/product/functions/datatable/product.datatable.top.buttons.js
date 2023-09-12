import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { 
    ProductAssets as Assets,
    config,
    datatable
} from "modules/product/ProductAssets.js";

function addButton(){
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().PRODUCT_ADD_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
    });
    button.onSuccess = () =>{
        config().createModal().show();
    }
    return button
}

function saveButton(){
    return (fields, instance={}) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().PRODUCT_REGISTER,
            domain: ComponentAssets.FieldManager.domain,
            required_fields: Object.values([fields.name, fields.unit_price]),
        });
        button.onSuccess = () =>{
            config().loadingAddModal = true;
            config().instance.refresh()
            var callback = (result)=>{
                config().loadingAddModal = false;
                config().instance.refresh()
                if (result.code==200) {
                    var { modal } = instance.$refs;
                    $(modal).modal("hide")
                }
            }
            var data = {
                name:fields.name.value,
                unit_price:fields.unit_price.value,
            }
            datatable().add({data,callback})
        }
        return button
    }
}

function cancelSaveButton(){
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CANCEL_REGISTER,
        domain: ComponentAssets.FieldManager.domain,
    });
    return button
}


export {
    addButton,
    saveButton,
    cancelSaveButton
}