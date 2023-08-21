import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";

class CommonDatatableHeader{
	static getMethods(){
		return {
			Header(){
				var configurations = CommonTable.getMethod(this, "Configurations")()
				var ths = Configurations.headerColumns.columns.map((headerColumn = {}, index) =>{
					return CommonTable.getMethod(this, "HeaderColumn")({headerColumn, index})
				});
				if(ClientConfig.params.haveAction){
					ths.push(CommonTable.getMethod(this, "HeaderColumnAction")())
				}
				return <tr>{ths}</tr>
			},
			HeaderColumn({headerColumn} = {}){
				return (
					<th>
						{headerColumn.name}
					</th>
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
		}
	}
}


export {
	CommonDatatableHeader
}