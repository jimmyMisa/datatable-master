import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";

class CommonDatatableHeader{
	static getMethods(){
		return {
			Header(){
				var ths = this.getConfig().headerColumns.columns.map((headerColumn = {}, index) =>{
					return CommonTable.getMethod(this, "HeaderColumn")({headerColumn, index})
				});
				if(this.getConfig().haveAction){
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