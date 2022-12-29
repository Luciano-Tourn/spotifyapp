import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Expression } from '@angular/compiler';

const URL = environment.spotyURL;

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }


  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer  BQAjhugTNyMkxkFVt85zTvKiTgXHfARkVtzKy8iav-lFEsHO0BX9Znf9T_yFp9tzoBePC57Axg0YJaqAl_nFHBpemp-C9-NXwW3AXpoylAC0C0yLSjk'

    });
    return this.http.get(`${URL}/${query}`, {headers});
  }

  postQuery(query: string){
    console.log('entro en post');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer  BQAjhugTNyMkxkFVt85zTvKiTgXHfARkVtzKy8iav-lFEsHO0BX9Znf9T_yFp9tzoBePC57Axg0YJaqAl_nFHBpemp-C9-NXwW3AXpoylAC0C0yLSjk'

    });
    return this.http.post(`${URL}/playlists/2VMWyarl0pMgVOf3B48TDM/tracks?uris=${query}`, {headers}); 
      
  

  }
 

  getSong(termino: string) {
    return this.getQuery(`search?q=${termino}&type=track`);
  }


  getNewReleases() {
    
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((res:any)=>{
        return res.albums.items;
      }))
  }

  addTrackToQueue(idTarck: string){

    return this.postQuery(idTarck);
  //return this.postQuery(idTarck);
   
  }
}
