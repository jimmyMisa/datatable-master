import { C } from "vue/helper/V02Component.jsx";
import { ModalCommonMethods } from "modules/common/ModalCommonMethods.jsx";
import { 
	ProductAssets as Assets,
    config 
} from "modules/product/ProductAssets.js";
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
							<h5 class="modal-title">Modifier un produit</h5>
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
									{this.$input(config("editFields").name)}
								</div>
								<div class="form-group mb-4 col-12">
									{this.$input(config("editFields").unit_price)}
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-dark"
								data-dismiss="modal"
							>
								{config("cancelEditButton").text}
							</button>
							{this.$button(config("saveEditButton")(config("editFields"), instance))}
						</div>
						<PwLoading
							config={{
								isVisible: config().loadingEditModal,
								hasConfig: true,
							}}
						/>
					</div>
				</div>
			</div>
		);
	},
});