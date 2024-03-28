import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TechnicienAdminService} from 'src/app/controller/service/admin/technicien/TechnicienAdmin.service';
import {TechnicienDto} from 'src/app/controller/model/technicien/Technicien.model';
import {TechnicienCriteria} from 'src/app/controller/criteria/technicien/TechnicienCriteria.model';

@Component({
  selector: 'app-technicien-view-admin',
  templateUrl: './technicien-view-admin.component.html'
})
export class TechnicienViewAdminComponent extends AbstractViewController<TechnicienDto, TechnicienCriteria, TechnicienAdminService> implements OnInit {


    constructor(private technicienService: TechnicienAdminService){
        super(technicienService);
    }

    ngOnInit(): void {
    }




}
