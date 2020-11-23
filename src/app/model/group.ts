import { Deserializable } from './deserializable.model';

export class Group implements Deserializable {
  id: string;
  name: string;
  description: string;

  deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}




