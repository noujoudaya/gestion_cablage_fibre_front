import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ReasonKoDto extends BaseDto{

    public code: string;

    public libelle: string;

    public reasons: string;

    public description: string;

    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.reasons = '';
        this.description = '';

        }

}
