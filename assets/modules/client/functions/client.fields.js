import {FieldManager} from "common/functions/getField.js"

class ClientFieldManager{
	static getAll({page}){
		var clientField = new ClientField();
		clientField.page = page
		var fields = {
			name:clientField.name(),
			phone:clientField.phone(),
		}
		return fields
	}
}

class ClientField{
	page;
	name(){
    	var name = FieldManager.create("NAME", this.page);
    	return name
	}
	phone(){
    	var phone = FieldManager.create("PHONE", this.page);
    	return name
	}
}

export { ClientFieldManager }