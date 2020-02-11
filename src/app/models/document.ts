import { TypeDocument } from '../enums/type-document.enum';

export interface Document {
    type: TypeDocument;
    digit: String;
    shippingDate: Date;
    dueDate: Date;
}
