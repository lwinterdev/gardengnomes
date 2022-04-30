import { Component, OnInit, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {
  @Input() name:string="";
  @Input() text:string = "";
  @Input() img:string="";
  @Input() canfollow:boolean=true;
 
  constructor(public fs:FriendService) { }

  ngOnInit(): void {
  }

}
