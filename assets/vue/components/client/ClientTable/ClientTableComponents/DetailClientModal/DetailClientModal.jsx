import { C } from "vue/helper/V02Component.jsx";
import { ModalCommonMethods } from "assets/modules/common/ModalCommonMethods.jsx";
import { ClientAssets } "modules/client/ClientAssets.js";
import classNames from "classnames";

export default C.make({
	...Components.getMethodsJsx(),
	...ModalCommonMethods.getMethodsJsx(),
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
							<h5 class="modal-title">Detail sur un client</h5>
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
									{this.$input(ClientAssets.ClientConfig.params.detailFields().labels.nom)} : 
									{this.$input(ClientAssets.ClientConfig.params.detailFields().nom)}
								</div>
								<div class="form-group mb-4 col-12">
									{this.$input(ClientAssets.ClientConfig.params.detailFields().labels.phone)} : 
									{this.$input(ClientAssets.ClientConfig.params.detailFields().phone)}
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-dismiss="modal"
							>
								{ClientAssets.ClientConfig.params.closeDetailButton.text}
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	},
});