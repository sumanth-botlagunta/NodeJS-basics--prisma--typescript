import { Router } from 'express';
import {
  productValidationRules,
  validateProduct,
} from './validators/productvalidator';
import {
  validateUpdate,
  updatePostChecker,
  updatePutChecker,
} from './validators/updatevalidator';
import {
  validateUpdatePoint,
  updatepointPostChecker,
  updatepointPutChecker,
} from './validators/updatepointvalidator';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from './handlers/products';
const router = Router();

router.get('/product', getAllProducts);
router.get('/product/:id', getOneProduct);
router.put(
  '/product/:id',
  productValidationRules(),
  validateProduct,
  updateProduct
);
router.post(
  '/product',
  productValidationRules(),
  validateProduct,
  createProduct
);
router.delete('/product/:id', deleteProduct);

router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', updatePutChecker(), validateUpdate, () => {});
router.post('/update', updatePostChecker(), validateUpdate, () => {});
router.delete('/update/:id', () => {});

router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put(
  '/updatepoint/:id',
  updatepointPutChecker(),
  validateUpdatePoint,
  () => {}
);
router.post(
  '/updatepoint',
  updatepointPostChecker(),
  validateUpdatePoint,
  () => {}
);
router.delete('/updatepoint/:id', () => {});

export default router;
