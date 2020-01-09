import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  public artista: any;
  public loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
      console.log(params);
    });
  }

  ngOnInit() {}

  getArtista(id: string) {
    this.loadingArtist = true;

    this.spotify.getArtista(id).subscribe( data => {

    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe();
  }

}
