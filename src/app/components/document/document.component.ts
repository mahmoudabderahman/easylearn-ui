import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../services/data/document/document.service';
import {TokenStorageService} from '../../services/tokenStorageService';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {saveAs} from 'file-saver';

export class Document {
  public id: number;

  constructor(
    public data: File,
    public nameOfFile: string,
    public downloadLink: string,
    public uploader: string
  ) {
  }
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  documents: Document[];
  document: Document;
  public userFile: any = File;
  linkOfFile: string;
  response: string;

  constructor(private documentService: DocumentService,
              private tokenStorageService: TokenStorageService,
              private router: ActivatedRoute,
              private pagesRouter: Router,
              private location: Location,
  ) {
  }

  ngOnInit() {
    this.getDocumentsOfCourse(this.router.snapshot.params['courseId']);
  }

  getDocumentsOfCourse(courseId) {
    this.documentService.getDocumentsOfCourse(courseId).subscribe(
      data => {
        this.documents = data;
      }, error => {
        console.error(error);
      }
    );
  }

  downloadDocument(fileName) {
    let link = null;
    this.documentService.downloadDocument(fileName).subscribe(
      data => {
        saveAs(data);
        /*
        console.(data);
        console.log(link);
        window.open(link);
      */
      }
    );

  }

  createDocument() {

    //console.log(this.userFile);
    const formData = new FormData();
    formData.append('file', this.userFile);
    formData.append('nameOfFile', 'file');
    console.log(formData.get('file'));
    //this.document = new Document(JSON.stringify(this.userFile), 'doc', this.tokenStorageService.getUser().username);
    // console.log(this.document);
    console.log(this.userFile);


    this.documentService.createDocument(formData, this.router.snapshot.params['courseId'])
      .subscribe(
        data => {
          console.log(data);
          //this.pagesRouter.navigate(['courses']);
        },
        error => console.error(error),
      );
    this.location.back();


  }

  onSelectFile(event) {
    const file = event.target.files[0];
    this.userFile = file;
    console.log(this.userFile);
  }
}
