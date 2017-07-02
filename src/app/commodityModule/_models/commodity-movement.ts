interface CommodityMovementDef {
    date: string;
    quantity: number;
    remarks: string;
    batch: string;
    delivery: string;
}

export class CommodityMovement implements CommodityMovementDef {

    constructor(
        public date = Date.now().toString(), 
        public quantity = 0, 
        public remarks = '',
        public batch = '',
        public delivery = ''
        ) {

    }
}