import { Router } from "express";
import { getProducts, media, deleteProduct, getProduct } from "../controllers/products_controller.js";

const router= Router();

router.get('/', getProducts);
router.get('/:pid', getProduct);
router.get('/media/:file', media);
router.delete('/:pid', deleteProduct);

export default router