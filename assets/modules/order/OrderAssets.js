import { OrderConfig } from "modules/order/OrderConfig/OrderConfig.js"
import { OrderDatatable } from "modules/order/OrderDatatable/OrderDatatable.js"
import { ComponentAssets } from "common/classes/ComponentAssets.js"

import CreateModal from "vue/components/order/OrderTable/OrderTableComponents/CreateOrderModal/CreateOrderModal.jsx"
import EditModal from "vue/components/order/OrderTable/OrderTableComponents/EditOrderModal/EditOrderModal.jsx"
import RemoveModal from "vue/components/order/OrderTable/OrderTableComponents/RemoveOrderModal/RemoveOrderModal.jsx"
import DetailModal from "vue/components/order/OrderTable/OrderTableComponents/DetailOrderModal/DetailOrderModal.jsx"

class OrderAssets{
	static get(){	
		return {
			OrderConfig,
			OrderDatatable,
			ComponentAssets,
			CreateModal,
			EditModal,
			RemoveModal,
			DetailModal,
		}
	} 
	static config(key){
		if(!key){
			return OrderAssets.get().OrderConfig.params;
		}
		return OrderAssets.get().OrderConfig.params[key]
	}
	static orderConfig(){
		return OrderAssets.get().OrderConfig
	}
	static datatable(){
		if (!OrderAssets.get().OrderDatatable) {
			return {}
		}
		return OrderAssets.get().OrderDatatable
	}
	static createModal(){
		if (!OrderAssets.get().CreateModal) {
			return {}
		}
		return OrderAssets.get().CreateModal
	}
	static editModal(){
		if (!OrderAssets.get().EditModal) {
			return {}
		}
		return OrderAssets.get().EditModal
	}
	static removeModal(){
		if (!OrderAssets.get().RemoveModal) {
			return {}
		}
		return OrderAssets.get().RemoveModal
	}
	static detailModal(){
		if (!OrderAssets.get().DetailModal) {
			return {}
		}
		return OrderAssets.get().DetailModal
	}
	static componentAssets(){
		if (!OrderAssets.get().ComponentAssets) {
			return {}
		}
		return OrderAssets.get().ComponentAssets
	}
}

function field(key) {
	return OrderAssets.config()
}
function refs(field) {
	return field.instance.$refs[field.id].$refs
}
function config(key) {
	return OrderAssets.config(key);
}
function getText(key, conversion=undefined) {
	return OrderAssets.componentAssets().getText(key, conversion);
}
function datatable() {
	return OrderAssets.datatable();
}

export {
	OrderAssets, 
	field,
	refs,
	config,
	getText,
	datatable,
}