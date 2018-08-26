import { Component } from '@angular/core';

import { Services } from './services/namespace';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    title = 'app';
    collection: Array<Object>;

    constructor(
        private examplesService: Services.Examples
    ) {
        examplesService.search({}).then(
            (r: Array<Object>) => {
                this.collection = r;
            }
        ).catch(
            (e) => {
                console.log(e);
            }
        );
    }

}
