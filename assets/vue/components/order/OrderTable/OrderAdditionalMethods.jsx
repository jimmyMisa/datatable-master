
import { 
    PwCheckbox,
} from "pw-components-jsx-dev";
import { 
    OrderAssets as Assets,
    config
} from "modules/order/OrderAssets.js";

class OrderAdditionalMethods{
	static getMethods(){
		return {
			headerCheckbox(){
				return (
					<th>
						
						{this.$checkboxComponent(
							{
								checked: config().checkboxRows.selectAllRows,
								onChange: (params={}) => {
									var {checked} = params
									config().checkboxRows.handleCheckboxHeaderChange({checked})
								},
								className: "chekbox_column",
								params: {
									class:"check_column"
								}
							}
						)}
					</th>
				)
			},
			contentCheckox({contentLine}){
				var { id=null } = contentLine;
				return (
					<td class="checkbox-column sorting_1">
						
						{this.$checkboxComponent(
							{
								checked: config().checkboxRows.selectedRows.includes(id),
								onChange: () => {
									config().checkboxRows.handleCheckboxChange(id);
								},
								className: "checkbox_primary",
								params: {
									class:"form-check-input chk-parent"
								}
							}
						)}
					</td>
				)
			},
		}
	}
}


export {
	OrderAdditionalMethods
}