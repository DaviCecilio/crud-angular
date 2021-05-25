export type Product = {
  id: number
  name: string
  price: number | null
}

export type CreateProductService = Omit<Product, "id">