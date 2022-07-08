import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery1',
  templateUrl: './gallery1.component.html',
  styleUrls: ['./gallery1.component.css']
})
export class Gallery1Component implements OnInit {

  constructor(private api:ApiService) {
    api.gallery1().subscribe(
      (response)=>{
        this .data=response
      })
   }

  ngOnInit(): void {
  }
  data:any=[]
}