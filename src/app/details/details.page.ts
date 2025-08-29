import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class DetailsPage implements OnInit {
  item: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('DetailsPage ID:', id);
  if (id) {
    this.api.getMovieById(id).subscribe((data) => {
      console.log('Movie data:', data);
      this.item = data;
    });
  }
}
}