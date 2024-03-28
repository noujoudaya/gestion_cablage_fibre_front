import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TechnicienDto} from 'src/app/controller/model/technicien/Technicien.model';
import {TechnicienCriteria} from 'src/app/controller/criteria/technicien/TechnicienCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TechnicienAdminService extends AbstractService<TechnicienDto, TechnicienCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/technicien/');
    }

    public constrcutDto(): TechnicienDto {
        return new TechnicienDto();
    }

    public constrcutCriteria(): TechnicienCriteria {
        return new TechnicienCriteria();
    }
}
