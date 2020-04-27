import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core-module/app.component';
import { ToolBarComponent } from './block-module/tool-bar/tool-bar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ContextMenuModule } from 'primeng/contextmenu';
import { HelpDeskFeatureModule } from './feature-module/feature.module';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import {BreadcrumbModule} from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    InputTextareaModule,
    FileUploadModule,
    ToastModule,
    CalendarModule,
    SidebarModule,
    TableModule,
    CodeHighlighterModule,
    ContextMenuModule,
    HelpDeskFeatureModule,
    DialogModule,
    BrowserAnimationsModule,
    CardModule,
    AccordionModule,
    FormsModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
