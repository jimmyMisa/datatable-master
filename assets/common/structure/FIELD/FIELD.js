import {FIELD_VALIDATION} from "common/structure/FIELD/FIELD.VALIDATION.js"
import {FIELD_RESTRICTION} from "common/structure/FIELD/FIELD.RESTRICTION.js"
import {FIELD_LIMITATION} from "common/structure/FIELD/FIELD.LIMITATION.js"

import {FieldManager, getField} from "common/functions/getField.js"

class FIELD{
	static init(){
	    window.lang = "FR";
	    FieldManager.domain = "DEFAULT";
    	FieldManager.getField = getField;
		getField();
		FIELD_VALIDATION.init();
		FIELD_RESTRICTION.init();
		FIELD_LIMITATION.init();
	}
}

export {FIELD}