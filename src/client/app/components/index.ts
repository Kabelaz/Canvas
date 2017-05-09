import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {CanvasComponent} from "./canvas/canvas.component";

export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent,
  CanvasComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
