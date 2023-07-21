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
const router = Router();

router.get('/product', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});
router.get('/product/:id', () => {});
router.put('/product/:id', productValidationRules(), validateProduct, () => {});
router.post('/product', productValidationRules(), validateProduct, () => {});
router.delete('/product/:id', () => {});

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
