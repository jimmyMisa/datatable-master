import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";

import { 
    OrderAssets as Assets, 
    config,
	getText
} from "modules/order/OrderAssets.js";
import {OrderDecorator} from "vue/components/order/OrderTable/OrderDecorator.jsx";
import classNames from "classnames";

class CommonTableOverride{
	static getMethods(){
		return {
			...OrderDecorator.getMethods(),
			//TODO autoprefix using getMethods
			renderDatatableContent(){
				if (!this.getConfig().contentLines.length) {
					return (
						<tr>
							<td colspan={this.getConfig().headerColumns.columns.length}>
								{getText("COMMON").EMPTY_MESSAGE}
							</td>
						</tr>
					);
				}
				var trs = this.getConfig().contentLines.map((contentLine = {}, line) =>{
					return CommonTable.getMethod(this, "ContentLine")({contentLine, line})
				});
				return trs
			},
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
			renderDatatableTop(){
				var params = {
					"content": this.searchIcon(),
					"customClass": "input_search"
				}
				return (
					<div class="dt--top-section">
						<div class="row">
							<div class="col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center">
							<div class="dataTables_length">
								<label>
								{getText("COMMON").RESULTS} :
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
				if(this.getConfig().pagination.pages >= 2){
					return (
						<div class="dt--bottom-section d-sm-flex justify-content-sm-between text-center">
							<div class="dt--pages-count mb-sm-0 mb-3">
								<div class="dataTables_info" role="status" aria-live="polite">
									{this.$statistic(this.getConfig().pagination)}
								</div>
							</div>
							<div class="dt--pagination">
								<div class="dataTables_paginate paging_simple_numbers" id="zero-config_paginate">
									<ul class="pagination">
										{CommonTable.getMethod(this, "Pagination")()}
									</ul>
								</div>
							</div>
						</div>
					)
				}
			},
			renderDatatablePagination(){
				var params = {
					"prevContent": this.prevIcon(),
					"nextContent": this.nextIcon()
				}
				return this.$dottedPagination(this.getConfig().pagination, params);
			},
			renderDatatableDetailButton(params = {}){
				return this.$iconButtonCork(
					this.getConfig().detailButton(params),
					{
						"content": this.detailIcon(),
						"customClass": "rounded_button info mr-3"
					}
					 
				);
			},
			renderDatatableEditButton(params = {}){
				return this.$iconButtonCork(
					this.getConfig().editButton(params),
					{
						"content": this.editIcon(),
						"customClass": "rounded_button primary mr-3"
					}
				);
			},
			renderDatatableRemoveButton(params = {}){
				return this.$iconButtonCork(
					this.getConfig().removeButton(params),
					{
						"content": this.removeIcon(),
						"customClass": "rounded_button danger"
					}
				);
			},
			renderDatatablePageSize(){
				return <div class="size_wrapper">
					<div class="mr-1">{getText("COMMON").SHOW}</div> 
					{this.$commonSelect(this.getConfig().pageSize.field())}
					<div class="ml-1">{getText("COMMON").ENTRY}</div>
				</div>
			},
			renderDatatableSearchBar(){
				return this.$inputInline(this.getConfig().searchInput);
			},
			renderDatatableLoadingContent(){
				return this.$commonLoading(this.getConfig().loadingContent);
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
					<th class={classNames(orderClass)} onClick={config().sortColumns(headerColumn)}>
						{headerColumn.label}
					</th>
				)
			},
			renderDatatableBody(){
				return (
					<div class="widget-content widget-content-area br-8">
						<div id="zero-config_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
							<div class="dt--top-section">
								<div class="row">
									<div class="col-12 d-flex justify-content-sm-start justify-content-center">
									{this.renderDatatableFull()}
									{this.renderDatatableLoadingContent()}
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			}
		}
	}
}


export {
	CommonTableOverride
}