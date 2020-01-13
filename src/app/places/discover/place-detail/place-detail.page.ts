import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navController: NavController,
    private modalController: ModalController,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navController.navigateBack('places/tabs/offers');
      }

      this.place = this.placesService.getById(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    // this.router.navigate(['/places/discover']);
    // this.navController.pop();
    // this.navController.navigateBack(['/places/tabs/discover']);

    this.modalController.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place }
    }).then(element => {
      element.present();
      return element.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('Booked');
      }
    });
  }

}
