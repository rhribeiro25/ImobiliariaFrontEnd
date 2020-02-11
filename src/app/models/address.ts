import { Generic } from './generic';

export interface Address extends Generic {
    street: String;
    neighborhoods: String;
    city: String;
    number: String;
    cep: String;
    complement: String;
}
