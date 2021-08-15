import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { JobService } from '../../../services/job.service'
import { AdminService } from '../../../services/admin.service'
import { Post } from '../../../helpers/class'
import { TokenStorageService } from '../../../services/token-storage.service'

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {
  postModel = new Post(null, '', '', null);
  jobs = []
  education = []
  job_id
  @ViewChild('postForm', {static: true})ngForm: NgForm;

  constructor(private router: Router, private jobService: JobService, private adminService: AdminService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken() === null) {
      this.router.navigate(['/home'])
    }
    setTimeout(()=>{
      this.ngForm.control.get('job_id').valueChanges.subscribe(value => {
        this.jobService.getEducation(value).subscribe(
          (res)=>{
            this.education = res.data;
          }
        )
      })
    })
    this.getJobs();
  }

  getJobs(){
    this.jobService.getJobs().subscribe(
      (res)=> {
        this.jobs = res.data
      }
    )
  }

  onSubmit() {
    this.adminService.setPosts(this.postModel).subscribe(
      data=>{
        console.log(data.msg)
        setTimeout(()=>{
          // this.router.navigate(['/dashboard'])
        },2000)
      }, err=>{
        console.log(err.msg)
      }
    )
  }
}
