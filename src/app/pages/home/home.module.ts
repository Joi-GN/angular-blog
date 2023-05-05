import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
