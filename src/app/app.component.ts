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
    { name: 'symbol',  label: 'Symbol' },
    { name: 'last', label: 'Last' },
    { name: 'change', label: 'Change' },
    { name: 'percent_change', label: '% Change' },
    { name: 'volume', label: 'Volume' },
  ];

  alerts = [
    {
      "symbol": "HD",
      "alert": "New 5 Day High of 26.500"
    },
    {
      "symbol": "GSL",
      "alert": "New 5 Day Volume Breakout of 40,009"
    },
    {
      "symbol": "PNY",
      "alert": "New 5 Day Low of 12.450"
    },
    {
      "symbol": "DFT",
      "alert": "New 5 Day High of 25.193"
    }
  ];

  marketData = [
  {
    "symbol": "BAC",
    "last": "29.06",
    "change": "+0.96",
    "percent_change": "+3.42%",
    "volume": "141.88M"
  }, {
    "symbol": "XLF",
    "last": "28.00",
    "change": "+0.42",
    "percent_change": "+3.52%",
    "volume": "96.77M"
  }, {
    "symbol": "SPY",
    "last": "264.14",
    "change": "-0.32",
    "percent_change": "-0.12%",
    "volume": "83.44M"
  }, {
    "symbol": "EEM",
    "last": "45.93",
    "change": "+0.09",
    "percent_change": "+0.20%",
    "volume": "65.72M"
  }, {
    "symbol": "GE",
    "last": "17.95",
    "change": "+0.07",
    "percent_change": "+0.39%",
    "volume": "65.68M"
  }, {
    "symbol": "VXX",
    "last": "32.59",
    "change": "-0.24",
    "percent_change": "-0.73%",
    "volume": "53.98M"
  }, {
    "symbol": "CHX",
    "last": "22.19",
    "change": "-0.14",
    "percent_change": "-2.73%",
    "volume": "46.99M"
  }
];

stories = [
  {
    "headline": "Tech-stock selloff weighs on Asian markets",
    "timestamp": "11:21pm Today",
    "source": "Ese Erheriene"
  }, {
    "headline": "China's service-sector activity picks up",
    "timestamp": "11:01pm Today",
    "source": "MarketWatch.com"
  }, {
    "headline": "Austrailian central bank leaves rates unchanged",
    "timestamp": "10:51pm Today",
    "source": "MarketWatch.com"
  }, {
    "headline": "Tax cuts are halfway priced into the stock market, J.P. Morgan says",
    "timestamp": "6:54pm Today",
    "source": "William Watts"
  }, {
    "headline": "Dow finished at record; S&P 500, Nasdaq flounder as tech stocks swoon",
    "timestamp": "4:54pm Today",
    "source": "Sue Chang"
  }, {
    "headline": "Here's why Venezuela's crytocurrency venture is no panacea",
    "timestamp": "4:46pm Today",
    "source": "Anneken Tappe"
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
