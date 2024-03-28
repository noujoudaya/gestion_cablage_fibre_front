import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

import { TechnicienAdminModule } from './view/technicien/technicien-admin.module';
import { TechnicienAdminRoutingModule } from './view/technicien/technicien-admin-routing.module';
import { CommunAdminModule } from './view/commun/commun-admin.module';
import { CommunAdminRoutingModule } from './view/commun/commun-admin-routing.module';
import { OrderAdminModule } from './view/order/order-admin.module';
import { OrderAdminRoutingModule } from './view/order/order-admin-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';
import { VilleCreateComponent } from './view/adressage/ville/ville-create/ville-create.component';
import { VilleCreateAdminComponent } from './view/adressage/ville/ville-create-admin/ville-create-admin.component';
import { TemplateAnnulationOrderCreateAdminComponent } from './view/template/template-annulation-order-admin/template-annulation-order-create-admin/template-annulation-order-create-admin.component';
import { TemplateAnnulationOrderEditAdminComponent } from './view/template/template-annulation-order/edit/template-annulation-order-edit-admin/template-annulation-order-edit-admin.component';
import { TemplateAnnulationOrderEditAdminComponent } from './view/template/template-annulation-order/edit/template-annulation-order-edit-admin .component';
import { TemplateAnnulationOrderListAdminComponent } from './view/template/template-annulation-order/list/template-annulation-order-list-admin .component';
import { TemplateAnnulationOrderViewAdminComponent } from './view/template/template-annulation-order/view/template-annulation-order-view-admin .component';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent,
   VilleCreateComponent,
   VilleCreateAdminComponent,
   TemplateAnnulationOrderCreateAdminComponent,
   TemplateAnnulationOrderEditAdminComponent,
   TemplateAnnulationOrderEditAdminComponent,
   TemplateAnnulationOrderListAdminComponent,
   TemplateAnnulationOrderViewAdminComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  TechnicienAdminModule,
  TechnicienAdminRoutingModule,
  CommunAdminModule,
  CommunAdminRoutingModule,
  OrderAdminModule,
  OrderAdminRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    TechnicienAdminModule,
    CommunAdminModule,
    OrderAdminModule,
  SecurityModule
  ],

})
export class AdminModule { }
