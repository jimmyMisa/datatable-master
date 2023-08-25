import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";
import ViewSvg from "vue/components/common/icons/ViewSvg.jsx";
import EditSvg from "vue/components/common/icons/EditSvg.jsx";
import RemoveSvg from "vue/components/common/icons/RemoveSvg.jsx";
import {getText} from "modules/client/ClientAssets.js"

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
					<div class="container">
						{this.renderDatatableTop()}
						<table class="table table-hover">
							<thead>
								{CommonTable.getMethod(this, "Header")()}
							</thead>
							<tbody>
								{CommonTable.getMethod(this, "Content")()}
							</tbody>
						</table>
						{this.renderDatatableBottom()}
					</div>
				)
			},
			renderDatatableTop(){
				return (
					<div>
						<div class="row mb-3">
							<div class="col-6">
								{CommonTable.getMethod(this, "PageSize")()}
							</div>
							<div class="col-6">
								{CommonTable.getMethod(this, "SearchBar")()}
							</div>
						</div>
					</div>
				)
			},
			renderDatatableBottom(){
				return (
					<div class="float-right">
						{CommonTable.getMethod(this, "Pagination")()}
					</div>
				)
			},
			detailIcon(){
				return <ViewSvg />
			},
			editIcon(){
				return <EditSvg />
			},
			removeIcon(){
				return <RemoveSvg />
			},
			renderDatatableDetailButton(params = {}){
				return this.$iconButton(
					this.getConfig().detailButton(params),
					{
						"content": this.detailIcon(),
						"customClass": "btn-primary rounded_button detail_button"
					}
					 
				);
			},
			renderDatatableEditButton(params = {}){
				return this.$iconButton(
					this.getConfig().editButton(params),
					{
						"content": this.editIcon(),
						"customClass": "btn-secondary rounded_button edit_button"
					}
				);
			},
			renderDatatableRemoveButton(params = {}){
				return this.$iconButton(
					this.getConfig().removeButton(params),
					{
						"content": this.removeIcon(),
						"customClass": "btn-danger rounded_button remove_button"
					}
				);
			},
			renderDatatablePageSize(){
				return <div class="size_wrapper">
					<div class="mr-1">Show</div> 
					{this.$commonSelect(this.getConfig().pageSize.field())}
					<div class="ml-1">{getText("COMMON").ENTRY}</div>
				</div>
			},
			renderDatatableSearchBar(){
				return this.$inputInline(this.getConfig().searchInput);
			},
		}
	}
}


export {
	CommonTableOverride
}