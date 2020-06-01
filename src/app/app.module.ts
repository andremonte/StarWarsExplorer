import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { HeaderComponent } from './header/header.component';
>>>>>>> 0072b9107ce997671c8acc305e659bb0807aa15d
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { StarwarsService } from './service/starwars.service';



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    HeaderComponent,
>>>>>>> 0072b9107ce997671c8acc305e659bb0807aa15d
    ContentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,

  ],
  providers: [StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
