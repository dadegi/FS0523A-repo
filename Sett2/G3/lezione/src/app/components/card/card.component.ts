import { ChildComponent } from './../child/child.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

    @ViewChild(ChildComponent, {static: true}) child!: ChildComponent;

    constructor() {}

    ngOnInit(): void {}
}
