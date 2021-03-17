import { Component, OnInit } from '@angular/core';

declare var require;

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  randomWords;
  items = [];

  constructor() { }

  ngOnInit(): void {
    this.randomWords = require('random-words');
    this.generateContent(30);
  }


  generateContent(count = 10) {
    this.items = [];
    [...Array(count).keys()].forEach((a, i) => this.items.push({
      description: this.sentenceOfWords(20),
      down: this.sentenceOfWords(1)
    }))
  }

  sentenceOfWords = (count = 1) => !this.randomWords ? 'error' : this.randomWords(count).join(' ');


}
