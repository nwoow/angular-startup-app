import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooteComponent } from './foote/foote.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TestComponent } from './test/test.component';
import {ChartService} from './chart.service';
import { HttpClientModule } from '@angular/common/http';
import {appRoutes} from './route-definitions';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooteComponent,
    MainpageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    
    ChartService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
