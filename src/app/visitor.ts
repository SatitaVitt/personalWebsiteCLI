import { Directive } from '@angular/core';

@Directive()
export class Visitor{

    constructor(
        public name : string,
        public type : string,
        public directed : string
    ) {

    }
}