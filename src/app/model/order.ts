import {Deserializable} from './deserializable.model';
import {Supplier} from './supplier';
import {Rowitem} from './rowitem';

export class Order implements Deserializable {
    id: string;
    userid: string;
    organizationid: string;
    organization: Supplier;
    created: string;
    items: Rowitem[];

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}




