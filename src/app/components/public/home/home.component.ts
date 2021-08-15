import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { JobService } from '../../../services/job.service'
import { TokenStorageService } from '../../../services/token-storage.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs = []
  constructor(private jobService: JobService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()!=null) {
      this.router.navigate(['/dashboard'])
    }
    this.getJobs()
  }
  
  getJobs() {
    this.jobService.getJobs().subscribe((res)=>{
      this.jobs = res.data
      })
  }

  onSelect(job) {
    this.router.navigate(['/education', job.job_id])
  }
}
