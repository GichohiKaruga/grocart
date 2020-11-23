import { Deserializable } from './deserializable.model';
import {Locality} from './locality';


export class Driver implements Deserializable {
  id: string;
  name: string;
  description: string;
  location:Locality;
  email: string;
  photos: string[];
  phone:string;

  deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}




