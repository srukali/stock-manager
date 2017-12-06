import {Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { ITdDataTableColumn, TdMediaService } from '@covalent/core';

const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Stock Wizard';

  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'first_name',  label: 'First name', width: 150 },
    { name: 'last_name', label: 'Last name', width: { min: 150, max: 250 }},
    { name: 'gender', label: 'Gender'},
    { name: 'email', label: 'Email', width: 250},
    { name: 'img', label: '', width: 100},
  ];

  alerts = [
    {
      symbol: "HD",
      alert: "New 5 Day High of 26.500"
    },
    {
      symbol: "GSL",
      alert: "New 5 Day Volume Breakout of 40,009"
    },
    {
      symbol: "PNY",
      alert: "New 5 Day Low of 12.450"
    },
    {
      symbol: "DFT",
      alert: "New 5 Day High of 25.193"
    }
  ];

  basicData = [
  {
    "balance": 7454.6,
    "email": "sclutterham0@123-reg.co.uk",
    "first_name": "Sully",
    "gender": "Male",
    "img": "https://robohash.org/similiquemodiautem.bmp?size=50x50&set=set1",
    "ip_address": "158.0.165.138",
    "last_name": "Clutterham"
  },
  {
    "balance": 3561.4,
    "email": "mevason1@usatoday.com",
    "first_name": "Mateo",
    "gender": "Male",
    "img": "https://robohash.org/molestiaeadquia.bmp?size=50x50&set=set1",
    "ip_address": "68.147.207.137",
    "last_name": "Evason"
  },
  {
    "balance": 4456.3,
    "email": "lgardener2@wordpress.org",
    "first_name": "Lira",
    "gender": "Female",
    "img": "https://robohash.org/laboredolorumvelit.jpg?size=50x50&set=set1",
    "ip_address": "96.85.6.31",
    "last_name": "Gardener"
  },
  {
    "balance": 5938,
    "email": "edunckley3@instagram.com",
    "first_name": "Edvard",
    "gender": "Male",
    "img": "https://robohash.org/ullamquaedeleniti.png?size=50x50&set=set1",
    "ip_address": "233.189.117.211",
    "last_name": "Dunckley"
  },
  {
    "balance": 4241.6,
    "email": "gsouza4@squidoo.com",
    "first_name": "Gwynne",
    "gender": "Female",
    "img": "https://robohash.org/possimusrepellendusodio.png?size=50x50&set=set1",
    "ip_address": "164.226.80.40",
    "last_name": "Souza"
  },
  {
    "balance": 6558,
    "email": "sfurmedge5@furl.net",
    "first_name": "Sena",
    "gender": "Female",
    "img": "https://robohash.org/iustoillumsit.png?size=50x50&set=set1",
    "ip_address": "192.214.177.38",
    "last_name": "Furmedge"
  },
  {
    "balance": 3159.2,
    "email": "cdykes6@china.com.cn",
    "first_name": "Christian",
    "gender": "Male",
    "img": "https://robohash.org/exveniama.jpg?size=50x50&set=set1",
    "ip_address": "147.35.25.192",
    "last_name": "Dykes"
  },
  {
    "balance": 1471,
    "email": "sklagge7@dell.com",
    "first_name": "Sada",
    "gender": "Female",
    "img": "https://robohash.org/exercitationemtotamenim.jpg?size=50x50&set=set1",
    "ip_address": "143.193.248.153",
    "last_name": "Klagge"
  },
  {
    "balance": 9969.7,
    "email": "glewerenz8@europa.eu",
    "first_name": "Genia",
    "gender": "Female",
    "img": "https://robohash.org/enimdoloremqueut.jpg?size=50x50&set=set1",
    "ip_address": "104.0.250.224",
    "last_name": "Lewerenz"
  },
  {
    "balance": 7253.5,
    "email": "ddemarchi9@taobao.com",
    "first_name": "Daloris",
    "gender": "Female",
    "img": "https://robohash.org/uteaquearchitecto.jpg?size=50x50&set=set1",
    "ip_address": "124.166.67.100",
    "last_name": "De Marchi"
  }
];

  constructor(public media: TdMediaService,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {

              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
              this._domSanitizer.bypassSecurityTrustResourceUrl
          ('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));

  }
}
