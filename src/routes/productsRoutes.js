import { Router } from "express";
import { deleteProduct, getAllProducts, getOneProduct, insertProduct, updateProduct } from "../controllers/productsController.js";
const router=Router()

router.get('/',getAllProducts)
router.get('/:barcode',getOneProduct)
router.post('/',insertProduct)
router.put('/:barcode',updateProduct)
router.delete('/:barcode',deleteProduct)



export default router
