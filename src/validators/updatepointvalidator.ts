import { body, validationResult } from "express-validator";


export const updatepointPutChecker = () => {
  return [
    body('name').optional().isString(),
    body('description').optional().isString(),
  ]
} 

export const updatepointPostChecker = () => {
  return [
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString()
  ]
}

export const validateUpdatePoint = (req, res, next) => {
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
