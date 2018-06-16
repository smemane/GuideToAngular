import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class serverComponent {
    serverId: number = 11;
    status: string = "offline";
    constructor() {
        this.status = Math.random() > 0.5 ? "online": "offline";
    }
    getColor = (): string => {
        return this.status === "offline" ? "red" : "green";
    };
}
