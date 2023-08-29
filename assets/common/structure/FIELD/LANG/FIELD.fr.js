import STRUCTURE from "common/structure/FIELD/FIELD.STRUCTURE.js"
//TODO optimize getText: getText("...") > getText()....

class FIELD{
    static initProperties(targetClass) {
        for (var propertyName in this) {
            if (propertyName !== "initProperties" && propertyName !== "inherit") {
                targetClass[propertyName] = this[propertyName];
            }
        }
    }
    
    static inherit() {
        this.initProperties(this);
    }

    static COMMON = {
        SHOW: "Afficher",
        ENTRY: "entrée(s)",
        RESULTS: "Résultats",
        STAT: {
            SHOWING: "Affichage de la page",
            OF: "sur"
        },
        EMPTY_MESSAGE:"Aucun resultat"
    }

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
            DEFAULT:"Rechercher : ",
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
    static CLIENT_REMOVE_MESSAGE = "Etes vous sur de supprimer {{clientName}} ?"
    static CLIENT_ID = "Id"
    static CLIENT_LIST = {
        EMPTY_MESSAGE:"Aucun resultat"
    }

    static PRODUCT_NAME = {
        ...STRUCTURE.NAME,
        PLACEHOLDER:{
            DEFAULT:"Entrer le nom du produit",
        },
        LABEL:{
            DEFAULT:"Nom du produit",
        },
        EMPTY_MESSAGE:{
            DEFAULT:"Veuillez saisir le nom du produit",
        },
        TH:"Nom du produit",
    }
    static PRODUCT_UNIT_PRICE = {
        ...STRUCTURE.UNIT_PRICE,
        PLACEHOLDER:{
            DEFAULT:"Entrer le prix unitaire",
        },
        LABEL:{
            DEFAULT:"Prix unitaire",
        },
        EMPTY_MESSAGE:{
            DEFAULT:"Veuillez saisir le prix unitaire",
        },
        TH:"Prix unitaire",
    }
    static PRODUCT_ID = "Id"
    static CONFIRM_REMOVE_MESSAGE = "Etes vous sur de supprimer {{name}} ?"

    static CLIENT_NAME_ORDER = {
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
    static PRODUCT_NAME_ORDER = {
        ...STRUCTURE.NAME,
        PLACEHOLDER:{
            DEFAULT:"Entrer le nom du produit",
        },
        LABEL:{
            DEFAULT:"Nom du produit",
        },
        EMPTY_MESSAGE:{
            DEFAULT:"Veuillez saisir le nom du produit",
        },
        TH:"Nom du produit",
    }
    static ORDER_REMOVE_MESSAGE = "Etes vous sur de supprimer la commande {{product}} de {{client}} ?"

}

export default FIELD;