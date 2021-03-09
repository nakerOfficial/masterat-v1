import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'original-logo',
  templateUrl: './original-logo.component.html',
  styleUrls: ['./original-logo.component.scss']
})
export class OriginalLogoComponent implements OnInit {
  src_image = environment.host + "/assets/logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
