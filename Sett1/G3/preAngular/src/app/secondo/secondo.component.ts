import { Component } from '@angular/core';

@Component({
    selector: 'app-secondo',
    template: `<h3>Sono il secondo component</h3>
        <h4>{{ title }}</h4>`,
    styles: [
        `
            :host {
                display: block;
            }
            h3 {
                text-decoration: underline;
            }
        `,
    ],
})
export class SecondoComponent {
    title = 'SECONDO';
}
