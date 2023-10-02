import { object, string, bool } from 'yup'

export default object({
  fullName: string().required('please enter your full name'),
  email: string().email('please enter a valid email address').required(),
  phone: string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'phone number is not valid',
    )
    .required(),
  visitReason: string().required(),
  creditCardNumber: string()
    .matches(
      /^(?:3[47]\d{13}|(?:4|5|6)\d{15})$/,
      'credit card number is not valid',
    )
    .required(),
  creditCardExpiration: string()
    .matches(/^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/, 'expiration date is not valid')
    .required(),
  creditCardCVV: string()
    .matches(/^\d{3,4}$/, 'CVV is not valid')
    .required(),
  billingZipCode: string()
    .matches(/^\d{5}(?:[-\s]\d{4})?$/, 'zip code is not valid')
    .required(),
  acceptTerms: bool().oneOf([true], 'accept terms'),
}).required()
