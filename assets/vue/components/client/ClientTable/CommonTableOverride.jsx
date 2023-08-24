import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";
import ViewSvg from "vue/components/common/icons/ViewSvg.jsx";
import ViewCorkSvg from "vue/components/common/icons/ViewCorkSvg.jsx";
import EditSvg from "vue/components/common/icons/EditSvg.jsx";
import EditCorkSvg from "vue/components/common/icons/EditCorkSvg.jsx";
import RemoveSvg from "vue/components/common/icons/RemoveSvg.jsx";
import RemoveCorkSvg from "vue/components/common/icons/RemoveCorkSvg.jsx";
import PrevCorkSvg from "vue/components/common/icons/PrevCorkSvg.jsx";
import NextCorkSvg from "vue/components/common/icons/NextCorkSvg.jsx";
import SearchCorkSvg from "vue/components/common/icons/SearchCorkSvg";
import { 
    ClientAssets as Assets, 
    config,
    datatable
} from "modules/client/ClientAssets.js";
import classNames from "classnames";
import { toggleOrder } from "modules/common/datatableUtils.js";

class CommonTableOverride{
	static getMethods(){
		return {
			renderDatatableCreate(){
				return (
					<div class="float-right">
						{CommonTable.getMethod(this, "TopActions")()}
					</div>
				)
			},
			renderDatatableFull(){
				return (
					<div class="container dataTables_wrapper">
						{this.renderDatatableTop()}
						<div class="table-responsive">

							<table class="table dt-table-hover dataTable no-footer">
								<thead>
									{CommonTable.getMethod(this, "Header")()}
								</thead>
								<tbody>
									{CommonTable.getMethod(this, "Content")()}
								</tbody>
							</table>
						</div>
						{this.renderDatatableBottom()}
					</div>
				)
			},
			searchIcon(){
				return <SearchCorkSvg />
			},
			renderDatatableTop(){
				var params = {
					"content": this.searchIcon(),
					"customClass": "input_search"
				}
				return (
					<div class="dt--top-section">
						<div class="row">
							<div class="col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center">
							<div class="dataTables_length" id="zero-config_length">
								<label>
								Results :
								{this.$commonSelect(this.getConfig().pageSize.field())}
								</label>
							</div>
							</div>
							<div class="col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3">
							<div class="dataTables_filter">
								{this.$inputWithIcon(this.getConfig().searchInput, params)}
							</div>
							</div>
						</div>
					</div>
				)
			},
			renderDatatableBottom(){
				return (
					<div class="dt--bottom-section d-sm-flex justify-content-sm-between text-center">
					<div class="dt--pages-count mb-sm-0 mb-3 pages_count_wrapper">
						<div class="dataTables_info" role="status" aria-live="polite">
						
						</div>
					</div>
					<div class="dt--pagination">
						<div class="dataTables_paginate paging_simple_numbers" id="zero-config_paginate">
							{CommonTable.getMethod(this, "Pagination")()}
						</div>
					</div>
					</div>
				)
			},
			renderDatatablePagination(){
				var params = {
					"prevContent": this.prevIcon(),
					"nextContent": this.nextIcon()
				}
				return this.$paginationCork(this.getConfig().pagination, params);
			},
			detailIcon(){
				return <ViewCorkSvg />
			},
			editIcon(){
				return <EditCorkSvg />
			},
			removeIcon(){
				return <RemoveCorkSvg />
			},
			prevIcon(){
				return <PrevCorkSvg />
			},
			nextIcon(){
				return <NextCorkSvg />
			},
			renderDatatableDetailButton(params = {}){
				return this.$iconButtonCork(
					this.getConfig().detailButton(params),
					{
						"content": this.detailIcon(),
						"customClass": "rounded_button mr-3"
					}
					 
				);
			},
			renderDatatableEditButton(params = {}){
				return this.$iconButtonCork(
					this.getConfig().editButton(params),
					{
						"content": this.editIcon(),
						"customClass": "rounded_button mr-3"
					}
				);
			},
			renderDatatableRemoveButton(params = {}){
				return this.$iconButtonCork(
					this.getConfig().removeButton(params),
					{
						"content": this.removeIcon(),
						"customClass": "rounded_button"
					}
				);
			},
			renderDatatablePageSize(){
				return <div class="size_wrapper">
					<div class="mr-1">Show</div> 
					{this.$commonSelect(this.getConfig().pageSize.field())}
					<div class="ml-1">entries</div>
				</div>
			},
			renderDatatableSearchBar(){
				return this.$inputInline(this.getConfig().searchInput);
			},
			renderDatatableHeaderColumn({headerColumn} = {}){
				var orderClass = "sorting";
				var { order } = headerColumn;
				if(order == "ASC"){
					orderClass = "sorting_asc";
				}
				else if(order == "DESC"){
					orderClass = "sorting_desc";
				}
				return (
					<th class={classNames(orderClass)} onClick={this.sort({headerColumn})}>
						{headerColumn.label}
					</th>
				)
			},
			sort({headerColumn}){
				return () => {
					var { name = "", index = null, order:columnOrder = null } = headerColumn;
					config().headerColumns.orderBy = name;
					var order = toggleOrder(columnOrder);
					config().headerColumns.order = order;
					config().headerColumns.columns.map((column) => {
						return column.order = null;
					})
					config().headerColumns.columns[index].order = order;
					config().instance.refresh()
					datatable().reload();
				}
			}
		}
	}
}


export {
	CommonTableOverride
}