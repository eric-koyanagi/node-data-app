import { MapperInterface } from '../interfaces/mapper.js';

class ModelMapper extends MapperInterface {
    constructor(json) {
        super();
        this.key = json.model;
    }
}

export {
    ModelMapper
}