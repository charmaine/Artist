import {Component} from 'angular2/core';

interface Artist{
  name:string;
  shortname:string;
  reknown:string;
  bio:string;
}

/*decorator*/
@Component({
  /*create own html tags and define what those tags can do through javascript*/
  selector: "artist-details",
  /*selector = name of html tag we are creating*/
  templateUrl: 'partials/artistdetails.html',
  inputs: ['artist']
})
/*DON'T PUT SEMI COLON at end of decorator*/

export class ArtistDetailsComponent {
}
