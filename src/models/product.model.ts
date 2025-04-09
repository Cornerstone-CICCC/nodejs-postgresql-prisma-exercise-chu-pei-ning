import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient()

// fetch all products
const fetchAllProducts = async () => {
  return await prisma.product.findMany()
}

// fetch product by id
const fetchProductbyId = async (id: number) => {
  return await prisma.product.findUnique({where: {id}})
}

// create new product
const createProduct = async (data: Omit<Product, 'id'>) => {
  return await prisma.product.create({data})
}

// edit product by id
const editProductById = async (id: number, data: Partial<Product>) => {
  const foundProduct = await fetchProductbyId(id)
  if (!foundProduct) return null
  const newUpdate = {
    productName: data.productName ?? foundProduct.productName,
    price: data.price ?? foundProduct.price
  }
  return await prisma.product.update({
    where: {id},
    data: newUpdate
  })
}

// delete product by id
const deleteProductById = async (id: number) => {
  return await prisma.product.delete({where: {id}})
}

export default {
  fetchAllProducts,
  fetchProductbyId,
  createProduct,
  editProductById,
  deleteProductById
}