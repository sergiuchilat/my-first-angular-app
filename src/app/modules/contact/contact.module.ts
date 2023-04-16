import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MatCard, MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
  
    MainComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ContactModule { }
