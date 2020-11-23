import {Deserializable} from './deserializable.model';

export class Services implements Deserializable {
  
    services: string[];
    name: any;
    
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
