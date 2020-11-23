import { Deserializable } from './deserializable.model';
import {Locality} from './locality';

export class Supplier implements Deserializable {
  name: string;
  phone: string;
  email: string;
  location: Locality;
  type: string;
  id: string;

  deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}




