
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
					<th class="datatable_header">
						
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
			headerSwitch(){
				return(
					<th class="sort">
						Statut
					</th>
				)
			},
			contentSwitch({contentLine}){
				var { id=null, order_status } = contentLine;
				var field = "order_status";
				return (
					<td>
						{
							this.$switchComponent(
								{
									checked: order_status,
									onChange: (params = {}) => {
										var {checked} = params;
										config().switchRows.handleSwitchChange({id, field, checked});
									}
								}
							)
						}
					</td>
				)
			}
		}
	}
}


export {
	OrderAdditionalMethods
}