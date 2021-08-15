import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { Description } from '../../../helpers/class'
import { AdminService } from '../../../services/admin.service'
import { JobService } from '../../../services/job.service'
import { TokenStorageService } from '../../../services/token-storage.service'

@Component({
  selector: 'app-adddescription',
  templateUrl: './adddescription.component.html',
  styleUrls: ['./adddescription.component.css']
})
export class AdddescriptionComponent implements OnInit {
  data = new Description(null, null, null,'','',null,'','','','','',null)
  jobs = []
  education = []
  posts = []
  @ViewChild('description', {static:true})ngForm:NgForm;

  constructor(private router: Router, private jobService: JobService, private adminService: AdminService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken() === null) {
      this.router.navigate(['/home'])
    }
    setTimeout(()=>{
      this.ngForm.control.get('job_id').valueChanges.subscribe(value => {
        this.jobService.getEducation(value).subscribe((res)=>{
          this.education = []
          res.data.forEach(element => {
            this.education.push(element)
          });
        })
      })
      this.ngForm.control.get('edu_id').valueChanges.subscribe(value => {
        this.jobService.getPosts(value).subscribe(res => {
          this.posts = []
          res.data.forEach(element => {
            this.posts.push(element)
          });
        })
      })
    })
    this.getJobs()
  }

  getJobs() {
    this.jobService.getJobs().subscribe((res)=>{
      res.data.forEach(element => {
        this.jobs.push(element)
      });
    })
  }

  // url: any
  // fileName: any
  onSelectFile(event) {
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
      this.data.fileName = event.target.files[0].name;
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.data.url = (event.target.result);
      }
    }
  }

  onSubmit() {
    this.adminService.setDescription(this.data).subscribe(data=>{
      console.log(data.msg);
      // setTimeout(()=>{
        // this.router.navigate(['/dashboard'])
      // },2000)
    }, err=>{
      console.log(err.msg);
    })
  }
}
