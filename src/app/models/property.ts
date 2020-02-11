import { Image } from './image';
import { Address } from './address';
import { PropertyDetail } from './property-detail';

export interface Property {
    detail: PropertyDetail;
    address: Address;
    valueLocation: Number;
    images: Image[];
}
