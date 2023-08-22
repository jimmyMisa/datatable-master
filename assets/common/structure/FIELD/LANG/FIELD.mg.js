import STRUCTURE from "common/structure/FIELD/FIELD.STRUCTURE.js"

class FIELD{
    static CLIENT_NAME = {
        ...STRUCTURE.NAME,
        PLACEHOLDER:{
            DEFAULT:"Entrer le nom du client",
        },
        LABEL:{
            DEFAULT:"Nom du client",
        },
        EMPTY_MESSAGE:{
            DEFAULT:"Veuillez saisir le nom du client",
        },
        TH:"Nom du client",
    }
    static CLIENT_PHONE = {
        ...STRUCTURE.PHONE,
        PLACEHOLDER:{
            DEFAULT:"Entrer le numéro de téléphone du client",
        },
        LABEL:{
            DEFAULT:"Numéro de téléphone du client",
        },
        EMPTY_MESSAGE:{
            DEFAULT:"Veuillez saisir le numéro de téléphone du client",
        },
        INVALID_PHONE:{
            DEFAULT:"Numero invalide",
        },
        TH:"Téléphone",
    }
    static CLIENT_SEARCH = {
        ...STRUCTURE.SEARCH,
        PLACEHOLDER:{
            DEFAULT:"Entrer une clé de recherche",
        },
        LABEL:{
            DEFAULT:"REchercher : ",
        },
        EMPTY_MESSAGE:{
            DEFAULT:"Veuillez saisir une clé de recherche",
        },
        LOWER_LENGTH_MESSAGE:{
            DEFAULT:"Veuillez saisir au moins 3 lettres",
        },
    }
    static PAGE_SIZE = {
        ...STRUCTURE.PAGE_SIZE,
        PLACEHOLDER:{
            DEFAULT:"Selectionner le nombre d'element dans une page",
        },
        LABEL:{
            DEFAULT:"Nombre d'element dans une page : ",
        },
    }
    static CLIENT_REMOVE_MESSAGE = "Etes vous sur de supprimer {{ clientName }} ?"
    static CLIENT_ID = "Id"
}

export default FIELD;