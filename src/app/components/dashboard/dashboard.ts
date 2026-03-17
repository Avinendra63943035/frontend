import { Component } from '@angular/core';
import { FindDonor } from '../find-donor/find-donor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  router!: FindDonor;
gotofinddonor() {
this.router.navigate(['/find-donor'])
}

  user = {
    name: 'kapil sharma',
    age: 21,
    bloodGroup: 'O+',
    city: 'Bareilly'
  };

  lastDonationDate = 'April 15, 2024';
  eligibleDays = 60;

  countdown = '51 Days, 12 Hours, 48 Minutes';

  progress = 80;

}