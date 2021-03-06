import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { Oeuvre }        from './oeuvre';
import { OeuvreService } from './oeuvre.service';

import { AppComponent }  from './app.component';
import { FooComponent } from './foo.component';
import { BioComponent } from './bio.component';
import { ContactComponent } from './contact.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component'; 
import { OeuvreComponent } from './oeuvre-detail.component';
import { FormComponent } from './form.component'; 





import { MasonryModule } from 'angular2-masonry';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule,
                  MasonryModule,
                  HttpModule,
                  FormsModule
   ],
  declarations: [ AppComponent,
                  FooComponent,
                  ContactComponent,
                  BioComponent,
                  AdminComponent,
                  LoginComponent,
                  HomeComponent,
                  OeuvreComponent,
                  FormComponent

                ],
  providers: [ OeuvreService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
