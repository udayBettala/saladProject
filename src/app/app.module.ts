import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaladFormComponent } from './components/salad-form/salad-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'buildSalad', component: SaladFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SaladFormComponent
  ],
  imports: [
    BrowserModule, FormsModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
