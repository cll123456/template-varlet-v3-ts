/* eslint-disable @typescript-eslint/no-explicit-any */
export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBool = (val: unknown): val is boolean => typeof val === 'boolean'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isPlainObject = (val: unknown): val is Record<string, any> =>
  Object.prototype.toString.call(val) === '[object Object]'

export const isObject = (val: unknown): val is Record<string, any> =>
  typeof val === 'object' && val !== null

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)
// example 1rem
export const isRem = (value: unknown): value is string =>
  isString(value) && value.endsWith('rem')

// example 1 || 1px
export const isPx = (value: unknown): value is string | number =>
  (isString(value) && value.endsWith('px')) || isNumber(value)

// example 1%
export const isPercent = (value: unknown): value is string =>
  isString(value) && value.endsWith('%')

// example 1vw
export const isVw = (value: unknown): value is string =>
  isString(value) && value.endsWith('vw')

// example 1vh
export const isVh = (value: unknown): value is string =>
  isString(value) && value.endsWith('vh')

// example return 1
export const toPxNum = (value: unknown): number => {
  if (isNumber(value)) {
    return value
  }

  if (isPx(value)) {
    return +(value as string).replace('px', '')
  }

  if (isVw(value)) {
    return (+(value as string).replace('vw', '') * window.innerWidth) / 100
  }

  if (isVh(value)) {
    return (+(value as string).replace('vh', '') * window.innerHeight) / 100
  }

  if (isRem(value)) {
    const num = +(value as string).replace('rem', '')
    const rootFontSize = window.getComputedStyle(
      document.documentElement,
    ).fontSize

    return num * parseFloat(rootFontSize)
  }

  if (isString(value)) {
    return toNumber(value)
  }

  // % and other
  return 0
}

export const toNumber = (
  val: number | string | boolean | undefined | null,
): number => {
  if (val == null) return 0

  if (isString(val)) {
    val = parseFloat(val)
    val = Number.isNaN(val) ? 0 : val
    return val
  }

  if (isBool(val)) return Number(val)

  return val
}

export const dt = (value: unknown, defaultText: string | undefined) =>
  value == null ? defaultText : value

export function createNamespace(name: string) {
  const namespace = `var-${name}`

  const createBEM = (suffix?: string): string => {
    if (!suffix) return namespace

    return suffix.startsWith('--')
      ? `${namespace}${suffix}`
      : `${namespace}__${suffix}`
  }

  type Classes = (string | [any, string, string?])[]

  const classes = (...classes: Classes): any[] => {
    return classes.map((className) => {
      if (isArray(className)) {
        const [condition, truthy, falsy = null] = className
        return condition ? truthy : falsy
      }

      return className
    })
  }

  return {
    n: createBEM,
    classes,
  }
}
