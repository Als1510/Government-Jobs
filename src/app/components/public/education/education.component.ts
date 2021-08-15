import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { JobService } from '../../../services/job.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education = []
  id
  constructor(private jobService: JobService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getEducation();
  }

  getEducation() {
    this.jobService.getEducation(this.id).subscribe((res)=>{
      res.data.forEach(element => {
        this.education.push(element)
      });
    })
  }

  onSelect(edu) {
    this.router.navigate(['/posts', edu.edu_id])
  }
}
