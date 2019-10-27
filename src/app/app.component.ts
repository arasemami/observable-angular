import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-observable';
  test;
  public myData = [];

  constructor(private appService: AppService) { }

  observable = Observable.create((observer) => {
    observer.next(
      this.appService.getData()
        .subscribe(data => this.myData = data)
    );

    // observer.error('its error processing . . .');

    setTimeout(() => {
      observer.next(console.log(this.myData));
    }, 2000);

    // setTimeout(() => {
    //   observer.complete();
    // }, 5000);

  });

  ngOnInit() {
    this.observable.subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('process is finish!')
    );
    console.log(this.myData);



  }
}
