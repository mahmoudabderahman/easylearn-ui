/**
 * @Author: Mahmoud Abdelrahman
 */
import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../../../services/data/document/document.service';
import {TokenStorageService} from '../../../../services/tokenStorageService';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Document} from '../../../document/document.component';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-download-document',
  templateUrl: './download-document.component.html',
  styleUrls: ['./download-document.component.css']
})
export class DownloadDocumentComponent implements OnInit {

  documents: Document[];


  constructor(private documentService: DocumentService,
              private tokenStorageService: TokenStorageService,
              private router: ActivatedRoute,
              private pagesRouter: Router,
              private location: Location) {
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
}
