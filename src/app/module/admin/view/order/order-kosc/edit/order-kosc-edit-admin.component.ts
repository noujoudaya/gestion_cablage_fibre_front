import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {OrderKoscAdminService} from 'src/app/controller/service/admin/order/OrderKoscAdmin.service';
import {OrderKoscDto} from 'src/app/controller/model/order/OrderKosc.model';
import {OrderKoscCriteria} from 'src/app/controller/criteria/order/OrderKoscCriteria.model';


import {ReasonKoDto} from 'src/app/controller/model/commun/ReasonKo.model';
import {ReasonKoAdminService} from 'src/app/controller/service/admin/commun/ReasonKoAdmin.service';

@Component({
  selector: 'app-order-kosc-edit-admin',
  templateUrl: './order-kosc-edit-admin.component.html'
})
export class OrderKoscEditAdminComponent extends AbstractEditController<OrderKoscDto, OrderKoscCriteria, OrderKoscAdminService>   implements OnInit {


    private _validOrderKoscCode = true;
    private _validOrderKoscLibelle = true;

    private _validReasonKoLibelle = true;



    constructor( private orderKoscService: OrderKoscAdminService , private reasonKoService: ReasonKoAdminService) {
        super(orderKoscService);
    }

    ngOnInit(): void {
        this.reasonKo = new ReasonKoDto();
        this.reasonKoService.findAll().subscribe((data) => this.reasonKos = data);
    }
    public override prepareEdit() {
        this.item.dateRdv = this.orderKoscService.format(this.item.dateRdv);
    }



    public override setValidation(value: boolean){
        this.validOrderKoscCode = value;
        this.validOrderKoscLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateOrderKoscCode();
        this.validateOrderKoscLibelle();
    }
    public validateOrderKoscCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validOrderKoscCode = false;
        } else {
            this.validOrderKoscCode = true;
        }
    }
    public validateOrderKoscLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validOrderKoscLibelle = false;
        } else {
            this.validOrderKoscLibelle = true;
        }
    }




   get reasonKo(): ReasonKoDto {
       return this.reasonKoService.item;
   }
  set reasonKo(value: ReasonKoDto) {
        this.reasonKoService.item = value;
   }
   get reasonKos(): Array<ReasonKoDto> {
        return this.reasonKoService.items;
   }
   set reasonKos(value: Array<ReasonKoDto>) {
        this.reasonKoService.items = value;
   }
   get createReasonKoDialog(): boolean {
       return this.reasonKoService.createDialog;
   }
  set createReasonKoDialog(value: boolean) {
       this.reasonKoService.createDialog= value;
   }


    get validOrderKoscCode(): boolean {
        return this._validOrderKoscCode;
    }
    set validOrderKoscCode(value: boolean) {
        this._validOrderKoscCode = value;
    }
    get validOrderKoscLibelle(): boolean {
        return this._validOrderKoscLibelle;
    }
    set validOrderKoscLibelle(value: boolean) {
        this._validOrderKoscLibelle = value;
    }

    get validReasonKoLibelle(): boolean {
        return this._validReasonKoLibelle;
    }
    set validReasonKoLibelle(value: boolean) {
        this._validReasonKoLibelle = value;
    }
}
