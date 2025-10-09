import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "first-component", component: FirstComponent },
  { path: "second-component", component: SecondComponent },
];
