class CommonTable{
	static prefix(){
		return 'renderDatatable';
	}
	static getMethod(instance, name){()
		var prefix = CommonTable.prefix()
		var prefixedName = `${prefix}${name}`;
		return instance[prefixedName]
	}
	static baseMethods(){
		return {
			//Full
			Full(){
				return (
					<div>
						{CommonTable.getMethod(this, "Top")()}
						<table>
							<thead>
								{CommonTable.getMethod(this, "Header")()}
							</thead>
							<tbody>
								{CommonTable.getMethod(this, "Content")()}
							</tbody>
						</table>
						{CommonTable.getMethod(this, "Bottom")()}
					</div>
				)
			}

			//Sub components
			Top(){
				return (
					<div>
						{CommonTable.getMethod(this, "TopActions")()}
						{CommonTable.getMethod(this, "PageSize")()}
						{CommonTable.getMethod(this, "SearchBar")()}
					</div>
				)
			},
			Header(){
				var configurations = CommonTable.getMethod(this, "Configurations")()
				var ths = Configurations.headerColumns.map((headerColumn = {}, index) =>{
					return CommonTable.getMethod(this, "HeaderColumn")({headerColumn, index})
				});
				if(ClientConfig.params.haveAction){
					ths.push(CommonTable.getMethod(this, "HeaderColumnAction")())
				}
				return <tr>{ths}</tr>
			},
			Content(){
				var configurations = CommonTable.getMethod(this, "Configurations")()
				var trs = Configurations.contentLines.map((contentLine = {}, line) =>{
					return CommonTable.getMethod(this, "ContentLine")({contentLine, line})
				});
				return trs
			},
			Bottom(){
				return (
					<div>
						{CommonTable.getMethod(this, "Pagination")()}
					</div>
				)
			},

			//Blocks
			SearchBar(){
				return this.$input(Configurations.searchInput);
			},
			PageSize(){
				return this.$select(Configurations.pageSize);
			},
			TopActions(){
				return CommonTable.getMethod(this, "CreateButton")()
			},
			HeaderColumn({headerColumn} = {}){
				return (
					<th>
						{headerColumn.name}
					</th>
				)
			},
			ContentLine({contentLine, line} = {}){
				var tds = Configurations.headerColumns.map((headerColumn, index) =>{
					return CommonTable.getMethod(this, "ContentColumn")({contentLine, line, headerColumn, index})
				});
				if(ClientConfig.params.haveAction){
					tds.push(CommonTable.getMethod(this, "ContentColumnAction")({contentLine, line}))
				}
				return (
					<tr>{tds}</tr>
				)
			},
			ContentColumn({contentLine, index} = {}){
				var contentColumn = () =>{
					return contentLine[index]
				}
				return (
					<td>
						{contentColumn()}
					</td>
				)
			},
			//Exemple de contenu override
			ContentColumn__({contentLine, headerColumn} = {}){
				var contentColumn = () =>{
					return contentLine[headerColumn.name]
				}
				return (
					<td>
						{contentColumn()}
					</td>
				)
			},

			//Column Actions
			HeaderColumnAction(){
				return (
					<th>
						Actions
					</th>
				)
			},
			ContentColumnAction({contentLine, line}){
				return (
					<td>
						{CommonTable.getMethod(this, "DetailButton")({contentLine, line})}
						{CommonTable.getMethod(this, "EditButton")({contentLine, line})}
						{CommonTable.getMethod(this, "RemoveButton")({contentLine, line})}
					</td>
				)
			},

			//Buttons
			CreateButton(params = {}){
				Configurations.addButton.params = {...Configurations.addButton.params, ...params}
				return this.$button(Configurations.addButton);
			},
			EditButton(params = {}){
				Configurations.editButton.params = {...Configurations.editButton.params, ...params}
				return this.$button(Configurations.editButton);
			},
			RemoveButton(params = {}){
				Configurations.removeButton.params = {...Configurations.removeButton.params, ...params}
				return this.$button(Configurations.removeButton);
			},
			DetailButton(params = {}){
				Configurations.detailButton.params = {...Configurations.detailButton.params, ...params}
				return this.$button(Configurations.detailButton);
			},

			//Buttons for action
			SaveButton(params = {}){
				Configurations.saveButton.params = {...Configurations.saveButton.params, ...params}
				return this.$button(Configurations.saveButton);
			},
			CancelSaveButton(params = {}){
				Configurations.cancelSaveButton.params = {...Configurations.cancelSaveButton.params, ...params}
				return this.$button(Configurations.cancelSaveButton);
			},
			SaveEditButton(params = {}){
				Configurations.saveEditButton.params = {...Configurations.saveEditButton.params, ...params}
				return this.$button(Configurations.saveEditButton);
			},
			CancelEditButton(params = {}){
				Configurations.cancelEditButton.params = {...Configurations.cancelEditButton.params, ...params}
				return this.$button(Configurations.cancelEditButton);
			},
			SaveRemoveButton(params = {}){
				Configurations.saveRemoveButton.params = {...Configurations.saveRemoveButton.params, ...params}
				return this.$button(Configurations.saveRemoveButton);
			},
			CancelRemoveButton(params = {}){
				Configurations.cancelRemoveButton.params = {...Configurations.cancelRemoveButton.params, ...params}
				return this.$button(Configurations.cancelRemoveButton);
			},
			CancelDetailButton(params = {}){
				Configurations.cancelDetailButton.params = {...Configurations.cancelDetailButton.params, ...params}
				return this.$button(Configurations.cancelDetailButton);
			},

			//Modals
			//Deprecated because, modals use modal.show() bridge method
			CreateModal(){
				return this.$modal(Configurations.createModal);
			},
			EditModal(){
				return this.$modal(Configurations.editModal);
			},
			RemoveModal(){
				return this.$modal(Configurations.removeModal);
			},
			DetailModal(){
				return this.$modal(Configurations.detailModal);
			},

			//Fields
			//Declare inside the custom component / use this inside the modal
			CreateNameField(){
				return this.$input(Configurations.createNameField);
			},
			CreateContentField(){
				return this.$input(Configurations.createContentField);
			},

			//Pagination
			Pagination(){
				return this.$pagination(Configurations.pagination);
			}
			Configurations(){
				//To override by configuration
			}
		}
	}
	static initializedMethods;
	static getMethods(){
		if(CommonTable.initializedMethods){
			return CommonTable.initializedMethods;
		}
		var baseMethods = CommonTable.baseMethods();
		var prefix = CommonTable.prefix()
		var methods = {}
		Object.keys(baseMethods).map((name) =>{
			var methodContent = baseMethods[name]
			var prefixedName = `${prefix}${name}`;
			methods[prefixedName] = methodContent;
		});
		CommonTable.initializedMethods = methods
		return methods
	},
}