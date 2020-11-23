import { Deserializable } from './deserializable.model';

export class Role implements Deserializable {
  id: string;
  name: string;
  description: string;
  filter: string;

  deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}




