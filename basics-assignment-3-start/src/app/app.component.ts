import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph: boolean = false;
  buttonClicks: Array<Date> = [];
  toggleParagraph = (): void => {
    this.showParagraph = !this.showParagraph;
    this.buttonClicks.push(new Date());
  }
  getColor = (index) => {
    console.log(index);
    return index > 4 ? 'blue': 'white';
  }
}
