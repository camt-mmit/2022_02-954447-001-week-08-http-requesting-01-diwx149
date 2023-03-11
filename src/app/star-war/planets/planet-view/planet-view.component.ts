import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Planet } from '../../models';

@Component({
  selector: 'star-war-planet-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-view.component.html',
  styleUrls: ['./planet-view.component.scss'],
})
export class PlanetViewComponent implements OnInit {
  @Input() data!: Planet;
  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Probperty 'data' is required!`);
    }
  }
}
