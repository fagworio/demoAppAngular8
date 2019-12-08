import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs'
import { Images, Posts, Todos } from '../models/placeholder.model';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  private albuns_url: string = `https://jsonplaceholder.typicode.com/photos`;
  private posts_url: string = `https://jsonplaceholder.typicode.com/posts`;
  private todos_url: string = `https://jsonplaceholder.typicode.com/todos`;

  constructor(private http: HttpClient) { }
    public getPhotos():Observable<Images> {
      return this.http.get<Images>(this.albuns_url)
      .pipe(catchError(this.errorHandler));
    }

    public getPosts():Observable<Posts>{
      return this.http.get<Posts>(this.posts_url)
      .pipe(catchError(this.errorHandler));
    }

    public getTodos():Observable<Todos[]>{
      return this.http.get<Todos[]>(this.todos_url)
      .pipe(catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse) {
      return throwError(error.message || "Server Error");
    }
}
