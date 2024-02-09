import { MapperInterface } from '../interfaces/mapper.js';
//import { configurationService } from '../services/configuration.js';

class ConfigurationMapper extends MapperInterface {
    constructor(json) {
        super();
        console.log("constructing configuration mapper", json);

        
    }

    async insertToDatabase(data) {
        console.log("Inserting config data to DB: ", data);        
        //return await modelService.newModel(this.key);
    }
}

export {
    ConfigurationMapper
}