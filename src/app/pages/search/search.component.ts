import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  tracks: any[] = [];

  constructor(private spotify: SpotifyService) { }


  buscar(termino: string) {
    this.spotify.getSong(termino).subscribe((res: any) => {
      this.tracks = res.tracks.items;
      console.log(res.tracks.items);

    })
  }
  addtoqueue(idTarck: string) {
    this.spotify.addTrackToQueue(idTarck).subscribe((res:any)=>{
      console.log(res);
    });
  }


}
