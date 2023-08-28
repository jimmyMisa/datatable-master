import { C } from "vue/helper/V02Component.jsx";
import { ModalCommonMethods } from "modules/common/ModalCommonMethods.jsx";
import { 
	OrderAssets as Assets,
    config 
} from "modules/order/OrderAssets.js";
import classNames from "classnames";
import Components from "vue/components/common/Components/Components.jsx";
import { 
    PwLoading,
} from "pw-components-jsx-dev";

export default C.make({
	...Components.getMethods(),
	...ModalCommonMethods.getMethods(),
	$render(h, instance) {
		return (
			<div
				class="modal fade"
				ref="modal"
				tabindex="-1"
				role="dialog"
				aria-hidden="true"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Ajouter une commande</h5>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="form-group mb-4 col-12">
									{this.$select(config("addFields").client)}
								</div>
								<div class="form-group mb-4 col-12">
									{this.$select(config("addFields").product)}
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-dismiss="modal"
							>
								{config("cancelSaveButton").text}
							</button>
							{this.$button(config("saveButton")(config("addFields"), instance))}
						</div>
						<PwLoading
							config={{
								isVisible: config().loadingAddModal,
								hasConfig: true,
							}}
						/>
					</div>
				</div>
			</div>
		);
	},
});