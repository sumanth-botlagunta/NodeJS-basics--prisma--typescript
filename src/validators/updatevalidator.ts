import { body, validationResult } from "express-validator";

export const updatePutChecker = () => {
  return [
    body('title').optional().isString(),
    body('body').optional().isString(),
    body('version').optional().isString(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional()
  ]
}

export const updatePostChecker = () => {
  return [
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString()
  ]
}

export const validateUpdate = (req, res, next) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    res.status(400)
    return res.json(
      {
        "errors": errors.array()
      }
    )
  }
  next()
}
