import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ReasonKoDto} from 'src/app/controller/model/commun/ReasonKo.model';
import {ReasonKoCriteria} from 'src/app/controller/criteria/commun/ReasonKoCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ReasonKoAdminService extends AbstractService<ReasonKoDto, ReasonKoCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/reasonKo/');
    }

    public constrcutDto(): ReasonKoDto {
        return new ReasonKoDto();
    }

    public constrcutCriteria(): ReasonKoCriteria {
        return new ReasonKoCriteria();
    }
}
