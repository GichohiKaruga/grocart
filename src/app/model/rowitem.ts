import {Deserializable} from './deserializable.model';

export class Rowitem implements Deserializable {
    id: string;
    itemid: string;
    quantity: number;
    currency: string;
    price: number;
    unit: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}




