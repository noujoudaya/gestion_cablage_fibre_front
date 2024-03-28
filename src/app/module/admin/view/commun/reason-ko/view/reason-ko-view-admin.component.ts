import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ReasonKoAdminService} from 'src/app/controller/service/admin/commun/ReasonKoAdmin.service';
import {ReasonKoDto} from 'src/app/controller/model/commun/ReasonKo.model';
import {ReasonKoCriteria} from 'src/app/controller/criteria/commun/ReasonKoCriteria.model';

@Component({
  selector: 'app-reason-ko-view-admin',
  templateUrl: './reason-ko-view-admin.component.html'
})
export class ReasonKoViewAdminComponent extends AbstractViewController<ReasonKoDto, ReasonKoCriteria, ReasonKoAdminService> implements OnInit {


    constructor(private reasonKoService: ReasonKoAdminService){
        super(reasonKoService);
    }

    ngOnInit(): void {
    }




}
