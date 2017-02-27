import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { PerroService} from './services/perro-service';
import PerroCardComponent from './components/perro-card/perro-card';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PerroListComponent } from './components/perro-list/perro-list.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerroListComponent,
    PerroCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing
  ],
  providers: [PerroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
