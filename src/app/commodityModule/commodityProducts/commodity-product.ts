interface CommodityProductDef {
    name: string;
    category: string;
    quantity: number;
    unit: string;
    location: string;
    remarks: string;
}

export class CommodityProduct implements CommodityProductDef {

    constructor(
        public name='', 
        public category='1', 
        public quantity=0, 
        public unit='', 
        public location='',
        public remarks=''
        ) {

    }
}