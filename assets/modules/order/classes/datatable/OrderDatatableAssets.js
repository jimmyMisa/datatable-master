import {
	addButton,
	saveButton,
	cancelSaveButton,
} from "modules/order/functions/datatable/order.datatable.top.buttons.js";

import { searchInput } from "modules/order/functions/datatable/order.datatable.top.inputs.js";

import {
	editButton,
	removeButton,
	detailButton,
	saveEditButton,
	cancelEditButton,
	saveRemoveButton,
	cancelRemoveButton,
	closeDetailButton,
} from "modules/order/functions/datatable/order.datatable.content.buttons.js";

import {
	pageSize,
} from "modules/order/functions/datatable/order.datatable.top.subcomponents.js";

import {
	headerColumns,
	sortColumns
} from "modules/order/functions/datatable/order.datatable.header.subcomponents.js";

import {
	contentLines,
	loadingContent,
	checkboxRows,
	switchRows
} from "modules/order/functions/datatable/order.datatable.content.subcomponents.js";

import {
	pagination,
	removeMultipleModal,
	removeMultipleButton,
	saveRemoveMultipleButton
} from "modules/order/functions/datatable/order.datatable.bottom.subcomponents.js";

import { createModal } from "modules/order/functions/datatable/order.datatable.top.modals.js";
import {
	editModal,
	removeModal,
	detailModal,
} from "modules/order/functions/datatable/order.datatable.content.modals.js";

class OrderDatatableAssets {
	static addButton = addButton;
	static createModal = createModal;
	static saveButton = saveButton;
	static cancelSaveButton = cancelSaveButton;
	static removeMultipleButton = removeMultipleButton;

	static pageSize = pageSize;

	static searchInput = searchInput;
	
	static headerColumns = headerColumns;
	static sortColumns = sortColumns;
	static contentLines = contentLines;
	static loadingContent = loadingContent;
	static checkboxRows = checkboxRows;
	static switchRows = switchRows;

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
	static removeMultipleModal = removeMultipleModal;
	static saveRemoveMultipleButton = saveRemoveMultipleButton;
}
export { OrderDatatableAssets };
