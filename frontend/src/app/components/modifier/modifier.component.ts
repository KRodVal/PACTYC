import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss'],
})
export class ModifierComponent implements OnInit {
  @Input() id:number;
  @Input() model:string;
  @Input() brand:string;

  constructor() { }

  ngOnInit() {}

}
