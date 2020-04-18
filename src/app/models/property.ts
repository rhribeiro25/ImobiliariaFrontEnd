import { Image } from './image';
import { Address } from './address';
import { PropertyDetail } from './property-detail';
import { Generic } from './generic';

export interface Property extends Generic {
    detail: PropertyDetail;
    address: Address;
    valueLocation: Number;
    images: Image[];
}
