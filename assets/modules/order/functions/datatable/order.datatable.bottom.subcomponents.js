import { showModal } from "common/modal/modal.js"
import { 
	OrderAssets as Assets,
    config,
    datatable,
	getText
} from "modules/order/OrderAssets.js";
import { ComponentAssets } from "common/classes/ComponentAssets.js"

function pagination() {
	return {
		page:1,
		pages:0,
		prev: () =>{
			//TODO add restriction
			config().pagination.page = config().pagination.page - 1;
			datatable().reload();
		},
		next: () =>{
			//TODO add restriction
			config().pagination.page = config().pagination.page + 1;
			datatable().reload();
		},
		goto: (page) =>{
			return () =>{
				config().pagination.page = page;
				datatable().reload();
			}
		},
		statShowText: getText("COMMON").STAT.SHOWING,
		statOf: getText("COMMON").STAT.OF,
		totalFiltered: "-"
	}
}

function removeMultipleButton() {
	var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().REMOVE_MULTIPLE_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
    });
    button.onSuccess = () =>{
        config().removeMultipleModal().show();
    }
    return button
}

function removeMultipleModal(){
	return ()=>{
		config().removeMultipleParams = config().checkboxRows.selectedRows
		config().removeMutlipleText = () => {
			return getText("CONFIRM_REMOVE_MESSAGE", {
				name:() => {
					return "les commandes"
				}
			})
		}
		var modal = {
			show(){
				modal.instance = showModal(Assets.removeMultipleModal(), {})
			},
			hide(){
				modal.instance.hide();
			}
		}
		return modal;
	}
}

function saveRemoveMultipleButton() {
    return (instance={}) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_SAVE_REMOVE_BUTTON,
            domain: ComponentAssets.FieldManager.domain,
        });
        button.onSuccess = () =>{
            config().loadingRemoveMultipleModal = true;
            config().instance.refresh()
            var callback = (result)=>{
                var { modal } = instance.$refs;
                config().loadingRemoveMultipleModal = false;
                config().checkboxRows.selectAllRows = false;
                config().instance.refresh()
                if (result.code==200) {
                    $(modal).modal("hide")
                }
            }
            datatable().removeMultiple({ids:config().checkboxRows.selectedRows, callback})
        }
        return button
    }
}

export { 
	pagination, 
	removeMultipleButton,
	removeMultipleModal,
	saveRemoveMultipleButton
};
