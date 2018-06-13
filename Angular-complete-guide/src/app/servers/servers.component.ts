import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverName: string = "";
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onUserInput = (event: Event): void => {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log("Added a new server " + this.serverName);
  }
  onServerCreated = (event: Event): void => {
    this.allowNewServer = false; 
    console.log("New server was created by target " + (<HTMLButtonElement>event.target));
  }

  ngOnInit() {
  }

}
