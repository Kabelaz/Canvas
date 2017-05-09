// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getNames } from '../../shared/ngrx/index';

@Component({
  moduleId: module.id,
  selector: 'cvs-canvas',
  templateUrl: 'canvas.component.tpl.html',
})
export class CanvasComponent implements OnInit {

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  ngOnInit() {
    console.log('canvas');
  }
}
