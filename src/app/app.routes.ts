import { FirstComponent } from "./home/components/first/first.component";
import { SecondComponent } from "./home/components/second/second.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { title: "First Component Page", path: "first-component", component: FirstComponent },
  { title: "Second Component Page", path: "second-component", component: SecondComponent },
];
