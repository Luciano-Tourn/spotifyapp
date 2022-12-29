import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  busqueda: any[] = [];
  nuevasCanciones: any[] = [];
  
  constructor(private spotify: SpotifyService) {

    this.spotify.getNewReleases().subscribe((res:any)=>{
    
      this.nuevasCanciones= res;
      console.log(res);

    })
    //this.spotify.getSong().subscribe(res=>{console.log(res)
  }
  ngOnInit() {

  }

}
