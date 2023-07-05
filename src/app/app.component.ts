import { Component } from '@angular/core';

import { DefaultComponent } from './default/default.component';
import { signalsComponent } from './signals/signals.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [DefaultComponent, signalsComponent]
})
export class AppComponent {}
