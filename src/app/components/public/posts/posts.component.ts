import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { JobService } from '../../../services/job.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = []
  id
  constructor(private jobService: JobService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getPosts();
  }

  getPosts() {
    this.jobService.getPosts(this.id).subscribe(res=>{
      res.data.forEach(element => {
        this.posts.push(element);
      });
    })
  }

  onSelect(post) {
    this.router.navigate(['/description', post.p_id])
  }
}
