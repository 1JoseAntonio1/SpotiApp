import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators' //Trasforma informacion bruta y la regulamos como queremos

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Listo');
  }


getQuery( query:string ){
  const url = `https://api.spotify.com/v1/${ query }`;

  //Autoriaziocion de la peticion (Hay que usar la palabra headers)
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQACzyuCzKMrSZoFDibLgWQo611S4Khn0ae4oK-YYM3fy0BXPgBzANiw2LQsl_jbbTvuYHroyz2ZPWFgoQk'
  });
  return this.http.get(url, { headers });
}

getNewReleases(){
  return this.getQuery('browse/new-releases')
             .pipe( map( data => data['albums'].items));
}

getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
             .pipe( map( data => data['artists'].items ));
}

getArtista(id: string) {
  return this.getQuery(`artists/${ id }`);
}

getTopTracks(id: string) {
  return this.getQuery(`artists/${ id }/top-tracks`);
}


}
