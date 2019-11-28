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
    'Authorization': 'Bearer BQBxsHo1Wd39UbIunLzrT7u74L-CUyA-gcm2LncqJo1YWsA_Nrv_WAOtrWvYKnhT9GNlH_92uARmFdsTQKs'
  });
  return this.http.get(url, { headers });
}


getNewReleases(){  
//Se realiza la peticion -----------------------------
  return this.getQuery('browse/new-releases')  
             .pipe( map( data => data['albums'].items));    
}

getArtista(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`) 
             .pipe( map( data => data['artists'].items ));
}

}
