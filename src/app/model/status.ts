import {Deserializable} from './deserializable.model';


export class Status implements Deserializable {
    privacyStatus: string;
    embeddable: boolean;
    license: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}