import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TripodComponent } from './components/tripod/tripod.component';
import { AboutComponent } from './components/about/about.component';
import { CameraComponent } from './components/camera/camera.component';
import { CanonComponent } from './components/canon/canon.component';
import { NikonComponent } from './components/nikon/nikon.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'tripod', component: TripodComponent },
  { path: 'canon', component: CanonComponent },
  { path: 'nikon', component: NikonComponent },
  { path: 'camera/:id', component: CameraComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
