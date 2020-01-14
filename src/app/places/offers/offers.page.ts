import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { OffersService } from './offers.service';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];

  constructor(private offersService: OffersService, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.offers = this.offersService.getOffers();
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    // slidingItem.close();
    // this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
    console.log(offerId);
  }

}
