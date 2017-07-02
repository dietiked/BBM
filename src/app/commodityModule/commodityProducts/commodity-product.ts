interface CommodityProductDef {
    name: string;
    category: string;
    quantity: number;
    unit: string;
    location: string;
}

export class CommodityProduct implements CommodityProductDef {

    constructor(
        public name='', 
        public category='1', 
        public quantity=0, 
        public unit='', 
        public location='') {

    }
}