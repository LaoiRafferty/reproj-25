import { Component, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class Tab1Page implements OnInit {
  movies = signal<any[]>([]);

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMovies().subscribe(data => this.movies.set(data.slice(0, 20)));
  }
}
