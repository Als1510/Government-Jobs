import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JobService } from '../../../services/job.service'
import { JobAlert } from '../../../helpers/class'

@Component({
  selector: 'app-jobalert',
  templateUrl: './jobalert.component.html',
  styleUrls: ['./jobalert.component.css']
})
export class JobalertComponent implements OnInit {
  jobs = []
  alert = new JobAlert(null, null)
  msg:''
  msgClass = 'danger';
  constructor(private jobService: JobService, private router: Router) { }
  ngOnInit(): void {
    this.getJobs()
  }

  getJobs() {
    this.jobService.getJobs().subscribe((res)=>{
      res.data.forEach(element => {
        this.jobs.push(element)
      });
    })
  }

  onSubmit() {
    this.jobService.jobAlert(this.alert).subscribe(data=>{
      this.msg = data.msg;
      this.msgClass = 'success'
    },
    err=> {
      this.msg = err.error.msg;
    })
    this.showAlert();
  }
  showAlert() {
    setTimeout(()=>{
        this.router.navigate(['/home'])
      }, 2000);
    this.msg=''
  }
}
