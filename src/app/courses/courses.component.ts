import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // 1. Renders courses in a list
  // 2. Select a course
  // 3. Renders selected course

  courses = [
    {
      id: 1,
      title: 'Vol 1: Angular 14 Fundamentals',
      description: 'Learn the fundamentals of Angular 14',
      percentComplete: 12,
      favorite: true
    },
    {
      id: 2,
      title: 'Vol 2: Angular 14 Intermediate',
      description: 'Learn Intermediate Angular 14',
      percentComplete: 50,
      favorite: false
    },
    {
      id: 3,
      title: 'Vol 3: Angular 14 Advanced',
      description: 'Learn advanced Angular 14',
      percentComplete: 98,
      favorite: true
    }    
  ];

  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor() {}

  ngOnInit(): void {
  }

  selectCourse(course) {
    this.selectedCourse = {...course};
    this.originalTitle = course.title;
    console.log('+++selectedCourse: ' + JSON.stringify(this.selectedCourse));
  }

  saveCourse(course) {
    console.log('SAVE COURSE', course)
  }

  deleteCourse(courseId) {
    console.log('DELETE COURSE', courseId)
  }

  reset() {
    this.selectCourse({... emptyCourse});
  }

}
