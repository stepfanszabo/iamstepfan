import { Component, OnInit } from '@angular/core';
import { Post } from '../helper/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public posts: Post[] = [];

  constructor() {
    this.posts.push({title: "Post 1", date: "2018. 02. 05.", content: "Lorem blablabal", img_path: "", author: "Stefan Szabo", location: "Manchester, United Kingdom"});
    this.posts.push({title: "Post 2", date: "2018. 04. 15.", content: "Lorem blablabal", img_path: "", author: "Stefan Szabo", location: "Milan, Italy"});
    this.posts.push({title: "Post 3", date: "2017. 10. 24.", content: "Lorem blablabal", img_path: "", author: "Stefan Szabo", location: "Rome, Italy"});
   }

  ngOnInit() {
  }

}
