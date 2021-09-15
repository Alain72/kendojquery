import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import '@progress/kendo-ui';

declare var kendo: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy  {
  @ViewChild('editor', { static: true }) editorEl: ElementRef;
    

    public value: string;

    constructor(private hostEl: ElementRef) { 
     
    }

    ngAfterViewInit() {
        kendo.jQuery(this.editorEl.nativeElement).kendoEditor({
            // Define Editor's options here
            // Use @Input() properties to expose Editor configuration
            resizable: {
                content: true,
                toolbar: true
            },
            change: (args) => {
                this.value = args.sender.value();
            }
        });
    }

    ngOnDestroy(): void {
        kendo.destroy(this.hostEl.nativeElement);
    }
}