import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ReasonKoDto} from '../commun/ReasonKo.model';

export class OrderKoscDto extends BaseDto{

    public code: string;

    public libelle: string;

   public dateRdv: Date;

    public reasonKo: ReasonKoDto ;
    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.dateRdv = null;

        }

}
