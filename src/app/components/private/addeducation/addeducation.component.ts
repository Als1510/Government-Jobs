import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { JobService } from '../../../services/job.service'
import { AdminService } from '../../../services/admin.service'
import { Education } from '../../../helpers/class'
import { TokenStorageService } from '../../../services/token-storage.service'

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styleUrls: ['./addeducation.component.css']
})
export class AddeducationComponent implements OnInit {
  jobs = []
  educationModel = new Education(null,'',null);
  constructor(private jobService:JobService, private router: Router, private adminService: AdminService, private tokenStorage: TokenStorageService) { }
  
  ngOnInit(): void {
    if(this.tokenStorage.getToken() === null) {
      this.router.navigate(['/home'])
    }
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs().subscribe((res)=>{
      this.jobs = res.data;
    })
  }

  onSubmit() {
    this.adminService.setEducation(this.educationModel).subscribe(
      data=>{
        console.log(data.msg);
        setTimeout(()=>{
          this.router.navigate(['/dashboard'])
        },2000)
      }, err=>{
        console.log(err.msg);
      }
    )
  }
}