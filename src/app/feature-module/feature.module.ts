import { NgModule } from '@angular/core';
import { HelpDeskListViewComponent } from './list-view/list-view.component';
import { TableModule } from 'primeng/table';
import { FormComponent } from './form/form.component';
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormTwoComponent } from './form-two/form-two.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';


@NgModule({
    declarations: [
        HelpDeskListViewComponent,
        FormComponent,
        FormTwoComponent
    ],
    imports: [
        TableModule,
        DialogModule,
        InputTextModule,
        DropdownModule,
        ButtonModule,
        InputTextareaModule,
        FileUploadModule,
        BrowserAnimationsModule,
        CardModule,
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        BreadcrumbModule
    ],
    exports: [
        HelpDeskListViewComponent,
        FormComponent,
        FormTwoComponent
    ],
    providers: [
        TableModule
    ]
})
export class HelpDeskFeatureModule { }
