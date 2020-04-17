import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './Components/user-component/user-component.component';
import { RepoComponentComponent } from './Components/repo-component/repo-component.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { DateCountPipe } from './date-count.pipe';
import { BgHighlightDirective } from './bg-highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    RepoComponentComponent,
    NotFoundComponent,
    NavBarComponent,
    UserFormComponent,
    DateCountPipe,
    BgHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
