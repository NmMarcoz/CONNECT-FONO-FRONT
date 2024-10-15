
const errorTranslate = (errorMessage) =>{
    switch(errorMessage){
        case "Network Error":
            return "Erro de conexão"
        default:
            return errorMessage
    }
}

export default errorTranslate;
