import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    library: FaIconLibrary
  ) {
    library.addIcons(
      faFacebookF, 
      faInstagram, 
      faTwitter, 
      faGooglePlus 
    )
   }

  ngOnInit(): void {
  }

}
function faFacebook(faFacebook: any) {
  throw new Error('Function not implemented.');
}

