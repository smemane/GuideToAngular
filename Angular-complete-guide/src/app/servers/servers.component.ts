import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverNames: Array<string> = [];
  noOfServers: number = 0;
  serverName: string = "";
  constructor() { 
    setTimeout(() => {
    }, 2000);
  }

  onServerCreated = (event: Event): void => {
    this.noOfServers = this.noOfServers + 1; 
    //capture the value from the target input
    this.serverNames.push(this.serverName);
    console.log(this.serverNames);
  }

  ngOnInit() {
  }

}
