import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ReasonKoAdminService} from 'src/app/controller/service/admin/commun/ReasonKoAdmin.service';
import {ReasonKoDto} from 'src/app/controller/model/commun/ReasonKo.model';
import {ReasonKoCriteria} from 'src/app/controller/criteria/commun/ReasonKoCriteria.model';



@Component({
  selector: 'app-reason-ko-edit-admin',
  templateUrl: './reason-ko-edit-admin.component.html'
})
export class ReasonKoEditAdminComponent extends AbstractEditController<ReasonKoDto, ReasonKoCriteria, ReasonKoAdminService>   implements OnInit {


    private _validReasonKoLibelle = true;




    constructor( private reasonKoService: ReasonKoAdminService ) {
        super(reasonKoService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validReasonKoLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateReasonKoLibelle();
    }
    public validateReasonKoLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validReasonKoLibelle = false;
        } else {
            this.validReasonKoLibelle = true;
        }
    }






    get validReasonKoLibelle(): boolean {
        return this._validReasonKoLibelle;
    }
    set validReasonKoLibelle(value: boolean) {
        this._validReasonKoLibelle = value;
    }

}
