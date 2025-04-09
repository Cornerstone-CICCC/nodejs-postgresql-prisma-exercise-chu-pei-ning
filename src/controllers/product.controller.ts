import { Request, Response } from "express";
import productModel from "../models/product.model";
import { Product } from "@prisma/client";

//get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productModel.fetchAllProducts()
    res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).json({message: "Server error"})
  }
}

//get product by id
const getProductById = async (req: Request <{id: string}>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const product = await productModel.fetchProductbyId(id)
    if (!product) {
      res.status(404).json("product not found")
      return
    }
    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).json({message: "Unable to fetch product"})
  }
}

//add new product
const addProduct = async (req: Request<{}, {}, Omit<Product, 'id'>>, res: Response) => {
  try{
    const {productName, price} = req.body
    const product = await productModel.createProduct({
      productName,
      price
    })
    res.status(201).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).json({message: "Unable to add product"})
  }
}

//edit product by id
const editProduct = async (req: Request < { id: string}, {}, Partial<Product> >, res: Response) => {
  try {
    const id = Number(req.params.id)
    const {productName, price} = req.body
    const product = await productModel.editProductById(id, {
      productName,
      price
    })
    if (!product) {
      res.status(404).json({message: "product not found"})
      return 
    }
    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).json({message: "Unable to fetch product"})
  }
}

//delete product by id
const deleteProduct = async (req: Request <{id: string}>, res: Response) => {
  try {
    const id = Number(req.params.id)
    const product = await productModel.deleteProductById(id)
    res.status(200).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).json({message: "Unable to fetch product"})
  }
}

export default {
  getAllProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct
}