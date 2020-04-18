import { Generic } from './generic';

export interface Address extends Generic {
    cep: String;
    street: String;
    number: String;
    complement: String;
    neighborhood: String;
    city: String;
    state: String;
}
