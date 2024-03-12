import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageClipComponent } from './page-clip/page-clip.component';
import { PageEllipsisComponent } from './page-ellipsis/page-ellipsis.component';
import { TextOverflowComponent } from './text-overflow/text-overflow.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';

@NgModule({
  declarations: [
    AppComponent,
    PageClipComponent,
    PageEllipsisComponent,
    TextOverflowComponent,
    AleatorioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
