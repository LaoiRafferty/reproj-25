import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';  

@Component({
  selector: 'app-tab2',
  standalone: true,
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule], 
})
export class Tab2Page {
  tvShows: any[] = [];

  constructor(private api: ApiService) {
    this.api.getTvShows().subscribe((data) => {
      this.tvShows = data.map((item: any) => item.show); 
    });
  }
}
