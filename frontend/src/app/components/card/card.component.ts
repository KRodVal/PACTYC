import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() id:number;
  @Input() model:string;
  @Input() brand:string;
  constructor() { }

  ngOnInit() {}

}
