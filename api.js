class data {
    constructor() {
        this.jsondata = require("./data.json");
    }
    getAllData() {
        return this.jsondata
    }
    finddata(value) {
        
        for ( var element of this.jsondata.datasearch){
            if (element.name == value) {
                return {
                    message : "have movie in list",
                    output : element
                }
            } 
            return {
                message : "don't have movie in list with this parameter :" + value 
            }
        }
    }
    adddata(value) {
        this.jsondata.datasearch.push(value)
    }
    allready(value) {
        var has = this.jsondata.datasearch.find(element => element.name == value)
        return has;
    }
}
        
module.exports = data;