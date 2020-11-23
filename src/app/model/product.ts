import {Deserializable} from './deserializable.model';

export class Product implements Deserializable {
    id: string;
    name: string;
    category: string;
    description: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}




