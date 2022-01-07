import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MaterialExampleModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { TripodComponent } from './components/tripod/tripod.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { CameraComponent } from './components/camera/camera.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CanonComponent } from './components/canon/canon.component';
import { NikonComponent } from './components/nikon/nikon.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TripodComponent,
    CameraComponent,
    CanonComponent,
    NikonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
