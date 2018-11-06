import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1HeadComponent } from './page1-head/page1-head.component';
import { Page1ContentComponent } from './page1-content/page1-content.component';
import { Page1FootComponent } from './page1-foot/page1-foot.component';
import { Page2firstComponent } from './page2first/page2first.component';
import { Page2secondComponent } from './page2second/page2second.component';
import { Page2thirdComponent } from './page2third/page2third.component';
import { Page2fourthComponent } from './page2fourth/page2fourth.component';
import { Page2fifthComponent } from './page2fifth/page2fifth.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1HeadComponent,
    Page1ContentComponent,
    Page1FootComponent,
    Page2firstComponent,
    Page2secondComponent,
    Page2thirdComponent,
    Page2fourthComponent,
    Page2fifthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
