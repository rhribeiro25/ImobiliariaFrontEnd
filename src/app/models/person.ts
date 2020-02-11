import { TypePerson } from '../enums/type-person.enum';
import { PhoneNumber } from './phone-number';
import { Address } from './address';
import { Generic } from './generic';

export interface Person extends Generic {
    type: TypePerson;
    firstName: String;
    lastName: String;
    birthday: Date;
    motherName: String;
    fatherName: String;
    documents: Document[];
    addresses: Address[];
    phoneNumbers: PhoneNumber[];
}
