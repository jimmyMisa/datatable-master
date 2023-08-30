
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
						<div class="form-check form-check-primary d-block new-control">
							<PwCheckbox 
								config={{
									checked: config().checkboxRows.selectAllRows,
									onChange: (params={}) => {
										var {input} = params
										var {checked=false} = input
										config().checkboxRows.handleCheckboxHeaderChange({checked})
									},
									className: "checkbox_primary"
								}}
							/>
						</div>
					</th>
				)
			},
			contentCheckox({contentLine}){
				var { id=null } = contentLine;
				return (
					<td class="checkbox-column sorting_1">
						<div class="form-check form-check-primary d-block new-control">
							<PwCheckbox 
								config={{
									checked: config().checkboxRows.selectedRows.includes(id),
									onChange: () => {
										config().checkboxRows.handleCheckboxChange(id);
									},
									className: "checkbox_primary"
								}}
							/>
						</div>
					</td>
				)
			},
		}
	}
}


export {
	OrderAdditionalMethods
}