import {Component, OnInit} from '@angular/core';
import {ReasonKoAdminService} from 'src/app/controller/service/admin/commun/ReasonKoAdmin.service';
import {ReasonKoDto} from 'src/app/controller/model/commun/ReasonKo.model';
import {ReasonKoCriteria} from 'src/app/controller/criteria/commun/ReasonKoCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-reason-ko-list-admin',
  templateUrl: './reason-ko-list-admin.component.html'
})
export class ReasonKoListAdminComponent extends AbstractListController<ReasonKoDto, ReasonKoCriteria, ReasonKoAdminService>  implements OnInit {

    override fileName = 'ReasonKo';




    constructor( private reasonKoService: ReasonKoAdminService  ) {
        super(reasonKoService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('ReasonKo').subscribe(() => {
            if ( this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'reasons', header: 'Reasons'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Reasons': e.reasons ,
                 'Description': e.description ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Reasons': this.criteria.reasons ? this.criteria.reasons : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
