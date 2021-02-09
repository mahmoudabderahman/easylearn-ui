/**
 * @Author: Mahmoud Abdelrahman
 */
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
  public userFile: any = File;


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
    this.documentService.downloadDocument(fileName).subscribe(
      data => {
        saveAs(data);

      }
    );

  }

  createDocument() {

    const formData = new FormData();
    formData.append('file', this.userFile);
    formData.append('nameOfFile', 'file');
    console.log(formData.get('file'));
    // console.log(this.document);
    console.log(this.userFile);


    this.documentService.createDocument(formData, this.router.snapshot.params['courseId'])
      .subscribe(
        data => {
          console.log(data);
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
