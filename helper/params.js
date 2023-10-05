let getParam = (params, property, defaulValue) => {
    if(params.hasOwnProperty(property) && params[property] !== undefined ){
        return params[property]
}
    return defaulValue
}
module.exports = {
    getParam
}