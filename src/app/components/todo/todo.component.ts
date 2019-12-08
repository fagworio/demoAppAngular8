import {Component, OnInit, ViewChild} from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Todos } from 'src/app/models/placeholder.model';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public errorMsg: any;
  displayedColumns: string[] = [ 'title'];

  dataSource = new MatTableDataSource<Todos>();
  completed = new MatTableDataSource<Todos>();
  incompleted = new MatTableDataSource<Todos>();

  constructor(private crudService:CrudService) { 
    this.crudService.getTodos().subscribe((data) =>{
      this.dataSource.data = data;
    }, error => {
      this.errorMsg = error;
      console.error('Error: ', this.errorMsg);
    })
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.completed.paginator = this.paginator;
    this.incompleted.paginator = this.paginator;
    this.todoCompleted();
    this.todoIncompleted();
  }

todoCompleted() {
  this.crudService.getTodos().subscribe((data) =>{
    let results = data;
    this.completed.data = results.filter(item => {return item.completed === true});
  }, error => {
    this.errorMsg = error;
    console.error('Error: ', this.errorMsg);
  })
}

todoIncompleted() {
  this.crudService.getTodos().subscribe((data) =>{
    let results = data;
    this.incompleted.data = results.filter(item => {return item.completed === false});
  }, error => {
    this.errorMsg = error;
    console.error('Error: ', this.errorMsg);
  })
}

  
}

