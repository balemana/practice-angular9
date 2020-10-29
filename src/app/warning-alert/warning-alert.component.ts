import { Component } from '@angular/core';
@Component({
    selector: 'app-warning-alert',
    template: `
    <div class="alert alert-danger" role="alert">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span class="sr-only">Error:</span>
        This is a warning, you are in danger
</div>`,
    styles: [
        `
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
        }
        `
    ]
})
export class WarningAlertComponent {

}