import {Deserializable} from './deserializable.model';

export class Country implements Deserializable {
    code: string;
    name: string;
    region: string;


    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
