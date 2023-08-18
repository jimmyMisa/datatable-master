class ClientDatatableManager{
	static getConfiguration(){
		return {
			page:1,
			size:10,
			key:"",
			orderBy:"createdAt",
			order:"DESC",
		}
	}
}