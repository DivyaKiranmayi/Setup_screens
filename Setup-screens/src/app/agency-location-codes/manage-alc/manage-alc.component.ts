import { Component, OnInit } from '@angular/core';
import { Translations } from 'src/assets/strings/translations';

@Component({
  selector: 'app-manage-alc',
  templateUrl: './manage-alc.component.html',
  styleUrls: ['./manage-alc.component.css']
})
export class ManageAlcComponent implements OnInit {
  constructor(private translations: Translations) {
    console.log(this.translations['Header.AgencyLocationCode'])
   }

  ngOnInit() {
  }

}
