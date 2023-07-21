import { body, validationResult } from "express-validator";

export const productValidationRules = () => {
  return [
    body('name').isString()
  ]
}

export const validateProduct = (req, res, next) => {
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
