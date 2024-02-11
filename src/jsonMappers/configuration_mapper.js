import { MapperInterface } from '../interfaces/mapper.js';
//import { configurationService } from '../services/configuration.js';

class ConfigurationMapper extends MapperInterface {
    constructor(configurations) {
        super();
        console.log("constructing configuration mapper");

        for (const configuration of configurations) {
            console.log("config under my model", configuration);
        }
        
    }

}

export {
    ConfigurationMapper
}