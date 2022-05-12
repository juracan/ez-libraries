import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ez-h2',
  template: `
    <h2>
      <ng-content></ng-content>
    </h2>
  `,
  styles: [],
})
export class NgxEzH2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
