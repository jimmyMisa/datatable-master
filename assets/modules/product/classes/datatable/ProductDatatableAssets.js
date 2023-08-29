import {
	addButton,
	saveButton,
	cancelSaveButton,
} from "modules/product/functions/datatable/product.datatable.top.buttons.js";

import { searchInput } from "modules/product/functions/datatable/product.datatable.top.inputs.js";

import {
	editButton,
	removeButton,
	detailButton,
	saveEditButton,
	cancelEditButton,
	saveRemoveButton,
	cancelRemoveButton,
	closeDetailButton,
} from "modules/product/functions/datatable/product.datatable.content.buttons.js";

import {
	pageSize,
} from "modules/product/functions/datatable/product.datatable.top.subcomponents.js";

import {
	headerColumns,
} from "modules/product/functions/datatable/product.datatable.header.subcomponents.js";

import {
	contentLines,
} from "modules/product/functions/datatable/product.datatable.content.subcomponents.js";

import {
	pagination,
} from "modules/product/functions/datatable/product.datatable.bottom.subcomponents.js";

import { createModal } from "modules/product/functions/datatable/product.datatable.top.modals.js";
import {
	editModal,
	removeModal,
	detailModal,
} from "modules/product/functions/datatable/product.datatable.content.modals.js";

class ProductDatatableAssets {
	static addButton = addButton;
	static createModal = createModal;
	static saveButton = saveButton;
	static cancelSaveButton = cancelSaveButton;

	static pageSize = pageSize;

	static searchInput = searchInput;
	
	static headerColumns = headerColumns;
	static contentLines = contentLines;

	static editButton = editButton;
	static editModal = editModal;
	static saveEditButton = saveEditButton;
	static cancelEditButton = cancelEditButton;

	static removeButton = removeButton;
	static removeModal = removeModal;
	static saveRemoveButton = saveRemoveButton;
	static cancelRemoveButton = cancelRemoveButton;

	static detailButton = detailButton;
	static detailModal = detailModal;
	static closeDetailButton = closeDetailButton;

	static pagination = pagination;
}
export { ProductDatatableAssets };
