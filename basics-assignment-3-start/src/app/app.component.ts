import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph: boolean = false;
  buttonClicks: Array<number> = [];
  count: number = 0;
  toggleParagraph = (): void => {
    this.showParagraph = !this.showParagraph;
    this.count +=1;
    this.buttonClicks.push(this.count);
  }
  getColor = (index) => {
    console.log(index);
    return index > 5 ? 'blue': 'white';
  }
}
