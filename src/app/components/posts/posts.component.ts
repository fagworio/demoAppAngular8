import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Posts } from 'src/app/models/placeholder.model';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: Posts;
  public errorMsg: any;
  
  constructor(private crudService: CrudService) {
    this.getPosts();
   }

  ngOnInit() {
  }

  getPosts() {
    this.crudService.getPosts().subscribe((data: Posts) => {
      this.posts = data;
    }, error => {
      this.errorMsg = error;
      console.error('Error: ', this.errorMsg)
    });
  }

}
