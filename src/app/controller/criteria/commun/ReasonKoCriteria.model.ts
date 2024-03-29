import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ReasonKoCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public reasons: string;
    public reasonsLike: string;
    public description: string;
    public descriptionLike: string;

}

