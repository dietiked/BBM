export class CommodityDefinition {
  private static prefix = 'data/commodities';
  public static PRODUCTS =  CommodityDefinition.prefix + '/products';
  public static CATEGORIES =  CommodityDefinition.prefix + '/categories';

  // /data/commodities/products
  public static products() {
    return CommodityDefinition.PRODUCTS;
  }

  // /data/commodities/products/-Xv82asdnDSi238K
  public static productWithKey(key: string) {
    return CommodityDefinition.PRODUCTS + '/' + key;
  }

  // /data/commodities/categories
  public static categories() {
    return CommodityDefinition.CATEGORIES;
  }

  // /data/commodities/categories/-Sv41bf5ntSg448X
  public static categoryWithKey(key: string) {
    return CommodityDefinition.CATEGORIES + '/' + key;
  }
}
