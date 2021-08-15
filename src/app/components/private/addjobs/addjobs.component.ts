import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { JobService } from '../../../services/job.service'
import { AdminService } from '../../../services/admin.service'
import { Job } from '../../../helpers/class'
import { TokenStorageService } from '../../../services/token-storage.service'

@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrls: ['./addjobs.component.css']
})
export class AddjobsComponent implements OnInit {
  jobs = []
  jobModel = new Job('', null)  ;
  msgClass = 'danger'
  msg: '';
  formSubmitted= false;
  constructor(private router: Router, private jobService: JobService, private adminService: AdminService, private tokenStorage: TokenStorageService) { }
  
  ngOnInit(): void {
    if(this.tokenStorage.getToken() === null) {
      this.router.navigate(['/home'])
    }
    this.getJobs();
  }

  getJobs(){
    this.jobService.getJobs().subscribe((res)=> {
      this.jobs = res.data;
    })
  }

  onSubmit() {
    console.log(this.jobModel);
    this.adminService.setJobs(this.jobModel).subscribe(
      data=>{
        console.log(data.msg);
        setTimeout(()=>{
          this.router.navigate(['/dashboard'])
        },2000)
      }, err=>{

      }
    )
  }
}
