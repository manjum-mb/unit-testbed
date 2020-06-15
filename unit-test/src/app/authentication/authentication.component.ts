import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../shared/post.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  message = 'I love auth0';
  results: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }
  
  getPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.results = data;
      console.log("vcalue -->" + this.results);
    });
  }
}
