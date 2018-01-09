import { Directive, OnInit, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[alertModal]'
})
export class AlertModalDirective implements OnInit {

    @Input('modalShow') _modalShow;

    @HostListener('click', ['$event.target'])
    onClick() {
        this._modalShow = true;
    }

    constructor() { }

    ngOnInit() {

    }

}
