import { Person } from './person';
import { Property } from './property';
import { Generic } from './generic';

export interface Contract extends Generic {
    people: Person[];
    property: Property;
    finishDate: Date;
    startDate: Date;
    rent: Number;
}
