import { BuyProduct } from "@/app/features/payment/type"

export const updateTotalPrice = (buyProducts: BuyProduct[], setTotalPrice: React.Dispatch<React.SetStateAction<number>>) => {
  let sumPrice = 0
    buyProducts.map((buyProduct) => (
      sumPrice = sumPrice + (buyProduct.product.price * buyProduct.quantity)
    ))
    setTotalPrice(sumPrice)
}
