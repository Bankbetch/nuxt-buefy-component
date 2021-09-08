import { extend } from 'vee-validate'

import {
  required,
  email,
  max,
  numeric,
  ext,
  min,
  regex,
  confirmed,
  between,
  password,
  min_value,
  max_value,
  integer,
  double,
} from 'vee-validate/dist/rules'

export default ({ app }) => {
  extend('integer', {
    ...required,
    message: `The {_field_} field must contain only number values`,
  })
  extend('required', {
    ...required,
    message: `The {_field_} is require`,
  })

  extend('confirmed', {
    ...confirmed,
    message: 'Required',
  })

  extend('numeric', {
    ...numeric,
    message: `The {_field_} field must contain only number values`,
  })
  extend('double', {
    ...double,
    message: `The {_field_} field must contain only number values`,
  })

  extend('min_value', {
    ...min_value,
    message: `The {_field_} less than {_value_}`,
  })

  extend('max_value', {
    ...max_value,
    message: 'The {_field_} more than {_value_}',
  })

  extend('max', {
    ...max,
    message: `The max length of {_value_} characters`,
  })

  extend('min', {
    ...min,
    message: `The min length of {_value_} characters`,
  })

  extend('regex', {
    ...regex,
    message: 'Regex',
  })

  extend('email', {
    ...email,
    message: `Email is not valid.`,
  })

  extend('decimal', {
    validate: (value, { decimals = '*', separator = '.' } = { }) => {
      if (value === null || value === undefined || value === '') {
        return {
          valid: false,
        }
      }
      if (Number(decimals) === 0) {
        return {
          valid: /^-?\d*$/.test(value),
        }
      }
      const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`
      const regex = new RegExp(
        `^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`
      )

      return {
        valid: regex.test(value),
      }
    },
    message: 'The {_field_} field must contain only decimal values',
  })
}
