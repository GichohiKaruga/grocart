import { Deserializable } from './deserializable.model';
import {Locality} from './locality';

export class User implements Deserializable {
  userid: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  photo: string;
  created: string;
  phone: string;
  accessToken: string;
  password: string;
  businessid: string;
  refreshtoken: string;
  gender: string;
  roles: string[];
  country: Locality;

  deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}




