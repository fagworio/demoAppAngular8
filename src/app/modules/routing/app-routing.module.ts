import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from '../../components/todo/todo.component';
import { PostsComponent } from '../../components/posts/posts.component';
import { AlbunsComponent } from '../../components/albuns/albuns.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
   { path: 'todo', component: TodoComponent },
   { path: 'posts', component: PostsComponent },
   { path: 'albuns', component: AlbunsComponent }
  ];
    
  @NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [TodoComponent, PostsComponent, AlbunsComponent];
  