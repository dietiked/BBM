export class CommodityDefinition {
  private static prefix = 'data/commodities';
  public static PRODUCTS =  CommodityDefinition.prefix + '/products';

  // /data/commodities/products
  public static products() {
    return CommodityDefinition.PRODUCTS;
  }

  // /data/commodities/products/-Xv82asdnDSi238K
  public static productWithKey(key: string) {
    return CommodityDefinition.PRODUCTS + '/' + key;
  }

}
