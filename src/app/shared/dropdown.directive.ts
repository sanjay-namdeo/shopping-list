import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;
    constructor() { }

    @HostListener('click') openCloseDropDown() {
        this.isOpen = !this.isOpen;
    }
}