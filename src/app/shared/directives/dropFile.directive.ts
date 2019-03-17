import {Directive, HostListener, HostBinding, EventEmitter, Output} from '@angular/core';


@Directive({
    selector: '[appDropFile]'
})
export class DropFileDirective {

    @Output() private filesChangeEmitter: EventEmitter<File[]> = new EventEmitter();
    @HostBinding('style.background') private background = '#eee';

    constructor() {
    }

    @HostListener('dragover', ['$event'])
    public onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#999';
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
    }

    @HostListener('drop', ['$event'])
    public onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
        const files = evt.dataTransfer.files;


        this.filesChangeEmitter.emit(files);

    }

}
