import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  onBook() {
    this.modalController.dismiss({ message: 'Dummy message' }, 'confirm');
  }

  onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }

}
