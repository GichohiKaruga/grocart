import {Deserializable} from './deserializable.model';

export class Locality implements Deserializable {
    countrycode: string;
    country: string;
    region: string;
    territory: string;
    zone: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
