import {Component, OnInit} from '@angular/core';
import {TechnicienAdminService} from 'src/app/controller/service/admin/technicien/TechnicienAdmin.service';
import {TechnicienDto} from 'src/app/controller/model/technicien/Technicien.model';
import {TechnicienCriteria} from 'src/app/controller/criteria/technicien/TechnicienCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-technicien-list-admin',
  templateUrl: './technicien-list-admin.component.html'
})
export class TechnicienListAdminComponent extends AbstractListController<TechnicienDto, TechnicienCriteria, TechnicienAdminService>  implements OnInit {

    override fileName = 'Technicien';


     yesOrNoCredentialsNonExpired: any[] = [];
     yesOrNoEnabled: any[] = [];
     yesOrNoAccountNonExpired: any[] = [];
     yesOrNoAccountNonLocked: any[] = [];
     yesOrNoPasswordChanged: any[] = [];


    constructor( private technicienService: TechnicienAdminService  ) {
        super(technicienService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Technicien').subscribe(() => {
            if ( this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
                this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'cin', header: 'Cin'},
            {field: 'credentialsNonExpired', header: 'Credentials non expired'},
            {field: 'enabled', header: 'Enabled'},
            {field: 'accountNonExpired', header: 'Account non expired'},
            {field: 'accountNonLocked', header: 'Account non locked'},
            {field: 'passwordChanged', header: 'Password changed'},
            {field: 'username', header: 'Username'},
            {field: 'password', header: 'Password'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Cin': e.cin ,
                'Credentials non expired': e.credentialsNonExpired? 'Vrai' : 'Faux' ,
                'Enabled': e.enabled? 'Vrai' : 'Faux' ,
                'Account non expired': e.accountNonExpired? 'Vrai' : 'Faux' ,
                'Account non locked': e.accountNonLocked? 'Vrai' : 'Faux' ,
                'Password changed': e.passwordChanged? 'Vrai' : 'Faux' ,
                 'Username': e.username ,
                 'Password': e.password ,
            }
        });

        this.criteriaData = [{
            'Cin': this.criteria.cin ? this.criteria.cin : environment.emptyForExport ,
            'Credentials non expired': this.criteria.credentialsNonExpired ? (this.criteria.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.criteria.enabled ? (this.criteria.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non expired': this.criteria.accountNonExpired ? (this.criteria.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.criteria.accountNonLocked ? (this.criteria.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Password changed': this.criteria.passwordChanged ? (this.criteria.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Username': this.criteria.username ? this.criteria.username : environment.emptyForExport ,
            'Password': this.criteria.password ? this.criteria.password : environment.emptyForExport ,
        }];
      }
}
