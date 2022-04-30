import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gnome-card',
  templateUrl: './gnome-card.component.html',
  styleUrls: ['./gnome-card.component.scss']
})
export class GnomeCardComponent implements OnInit {
  @Input() text:string = "";
  @Input() img:string="";
   
  constructor() { }

  ngOnInit(): void {
  }

}
