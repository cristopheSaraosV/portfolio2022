import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  constructor() { }

  courses = [
    {
      "course":"INTRODUCTION TO WEB DEVELOPMENT 1 ( 40 h )",
      "url":"www.google.cl"
    },
    {
      "course":"INTRODUCTION TO WEB DEVELOPMENT 2 ( 40 h )",
      "url":"www.google.cl"
    },
    {
      "course":"PERSONAL PRODUCTIVITY ( 40 h )",
      "url":"www.google.cl"
    },
    {
      "course":"SCRUM FOUNDATION PROFESSIONAL CERTIFICATE",
      "url":"www.google.cl"
    },
    {
      "course":"PROGRAMMING WITH JAVASCRIPT ED 5",
      "url":"www.google.cl"
    },
    {
      "course":"ANGULAR: FROM ZERO TO EXPERT - ( EDITION 2021 )",
      "url":"www.google.cl"
    },
    {
      "course":"ADVANCED ANGULAR: TAKE YOUR BASES TO THE NEXT LEVEL - MEAN",
      "url":"www.google.cl"
    },
  ]
  courseSelected = 0;

  ngOnInit(): void {
  }

  changeCourse(position:number){
    if(this.courseSelected == 0 && position == -1){
      this.courseSelected = this.courses.length-1;
    }else if(this.courseSelected>=0 &&  this.courseSelected+1 < this.courses.length) {
      this.courseSelected= this.courseSelected + position;
    }else{
      this.courseSelected = 0;
    }
  }

}
