import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TechnicienAdminService} from 'src/app/controller/service/admin/technicien/TechnicienAdmin.service';
import {TechnicienDto} from 'src/app/controller/model/technicien/Technicien.model';
import {TechnicienCriteria} from 'src/app/controller/criteria/technicien/TechnicienCriteria.model';
@Component({
  selector: 'app-technicien-create-admin',
  templateUrl: './technicien-create-admin.component.html'
})
export class TechnicienCreateAdminComponent extends AbstractCreateController<TechnicienDto, TechnicienCriteria, TechnicienAdminService>  implements OnInit {



   private _validTechnicienCin = true;

    constructor( private technicienService: TechnicienAdminService ) {
        super(technicienService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validTechnicienCin = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTechnicienCin();
    }

    public validateTechnicienCin(){
        if (this.stringUtilService.isEmpty(this.item.cin)) {
        this.errorMessages.push('Cin non valide');
        this.validTechnicienCin = false;
        } else {
            this.validTechnicienCin = true;
        }
    }






    get validTechnicienCin(): boolean {
        return this._validTechnicienCin;
    }

    set validTechnicienCin(value: boolean) {
         this._validTechnicienCin = value;
    }



}
