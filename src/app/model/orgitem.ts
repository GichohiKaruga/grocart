import {Deserializable} from './deserializable.model';
import {Item} from './item';

export class Orgitem implements Deserializable {
    id: string;
    item: Item;
    quantity: number;
    currency: string;
    category: string;
    price: number;
    unit: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}




