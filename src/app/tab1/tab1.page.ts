import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class Tab1Page {
  movies: any[] = [];

  constructor(private api: ApiService) {
    this.api.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}