import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-observable';
  observable = Observable.create((observer) => {
    observer.next('start processing . . .');

    observer.error('its error processing . . .');

    setTimeout(() => {
      observer.next('still processing...');
    }, 2000);

    setTimeout(() => {
      observer.complete();
    }, 5000);

  });

  ngOnInit() {
    this.observable.subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('process is finish!')

    );
  }
}
