import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    SharedModule,
    HttpClientModule, 
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    
  ]
})
export class CoreModule { }
