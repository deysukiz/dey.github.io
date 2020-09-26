import { Component, OnInit } from '@angular/core';

import { CvService, Cv } from '../../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cv: any = [];
  cv_selected: any = [];
  side = 'right';
  type_exp = '';

  constructor( private _cvService: CvService) { }

  ngOnInit() {

    this.cv = this._cvService.getCv();
    this.cv_selected = this.cv;

    console.log(this.cv);
  }

  getExperience(typeExperience: string) {
    this.type_exp = typeExperience;
    console.log(this.cv);
    this.cv_selected = [];

    for (const c of this.cv) {
      if (c.type === typeExperience || typeExperience === '') {
        this.cv_selected.push(c);
      }
      if (typeExperience === 'Others' && c.type !== 'Education' && c.type !== 'Career' && c.type !== 'Others') {
        // if () {
          this.cv_selected.push(c);
        // }
      }
    }
    console.log(this.cv_selected);
    }
}
