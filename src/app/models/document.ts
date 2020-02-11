import { TypeDocument } from '../enums/type-document.enum';
import { Generic } from './generic';

export interface Document extends Generic {
    type: TypeDocument;
    digit: String;
    shippingDate: Date;
    dueDate: Date;
}
