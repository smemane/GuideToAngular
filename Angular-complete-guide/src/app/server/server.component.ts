import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class serverComponent {
    serverId: number = 11;
    status: string = "offline";
    toggleStatus = (): string => {
        switch(this.status) {
            case "offline":
                this.status = "online";
            break;
            case "online":
                this.status = "offline"
            break;
        }
        return this.status;
    };
}
