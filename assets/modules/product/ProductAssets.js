import { ProductConfig } from "modules/product/ProductConfig/ProductConfig.js"
import { ProductDatatable } from "modules/product/ProductDatatable/ProductDatatable.js"
import { ComponentAssets } from "common/classes/ComponentAssets.js"

import CreateModal from "vue/components/product/ProductTable/ProductTableComponents/CreateProductModal/CreateProductModal.jsx"
import EditModal from "vue/components/product/ProductTable/ProductTableComponents/EditProductModal/EditProductModal.jsx"
import RemoveModal from "vue/components/product/ProductTable/ProductTableComponents/RemoveProductModal/RemoveProductModal.jsx"
import DetailModal from "vue/components/product/ProductTable/ProductTableComponents/DetailProductModal/DetailProductModal.jsx"

class ProductAssets{
	static get(){	
		return {
			ProductConfig,
			ProductDatatable,
			ComponentAssets,
			CreateModal,
			EditModal,
			RemoveModal,
			DetailModal,
		}
	} 
	static config(key){
		if(!key){
			return ProductAssets.get().ProductConfig.params;
		}
		return ProductAssets.get().ProductConfig.params[key]
	}
	static productConfig(){
		return ProductAssets.get().ProductConfig
	}
	static datatable(){
		if (!ProductAssets.get().ProductDatatable) {
			return {}
		}
		return ProductAssets.get().ProductDatatable
	}
	static createModal(){
		if (!ProductAssets.get().CreateModal) {
			return {}
		}
		return ProductAssets.get().CreateModal
	}
	static editModal(){
		if (!ProductAssets.get().EditModal) {
			return {}
		}
		return ProductAssets.get().EditModal
	}
	static removeModal(){
		if (!ProductAssets.get().RemoveModal) {
			return {}
		}
		return ProductAssets.get().RemoveModal
	}
	static detailModal(){
		if (!ProductAssets.get().DetailModal) {
			return {}
		}
		return ProductAssets.get().DetailModal
	}
	static componentAssets(){
		if (!ProductAssets.get().ComponentAssets) {
			return {}
		}
		return ProductAssets.get().ComponentAssets
	}
}

function field(key) {
	return ProductAssets.config()
}
function refs(field) {
	return field.instance.$refs[field.id].$refs
}
function config(key) {
	return ProductAssets.config(key);
}
function getText(key, conversion=undefined) {
	return ProductAssets.componentAssets().getText(key, conversion);
}
function datatable() {
	return ProductAssets.datatable();
}

export {
	ProductAssets, 
	field,
	refs,
	config,
	getText,
	datatable,
}