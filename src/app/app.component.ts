import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  isUserLoggedIn = true;

  constructor(
    //private authenticationService: DDAuthenticationService,
  ) {
   /*this.authenticationService.authState().subscribe(
      (message: DDAuthenticationMessage) => {
        this.isUserLoggedIn = authenticationService.isUserLoggedIn();
      }
    );*/
  }

  ngOnInit() {

  }
}

