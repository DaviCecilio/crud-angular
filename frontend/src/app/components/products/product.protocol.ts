export type Product = {
  id: number
  name: string
  price: number | null
}

export type CreateProductService = Omit<Product, "id">

export type UpdateProductService = Partial<Product>

export type DeleteProductService = Omit<Product, "id"> & {
  id?: number
}