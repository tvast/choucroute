import { NgModule }             from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { FooComponent } from './foo.component';
import { BioComponent } from './bio.component';
import { ContactComponent } from './contact.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { OeuvreComponent } from './oeuvre-detail.component';
import { FormComponent } from './form.component'; 



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'oeuvre',  component: FooComponent },
  { path: 'bio',     component: BioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'secretpath', component: AdminComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'liste', component: OeuvreComponent  },
  { path: 'form', component: FormComponent  },

  // { path: 'bear/:id', component: BearDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
