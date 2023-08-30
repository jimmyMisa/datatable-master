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
				role="dialog"
				aria-hidden="true"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Suppression multiple des commandes</h5>
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
							<p>
								{config("removeMutlipleText")()}
							</p>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-dark"
								data-dismiss="modal"
							>
								{config("cancelSaveButton").text}
							</button>
							{this.$button(config("saveRemoveMultipleButton")(instance))}
						</div>
						<PwLoading
							config={{
								isVisible: config().loadingRemoveMultipleModal,
								hasConfig: true,
								mode: "grow",
								color: "primary"
							}}
						/>
					</div>
				</div>
			</div>
		);
	},
});