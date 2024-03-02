import { getProductByBarcode } from "@/api";
import { BuyProduct } from "@/app/features/payment/type";
import { Product } from "@/types/json";

export const updateAddedProductList = (product: Product, quantity: number, addedProducts: BuyProduct[], setAddedProducts: React.Dispatch<React.SetStateAction<BuyProduct[]>>) => {
  let isAdded = false
  let tmpBuyProducts = []
  addedProducts.map((addedProduct) => {
    if(addedProduct.product.id == product.id){
      // 既に購入リストに貼っているものは個数だけ変更
      isAdded = true 
      tmpBuyProducts.push({product: product, quantity: addedProduct.quantity+quantity})
    }
    else{
      // それ以外のものはそのまま
      tmpBuyProducts.push(addedProduct)
    }
  })
  if(!isAdded){
    tmpBuyProducts.push({product: product, quantity: quantity})
  }
  setAddedProducts(tmpBuyProducts)
  console.log("商品リストが更新されたよ")
}