import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username : String

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
      this.userService.currentUsername.subscribe(username => {
      this.username = username
    })
  }

  logout(){
    localStorage.clear();
    this.userService.setUsername(localStorage.getItem("SELLERID"));
    this.router.navigate(['/signin']);
  }

}
