import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IcseComponent } from './icse/icse.component';
import { CbseComponent } from './cbse/cbse.component';
import { BishopComponent } from './bishop/bishop.component';
import { MallyaComponent } from './mallya/mallya.component';
import { JosephComponent } from './joseph/joseph.component';
import { NpsiComponent } from './npsi/npsi.component';
import { NpsrComponent } from './npsr/npsr.component';
import { DpsComponent } from './dps/dps.component';
const appRoutes:Routes=[
   {path:'',component:HomeComponent},
  {path:'icse',component:IcseComponent},
  {path:'cbse',component:CbseComponent},
  {path:'bishop',component:BishopComponent},
  {path:'mallya',component:MallyaComponent},
  {path:'joseph',component:JosephComponent},
  {path:'npsi',component:NpsiComponent},
  {path:'npsr',component:NpsrComponent},
  {path:'dps',component:DpsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IcseComponent,
    CbseComponent,
    BishopComponent,
    MallyaComponent,
    JosephComponent,
    NpsiComponent,
    NpsrComponent,
    DpsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
