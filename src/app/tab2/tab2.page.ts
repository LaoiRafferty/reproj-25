import { Component, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  standalone: true,
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class Tab2Page implements OnInit {
  shows = signal<any[]>([]);

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getTvShows().subscribe((data) => {
      // TVMaze "search/shows" returns { show: {...} }, so we map to just the show
      this.shows.set(data.map((d: any) => d.show).slice(0, 20));
    });
  }
}
