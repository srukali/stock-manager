import {Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {


  constructor(public media: TdMediaService,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {

              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
              this._domSanitizer.bypassSecurityTrustResourceUrl
          ('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));

  }
}
