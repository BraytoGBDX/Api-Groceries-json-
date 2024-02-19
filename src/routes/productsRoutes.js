import { Router } from "express";
import { deleteProduct, getAllProducts, getOneProduct, insertProduct, updateProduct } from "../controllers/productsController.js";
const router=Router()

router.get('/',getAllProducts)
router.get('/:barcode',getOneProduct)
router.post('/insert/',insertProduct)
router.put('/update/:barcode',updateProduct)
router.delete('/delete/:barcode',deleteProduct)



export default router
