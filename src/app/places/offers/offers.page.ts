import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { OffersService } from './offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];

  constructor(private offersService: OffersService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.offers = this.offersService.getOffers();
  }

}
