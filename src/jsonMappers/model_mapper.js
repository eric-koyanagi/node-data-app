import { MapperInterface } from '../interfaces/mapper.js';
import { modelService } from '../services/model.js';

class ModelMapper extends MapperInterface {
    constructor(json) {
        super();
        console.log("constructing model mapper", json);

        this.key = json.model;
    }
}

export {
    ModelMapper
}