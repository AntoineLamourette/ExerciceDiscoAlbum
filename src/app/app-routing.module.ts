import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/homepage"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  ngOnInit(): void {
    
  }
}
