import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if (this.isOpen) {
      this.isOpen = !this.isOpen;
    } else if (this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : this.isOpen;
    }
  }

  constructor(private elRef: ElementRef) {}
}
