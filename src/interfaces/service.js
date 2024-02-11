import { connect } from '../data/database.js';

class ServiceInterface {
    constructor() {
        if(!this.newRecord) {
            throw new Error("Must have a 'newModel' method");
        }
    }
  }
  export { ServiceInterface }