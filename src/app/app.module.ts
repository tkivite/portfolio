import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
//import { NewsApiService } from "./news-api.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatRippleModule,
  MatSlideToggleModule
} from "@angular/material";
import { MatGridListResponsiveModule } from "../lib/mat-grid-list-responsive/mat-grid-list-responsive.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatGridListResponsiveModule
  ],
  //providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
