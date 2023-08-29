declare const _brand: unique symbol

declare global {
  /**
   * Custom utility model.ts
   */
  export type Nullable<T> = T | null

  export type Keys<T extends Record<string, unknown>> = keyof T

  export type Values<T extends Record<string, unknown>> = T[Keys<T>]

  export type Indexed<K = string, T = unknown> = { [key: K]: T }

  export type Brand<K, T> = K & { [_brand]: T }

  /**
   * Type aliases
   */
  export type Phone = string

  export type Email = string

  export type Id = number

  export type DateIso = string

  export type Timestamp = number

  export type Penny = number

  export type Url = string

  export type Color = string

  /**
   * Shared kernel
   */

  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux infering model.ts from @/app
   * and use it in @/shared/model/hooks.ts
   */

  declare type RootState = import('@/1-app/store/store').RootState
  declare type AppDispatch = import('@/1-app/store/store').AppDispatch
}

export {}
