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
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);

  }

  ngOnInit() {
  }

}
