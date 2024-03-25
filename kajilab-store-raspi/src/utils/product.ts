import { getProductByBarcode } from "@/api";
import { BuyProduct } from "@/app/features/payment/type";
import { Product } from "@/types/json";
import { CartProduct } from "@/types/product";

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

export const removeCartProduct = (productId: number, cartProducts: BuyProduct[], setCartProducts: React.Dispatch<React.SetStateAction<BuyProduct[]>>) => {
  let newCartProducts: BuyProduct[] = []
  cartProducts.map((cartProduct) => {
    if(cartProduct.product.id != productId){
      // 該当の商品以外を新しいカートのリストに入れる
      newCartProducts.push(cartProduct)
    }
  })
  setCartProducts(newCartProducts)
}

export const updateCartProductQuantity = (productId: number, cartProducts: BuyProduct[], newQuantity: number, setCartProducts: React.Dispatch<React.SetStateAction<BuyProduct[]>>) => {
  let newCartProducts: BuyProduct[] = []
  cartProducts.map((cartProduct) => {
    if(cartProduct.product.id == productId){
      // 該当の商品のカートの個数を変更する
      let newCartProduct: BuyProduct = {
        product: cartProduct.product,
        quantity: newQuantity,
      } 
      newCartProducts.push(newCartProduct)
    }
    else{
      newCartProducts.push(cartProduct)
    }
  })
  setCartProducts(newCartProducts)
}

export const updateTotalPrice = (buyProducts: CartProduct[], setTotalPrice: React.Dispatch<React.SetStateAction<number>>) => {
  let sumPrice = 0
    buyProducts.map((buyProduct) => (
      sumPrice = sumPrice + (buyProduct.product.price * buyProduct.quantity)
    ))
    setTotalPrice(sumPrice)
}