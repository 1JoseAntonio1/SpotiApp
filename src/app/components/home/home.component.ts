import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Modulo para realizar peticiones (traen informacion)
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  //paises:any[] = [];      --> Hacer peticiones
  //constructor( private http: HttpClient) { 
    //console.log('Constructor del Home hecho');
    //this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //.subscribe( (resp: any) => {
      //this.paises = resp;
    //})
  //}

  nuevasCanciones: any[] = [];
  loading: Boolean;

  constructor(private spotify: SpotifyService){

    this.loading = true;
    
    setTimeout(() => {
      this.spotify.getNewReleases()
        .subscribe( (data:any) => {
          //console.log(data);
          this.nuevasCanciones = data;
          this.loading = false;
        });
    }, 1500); 


  }

  
}
