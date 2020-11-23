import {Deserializable} from './deserializable.model';
import {Supplier} from './supplier';

export class Orderitem implements Deserializable {
    id: string;
    itemid: string;
    currency: string;
    price: number;
    quantity: number;
    unit: string;
    organization: Supplier;
    item: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}




