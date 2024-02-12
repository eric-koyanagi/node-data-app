import { config } from 'dotenv';
import { MapperInterface } from '../interfaces/mapper.js';

class ConfigurationMapper extends MapperInterface {
    constructor(modelId, configurations) {
        super();

        this.values = this.values || [];
        for (const configuration of configurations) {
            this.values.push([
                modelId,
                configuration.productName,
                { names: configuration.bleAdvertisingNames }, 
                configuration.brand,
                configuration.features, 
                configuration.firmware ?? "",
                configuration.provisioning, 
                configuration?.testing?.status === 'production',
                configuration?.testing?.status,
                { whitelist: configuration.testing.whitelist},  
                configuration.bluetoothDataChunks,
                configuration.bluetoothMTU
            ]);
        }
    }

    toArray(val) {
        if (!val) return [];
        return val.split(',');
    }

}

export {
    ConfigurationMapper
}