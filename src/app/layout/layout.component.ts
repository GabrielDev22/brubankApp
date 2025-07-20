import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ContentComponent } from "./content/content.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, ContentComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
