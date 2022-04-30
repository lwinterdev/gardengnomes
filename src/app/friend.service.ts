import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names =["Karl"];
  images =["assets/images/gnomes/1.jpg"];
  constructor() { }

  addFriend(name:string,image:string){
    this.names.push(name);
    this.images.push(image);
  }

  removeFriend(name:string,image:string){
   //TODO: remove friend from list 
  }
}
