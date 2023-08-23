import STRUCTURE from "common/structure/FIELD/FIELD.STRUCTURE.js"
import FR_FIELD from "./FIELD.fr.js"

class FIELD extends FR_FIELD{
    static CLIENT_NAME = {
        ...FR_FIELD.CLIENT_NAME
    }
    static CLIENT_PHONE = {
        ...FR_FIELD.CLIENT_PHONE
    }
    static CLIENT_SEARCH = {
        ...FR_FIELD.CLIENT_SEARCH
    }
    static PAGE_SIZE = {
        ...FR_FIELD.PAGE_SIZE
    }
    static CLIENT_REMOVE_MESSAGE = "Ho fafaina ve i {{clientName}} ?"
}

export default FIELD;