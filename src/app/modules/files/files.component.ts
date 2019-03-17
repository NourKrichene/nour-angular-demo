import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
    @ViewChild('fileInput') fileInput;

    fileList: any = [];

    constructor() {
    }

    ngOnInit() {
    }

    onFilesChange(fileList: Array<File>) {
        this.fileList.unshift(...fileList);
    }


    fileChange() {
        if (this.fileInput.nativeElement.files.length > 0) {
            this.fileList.unshift(...this.fileInput.nativeElement.files);
        }
    }

}
