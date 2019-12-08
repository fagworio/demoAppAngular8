import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Images } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {
  public images: Images;
  public errorMsg: any;
  
  constructor(private crudService: CrudService) { 
    this.getAlbuns();
  }

  ngOnInit() {
  }

  getAlbuns() {
    this.crudService.getPhotos().subscribe((data: Images) => {
      this.images = data;
    }, error => {
      this.errorMsg = error;
      console.error('Error: ', error)
    });
  }

}
