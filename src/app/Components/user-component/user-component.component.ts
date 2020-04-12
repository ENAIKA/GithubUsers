import { Component, OnInit } from '@angular/core';
import{UserRequestService} from '../../services/user-request.service';
import{User} from '../../classes/user';
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
user:User;
  constructor(private userrequest:UserRequestService) { }

  ngOnInit(){
   console.log( this.userrequest.userRequest())
   
  }

}
