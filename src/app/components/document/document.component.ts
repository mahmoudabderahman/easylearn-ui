import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../../services/data/document/document.service";
import {TokenStorageService} from "../../services/tokenStorageService";
import {ActivatedRoute, Router} from "@angular/router";

export class Document {
  public id: number;

  constructor(
    public data: File,
    public nameOfFile: string,
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

  document: Document;
  public userFile: any = File;

  constructor(private documentService: DocumentService,
              private tokenStorageService: TokenStorageService,
              private router: ActivatedRoute,
              private pagesRouter: Router,) {
  }

  ngOnInit() {
  }

  createDocument() {
    console.log(this.userFile)
    /*
    this.document.data = this.userFile
    this.document.nameOfFile = 'document'
    this.document.uploader = this.tokenStorageService.getUser().username
    */
    this.document = new Document(this.userFile, 'doc', this.tokenStorageService.getUser().username)
    console.log(this.document)
    this.documentService.createDocument(this.document)
      .subscribe(
        data => {
          this.pagesRouter.navigate(['courses']);
        },
        error => console.error(error)
      );


  }

  onSelectFile(event) {
    const file = event.target.files[0];
    this.userFile = file
    console.log(this.userFile)
  }
}
