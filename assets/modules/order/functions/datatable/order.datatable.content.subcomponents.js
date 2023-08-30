import { 
    OrderAssets as Assets, 
    config 
} from "modules/order/OrderAssets.js";

function contentLines() {
	return config().contentLines
}

function loadingContent() {
    var loadingContent = {
        isVisible: false,
        hasConfig: true,
        ref: "loading",
        mode:"grow",
        color:"primary",
        className : "custom_spinner",
    }
    return loadingContent
}

function checkboxRows() {
    var checkboxRows = {
        selectedRows: [],
        selectAllRows: false,
        handleCheckboxChange: (id) => {
            if(!id){
                return true;
            }
            if (config().checkboxRows.selectedRows.includes(id)) {
                config().checkboxRows.selectedRows = config().checkboxRows.selectedRows.filter((rowId) => rowId !== id);
            } else {
                config().checkboxRows.selectedRows.push(id)
            }
            config().instance.refresh()
        },
        handleCheckboxHeaderChange: (params={}) => {
            var {checked=false} = params;
            if(checked){
                config().checkboxRows.selectedRows = []

                config().contentLines.map((line) => {
                    var {id} = line 
                    config().checkboxRows.selectedRows.push(id)
                })
                config().checkboxRows.selectAllRows = true;
            }
            else{
                config().checkboxRows.selectedRows = [];
                config().checkboxRows.selectAllRows = false;
            }
            config().instance.refresh()
        }
    }
    return checkboxRows;
}

export { 
    contentLines,
    loadingContent,
    checkboxRows
};
