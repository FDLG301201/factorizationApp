
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model companies
 * 
 */
export type companies = $Result.DefaultSelection<Prisma.$companiesPayload>
/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model invoices
 * 
 */
export type invoices = $Result.DefaultSelection<Prisma.$invoicesPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model providers
 * 
 */
export type providers = $Result.DefaultSelection<Prisma.$providersPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model invoice_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type invoice_items = $Result.DefaultSelection<Prisma.$invoice_itemsPayload>
/**
 * Model invoice_statuses
 * 
 */
export type invoice_statuses = $Result.DefaultSelection<Prisma.$invoice_statusesPayload>
/**
 * Model invoice_payments
 * 
 */
export type invoice_payments = $Result.DefaultSelection<Prisma.$invoice_paymentsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.companiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.invoicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providers`: Exposes CRUD operations for the **providers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.providers.findMany()
    * ```
    */
  get providers(): Prisma.providersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice_items`: Exposes CRUD operations for the **invoice_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoice_items
    * const invoice_items = await prisma.invoice_items.findMany()
    * ```
    */
  get invoice_items(): Prisma.invoice_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice_statuses`: Exposes CRUD operations for the **invoice_statuses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoice_statuses
    * const invoice_statuses = await prisma.invoice_statuses.findMany()
    * ```
    */
  get invoice_statuses(): Prisma.invoice_statusesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice_payments`: Exposes CRUD operations for the **invoice_payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoice_payments
    * const invoice_payments = await prisma.invoice_payments.findMany()
    * ```
    */
  get invoice_payments(): Prisma.invoice_paymentsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categories: 'categories',
    companies: 'companies',
    customers: 'customers',
    invoices: 'invoices',
    products: 'products',
    providers: 'providers',
    roles: 'roles',
    users: 'users',
    invoice_items: 'invoice_items',
    invoice_statuses: 'invoice_statuses',
    invoice_payments: 'invoice_payments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "companies" | "customers" | "invoices" | "products" | "providers" | "roles" | "users" | "invoice_items" | "invoice_statuses" | "invoice_payments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      companies: {
        payload: Prisma.$companiesPayload<ExtArgs>
        fields: Prisma.companiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findFirst: {
            args: Prisma.companiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findMany: {
            args: Prisma.companiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          create: {
            args: Prisma.companiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          createMany: {
            args: Prisma.companiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          delete: {
            args: Prisma.companiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          update: {
            args: Prisma.companiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          deleteMany: {
            args: Prisma.companiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          upsert: {
            args: Prisma.companiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.companiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.companiesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      invoices: {
        payload: Prisma.$invoicesPayload<ExtArgs>
        fields: Prisma.invoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findFirst: {
            args: Prisma.invoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findMany: {
            args: Prisma.invoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          create: {
            args: Prisma.invoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          createMany: {
            args: Prisma.invoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          delete: {
            args: Prisma.invoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          update: {
            args: Prisma.invoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          deleteMany: {
            args: Prisma.invoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          upsert: {
            args: Prisma.invoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.invoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      providers: {
        payload: Prisma.$providersPayload<ExtArgs>
        fields: Prisma.providersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.providersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.providersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          findFirst: {
            args: Prisma.providersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.providersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          findMany: {
            args: Prisma.providersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>[]
          }
          create: {
            args: Prisma.providersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          createMany: {
            args: Prisma.providersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.providersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>[]
          }
          delete: {
            args: Prisma.providersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          update: {
            args: Prisma.providersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          deleteMany: {
            args: Prisma.providersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.providersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.providersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>[]
          }
          upsert: {
            args: Prisma.providersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          aggregate: {
            args: Prisma.ProvidersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviders>
          }
          groupBy: {
            args: Prisma.providersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvidersGroupByOutputType>[]
          }
          count: {
            args: Prisma.providersCountArgs<ExtArgs>
            result: $Utils.Optional<ProvidersCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      invoice_items: {
        payload: Prisma.$invoice_itemsPayload<ExtArgs>
        fields: Prisma.invoice_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoice_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoice_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          findFirst: {
            args: Prisma.invoice_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoice_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          findMany: {
            args: Prisma.invoice_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          create: {
            args: Prisma.invoice_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          createMany: {
            args: Prisma.invoice_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoice_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          delete: {
            args: Prisma.invoice_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          update: {
            args: Prisma.invoice_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          deleteMany: {
            args: Prisma.invoice_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoice_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoice_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          upsert: {
            args: Prisma.invoice_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          aggregate: {
            args: Prisma.Invoice_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice_items>
          }
          groupBy: {
            args: Prisma.invoice_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invoice_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoice_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Invoice_itemsCountAggregateOutputType> | number
          }
        }
      }
      invoice_statuses: {
        payload: Prisma.$invoice_statusesPayload<ExtArgs>
        fields: Prisma.invoice_statusesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoice_statusesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoice_statusesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload>
          }
          findFirst: {
            args: Prisma.invoice_statusesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoice_statusesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload>
          }
          findMany: {
            args: Prisma.invoice_statusesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload>[]
          }
          create: {
            args: Prisma.invoice_statusesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload>
          }
          createMany: {
            args: Prisma.invoice_statusesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoice_statusesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload>[]
          }
          delete: {
            args: Prisma.invoice_statusesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload>
          }
          update: {
            args: Prisma.invoice_statusesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload>
          }
          deleteMany: {
            args: Prisma.invoice_statusesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoice_statusesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoice_statusesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload>[]
          }
          upsert: {
            args: Prisma.invoice_statusesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_statusesPayload>
          }
          aggregate: {
            args: Prisma.Invoice_statusesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice_statuses>
          }
          groupBy: {
            args: Prisma.invoice_statusesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invoice_statusesGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoice_statusesCountArgs<ExtArgs>
            result: $Utils.Optional<Invoice_statusesCountAggregateOutputType> | number
          }
        }
      }
      invoice_payments: {
        payload: Prisma.$invoice_paymentsPayload<ExtArgs>
        fields: Prisma.invoice_paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoice_paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoice_paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload>
          }
          findFirst: {
            args: Prisma.invoice_paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoice_paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload>
          }
          findMany: {
            args: Prisma.invoice_paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload>[]
          }
          create: {
            args: Prisma.invoice_paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload>
          }
          createMany: {
            args: Prisma.invoice_paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoice_paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload>[]
          }
          delete: {
            args: Prisma.invoice_paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload>
          }
          update: {
            args: Prisma.invoice_paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload>
          }
          deleteMany: {
            args: Prisma.invoice_paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoice_paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoice_paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload>[]
          }
          upsert: {
            args: Prisma.invoice_paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_paymentsPayload>
          }
          aggregate: {
            args: Prisma.Invoice_paymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice_payments>
          }
          groupBy: {
            args: Prisma.invoice_paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invoice_paymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoice_paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<Invoice_paymentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categories?: categoriesOmit
    companies?: companiesOmit
    customers?: customersOmit
    invoices?: invoicesOmit
    products?: productsOmit
    providers?: providersOmit
    roles?: rolesOmit
    users?: usersOmit
    invoice_items?: invoice_itemsOmit
    invoice_statuses?: invoice_statusesOmit
    invoice_payments?: invoice_paymentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    customers: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CompaniesCountOutputTypeCountCustomersArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    invoices: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | CustomersCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }


  /**
   * Count Type InvoicesCountOutputType
   */

  export type InvoicesCountOutputType = {
    invoice_items: number
    invoice_payments: number
  }

  export type InvoicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | InvoicesCountOutputTypeCountInvoice_itemsArgs
    invoice_payments?: boolean | InvoicesCountOutputTypeCountInvoice_paymentsArgs
  }

  // Custom InputTypes
  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoicesCountOutputType
     */
    select?: InvoicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountInvoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountInvoice_paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_paymentsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    invoice_items: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | ProductsCountOutputTypeCountInvoice_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountInvoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
  }


  /**
   * Count Type ProvidersCountOutputType
   */

  export type ProvidersCountOutputType = {
    products: number
  }

  export type ProvidersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProvidersCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvidersCountOutputType
     */
    select?: ProvidersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    companies: number
    customers: number
    invoices: number
    products: number
    providers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | UsersCountOutputTypeCountCompaniesArgs
    customers?: boolean | UsersCountOutputTypeCountCustomersArgs
    invoices?: boolean | UsersCountOutputTypeCountInvoicesArgs
    products?: boolean | UsersCountOutputTypeCountProductsArgs
    providers?: boolean | UsersCountOutputTypeCountProvidersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companiesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: providersWhereInput
  }


  /**
   * Count Type Invoice_statusesCountOutputType
   */

  export type Invoice_statusesCountOutputType = {
    invoices: number
  }

  export type Invoice_statusesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | Invoice_statusesCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * Invoice_statusesCountOutputType without action
   */
  export type Invoice_statusesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice_statusesCountOutputType
     */
    select?: Invoice_statusesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Invoice_statusesCountOutputType without action
   */
  export type Invoice_statusesCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data?: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CompaniesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    country: string | null
    user_id: number | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    country: string | null
    user_id: number | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    street: number
    city: number
    state: number
    zip_code: number
    country: number
    user_id: number
    _all: number
  }


  export type CompaniesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CompaniesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CompaniesMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    country?: true
    user_id?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    country?: true
    user_id?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    country?: true
    user_id?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to aggregate.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompaniesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompaniesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type companiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companiesWhereInput
    orderBy?: companiesOrderByWithAggregationInput | companiesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: companiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _avg?: CompaniesAvgAggregateInputType
    _sum?: CompaniesSumAggregateInputType
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: number
    name: string | null
    phone: string | null
    email: string | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    country: string | null
    user_id: number | null
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends companiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type companiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
    users?: boolean | companies$usersArgs<ExtArgs>
    customers?: boolean | companies$customersArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
    users?: boolean | companies$usersArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
    users?: boolean | companies$usersArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
  }

  export type companiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "street" | "city" | "state" | "zip_code" | "country" | "user_id", ExtArgs["result"]["companies"]>
  export type companiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | companies$usersArgs<ExtArgs>
    customers?: boolean | companies$customersArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | companies$usersArgs<ExtArgs>
  }
  export type companiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | companies$usersArgs<ExtArgs>
  }

  export type $companiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companies"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      customers: Prisma.$customersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      phone: string | null
      email: string | null
      street: string | null
      city: string | null
      state: string | null
      zip_code: string | null
      country: string | null
      user_id: number | null
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type companiesGetPayload<S extends boolean | null | undefined | companiesDefaultArgs> = $Result.GetResult<Prisma.$companiesPayload, S>

  type companiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface companiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companies'], meta: { name: 'companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {companiesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companiesFindUniqueArgs>(args: SelectSubset<T, companiesFindUniqueArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companiesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companiesFindUniqueOrThrowArgs>(args: SelectSubset<T, companiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companiesFindFirstArgs>(args?: SelectSubset<T, companiesFindFirstArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companiesFindFirstOrThrowArgs>(args?: SelectSubset<T, companiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companiesFindManyArgs>(args?: SelectSubset<T, companiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {companiesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends companiesCreateArgs>(args: SelectSubset<T, companiesCreateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companiesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companiesCreateManyArgs>(args?: SelectSubset<T, companiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companiesCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companiesCreateManyAndReturnArgs>(args?: SelectSubset<T, companiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companies.
     * @param {companiesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends companiesDeleteArgs>(args: SelectSubset<T, companiesDeleteArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {companiesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companiesUpdateArgs>(args: SelectSubset<T, companiesUpdateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companiesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companiesDeleteManyArgs>(args?: SelectSubset<T, companiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companiesUpdateManyArgs>(args: SelectSubset<T, companiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companiesUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends companiesUpdateManyAndReturnArgs>(args: SelectSubset<T, companiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companies.
     * @param {companiesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends companiesUpsertArgs>(args: SelectSubset<T, companiesUpsertArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companiesCountArgs>(
      args?: Subset<T, companiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companiesGroupByArgs['orderBy'] }
        : { orderBy?: companiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companies model
   */
  readonly fields: companiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends companies$usersArgs<ExtArgs> = {}>(args?: Subset<T, companies$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customers<T extends companies$customersArgs<ExtArgs> = {}>(args?: Subset<T, companies$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the companies model
   */
  interface companiesFieldRefs {
    readonly id: FieldRef<"companies", 'Int'>
    readonly name: FieldRef<"companies", 'String'>
    readonly phone: FieldRef<"companies", 'String'>
    readonly email: FieldRef<"companies", 'String'>
    readonly street: FieldRef<"companies", 'String'>
    readonly city: FieldRef<"companies", 'String'>
    readonly state: FieldRef<"companies", 'String'>
    readonly zip_code: FieldRef<"companies", 'String'>
    readonly country: FieldRef<"companies", 'String'>
    readonly user_id: FieldRef<"companies", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * companies findUnique
   */
  export type companiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findUniqueOrThrow
   */
  export type companiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findFirst
   */
  export type companiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findFirstOrThrow
   */
  export type companiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findMany
   */
  export type companiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies create
   */
  export type companiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to create a companies.
     */
    data?: XOR<companiesCreateInput, companiesUncheckedCreateInput>
  }

  /**
   * companies createMany
   */
  export type companiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companies createManyAndReturn
   */
  export type companiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * companies update
   */
  export type companiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to update a companies.
     */
    data: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
    /**
     * Choose, which companies to update.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies updateMany
   */
  export type companiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * companies updateManyAndReturn
   */
  export type companiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * companies upsert
   */
  export type companiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The filter to search for the companies to update in case it exists.
     */
    where: companiesWhereUniqueInput
    /**
     * In case the companies found by the `where` argument doesn't exist, create a new companies with this data.
     */
    create: XOR<companiesCreateInput, companiesUncheckedCreateInput>
    /**
     * In case the companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
  }

  /**
   * companies delete
   */
  export type companiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter which companies to delete.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies deleteMany
   */
  export type companiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * companies.users
   */
  export type companies$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * companies.customers
   */
  export type companies$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    where?: customersWhereInput
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    cursor?: customersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * companies without action
   */
  export type companiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
  }


  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    id: number | null
    company_id: number | null
    user_id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    id: number | null
    company_id: number | null
    user_id: number | null
  }

  export type CustomersMinAggregateOutputType = {
    id: number | null
    identifier: string | null
    name: string | null
    email: string | null
    phone: string | null
    notes: string | null
    company_id: number | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    country: string | null
    user_id: number | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: number | null
    identifier: string | null
    name: string | null
    email: string | null
    phone: string | null
    notes: string | null
    company_id: number | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    country: string | null
    user_id: number | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    identifier: number
    name: number
    email: number
    phone: number
    notes: number
    company_id: number
    street: number
    city: number
    state: number
    zip_code: number
    country: number
    user_id: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
  }

  export type CustomersSumAggregateInputType = {
    id?: true
    company_id?: true
    user_id?: true
  }

  export type CustomersMinAggregateInputType = {
    id?: true
    identifier?: true
    name?: true
    email?: true
    phone?: true
    notes?: true
    company_id?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    country?: true
    user_id?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    identifier?: true
    name?: true
    email?: true
    phone?: true
    notes?: true
    company_id?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    country?: true
    user_id?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    identifier?: true
    name?: true
    email?: true
    phone?: true
    notes?: true
    company_id?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    country?: true
    user_id?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: number
    identifier: string | null
    name: string
    email: string | null
    phone: string | null
    notes: string | null
    company_id: number | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    country: string | null
    user_id: number | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    notes?: boolean
    company_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
    companies?: boolean | customers$companiesArgs<ExtArgs>
    users?: boolean | customers$usersArgs<ExtArgs>
    invoices?: boolean | customers$invoicesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    notes?: boolean
    company_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
    companies?: boolean | customers$companiesArgs<ExtArgs>
    users?: boolean | customers$usersArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    notes?: boolean
    company_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
    companies?: boolean | customers$companiesArgs<ExtArgs>
    users?: boolean | customers$usersArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    id?: boolean
    identifier?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    notes?: boolean
    company_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "name" | "email" | "phone" | "notes" | "company_id" | "street" | "city" | "state" | "zip_code" | "country" | "user_id", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | customers$companiesArgs<ExtArgs>
    users?: boolean | customers$usersArgs<ExtArgs>
    invoices?: boolean | customers$invoicesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | customers$companiesArgs<ExtArgs>
    users?: boolean | customers$usersArgs<ExtArgs>
  }
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | customers$companiesArgs<ExtArgs>
    users?: boolean | customers$usersArgs<ExtArgs>
  }

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      companies: Prisma.$companiesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      identifier: string | null
      name: string
      email: string | null
      phone: string | null
      notes: string | null
      company_id: number | null
      street: string | null
      city: string | null
      state: string | null
      zip_code: string | null
      country: string | null
      user_id: number | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends customers$companiesArgs<ExtArgs> = {}>(args?: Subset<T, customers$companiesArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends customers$usersArgs<ExtArgs> = {}>(args?: Subset<T, customers$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoices<T extends customers$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, customers$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly id: FieldRef<"customers", 'Int'>
    readonly identifier: FieldRef<"customers", 'String'>
    readonly name: FieldRef<"customers", 'String'>
    readonly email: FieldRef<"customers", 'String'>
    readonly phone: FieldRef<"customers", 'String'>
    readonly notes: FieldRef<"customers", 'String'>
    readonly company_id: FieldRef<"customers", 'Int'>
    readonly street: FieldRef<"customers", 'String'>
    readonly city: FieldRef<"customers", 'String'>
    readonly state: FieldRef<"customers", 'String'>
    readonly zip_code: FieldRef<"customers", 'String'>
    readonly country: FieldRef<"customers", 'String'>
    readonly user_id: FieldRef<"customers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.companies
   */
  export type customers$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    where?: companiesWhereInput
  }

  /**
   * customers.users
   */
  export type customers$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * customers.invoices
   */
  export type customers$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    amount: Decimal | null
    user_id: number | null
    status_id: number | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
  }

  export type InvoicesSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    amount: Decimal | null
    user_id: number | null
    status_id: number | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: number | null
    customer_id: number | null
    amount: Decimal | null
    date: Date | null
    due_date: Date | null
    user_id: number | null
    payment_date: Date | null
    status_id: number | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: number | null
    customer_id: number | null
    amount: Decimal | null
    date: Date | null
    due_date: Date | null
    user_id: number | null
    payment_date: Date | null
    status_id: number | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    customer_id: number
    amount: number
    date: number
    due_date: number
    user_id: number
    payment_date: number
    status_id: number
    subtotal: number
    tax_amount: number
    discount_amount: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    id?: true
    customer_id?: true
    amount?: true
    user_id?: true
    status_id?: true
    subtotal?: true
    tax_amount?: true
    discount_amount?: true
  }

  export type InvoicesSumAggregateInputType = {
    id?: true
    customer_id?: true
    amount?: true
    user_id?: true
    status_id?: true
    subtotal?: true
    tax_amount?: true
    discount_amount?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    customer_id?: true
    amount?: true
    date?: true
    due_date?: true
    user_id?: true
    payment_date?: true
    status_id?: true
    subtotal?: true
    tax_amount?: true
    discount_amount?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    customer_id?: true
    amount?: true
    date?: true
    due_date?: true
    user_id?: true
    payment_date?: true
    status_id?: true
    subtotal?: true
    tax_amount?: true
    discount_amount?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    customer_id?: true
    amount?: true
    date?: true
    due_date?: true
    user_id?: true
    payment_date?: true
    status_id?: true
    subtotal?: true
    tax_amount?: true
    discount_amount?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to aggregate.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type invoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithAggregationInput | invoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: invoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: number
    customer_id: number
    amount: Decimal | null
    date: Date
    due_date: Date
    user_id: number | null
    payment_date: Date | null
    status_id: number | null
    subtotal: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends invoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type invoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    amount?: boolean
    date?: boolean
    due_date?: boolean
    user_id?: boolean
    payment_date?: boolean
    status_id?: boolean
    subtotal?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    invoice_items?: boolean | invoices$invoice_itemsArgs<ExtArgs>
    invoice_payments?: boolean | invoices$invoice_paymentsArgs<ExtArgs>
    invoice_statuses?: boolean | invoices$invoice_statusesArgs<ExtArgs>
    users?: boolean | invoices$usersArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    amount?: boolean
    date?: boolean
    due_date?: boolean
    user_id?: boolean
    payment_date?: boolean
    status_id?: boolean
    subtotal?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    invoice_statuses?: boolean | invoices$invoice_statusesArgs<ExtArgs>
    users?: boolean | invoices$usersArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    amount?: boolean
    date?: boolean
    due_date?: boolean
    user_id?: boolean
    payment_date?: boolean
    status_id?: boolean
    subtotal?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    invoice_statuses?: boolean | invoices$invoice_statusesArgs<ExtArgs>
    users?: boolean | invoices$usersArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectScalar = {
    id?: boolean
    customer_id?: boolean
    amount?: boolean
    date?: boolean
    due_date?: boolean
    user_id?: boolean
    payment_date?: boolean
    status_id?: boolean
    subtotal?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
  }

  export type invoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "amount" | "date" | "due_date" | "user_id" | "payment_date" | "status_id" | "subtotal" | "tax_amount" | "discount_amount", ExtArgs["result"]["invoices"]>
  export type invoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | invoices$invoice_itemsArgs<ExtArgs>
    invoice_payments?: boolean | invoices$invoice_paymentsArgs<ExtArgs>
    invoice_statuses?: boolean | invoices$invoice_statusesArgs<ExtArgs>
    users?: boolean | invoices$usersArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type invoicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_statuses?: boolean | invoices$invoice_statusesArgs<ExtArgs>
    users?: boolean | invoices$usersArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type invoicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_statuses?: boolean | invoices$invoice_statusesArgs<ExtArgs>
    users?: boolean | invoices$usersArgs<ExtArgs>
    customers?: boolean | customersDefaultArgs<ExtArgs>
  }

  export type $invoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoices"
    objects: {
      invoice_items: Prisma.$invoice_itemsPayload<ExtArgs>[]
      invoice_payments: Prisma.$invoice_paymentsPayload<ExtArgs>[]
      invoice_statuses: Prisma.$invoice_statusesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
      customers: Prisma.$customersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_id: number
      amount: Prisma.Decimal | null
      date: Date
      due_date: Date
      user_id: number | null
      payment_date: Date | null
      status_id: number | null
      subtotal: Prisma.Decimal | null
      tax_amount: Prisma.Decimal | null
      discount_amount: Prisma.Decimal | null
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type invoicesGetPayload<S extends boolean | null | undefined | invoicesDefaultArgs> = $Result.GetResult<Prisma.$invoicesPayload, S>

  type invoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface invoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoices'], meta: { name: 'invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {invoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoicesFindUniqueArgs>(args: SelectSubset<T, invoicesFindUniqueArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, invoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoicesFindFirstArgs>(args?: SelectSubset<T, invoicesFindFirstArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, invoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoicesFindManyArgs>(args?: SelectSubset<T, invoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {invoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends invoicesCreateArgs>(args: SelectSubset<T, invoicesCreateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {invoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoicesCreateManyArgs>(args?: SelectSubset<T, invoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {invoicesCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoicesCreateManyAndReturnArgs>(args?: SelectSubset<T, invoicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoices.
     * @param {invoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends invoicesDeleteArgs>(args: SelectSubset<T, invoicesDeleteArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {invoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoicesUpdateArgs>(args: SelectSubset<T, invoicesUpdateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {invoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoicesDeleteManyArgs>(args?: SelectSubset<T, invoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoicesUpdateManyArgs>(args: SelectSubset<T, invoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {invoicesUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invoicesUpdateManyAndReturnArgs>(args: SelectSubset<T, invoicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoices.
     * @param {invoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends invoicesUpsertArgs>(args: SelectSubset<T, invoicesUpsertArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoicesCountArgs>(
      args?: Subset<T, invoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicesGroupByArgs['orderBy'] }
        : { orderBy?: invoicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoices model
   */
  readonly fields: invoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice_items<T extends invoices$invoice_itemsArgs<ExtArgs> = {}>(args?: Subset<T, invoices$invoice_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoice_payments<T extends invoices$invoice_paymentsArgs<ExtArgs> = {}>(args?: Subset<T, invoices$invoice_paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoice_statuses<T extends invoices$invoice_statusesArgs<ExtArgs> = {}>(args?: Subset<T, invoices$invoice_statusesArgs<ExtArgs>>): Prisma__invoice_statusesClient<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends invoices$usersArgs<ExtArgs> = {}>(args?: Subset<T, invoices$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customers<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoices model
   */
  interface invoicesFieldRefs {
    readonly id: FieldRef<"invoices", 'Int'>
    readonly customer_id: FieldRef<"invoices", 'Int'>
    readonly amount: FieldRef<"invoices", 'Decimal'>
    readonly date: FieldRef<"invoices", 'DateTime'>
    readonly due_date: FieldRef<"invoices", 'DateTime'>
    readonly user_id: FieldRef<"invoices", 'Int'>
    readonly payment_date: FieldRef<"invoices", 'DateTime'>
    readonly status_id: FieldRef<"invoices", 'Int'>
    readonly subtotal: FieldRef<"invoices", 'Decimal'>
    readonly tax_amount: FieldRef<"invoices", 'Decimal'>
    readonly discount_amount: FieldRef<"invoices", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * invoices findUnique
   */
  export type invoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findUniqueOrThrow
   */
  export type invoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findFirst
   */
  export type invoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findFirstOrThrow
   */
  export type invoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findMany
   */
  export type invoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices create
   */
  export type invoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a invoices.
     */
    data: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
  }

  /**
   * invoices createMany
   */
  export type invoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoices createManyAndReturn
   */
  export type invoicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices update
   */
  export type invoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a invoices.
     */
    data: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
    /**
     * Choose, which invoices to update.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices updateMany
   */
  export type invoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
  }

  /**
   * invoices updateManyAndReturn
   */
  export type invoicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices upsert
   */
  export type invoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the invoices to update in case it exists.
     */
    where: invoicesWhereUniqueInput
    /**
     * In case the invoices found by the `where` argument doesn't exist, create a new invoices with this data.
     */
    create: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
    /**
     * In case the invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
  }

  /**
   * invoices delete
   */
  export type invoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter which invoices to delete.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices deleteMany
   */
  export type invoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to delete.
     */
    limit?: number
  }

  /**
   * invoices.invoice_items
   */
  export type invoices$invoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    cursor?: invoice_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoices.invoice_payments
   */
  export type invoices$invoice_paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
    where?: invoice_paymentsWhereInput
    orderBy?: invoice_paymentsOrderByWithRelationInput | invoice_paymentsOrderByWithRelationInput[]
    cursor?: invoice_paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoice_paymentsScalarFieldEnum | Invoice_paymentsScalarFieldEnum[]
  }

  /**
   * invoices.invoice_statuses
   */
  export type invoices$invoice_statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
    where?: invoice_statusesWhereInput
  }

  /**
   * invoices.users
   */
  export type invoices$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * invoices without action
   */
  export type invoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    custom_price: Decimal | null
    quantity: number | null
    provider_id: number | null
    category_id: number | null
    user_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    custom_price: Decimal | null
    quantity: number | null
    provider_id: number | null
    category_id: number | null
    user_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    custom_price: Decimal | null
    quantity: number | null
    provider_id: number | null
    description: string | null
    category_id: number | null
    user_id: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    custom_price: Decimal | null
    quantity: number | null
    provider_id: number | null
    description: string | null
    category_id: number | null
    user_id: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    custom_price: number
    quantity: number
    provider_id: number
    description: number
    category_id: number
    user_id: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    custom_price?: true
    quantity?: true
    provider_id?: true
    category_id?: true
    user_id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    custom_price?: true
    quantity?: true
    provider_id?: true
    category_id?: true
    user_id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    custom_price?: true
    quantity?: true
    provider_id?: true
    description?: true
    category_id?: true
    user_id?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    custom_price?: true
    quantity?: true
    provider_id?: true
    description?: true
    category_id?: true
    user_id?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    custom_price?: true
    quantity?: true
    provider_id?: true
    description?: true
    category_id?: true
    user_id?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string | null
    price: Decimal
    custom_price: Decimal | null
    quantity: number | null
    provider_id: number | null
    description: string | null
    category_id: number | null
    user_id: number | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    custom_price?: boolean
    quantity?: boolean
    provider_id?: boolean
    description?: boolean
    category_id?: boolean
    user_id?: boolean
    invoice_items?: boolean | products$invoice_itemsArgs<ExtArgs>
    users?: boolean | products$usersArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    providers?: boolean | products$providersArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    custom_price?: boolean
    quantity?: boolean
    provider_id?: boolean
    description?: boolean
    category_id?: boolean
    user_id?: boolean
    users?: boolean | products$usersArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    providers?: boolean | products$providersArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    custom_price?: boolean
    quantity?: boolean
    provider_id?: boolean
    description?: boolean
    category_id?: boolean
    user_id?: boolean
    users?: boolean | products$usersArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    providers?: boolean | products$providersArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    custom_price?: boolean
    quantity?: boolean
    provider_id?: boolean
    description?: boolean
    category_id?: boolean
    user_id?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "custom_price" | "quantity" | "provider_id" | "description" | "category_id" | "user_id", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | products$invoice_itemsArgs<ExtArgs>
    users?: boolean | products$usersArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    providers?: boolean | products$providersArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | products$usersArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    providers?: boolean | products$providersArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | products$usersArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    providers?: boolean | products$providersArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      invoice_items: Prisma.$invoice_itemsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      providers: Prisma.$providersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      price: Prisma.Decimal
      custom_price: Prisma.Decimal | null
      quantity: number | null
      provider_id: number | null
      description: string | null
      category_id: number | null
      user_id: number | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice_items<T extends products$invoice_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$invoice_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends products$usersArgs<ExtArgs> = {}>(args?: Subset<T, products$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categories<T extends products$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, products$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    providers<T extends products$providersArgs<ExtArgs> = {}>(args?: Subset<T, products$providersArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly custom_price: FieldRef<"products", 'Decimal'>
    readonly quantity: FieldRef<"products", 'Int'>
    readonly provider_id: FieldRef<"products", 'Int'>
    readonly description: FieldRef<"products", 'String'>
    readonly category_id: FieldRef<"products", 'Int'>
    readonly user_id: FieldRef<"products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.invoice_items
   */
  export type products$invoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    cursor?: invoice_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * products.users
   */
  export type products$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * products.categories
   */
  export type products$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * products.providers
   */
  export type products$providersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    where?: providersWhereInput
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model providers
   */

  export type AggregateProviders = {
    _count: ProvidersCountAggregateOutputType | null
    _avg: ProvidersAvgAggregateOutputType | null
    _sum: ProvidersSumAggregateOutputType | null
    _min: ProvidersMinAggregateOutputType | null
    _max: ProvidersMaxAggregateOutputType | null
  }

  export type ProvidersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ProvidersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ProvidersMinAggregateOutputType = {
    id: number | null
    name: string | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    country: string | null
    user_id: number | null
  }

  export type ProvidersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    country: string | null
    user_id: number | null
  }

  export type ProvidersCountAggregateOutputType = {
    id: number
    name: number
    street: number
    city: number
    state: number
    zip_code: number
    country: number
    user_id: number
    _all: number
  }


  export type ProvidersAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ProvidersSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ProvidersMinAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    country?: true
    user_id?: true
  }

  export type ProvidersMaxAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    country?: true
    user_id?: true
  }

  export type ProvidersCountAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    country?: true
    user_id?: true
    _all?: true
  }

  export type ProvidersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which providers to aggregate.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: providersOrderByWithRelationInput | providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned providers
    **/
    _count?: true | ProvidersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvidersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvidersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvidersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvidersMaxAggregateInputType
  }

  export type GetProvidersAggregateType<T extends ProvidersAggregateArgs> = {
        [P in keyof T & keyof AggregateProviders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviders[P]>
      : GetScalarType<T[P], AggregateProviders[P]>
  }




  export type providersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: providersWhereInput
    orderBy?: providersOrderByWithAggregationInput | providersOrderByWithAggregationInput[]
    by: ProvidersScalarFieldEnum[] | ProvidersScalarFieldEnum
    having?: providersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvidersCountAggregateInputType | true
    _avg?: ProvidersAvgAggregateInputType
    _sum?: ProvidersSumAggregateInputType
    _min?: ProvidersMinAggregateInputType
    _max?: ProvidersMaxAggregateInputType
  }

  export type ProvidersGroupByOutputType = {
    id: number
    name: string
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    country: string | null
    user_id: number | null
    _count: ProvidersCountAggregateOutputType | null
    _avg: ProvidersAvgAggregateOutputType | null
    _sum: ProvidersSumAggregateOutputType | null
    _min: ProvidersMinAggregateOutputType | null
    _max: ProvidersMaxAggregateOutputType | null
  }

  type GetProvidersGroupByPayload<T extends providersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvidersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvidersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvidersGroupByOutputType[P]>
            : GetScalarType<T[P], ProvidersGroupByOutputType[P]>
        }
      >
    >


  export type providersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
    products?: boolean | providers$productsArgs<ExtArgs>
    users?: boolean | providers$usersArgs<ExtArgs>
    _count?: boolean | ProvidersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providers"]>

  export type providersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
    users?: boolean | providers$usersArgs<ExtArgs>
  }, ExtArgs["result"]["providers"]>

  export type providersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
    users?: boolean | providers$usersArgs<ExtArgs>
  }, ExtArgs["result"]["providers"]>

  export type providersSelectScalar = {
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    country?: boolean
    user_id?: boolean
  }

  export type providersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "street" | "city" | "state" | "zip_code" | "country" | "user_id", ExtArgs["result"]["providers"]>
  export type providersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | providers$productsArgs<ExtArgs>
    users?: boolean | providers$usersArgs<ExtArgs>
    _count?: boolean | ProvidersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type providersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | providers$usersArgs<ExtArgs>
  }
  export type providersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | providers$usersArgs<ExtArgs>
  }

  export type $providersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "providers"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      street: string | null
      city: string | null
      state: string | null
      zip_code: string | null
      country: string | null
      user_id: number | null
    }, ExtArgs["result"]["providers"]>
    composites: {}
  }

  type providersGetPayload<S extends boolean | null | undefined | providersDefaultArgs> = $Result.GetResult<Prisma.$providersPayload, S>

  type providersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<providersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvidersCountAggregateInputType | true
    }

  export interface providersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['providers'], meta: { name: 'providers' } }
    /**
     * Find zero or one Providers that matches the filter.
     * @param {providersFindUniqueArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends providersFindUniqueArgs>(args: SelectSubset<T, providersFindUniqueArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Providers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {providersFindUniqueOrThrowArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends providersFindUniqueOrThrowArgs>(args: SelectSubset<T, providersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindFirstArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends providersFindFirstArgs>(args?: SelectSubset<T, providersFindFirstArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Providers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindFirstOrThrowArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends providersFindFirstOrThrowArgs>(args?: SelectSubset<T, providersFindFirstOrThrowArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.providers.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.providers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providersWithIdOnly = await prisma.providers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends providersFindManyArgs>(args?: SelectSubset<T, providersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Providers.
     * @param {providersCreateArgs} args - Arguments to create a Providers.
     * @example
     * // Create one Providers
     * const Providers = await prisma.providers.create({
     *   data: {
     *     // ... data to create a Providers
     *   }
     * })
     * 
     */
    create<T extends providersCreateArgs>(args: SelectSubset<T, providersCreateArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {providersCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const providers = await prisma.providers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends providersCreateManyArgs>(args?: SelectSubset<T, providersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {providersCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const providers = await prisma.providers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providersWithIdOnly = await prisma.providers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends providersCreateManyAndReturnArgs>(args?: SelectSubset<T, providersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Providers.
     * @param {providersDeleteArgs} args - Arguments to delete one Providers.
     * @example
     * // Delete one Providers
     * const Providers = await prisma.providers.delete({
     *   where: {
     *     // ... filter to delete one Providers
     *   }
     * })
     * 
     */
    delete<T extends providersDeleteArgs>(args: SelectSubset<T, providersDeleteArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Providers.
     * @param {providersUpdateArgs} args - Arguments to update one Providers.
     * @example
     * // Update one Providers
     * const providers = await prisma.providers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends providersUpdateArgs>(args: SelectSubset<T, providersUpdateArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {providersDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.providers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends providersDeleteManyArgs>(args?: SelectSubset<T, providersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const providers = await prisma.providers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends providersUpdateManyArgs>(args: SelectSubset<T, providersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {providersUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const providers = await prisma.providers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providersWithIdOnly = await prisma.providers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends providersUpdateManyAndReturnArgs>(args: SelectSubset<T, providersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Providers.
     * @param {providersUpsertArgs} args - Arguments to update or create a Providers.
     * @example
     * // Update or create a Providers
     * const providers = await prisma.providers.upsert({
     *   create: {
     *     // ... data to create a Providers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Providers we want to update
     *   }
     * })
     */
    upsert<T extends providersUpsertArgs>(args: SelectSubset<T, providersUpsertArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.providers.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends providersCountArgs>(
      args?: Subset<T, providersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvidersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvidersAggregateArgs>(args: Subset<T, ProvidersAggregateArgs>): Prisma.PrismaPromise<GetProvidersAggregateType<T>>

    /**
     * Group by Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends providersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: providersGroupByArgs['orderBy'] }
        : { orderBy?: providersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, providersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvidersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the providers model
   */
  readonly fields: providersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for providers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__providersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends providers$productsArgs<ExtArgs> = {}>(args?: Subset<T, providers$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends providers$usersArgs<ExtArgs> = {}>(args?: Subset<T, providers$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the providers model
   */
  interface providersFieldRefs {
    readonly id: FieldRef<"providers", 'Int'>
    readonly name: FieldRef<"providers", 'String'>
    readonly street: FieldRef<"providers", 'String'>
    readonly city: FieldRef<"providers", 'String'>
    readonly state: FieldRef<"providers", 'String'>
    readonly zip_code: FieldRef<"providers", 'String'>
    readonly country: FieldRef<"providers", 'String'>
    readonly user_id: FieldRef<"providers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * providers findUnique
   */
  export type providersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where: providersWhereUniqueInput
  }

  /**
   * providers findUniqueOrThrow
   */
  export type providersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where: providersWhereUniqueInput
  }

  /**
   * providers findFirst
   */
  export type providersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: providersOrderByWithRelationInput | providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providers.
     */
    distinct?: ProvidersScalarFieldEnum | ProvidersScalarFieldEnum[]
  }

  /**
   * providers findFirstOrThrow
   */
  export type providersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: providersOrderByWithRelationInput | providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providers.
     */
    distinct?: ProvidersScalarFieldEnum | ProvidersScalarFieldEnum[]
  }

  /**
   * providers findMany
   */
  export type providersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: providersOrderByWithRelationInput | providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    distinct?: ProvidersScalarFieldEnum | ProvidersScalarFieldEnum[]
  }

  /**
   * providers create
   */
  export type providersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * The data needed to create a providers.
     */
    data: XOR<providersCreateInput, providersUncheckedCreateInput>
  }

  /**
   * providers createMany
   */
  export type providersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many providers.
     */
    data: providersCreateManyInput | providersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * providers createManyAndReturn
   */
  export type providersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * The data used to create many providers.
     */
    data: providersCreateManyInput | providersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * providers update
   */
  export type providersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * The data needed to update a providers.
     */
    data: XOR<providersUpdateInput, providersUncheckedUpdateInput>
    /**
     * Choose, which providers to update.
     */
    where: providersWhereUniqueInput
  }

  /**
   * providers updateMany
   */
  export type providersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update providers.
     */
    data: XOR<providersUpdateManyMutationInput, providersUncheckedUpdateManyInput>
    /**
     * Filter which providers to update
     */
    where?: providersWhereInput
    /**
     * Limit how many providers to update.
     */
    limit?: number
  }

  /**
   * providers updateManyAndReturn
   */
  export type providersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * The data used to update providers.
     */
    data: XOR<providersUpdateManyMutationInput, providersUncheckedUpdateManyInput>
    /**
     * Filter which providers to update
     */
    where?: providersWhereInput
    /**
     * Limit how many providers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * providers upsert
   */
  export type providersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * The filter to search for the providers to update in case it exists.
     */
    where: providersWhereUniqueInput
    /**
     * In case the providers found by the `where` argument doesn't exist, create a new providers with this data.
     */
    create: XOR<providersCreateInput, providersUncheckedCreateInput>
    /**
     * In case the providers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<providersUpdateInput, providersUncheckedUpdateInput>
  }

  /**
   * providers delete
   */
  export type providersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter which providers to delete.
     */
    where: providersWhereUniqueInput
  }

  /**
   * providers deleteMany
   */
  export type providersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which providers to delete
     */
    where?: providersWhereInput
    /**
     * Limit how many providers to delete.
     */
    limit?: number
  }

  /**
   * providers.products
   */
  export type providers$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * providers.users
   */
  export type providers$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * providers without action
   */
  export type providersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {rolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export type rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles updateManyAndReturn
   */
  export type rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    role_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    role_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    role_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    role_id: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role_id?: boolean
    companies?: boolean | users$companiesArgs<ExtArgs>
    customers?: boolean | users$customersArgs<ExtArgs>
    invoices?: boolean | users$invoicesArgs<ExtArgs>
    products?: boolean | users$productsArgs<ExtArgs>
    providers?: boolean | users$providersArgs<ExtArgs>
    roles?: boolean | users$rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role_id?: boolean
    roles?: boolean | users$rolesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role_id?: boolean
    roles?: boolean | users$rolesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role_id?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "role_id", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | users$companiesArgs<ExtArgs>
    customers?: boolean | users$customersArgs<ExtArgs>
    invoices?: boolean | users$invoicesArgs<ExtArgs>
    products?: boolean | users$productsArgs<ExtArgs>
    providers?: boolean | users$providersArgs<ExtArgs>
    roles?: boolean | users$rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | users$rolesArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | users$rolesArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      companies: Prisma.$companiesPayload<ExtArgs>[]
      customers: Prisma.$customersPayload<ExtArgs>[]
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs>[]
      providers: Prisma.$providersPayload<ExtArgs>[]
      roles: Prisma.$rolesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      role_id: number | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends users$companiesArgs<ExtArgs> = {}>(args?: Subset<T, users$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends users$customersArgs<ExtArgs> = {}>(args?: Subset<T, users$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends users$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, users$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends users$productsArgs<ExtArgs> = {}>(args?: Subset<T, users$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    providers<T extends users$providersArgs<ExtArgs> = {}>(args?: Subset<T, users$providersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends users$rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$rolesArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly role_id: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.companies
   */
  export type users$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    where?: companiesWhereInput
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    cursor?: companiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * users.customers
   */
  export type users$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    where?: customersWhereInput
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    cursor?: customersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * users.invoices
   */
  export type users$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * users.products
   */
  export type users$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * users.providers
   */
  export type users$providersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    where?: providersWhereInput
    orderBy?: providersOrderByWithRelationInput | providersOrderByWithRelationInput[]
    cursor?: providersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProvidersScalarFieldEnum | ProvidersScalarFieldEnum[]
  }

  /**
   * users.roles
   */
  export type users$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model invoice_items
   */

  export type AggregateInvoice_items = {
    _count: Invoice_itemsCountAggregateOutputType | null
    _avg: Invoice_itemsAvgAggregateOutputType | null
    _sum: Invoice_itemsSumAggregateOutputType | null
    _min: Invoice_itemsMinAggregateOutputType | null
    _max: Invoice_itemsMaxAggregateOutputType | null
  }

  export type Invoice_itemsAvgAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    item_custom_price: Decimal | null
    subtotal: Decimal | null
    item_discount_value: Decimal | null
    item_discount_amount: Decimal | null
    subtotal_after_discount: Decimal | null
  }

  export type Invoice_itemsSumAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    item_custom_price: Decimal | null
    subtotal: Decimal | null
    item_discount_value: Decimal | null
    item_discount_amount: Decimal | null
    subtotal_after_discount: Decimal | null
  }

  export type Invoice_itemsMinAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    item_custom_price: Decimal | null
    subtotal: Decimal | null
    item_discount_value: Decimal | null
    item_discount_amount: Decimal | null
    subtotal_after_discount: Decimal | null
  }

  export type Invoice_itemsMaxAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    item_custom_price: Decimal | null
    subtotal: Decimal | null
    item_discount_value: Decimal | null
    item_discount_amount: Decimal | null
    subtotal_after_discount: Decimal | null
  }

  export type Invoice_itemsCountAggregateOutputType = {
    id: number
    invoice_id: number
    product_id: number
    quantity: number
    unit_price: number
    item_custom_price: number
    subtotal: number
    item_discount_value: number
    item_discount_amount: number
    subtotal_after_discount: number
    _all: number
  }


  export type Invoice_itemsAvgAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    item_custom_price?: true
    subtotal?: true
    item_discount_value?: true
    item_discount_amount?: true
    subtotal_after_discount?: true
  }

  export type Invoice_itemsSumAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    item_custom_price?: true
    subtotal?: true
    item_discount_value?: true
    item_discount_amount?: true
    subtotal_after_discount?: true
  }

  export type Invoice_itemsMinAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    item_custom_price?: true
    subtotal?: true
    item_discount_value?: true
    item_discount_amount?: true
    subtotal_after_discount?: true
  }

  export type Invoice_itemsMaxAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    item_custom_price?: true
    subtotal?: true
    item_discount_value?: true
    item_discount_amount?: true
    subtotal_after_discount?: true
  }

  export type Invoice_itemsCountAggregateInputType = {
    id?: true
    invoice_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    item_custom_price?: true
    subtotal?: true
    item_discount_value?: true
    item_discount_amount?: true
    subtotal_after_discount?: true
    _all?: true
  }

  export type Invoice_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_items to aggregate.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoice_items
    **/
    _count?: true | Invoice_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invoice_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invoice_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invoice_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invoice_itemsMaxAggregateInputType
  }

  export type GetInvoice_itemsAggregateType<T extends Invoice_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice_items[P]>
      : GetScalarType<T[P], AggregateInvoice_items[P]>
  }




  export type invoice_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithAggregationInput | invoice_itemsOrderByWithAggregationInput[]
    by: Invoice_itemsScalarFieldEnum[] | Invoice_itemsScalarFieldEnum
    having?: invoice_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invoice_itemsCountAggregateInputType | true
    _avg?: Invoice_itemsAvgAggregateInputType
    _sum?: Invoice_itemsSumAggregateInputType
    _min?: Invoice_itemsMinAggregateInputType
    _max?: Invoice_itemsMaxAggregateInputType
  }

  export type Invoice_itemsGroupByOutputType = {
    id: number
    invoice_id: number
    product_id: number
    quantity: number
    unit_price: Decimal
    item_custom_price: Decimal | null
    subtotal: Decimal
    item_discount_value: Decimal | null
    item_discount_amount: Decimal | null
    subtotal_after_discount: Decimal | null
    _count: Invoice_itemsCountAggregateOutputType | null
    _avg: Invoice_itemsAvgAggregateOutputType | null
    _sum: Invoice_itemsSumAggregateOutputType | null
    _min: Invoice_itemsMinAggregateOutputType | null
    _max: Invoice_itemsMaxAggregateOutputType | null
  }

  type GetInvoice_itemsGroupByPayload<T extends invoice_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invoice_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invoice_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invoice_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Invoice_itemsGroupByOutputType[P]>
        }
      >
    >


  export type invoice_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    item_custom_price?: boolean
    subtotal?: boolean
    item_discount_value?: boolean
    item_discount_amount?: boolean
    subtotal_after_discount?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    item_custom_price?: boolean
    subtotal?: boolean
    item_discount_value?: boolean
    item_discount_amount?: boolean
    subtotal_after_discount?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    item_custom_price?: boolean
    subtotal?: boolean
    item_discount_value?: boolean
    item_discount_amount?: boolean
    subtotal_after_discount?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectScalar = {
    id?: boolean
    invoice_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    item_custom_price?: boolean
    subtotal?: boolean
    item_discount_value?: boolean
    item_discount_amount?: boolean
    subtotal_after_discount?: boolean
  }

  export type invoice_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoice_id" | "product_id" | "quantity" | "unit_price" | "item_custom_price" | "subtotal" | "item_discount_value" | "item_discount_amount" | "subtotal_after_discount", ExtArgs["result"]["invoice_items"]>
  export type invoice_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type invoice_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type invoice_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $invoice_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice_items"
    objects: {
      invoices: Prisma.$invoicesPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invoice_id: number
      product_id: number
      quantity: number
      unit_price: Prisma.Decimal
      item_custom_price: Prisma.Decimal | null
      subtotal: Prisma.Decimal
      item_discount_value: Prisma.Decimal | null
      item_discount_amount: Prisma.Decimal | null
      subtotal_after_discount: Prisma.Decimal | null
    }, ExtArgs["result"]["invoice_items"]>
    composites: {}
  }

  type invoice_itemsGetPayload<S extends boolean | null | undefined | invoice_itemsDefaultArgs> = $Result.GetResult<Prisma.$invoice_itemsPayload, S>

  type invoice_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoice_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invoice_itemsCountAggregateInputType | true
    }

  export interface invoice_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice_items'], meta: { name: 'invoice_items' } }
    /**
     * Find zero or one Invoice_items that matches the filter.
     * @param {invoice_itemsFindUniqueArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoice_itemsFindUniqueArgs>(args: SelectSubset<T, invoice_itemsFindUniqueArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoice_itemsFindUniqueOrThrowArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoice_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, invoice_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindFirstArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoice_itemsFindFirstArgs>(args?: SelectSubset<T, invoice_itemsFindFirstArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindFirstOrThrowArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoice_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, invoice_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoice_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoice_items
     * const invoice_items = await prisma.invoice_items.findMany()
     * 
     * // Get first 10 Invoice_items
     * const invoice_items = await prisma.invoice_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoice_itemsWithIdOnly = await prisma.invoice_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoice_itemsFindManyArgs>(args?: SelectSubset<T, invoice_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice_items.
     * @param {invoice_itemsCreateArgs} args - Arguments to create a Invoice_items.
     * @example
     * // Create one Invoice_items
     * const Invoice_items = await prisma.invoice_items.create({
     *   data: {
     *     // ... data to create a Invoice_items
     *   }
     * })
     * 
     */
    create<T extends invoice_itemsCreateArgs>(args: SelectSubset<T, invoice_itemsCreateArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoice_items.
     * @param {invoice_itemsCreateManyArgs} args - Arguments to create many Invoice_items.
     * @example
     * // Create many Invoice_items
     * const invoice_items = await prisma.invoice_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoice_itemsCreateManyArgs>(args?: SelectSubset<T, invoice_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoice_items and returns the data saved in the database.
     * @param {invoice_itemsCreateManyAndReturnArgs} args - Arguments to create many Invoice_items.
     * @example
     * // Create many Invoice_items
     * const invoice_items = await prisma.invoice_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoice_items and only return the `id`
     * const invoice_itemsWithIdOnly = await prisma.invoice_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoice_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, invoice_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice_items.
     * @param {invoice_itemsDeleteArgs} args - Arguments to delete one Invoice_items.
     * @example
     * // Delete one Invoice_items
     * const Invoice_items = await prisma.invoice_items.delete({
     *   where: {
     *     // ... filter to delete one Invoice_items
     *   }
     * })
     * 
     */
    delete<T extends invoice_itemsDeleteArgs>(args: SelectSubset<T, invoice_itemsDeleteArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice_items.
     * @param {invoice_itemsUpdateArgs} args - Arguments to update one Invoice_items.
     * @example
     * // Update one Invoice_items
     * const invoice_items = await prisma.invoice_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoice_itemsUpdateArgs>(args: SelectSubset<T, invoice_itemsUpdateArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoice_items.
     * @param {invoice_itemsDeleteManyArgs} args - Arguments to filter Invoice_items to delete.
     * @example
     * // Delete a few Invoice_items
     * const { count } = await prisma.invoice_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoice_itemsDeleteManyArgs>(args?: SelectSubset<T, invoice_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoice_items
     * const invoice_items = await prisma.invoice_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoice_itemsUpdateManyArgs>(args: SelectSubset<T, invoice_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_items and returns the data updated in the database.
     * @param {invoice_itemsUpdateManyAndReturnArgs} args - Arguments to update many Invoice_items.
     * @example
     * // Update many Invoice_items
     * const invoice_items = await prisma.invoice_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoice_items and only return the `id`
     * const invoice_itemsWithIdOnly = await prisma.invoice_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invoice_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, invoice_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice_items.
     * @param {invoice_itemsUpsertArgs} args - Arguments to update or create a Invoice_items.
     * @example
     * // Update or create a Invoice_items
     * const invoice_items = await prisma.invoice_items.upsert({
     *   create: {
     *     // ... data to create a Invoice_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice_items we want to update
     *   }
     * })
     */
    upsert<T extends invoice_itemsUpsertArgs>(args: SelectSubset<T, invoice_itemsUpsertArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsCountArgs} args - Arguments to filter Invoice_items to count.
     * @example
     * // Count the number of Invoice_items
     * const count = await prisma.invoice_items.count({
     *   where: {
     *     // ... the filter for the Invoice_items we want to count
     *   }
     * })
    **/
    count<T extends invoice_itemsCountArgs>(
      args?: Subset<T, invoice_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invoice_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invoice_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Invoice_itemsAggregateArgs>(args: Subset<T, Invoice_itemsAggregateArgs>): Prisma.PrismaPromise<GetInvoice_itemsAggregateType<T>>

    /**
     * Group by Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoice_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoice_itemsGroupByArgs['orderBy'] }
        : { orderBy?: invoice_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoice_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoice_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice_items model
   */
  readonly fields: invoice_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoice_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends invoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, invoicesDefaultArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoice_items model
   */
  interface invoice_itemsFieldRefs {
    readonly id: FieldRef<"invoice_items", 'Int'>
    readonly invoice_id: FieldRef<"invoice_items", 'Int'>
    readonly product_id: FieldRef<"invoice_items", 'Int'>
    readonly quantity: FieldRef<"invoice_items", 'Int'>
    readonly unit_price: FieldRef<"invoice_items", 'Decimal'>
    readonly item_custom_price: FieldRef<"invoice_items", 'Decimal'>
    readonly subtotal: FieldRef<"invoice_items", 'Decimal'>
    readonly item_discount_value: FieldRef<"invoice_items", 'Decimal'>
    readonly item_discount_amount: FieldRef<"invoice_items", 'Decimal'>
    readonly subtotal_after_discount: FieldRef<"invoice_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * invoice_items findUnique
   */
  export type invoice_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items findUniqueOrThrow
   */
  export type invoice_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items findFirst
   */
  export type invoice_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_items.
     */
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items findFirstOrThrow
   */
  export type invoice_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_items.
     */
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items findMany
   */
  export type invoice_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items create
   */
  export type invoice_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a invoice_items.
     */
    data: XOR<invoice_itemsCreateInput, invoice_itemsUncheckedCreateInput>
  }

  /**
   * invoice_items createMany
   */
  export type invoice_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoice_items.
     */
    data: invoice_itemsCreateManyInput | invoice_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice_items createManyAndReturn
   */
  export type invoice_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many invoice_items.
     */
    data: invoice_itemsCreateManyInput | invoice_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice_items update
   */
  export type invoice_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a invoice_items.
     */
    data: XOR<invoice_itemsUpdateInput, invoice_itemsUncheckedUpdateInput>
    /**
     * Choose, which invoice_items to update.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items updateMany
   */
  export type invoice_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoice_items.
     */
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_items to update
     */
    where?: invoice_itemsWhereInput
    /**
     * Limit how many invoice_items to update.
     */
    limit?: number
  }

  /**
   * invoice_items updateManyAndReturn
   */
  export type invoice_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * The data used to update invoice_items.
     */
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_items to update
     */
    where?: invoice_itemsWhereInput
    /**
     * Limit how many invoice_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice_items upsert
   */
  export type invoice_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the invoice_items to update in case it exists.
     */
    where: invoice_itemsWhereUniqueInput
    /**
     * In case the invoice_items found by the `where` argument doesn't exist, create a new invoice_items with this data.
     */
    create: XOR<invoice_itemsCreateInput, invoice_itemsUncheckedCreateInput>
    /**
     * In case the invoice_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoice_itemsUpdateInput, invoice_itemsUncheckedUpdateInput>
  }

  /**
   * invoice_items delete
   */
  export type invoice_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter which invoice_items to delete.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items deleteMany
   */
  export type invoice_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_items to delete
     */
    where?: invoice_itemsWhereInput
    /**
     * Limit how many invoice_items to delete.
     */
    limit?: number
  }

  /**
   * invoice_items without action
   */
  export type invoice_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
  }


  /**
   * Model invoice_statuses
   */

  export type AggregateInvoice_statuses = {
    _count: Invoice_statusesCountAggregateOutputType | null
    _avg: Invoice_statusesAvgAggregateOutputType | null
    _sum: Invoice_statusesSumAggregateOutputType | null
    _min: Invoice_statusesMinAggregateOutputType | null
    _max: Invoice_statusesMaxAggregateOutputType | null
  }

  export type Invoice_statusesAvgAggregateOutputType = {
    id: number | null
  }

  export type Invoice_statusesSumAggregateOutputType = {
    id: number | null
  }

  export type Invoice_statusesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Invoice_statusesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Invoice_statusesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Invoice_statusesAvgAggregateInputType = {
    id?: true
  }

  export type Invoice_statusesSumAggregateInputType = {
    id?: true
  }

  export type Invoice_statusesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Invoice_statusesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Invoice_statusesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Invoice_statusesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_statuses to aggregate.
     */
    where?: invoice_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_statuses to fetch.
     */
    orderBy?: invoice_statusesOrderByWithRelationInput | invoice_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoice_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoice_statuses
    **/
    _count?: true | Invoice_statusesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invoice_statusesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invoice_statusesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invoice_statusesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invoice_statusesMaxAggregateInputType
  }

  export type GetInvoice_statusesAggregateType<T extends Invoice_statusesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice_statuses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice_statuses[P]>
      : GetScalarType<T[P], AggregateInvoice_statuses[P]>
  }




  export type invoice_statusesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_statusesWhereInput
    orderBy?: invoice_statusesOrderByWithAggregationInput | invoice_statusesOrderByWithAggregationInput[]
    by: Invoice_statusesScalarFieldEnum[] | Invoice_statusesScalarFieldEnum
    having?: invoice_statusesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invoice_statusesCountAggregateInputType | true
    _avg?: Invoice_statusesAvgAggregateInputType
    _sum?: Invoice_statusesSumAggregateInputType
    _min?: Invoice_statusesMinAggregateInputType
    _max?: Invoice_statusesMaxAggregateInputType
  }

  export type Invoice_statusesGroupByOutputType = {
    id: number
    name: string
    _count: Invoice_statusesCountAggregateOutputType | null
    _avg: Invoice_statusesAvgAggregateOutputType | null
    _sum: Invoice_statusesSumAggregateOutputType | null
    _min: Invoice_statusesMinAggregateOutputType | null
    _max: Invoice_statusesMaxAggregateOutputType | null
  }

  type GetInvoice_statusesGroupByPayload<T extends invoice_statusesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invoice_statusesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invoice_statusesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invoice_statusesGroupByOutputType[P]>
            : GetScalarType<T[P], Invoice_statusesGroupByOutputType[P]>
        }
      >
    >


  export type invoice_statusesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    invoices?: boolean | invoice_statuses$invoicesArgs<ExtArgs>
    _count?: boolean | Invoice_statusesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_statuses"]>

  export type invoice_statusesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["invoice_statuses"]>

  export type invoice_statusesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["invoice_statuses"]>

  export type invoice_statusesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type invoice_statusesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["invoice_statuses"]>
  export type invoice_statusesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoice_statuses$invoicesArgs<ExtArgs>
    _count?: boolean | Invoice_statusesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type invoice_statusesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type invoice_statusesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $invoice_statusesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice_statuses"
    objects: {
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["invoice_statuses"]>
    composites: {}
  }

  type invoice_statusesGetPayload<S extends boolean | null | undefined | invoice_statusesDefaultArgs> = $Result.GetResult<Prisma.$invoice_statusesPayload, S>

  type invoice_statusesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoice_statusesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invoice_statusesCountAggregateInputType | true
    }

  export interface invoice_statusesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice_statuses'], meta: { name: 'invoice_statuses' } }
    /**
     * Find zero or one Invoice_statuses that matches the filter.
     * @param {invoice_statusesFindUniqueArgs} args - Arguments to find a Invoice_statuses
     * @example
     * // Get one Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoice_statusesFindUniqueArgs>(args: SelectSubset<T, invoice_statusesFindUniqueArgs<ExtArgs>>): Prisma__invoice_statusesClient<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice_statuses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoice_statusesFindUniqueOrThrowArgs} args - Arguments to find a Invoice_statuses
     * @example
     * // Get one Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoice_statusesFindUniqueOrThrowArgs>(args: SelectSubset<T, invoice_statusesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoice_statusesClient<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_statusesFindFirstArgs} args - Arguments to find a Invoice_statuses
     * @example
     * // Get one Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoice_statusesFindFirstArgs>(args?: SelectSubset<T, invoice_statusesFindFirstArgs<ExtArgs>>): Prisma__invoice_statusesClient<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_statuses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_statusesFindFirstOrThrowArgs} args - Arguments to find a Invoice_statuses
     * @example
     * // Get one Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoice_statusesFindFirstOrThrowArgs>(args?: SelectSubset<T, invoice_statusesFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoice_statusesClient<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoice_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_statusesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.findMany()
     * 
     * // Get first 10 Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoice_statusesWithIdOnly = await prisma.invoice_statuses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoice_statusesFindManyArgs>(args?: SelectSubset<T, invoice_statusesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice_statuses.
     * @param {invoice_statusesCreateArgs} args - Arguments to create a Invoice_statuses.
     * @example
     * // Create one Invoice_statuses
     * const Invoice_statuses = await prisma.invoice_statuses.create({
     *   data: {
     *     // ... data to create a Invoice_statuses
     *   }
     * })
     * 
     */
    create<T extends invoice_statusesCreateArgs>(args: SelectSubset<T, invoice_statusesCreateArgs<ExtArgs>>): Prisma__invoice_statusesClient<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoice_statuses.
     * @param {invoice_statusesCreateManyArgs} args - Arguments to create many Invoice_statuses.
     * @example
     * // Create many Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoice_statusesCreateManyArgs>(args?: SelectSubset<T, invoice_statusesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoice_statuses and returns the data saved in the database.
     * @param {invoice_statusesCreateManyAndReturnArgs} args - Arguments to create many Invoice_statuses.
     * @example
     * // Create many Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoice_statuses and only return the `id`
     * const invoice_statusesWithIdOnly = await prisma.invoice_statuses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoice_statusesCreateManyAndReturnArgs>(args?: SelectSubset<T, invoice_statusesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice_statuses.
     * @param {invoice_statusesDeleteArgs} args - Arguments to delete one Invoice_statuses.
     * @example
     * // Delete one Invoice_statuses
     * const Invoice_statuses = await prisma.invoice_statuses.delete({
     *   where: {
     *     // ... filter to delete one Invoice_statuses
     *   }
     * })
     * 
     */
    delete<T extends invoice_statusesDeleteArgs>(args: SelectSubset<T, invoice_statusesDeleteArgs<ExtArgs>>): Prisma__invoice_statusesClient<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice_statuses.
     * @param {invoice_statusesUpdateArgs} args - Arguments to update one Invoice_statuses.
     * @example
     * // Update one Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoice_statusesUpdateArgs>(args: SelectSubset<T, invoice_statusesUpdateArgs<ExtArgs>>): Prisma__invoice_statusesClient<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoice_statuses.
     * @param {invoice_statusesDeleteManyArgs} args - Arguments to filter Invoice_statuses to delete.
     * @example
     * // Delete a few Invoice_statuses
     * const { count } = await prisma.invoice_statuses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoice_statusesDeleteManyArgs>(args?: SelectSubset<T, invoice_statusesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_statusesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoice_statusesUpdateManyArgs>(args: SelectSubset<T, invoice_statusesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_statuses and returns the data updated in the database.
     * @param {invoice_statusesUpdateManyAndReturnArgs} args - Arguments to update many Invoice_statuses.
     * @example
     * // Update many Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoice_statuses and only return the `id`
     * const invoice_statusesWithIdOnly = await prisma.invoice_statuses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invoice_statusesUpdateManyAndReturnArgs>(args: SelectSubset<T, invoice_statusesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice_statuses.
     * @param {invoice_statusesUpsertArgs} args - Arguments to update or create a Invoice_statuses.
     * @example
     * // Update or create a Invoice_statuses
     * const invoice_statuses = await prisma.invoice_statuses.upsert({
     *   create: {
     *     // ... data to create a Invoice_statuses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice_statuses we want to update
     *   }
     * })
     */
    upsert<T extends invoice_statusesUpsertArgs>(args: SelectSubset<T, invoice_statusesUpsertArgs<ExtArgs>>): Prisma__invoice_statusesClient<$Result.GetResult<Prisma.$invoice_statusesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoice_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_statusesCountArgs} args - Arguments to filter Invoice_statuses to count.
     * @example
     * // Count the number of Invoice_statuses
     * const count = await prisma.invoice_statuses.count({
     *   where: {
     *     // ... the filter for the Invoice_statuses we want to count
     *   }
     * })
    **/
    count<T extends invoice_statusesCountArgs>(
      args?: Subset<T, invoice_statusesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invoice_statusesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invoice_statusesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Invoice_statusesAggregateArgs>(args: Subset<T, Invoice_statusesAggregateArgs>): Prisma.PrismaPromise<GetInvoice_statusesAggregateType<T>>

    /**
     * Group by Invoice_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_statusesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoice_statusesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoice_statusesGroupByArgs['orderBy'] }
        : { orderBy?: invoice_statusesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoice_statusesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoice_statusesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice_statuses model
   */
  readonly fields: invoice_statusesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice_statuses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoice_statusesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends invoice_statuses$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, invoice_statuses$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoice_statuses model
   */
  interface invoice_statusesFieldRefs {
    readonly id: FieldRef<"invoice_statuses", 'Int'>
    readonly name: FieldRef<"invoice_statuses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * invoice_statuses findUnique
   */
  export type invoice_statusesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
    /**
     * Filter, which invoice_statuses to fetch.
     */
    where: invoice_statusesWhereUniqueInput
  }

  /**
   * invoice_statuses findUniqueOrThrow
   */
  export type invoice_statusesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
    /**
     * Filter, which invoice_statuses to fetch.
     */
    where: invoice_statusesWhereUniqueInput
  }

  /**
   * invoice_statuses findFirst
   */
  export type invoice_statusesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
    /**
     * Filter, which invoice_statuses to fetch.
     */
    where?: invoice_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_statuses to fetch.
     */
    orderBy?: invoice_statusesOrderByWithRelationInput | invoice_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_statuses.
     */
    cursor?: invoice_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_statuses.
     */
    distinct?: Invoice_statusesScalarFieldEnum | Invoice_statusesScalarFieldEnum[]
  }

  /**
   * invoice_statuses findFirstOrThrow
   */
  export type invoice_statusesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
    /**
     * Filter, which invoice_statuses to fetch.
     */
    where?: invoice_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_statuses to fetch.
     */
    orderBy?: invoice_statusesOrderByWithRelationInput | invoice_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_statuses.
     */
    cursor?: invoice_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_statuses.
     */
    distinct?: Invoice_statusesScalarFieldEnum | Invoice_statusesScalarFieldEnum[]
  }

  /**
   * invoice_statuses findMany
   */
  export type invoice_statusesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
    /**
     * Filter, which invoice_statuses to fetch.
     */
    where?: invoice_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_statuses to fetch.
     */
    orderBy?: invoice_statusesOrderByWithRelationInput | invoice_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoice_statuses.
     */
    cursor?: invoice_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_statuses.
     */
    skip?: number
    distinct?: Invoice_statusesScalarFieldEnum | Invoice_statusesScalarFieldEnum[]
  }

  /**
   * invoice_statuses create
   */
  export type invoice_statusesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
    /**
     * The data needed to create a invoice_statuses.
     */
    data: XOR<invoice_statusesCreateInput, invoice_statusesUncheckedCreateInput>
  }

  /**
   * invoice_statuses createMany
   */
  export type invoice_statusesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoice_statuses.
     */
    data: invoice_statusesCreateManyInput | invoice_statusesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice_statuses createManyAndReturn
   */
  export type invoice_statusesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * The data used to create many invoice_statuses.
     */
    data: invoice_statusesCreateManyInput | invoice_statusesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice_statuses update
   */
  export type invoice_statusesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
    /**
     * The data needed to update a invoice_statuses.
     */
    data: XOR<invoice_statusesUpdateInput, invoice_statusesUncheckedUpdateInput>
    /**
     * Choose, which invoice_statuses to update.
     */
    where: invoice_statusesWhereUniqueInput
  }

  /**
   * invoice_statuses updateMany
   */
  export type invoice_statusesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoice_statuses.
     */
    data: XOR<invoice_statusesUpdateManyMutationInput, invoice_statusesUncheckedUpdateManyInput>
    /**
     * Filter which invoice_statuses to update
     */
    where?: invoice_statusesWhereInput
    /**
     * Limit how many invoice_statuses to update.
     */
    limit?: number
  }

  /**
   * invoice_statuses updateManyAndReturn
   */
  export type invoice_statusesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * The data used to update invoice_statuses.
     */
    data: XOR<invoice_statusesUpdateManyMutationInput, invoice_statusesUncheckedUpdateManyInput>
    /**
     * Filter which invoice_statuses to update
     */
    where?: invoice_statusesWhereInput
    /**
     * Limit how many invoice_statuses to update.
     */
    limit?: number
  }

  /**
   * invoice_statuses upsert
   */
  export type invoice_statusesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
    /**
     * The filter to search for the invoice_statuses to update in case it exists.
     */
    where: invoice_statusesWhereUniqueInput
    /**
     * In case the invoice_statuses found by the `where` argument doesn't exist, create a new invoice_statuses with this data.
     */
    create: XOR<invoice_statusesCreateInput, invoice_statusesUncheckedCreateInput>
    /**
     * In case the invoice_statuses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoice_statusesUpdateInput, invoice_statusesUncheckedUpdateInput>
  }

  /**
   * invoice_statuses delete
   */
  export type invoice_statusesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
    /**
     * Filter which invoice_statuses to delete.
     */
    where: invoice_statusesWhereUniqueInput
  }

  /**
   * invoice_statuses deleteMany
   */
  export type invoice_statusesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_statuses to delete
     */
    where?: invoice_statusesWhereInput
    /**
     * Limit how many invoice_statuses to delete.
     */
    limit?: number
  }

  /**
   * invoice_statuses.invoices
   */
  export type invoice_statuses$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoice_statuses without action
   */
  export type invoice_statusesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_statuses
     */
    select?: invoice_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_statuses
     */
    omit?: invoice_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_statusesInclude<ExtArgs> | null
  }


  /**
   * Model invoice_payments
   */

  export type AggregateInvoice_payments = {
    _count: Invoice_paymentsCountAggregateOutputType | null
    _avg: Invoice_paymentsAvgAggregateOutputType | null
    _sum: Invoice_paymentsSumAggregateOutputType | null
    _min: Invoice_paymentsMinAggregateOutputType | null
    _max: Invoice_paymentsMaxAggregateOutputType | null
  }

  export type Invoice_paymentsAvgAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    amount: Decimal | null
  }

  export type Invoice_paymentsSumAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    amount: Decimal | null
  }

  export type Invoice_paymentsMinAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    amount: Decimal | null
    date: Date | null
    method: string | null
    notes: string | null
  }

  export type Invoice_paymentsMaxAggregateOutputType = {
    id: number | null
    invoice_id: number | null
    amount: Decimal | null
    date: Date | null
    method: string | null
    notes: string | null
  }

  export type Invoice_paymentsCountAggregateOutputType = {
    id: number
    invoice_id: number
    amount: number
    date: number
    method: number
    notes: number
    _all: number
  }


  export type Invoice_paymentsAvgAggregateInputType = {
    id?: true
    invoice_id?: true
    amount?: true
  }

  export type Invoice_paymentsSumAggregateInputType = {
    id?: true
    invoice_id?: true
    amount?: true
  }

  export type Invoice_paymentsMinAggregateInputType = {
    id?: true
    invoice_id?: true
    amount?: true
    date?: true
    method?: true
    notes?: true
  }

  export type Invoice_paymentsMaxAggregateInputType = {
    id?: true
    invoice_id?: true
    amount?: true
    date?: true
    method?: true
    notes?: true
  }

  export type Invoice_paymentsCountAggregateInputType = {
    id?: true
    invoice_id?: true
    amount?: true
    date?: true
    method?: true
    notes?: true
    _all?: true
  }

  export type Invoice_paymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_payments to aggregate.
     */
    where?: invoice_paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_payments to fetch.
     */
    orderBy?: invoice_paymentsOrderByWithRelationInput | invoice_paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoice_paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoice_payments
    **/
    _count?: true | Invoice_paymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invoice_paymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invoice_paymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invoice_paymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invoice_paymentsMaxAggregateInputType
  }

  export type GetInvoice_paymentsAggregateType<T extends Invoice_paymentsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice_payments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice_payments[P]>
      : GetScalarType<T[P], AggregateInvoice_payments[P]>
  }




  export type invoice_paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_paymentsWhereInput
    orderBy?: invoice_paymentsOrderByWithAggregationInput | invoice_paymentsOrderByWithAggregationInput[]
    by: Invoice_paymentsScalarFieldEnum[] | Invoice_paymentsScalarFieldEnum
    having?: invoice_paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invoice_paymentsCountAggregateInputType | true
    _avg?: Invoice_paymentsAvgAggregateInputType
    _sum?: Invoice_paymentsSumAggregateInputType
    _min?: Invoice_paymentsMinAggregateInputType
    _max?: Invoice_paymentsMaxAggregateInputType
  }

  export type Invoice_paymentsGroupByOutputType = {
    id: number
    invoice_id: number
    amount: Decimal
    date: Date
    method: string | null
    notes: string | null
    _count: Invoice_paymentsCountAggregateOutputType | null
    _avg: Invoice_paymentsAvgAggregateOutputType | null
    _sum: Invoice_paymentsSumAggregateOutputType | null
    _min: Invoice_paymentsMinAggregateOutputType | null
    _max: Invoice_paymentsMaxAggregateOutputType | null
  }

  type GetInvoice_paymentsGroupByPayload<T extends invoice_paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invoice_paymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invoice_paymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invoice_paymentsGroupByOutputType[P]>
            : GetScalarType<T[P], Invoice_paymentsGroupByOutputType[P]>
        }
      >
    >


  export type invoice_paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    amount?: boolean
    date?: boolean
    method?: boolean
    notes?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_payments"]>

  export type invoice_paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    amount?: boolean
    date?: boolean
    method?: boolean
    notes?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_payments"]>

  export type invoice_paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    amount?: boolean
    date?: boolean
    method?: boolean
    notes?: boolean
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_payments"]>

  export type invoice_paymentsSelectScalar = {
    id?: boolean
    invoice_id?: boolean
    amount?: boolean
    date?: boolean
    method?: boolean
    notes?: boolean
  }

  export type invoice_paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoice_id" | "amount" | "date" | "method" | "notes", ExtArgs["result"]["invoice_payments"]>
  export type invoice_paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }
  export type invoice_paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }
  export type invoice_paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoicesDefaultArgs<ExtArgs>
  }

  export type $invoice_paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice_payments"
    objects: {
      invoices: Prisma.$invoicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invoice_id: number
      amount: Prisma.Decimal
      date: Date
      method: string | null
      notes: string | null
    }, ExtArgs["result"]["invoice_payments"]>
    composites: {}
  }

  type invoice_paymentsGetPayload<S extends boolean | null | undefined | invoice_paymentsDefaultArgs> = $Result.GetResult<Prisma.$invoice_paymentsPayload, S>

  type invoice_paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoice_paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invoice_paymentsCountAggregateInputType | true
    }

  export interface invoice_paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice_payments'], meta: { name: 'invoice_payments' } }
    /**
     * Find zero or one Invoice_payments that matches the filter.
     * @param {invoice_paymentsFindUniqueArgs} args - Arguments to find a Invoice_payments
     * @example
     * // Get one Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoice_paymentsFindUniqueArgs>(args: SelectSubset<T, invoice_paymentsFindUniqueArgs<ExtArgs>>): Prisma__invoice_paymentsClient<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice_payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoice_paymentsFindUniqueOrThrowArgs} args - Arguments to find a Invoice_payments
     * @example
     * // Get one Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoice_paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, invoice_paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoice_paymentsClient<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_paymentsFindFirstArgs} args - Arguments to find a Invoice_payments
     * @example
     * // Get one Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoice_paymentsFindFirstArgs>(args?: SelectSubset<T, invoice_paymentsFindFirstArgs<ExtArgs>>): Prisma__invoice_paymentsClient<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_paymentsFindFirstOrThrowArgs} args - Arguments to find a Invoice_payments
     * @example
     * // Get one Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoice_paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, invoice_paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoice_paymentsClient<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoice_payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.findMany()
     * 
     * // Get first 10 Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoice_paymentsWithIdOnly = await prisma.invoice_payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoice_paymentsFindManyArgs>(args?: SelectSubset<T, invoice_paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice_payments.
     * @param {invoice_paymentsCreateArgs} args - Arguments to create a Invoice_payments.
     * @example
     * // Create one Invoice_payments
     * const Invoice_payments = await prisma.invoice_payments.create({
     *   data: {
     *     // ... data to create a Invoice_payments
     *   }
     * })
     * 
     */
    create<T extends invoice_paymentsCreateArgs>(args: SelectSubset<T, invoice_paymentsCreateArgs<ExtArgs>>): Prisma__invoice_paymentsClient<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoice_payments.
     * @param {invoice_paymentsCreateManyArgs} args - Arguments to create many Invoice_payments.
     * @example
     * // Create many Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoice_paymentsCreateManyArgs>(args?: SelectSubset<T, invoice_paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoice_payments and returns the data saved in the database.
     * @param {invoice_paymentsCreateManyAndReturnArgs} args - Arguments to create many Invoice_payments.
     * @example
     * // Create many Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoice_payments and only return the `id`
     * const invoice_paymentsWithIdOnly = await prisma.invoice_payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoice_paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, invoice_paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice_payments.
     * @param {invoice_paymentsDeleteArgs} args - Arguments to delete one Invoice_payments.
     * @example
     * // Delete one Invoice_payments
     * const Invoice_payments = await prisma.invoice_payments.delete({
     *   where: {
     *     // ... filter to delete one Invoice_payments
     *   }
     * })
     * 
     */
    delete<T extends invoice_paymentsDeleteArgs>(args: SelectSubset<T, invoice_paymentsDeleteArgs<ExtArgs>>): Prisma__invoice_paymentsClient<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice_payments.
     * @param {invoice_paymentsUpdateArgs} args - Arguments to update one Invoice_payments.
     * @example
     * // Update one Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoice_paymentsUpdateArgs>(args: SelectSubset<T, invoice_paymentsUpdateArgs<ExtArgs>>): Prisma__invoice_paymentsClient<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoice_payments.
     * @param {invoice_paymentsDeleteManyArgs} args - Arguments to filter Invoice_payments to delete.
     * @example
     * // Delete a few Invoice_payments
     * const { count } = await prisma.invoice_payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoice_paymentsDeleteManyArgs>(args?: SelectSubset<T, invoice_paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoice_paymentsUpdateManyArgs>(args: SelectSubset<T, invoice_paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_payments and returns the data updated in the database.
     * @param {invoice_paymentsUpdateManyAndReturnArgs} args - Arguments to update many Invoice_payments.
     * @example
     * // Update many Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoice_payments and only return the `id`
     * const invoice_paymentsWithIdOnly = await prisma.invoice_payments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invoice_paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, invoice_paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice_payments.
     * @param {invoice_paymentsUpsertArgs} args - Arguments to update or create a Invoice_payments.
     * @example
     * // Update or create a Invoice_payments
     * const invoice_payments = await prisma.invoice_payments.upsert({
     *   create: {
     *     // ... data to create a Invoice_payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice_payments we want to update
     *   }
     * })
     */
    upsert<T extends invoice_paymentsUpsertArgs>(args: SelectSubset<T, invoice_paymentsUpsertArgs<ExtArgs>>): Prisma__invoice_paymentsClient<$Result.GetResult<Prisma.$invoice_paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoice_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_paymentsCountArgs} args - Arguments to filter Invoice_payments to count.
     * @example
     * // Count the number of Invoice_payments
     * const count = await prisma.invoice_payments.count({
     *   where: {
     *     // ... the filter for the Invoice_payments we want to count
     *   }
     * })
    **/
    count<T extends invoice_paymentsCountArgs>(
      args?: Subset<T, invoice_paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invoice_paymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invoice_paymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Invoice_paymentsAggregateArgs>(args: Subset<T, Invoice_paymentsAggregateArgs>): Prisma.PrismaPromise<GetInvoice_paymentsAggregateType<T>>

    /**
     * Group by Invoice_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoice_paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoice_paymentsGroupByArgs['orderBy'] }
        : { orderBy?: invoice_paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoice_paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoice_paymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice_payments model
   */
  readonly fields: invoice_paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice_payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoice_paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends invoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, invoicesDefaultArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoice_payments model
   */
  interface invoice_paymentsFieldRefs {
    readonly id: FieldRef<"invoice_payments", 'Int'>
    readonly invoice_id: FieldRef<"invoice_payments", 'Int'>
    readonly amount: FieldRef<"invoice_payments", 'Decimal'>
    readonly date: FieldRef<"invoice_payments", 'DateTime'>
    readonly method: FieldRef<"invoice_payments", 'String'>
    readonly notes: FieldRef<"invoice_payments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * invoice_payments findUnique
   */
  export type invoice_paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_payments to fetch.
     */
    where: invoice_paymentsWhereUniqueInput
  }

  /**
   * invoice_payments findUniqueOrThrow
   */
  export type invoice_paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_payments to fetch.
     */
    where: invoice_paymentsWhereUniqueInput
  }

  /**
   * invoice_payments findFirst
   */
  export type invoice_paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_payments to fetch.
     */
    where?: invoice_paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_payments to fetch.
     */
    orderBy?: invoice_paymentsOrderByWithRelationInput | invoice_paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_payments.
     */
    cursor?: invoice_paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_payments.
     */
    distinct?: Invoice_paymentsScalarFieldEnum | Invoice_paymentsScalarFieldEnum[]
  }

  /**
   * invoice_payments findFirstOrThrow
   */
  export type invoice_paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_payments to fetch.
     */
    where?: invoice_paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_payments to fetch.
     */
    orderBy?: invoice_paymentsOrderByWithRelationInput | invoice_paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_payments.
     */
    cursor?: invoice_paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_payments.
     */
    distinct?: Invoice_paymentsScalarFieldEnum | Invoice_paymentsScalarFieldEnum[]
  }

  /**
   * invoice_payments findMany
   */
  export type invoice_paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_payments to fetch.
     */
    where?: invoice_paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_payments to fetch.
     */
    orderBy?: invoice_paymentsOrderByWithRelationInput | invoice_paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoice_payments.
     */
    cursor?: invoice_paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_payments.
     */
    skip?: number
    distinct?: Invoice_paymentsScalarFieldEnum | Invoice_paymentsScalarFieldEnum[]
  }

  /**
   * invoice_payments create
   */
  export type invoice_paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a invoice_payments.
     */
    data: XOR<invoice_paymentsCreateInput, invoice_paymentsUncheckedCreateInput>
  }

  /**
   * invoice_payments createMany
   */
  export type invoice_paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoice_payments.
     */
    data: invoice_paymentsCreateManyInput | invoice_paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice_payments createManyAndReturn
   */
  export type invoice_paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many invoice_payments.
     */
    data: invoice_paymentsCreateManyInput | invoice_paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice_payments update
   */
  export type invoice_paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a invoice_payments.
     */
    data: XOR<invoice_paymentsUpdateInput, invoice_paymentsUncheckedUpdateInput>
    /**
     * Choose, which invoice_payments to update.
     */
    where: invoice_paymentsWhereUniqueInput
  }

  /**
   * invoice_payments updateMany
   */
  export type invoice_paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoice_payments.
     */
    data: XOR<invoice_paymentsUpdateManyMutationInput, invoice_paymentsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_payments to update
     */
    where?: invoice_paymentsWhereInput
    /**
     * Limit how many invoice_payments to update.
     */
    limit?: number
  }

  /**
   * invoice_payments updateManyAndReturn
   */
  export type invoice_paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * The data used to update invoice_payments.
     */
    data: XOR<invoice_paymentsUpdateManyMutationInput, invoice_paymentsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_payments to update
     */
    where?: invoice_paymentsWhereInput
    /**
     * Limit how many invoice_payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice_payments upsert
   */
  export type invoice_paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the invoice_payments to update in case it exists.
     */
    where: invoice_paymentsWhereUniqueInput
    /**
     * In case the invoice_payments found by the `where` argument doesn't exist, create a new invoice_payments with this data.
     */
    create: XOR<invoice_paymentsCreateInput, invoice_paymentsUncheckedCreateInput>
    /**
     * In case the invoice_payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoice_paymentsUpdateInput, invoice_paymentsUncheckedUpdateInput>
  }

  /**
   * invoice_payments delete
   */
  export type invoice_paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
    /**
     * Filter which invoice_payments to delete.
     */
    where: invoice_paymentsWhereUniqueInput
  }

  /**
   * invoice_payments deleteMany
   */
  export type invoice_paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_payments to delete
     */
    where?: invoice_paymentsWhereInput
    /**
     * Limit how many invoice_payments to delete.
     */
    limit?: number
  }

  /**
   * invoice_payments without action
   */
  export type invoice_paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_payments
     */
    select?: invoice_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_payments
     */
    omit?: invoice_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_paymentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    street: 'street',
    city: 'city',
    state: 'state',
    zip_code: 'zip_code',
    country: 'country',
    user_id: 'user_id'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    name: 'name',
    email: 'email',
    phone: 'phone',
    notes: 'notes',
    company_id: 'company_id',
    street: 'street',
    city: 'city',
    state: 'state',
    zip_code: 'zip_code',
    country: 'country',
    user_id: 'user_id'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    amount: 'amount',
    date: 'date',
    due_date: 'due_date',
    user_id: 'user_id',
    payment_date: 'payment_date',
    status_id: 'status_id',
    subtotal: 'subtotal',
    tax_amount: 'tax_amount',
    discount_amount: 'discount_amount'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    custom_price: 'custom_price',
    quantity: 'quantity',
    provider_id: 'provider_id',
    description: 'description',
    category_id: 'category_id',
    user_id: 'user_id'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ProvidersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    street: 'street',
    city: 'city',
    state: 'state',
    zip_code: 'zip_code',
    country: 'country',
    user_id: 'user_id'
  };

  export type ProvidersScalarFieldEnum = (typeof ProvidersScalarFieldEnum)[keyof typeof ProvidersScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    role_id: 'role_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Invoice_itemsScalarFieldEnum: {
    id: 'id',
    invoice_id: 'invoice_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    item_custom_price: 'item_custom_price',
    subtotal: 'subtotal',
    item_discount_value: 'item_discount_value',
    item_discount_amount: 'item_discount_amount',
    subtotal_after_discount: 'subtotal_after_discount'
  };

  export type Invoice_itemsScalarFieldEnum = (typeof Invoice_itemsScalarFieldEnum)[keyof typeof Invoice_itemsScalarFieldEnum]


  export const Invoice_statusesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Invoice_statusesScalarFieldEnum = (typeof Invoice_statusesScalarFieldEnum)[keyof typeof Invoice_statusesScalarFieldEnum]


  export const Invoice_paymentsScalarFieldEnum: {
    id: 'id',
    invoice_id: 'invoice_id',
    amount: 'amount',
    date: 'date',
    method: 'method',
    notes: 'notes'
  };

  export type Invoice_paymentsScalarFieldEnum = (typeof Invoice_paymentsScalarFieldEnum)[keyof typeof Invoice_paymentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringNullableFilter<"categories"> | string | null
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    products?: ProductsListRelationFilter
  }, "id" | "name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringNullableWithAggregatesFilter<"categories"> | string | null
  }

  export type companiesWhereInput = {
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    id?: IntFilter<"companies"> | number
    name?: StringNullableFilter<"companies"> | string | null
    phone?: StringNullableFilter<"companies"> | string | null
    email?: StringNullableFilter<"companies"> | string | null
    street?: StringNullableFilter<"companies"> | string | null
    city?: StringNullableFilter<"companies"> | string | null
    state?: StringNullableFilter<"companies"> | string | null
    zip_code?: StringNullableFilter<"companies"> | string | null
    country?: StringNullableFilter<"companies"> | string | null
    user_id?: IntNullableFilter<"companies"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    customers?: CustomersListRelationFilter
  }

  export type companiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    customers?: customersOrderByRelationAggregateInput
  }

  export type companiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    phone?: StringNullableFilter<"companies"> | string | null
    email?: StringNullableFilter<"companies"> | string | null
    street?: StringNullableFilter<"companies"> | string | null
    city?: StringNullableFilter<"companies"> | string | null
    state?: StringNullableFilter<"companies"> | string | null
    zip_code?: StringNullableFilter<"companies"> | string | null
    country?: StringNullableFilter<"companies"> | string | null
    user_id?: IntNullableFilter<"companies"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    customers?: CustomersListRelationFilter
  }, "id" | "name">

  export type companiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: companiesCountOrderByAggregateInput
    _avg?: companiesAvgOrderByAggregateInput
    _max?: companiesMaxOrderByAggregateInput
    _min?: companiesMinOrderByAggregateInput
    _sum?: companiesSumOrderByAggregateInput
  }

  export type companiesScalarWhereWithAggregatesInput = {
    AND?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    OR?: companiesScalarWhereWithAggregatesInput[]
    NOT?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"companies"> | number
    name?: StringNullableWithAggregatesFilter<"companies"> | string | null
    phone?: StringNullableWithAggregatesFilter<"companies"> | string | null
    email?: StringNullableWithAggregatesFilter<"companies"> | string | null
    street?: StringNullableWithAggregatesFilter<"companies"> | string | null
    city?: StringNullableWithAggregatesFilter<"companies"> | string | null
    state?: StringNullableWithAggregatesFilter<"companies"> | string | null
    zip_code?: StringNullableWithAggregatesFilter<"companies"> | string | null
    country?: StringNullableWithAggregatesFilter<"companies"> | string | null
    user_id?: IntNullableWithAggregatesFilter<"companies"> | number | null
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    id?: IntFilter<"customers"> | number
    identifier?: StringNullableFilter<"customers"> | string | null
    name?: StringFilter<"customers"> | string
    email?: StringNullableFilter<"customers"> | string | null
    phone?: StringNullableFilter<"customers"> | string | null
    notes?: StringNullableFilter<"customers"> | string | null
    company_id?: IntNullableFilter<"customers"> | number | null
    street?: StringNullableFilter<"customers"> | string | null
    city?: StringNullableFilter<"customers"> | string | null
    state?: StringNullableFilter<"customers"> | string | null
    zip_code?: StringNullableFilter<"customers"> | string | null
    country?: StringNullableFilter<"customers"> | string | null
    user_id?: IntNullableFilter<"customers"> | number | null
    companies?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    invoices?: InvoicesListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    company_id?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    companies?: companiesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    invoices?: invoicesOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    identifier?: string
    email?: string
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    name?: StringFilter<"customers"> | string
    phone?: StringNullableFilter<"customers"> | string | null
    notes?: StringNullableFilter<"customers"> | string | null
    company_id?: IntNullableFilter<"customers"> | number | null
    street?: StringNullableFilter<"customers"> | string | null
    city?: StringNullableFilter<"customers"> | string | null
    state?: StringNullableFilter<"customers"> | string | null
    zip_code?: StringNullableFilter<"customers"> | string | null
    country?: StringNullableFilter<"customers"> | string | null
    user_id?: IntNullableFilter<"customers"> | number | null
    companies?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    invoices?: InvoicesListRelationFilter
  }, "id" | "identifier" | "email">

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    company_id?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"customers"> | number
    identifier?: StringNullableWithAggregatesFilter<"customers"> | string | null
    name?: StringWithAggregatesFilter<"customers"> | string
    email?: StringNullableWithAggregatesFilter<"customers"> | string | null
    phone?: StringNullableWithAggregatesFilter<"customers"> | string | null
    notes?: StringNullableWithAggregatesFilter<"customers"> | string | null
    company_id?: IntNullableWithAggregatesFilter<"customers"> | number | null
    street?: StringNullableWithAggregatesFilter<"customers"> | string | null
    city?: StringNullableWithAggregatesFilter<"customers"> | string | null
    state?: StringNullableWithAggregatesFilter<"customers"> | string | null
    zip_code?: StringNullableWithAggregatesFilter<"customers"> | string | null
    country?: StringNullableWithAggregatesFilter<"customers"> | string | null
    user_id?: IntNullableWithAggregatesFilter<"customers"> | number | null
  }

  export type invoicesWhereInput = {
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    id?: IntFilter<"invoices"> | number
    customer_id?: IntFilter<"invoices"> | number
    amount?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFilter<"invoices"> | Date | string
    due_date?: DateTimeFilter<"invoices"> | Date | string
    user_id?: IntNullableFilter<"invoices"> | number | null
    payment_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    status_id?: IntNullableFilter<"invoices"> | number | null
    subtotal?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    discount_amount?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    invoice_items?: Invoice_itemsListRelationFilter
    invoice_payments?: Invoice_paymentsListRelationFilter
    invoice_statuses?: XOR<Invoice_statusesNullableScalarRelationFilter, invoice_statusesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    customers?: XOR<CustomersScalarRelationFilter, customersWhereInput>
  }

  export type invoicesOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    date?: SortOrder
    due_date?: SortOrder
    user_id?: SortOrderInput | SortOrder
    payment_date?: SortOrderInput | SortOrder
    status_id?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    tax_amount?: SortOrderInput | SortOrder
    discount_amount?: SortOrderInput | SortOrder
    invoice_items?: invoice_itemsOrderByRelationAggregateInput
    invoice_payments?: invoice_paymentsOrderByRelationAggregateInput
    invoice_statuses?: invoice_statusesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    customers?: customersOrderByWithRelationInput
  }

  export type invoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    customer_id?: IntFilter<"invoices"> | number
    amount?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFilter<"invoices"> | Date | string
    due_date?: DateTimeFilter<"invoices"> | Date | string
    user_id?: IntNullableFilter<"invoices"> | number | null
    payment_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    status_id?: IntNullableFilter<"invoices"> | number | null
    subtotal?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    discount_amount?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    invoice_items?: Invoice_itemsListRelationFilter
    invoice_payments?: Invoice_paymentsListRelationFilter
    invoice_statuses?: XOR<Invoice_statusesNullableScalarRelationFilter, invoice_statusesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    customers?: XOR<CustomersScalarRelationFilter, customersWhereInput>
  }, "id">

  export type invoicesOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    date?: SortOrder
    due_date?: SortOrder
    user_id?: SortOrderInput | SortOrder
    payment_date?: SortOrderInput | SortOrder
    status_id?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    tax_amount?: SortOrderInput | SortOrder
    discount_amount?: SortOrderInput | SortOrder
    _count?: invoicesCountOrderByAggregateInput
    _avg?: invoicesAvgOrderByAggregateInput
    _max?: invoicesMaxOrderByAggregateInput
    _min?: invoicesMinOrderByAggregateInput
    _sum?: invoicesSumOrderByAggregateInput
  }

  export type invoicesScalarWhereWithAggregatesInput = {
    AND?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    OR?: invoicesScalarWhereWithAggregatesInput[]
    NOT?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoices"> | number
    customer_id?: IntWithAggregatesFilter<"invoices"> | number
    amount?: DecimalNullableWithAggregatesFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
    due_date?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
    user_id?: IntNullableWithAggregatesFilter<"invoices"> | number | null
    payment_date?: DateTimeNullableWithAggregatesFilter<"invoices"> | Date | string | null
    status_id?: IntNullableWithAggregatesFilter<"invoices"> | number | null
    subtotal?: DecimalNullableWithAggregatesFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableWithAggregatesFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    discount_amount?: DecimalNullableWithAggregatesFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    custom_price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"products"> | number | null
    provider_id?: IntNullableFilter<"products"> | number | null
    description?: StringNullableFilter<"products"> | string | null
    category_id?: IntNullableFilter<"products"> | number | null
    user_id?: IntNullableFilter<"products"> | number | null
    invoice_items?: Invoice_itemsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    providers?: XOR<ProvidersNullableScalarRelationFilter, providersWhereInput> | null
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrder
    custom_price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    provider_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    invoice_items?: invoice_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    categories?: categoriesOrderByWithRelationInput
    providers?: providersOrderByWithRelationInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    custom_price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"products"> | number | null
    provider_id?: IntNullableFilter<"products"> | number | null
    description?: StringNullableFilter<"products"> | string | null
    category_id?: IntNullableFilter<"products"> | number | null
    user_id?: IntNullableFilter<"products"> | number | null
    invoice_items?: Invoice_itemsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    providers?: XOR<ProvidersNullableScalarRelationFilter, providersWhereInput> | null
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrder
    custom_price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    provider_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    name?: StringNullableWithAggregatesFilter<"products"> | string | null
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    custom_price?: DecimalNullableWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableWithAggregatesFilter<"products"> | number | null
    provider_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    category_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"products"> | number | null
  }

  export type providersWhereInput = {
    AND?: providersWhereInput | providersWhereInput[]
    OR?: providersWhereInput[]
    NOT?: providersWhereInput | providersWhereInput[]
    id?: IntFilter<"providers"> | number
    name?: StringFilter<"providers"> | string
    street?: StringNullableFilter<"providers"> | string | null
    city?: StringNullableFilter<"providers"> | string | null
    state?: StringNullableFilter<"providers"> | string | null
    zip_code?: StringNullableFilter<"providers"> | string | null
    country?: StringNullableFilter<"providers"> | string | null
    user_id?: IntNullableFilter<"providers"> | number | null
    products?: ProductsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type providersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    products?: productsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type providersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: providersWhereInput | providersWhereInput[]
    OR?: providersWhereInput[]
    NOT?: providersWhereInput | providersWhereInput[]
    name?: StringFilter<"providers"> | string
    street?: StringNullableFilter<"providers"> | string | null
    city?: StringNullableFilter<"providers"> | string | null
    state?: StringNullableFilter<"providers"> | string | null
    zip_code?: StringNullableFilter<"providers"> | string | null
    country?: StringNullableFilter<"providers"> | string | null
    user_id?: IntNullableFilter<"providers"> | number | null
    products?: ProductsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type providersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: providersCountOrderByAggregateInput
    _avg?: providersAvgOrderByAggregateInput
    _max?: providersMaxOrderByAggregateInput
    _min?: providersMinOrderByAggregateInput
    _sum?: providersSumOrderByAggregateInput
  }

  export type providersScalarWhereWithAggregatesInput = {
    AND?: providersScalarWhereWithAggregatesInput | providersScalarWhereWithAggregatesInput[]
    OR?: providersScalarWhereWithAggregatesInput[]
    NOT?: providersScalarWhereWithAggregatesInput | providersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"providers"> | number
    name?: StringWithAggregatesFilter<"providers"> | string
    street?: StringNullableWithAggregatesFilter<"providers"> | string | null
    city?: StringNullableWithAggregatesFilter<"providers"> | string | null
    state?: StringNullableWithAggregatesFilter<"providers"> | string | null
    zip_code?: StringNullableWithAggregatesFilter<"providers"> | string | null
    country?: StringNullableWithAggregatesFilter<"providers"> | string | null
    user_id?: IntNullableWithAggregatesFilter<"providers"> | number | null
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: StringFilter<"roles"> | string
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    users?: UsersListRelationFilter
  }, "id" | "name">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roles"> | number
    name?: StringWithAggregatesFilter<"roles"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    role_id?: IntNullableFilter<"users"> | number | null
    companies?: CompaniesListRelationFilter
    customers?: CustomersListRelationFilter
    invoices?: InvoicesListRelationFilter
    products?: ProductsListRelationFilter
    providers?: ProvidersListRelationFilter
    roles?: XOR<RolesNullableScalarRelationFilter, rolesWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role_id?: SortOrderInput | SortOrder
    companies?: companiesOrderByRelationAggregateInput
    customers?: customersOrderByRelationAggregateInput
    invoices?: invoicesOrderByRelationAggregateInput
    products?: productsOrderByRelationAggregateInput
    providers?: providersOrderByRelationAggregateInput
    roles?: rolesOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    role_id?: IntNullableFilter<"users"> | number | null
    companies?: CompaniesListRelationFilter
    customers?: CustomersListRelationFilter
    invoices?: InvoicesListRelationFilter
    products?: ProductsListRelationFilter
    providers?: ProvidersListRelationFilter
    roles?: XOR<RolesNullableScalarRelationFilter, rolesWhereInput> | null
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role_id?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    role_id?: IntNullableWithAggregatesFilter<"users"> | number | null
  }

  export type invoice_itemsWhereInput = {
    AND?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    OR?: invoice_itemsWhereInput[]
    NOT?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    id?: IntFilter<"invoice_items"> | number
    invoice_id?: IntFilter<"invoice_items"> | number
    product_id?: IntFilter<"invoice_items"> | number
    quantity?: IntFilter<"invoice_items"> | number
    unit_price?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    item_custom_price?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    item_discount_value?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    invoices?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type invoice_itemsOrderByWithRelationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    item_custom_price?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    item_discount_value?: SortOrderInput | SortOrder
    item_discount_amount?: SortOrderInput | SortOrder
    subtotal_after_discount?: SortOrderInput | SortOrder
    invoices?: invoicesOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type invoice_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    OR?: invoice_itemsWhereInput[]
    NOT?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    invoice_id?: IntFilter<"invoice_items"> | number
    product_id?: IntFilter<"invoice_items"> | number
    quantity?: IntFilter<"invoice_items"> | number
    unit_price?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    item_custom_price?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    item_discount_value?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    invoices?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type invoice_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    item_custom_price?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    item_discount_value?: SortOrderInput | SortOrder
    item_discount_amount?: SortOrderInput | SortOrder
    subtotal_after_discount?: SortOrderInput | SortOrder
    _count?: invoice_itemsCountOrderByAggregateInput
    _avg?: invoice_itemsAvgOrderByAggregateInput
    _max?: invoice_itemsMaxOrderByAggregateInput
    _min?: invoice_itemsMinOrderByAggregateInput
    _sum?: invoice_itemsSumOrderByAggregateInput
  }

  export type invoice_itemsScalarWhereWithAggregatesInput = {
    AND?: invoice_itemsScalarWhereWithAggregatesInput | invoice_itemsScalarWhereWithAggregatesInput[]
    OR?: invoice_itemsScalarWhereWithAggregatesInput[]
    NOT?: invoice_itemsScalarWhereWithAggregatesInput | invoice_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoice_items"> | number
    invoice_id?: IntWithAggregatesFilter<"invoice_items"> | number
    product_id?: IntWithAggregatesFilter<"invoice_items"> | number
    quantity?: IntWithAggregatesFilter<"invoice_items"> | number
    unit_price?: DecimalWithAggregatesFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    item_custom_price?: DecimalNullableWithAggregatesFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalWithAggregatesFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    item_discount_value?: DecimalNullableWithAggregatesFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: DecimalNullableWithAggregatesFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: DecimalNullableWithAggregatesFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_statusesWhereInput = {
    AND?: invoice_statusesWhereInput | invoice_statusesWhereInput[]
    OR?: invoice_statusesWhereInput[]
    NOT?: invoice_statusesWhereInput | invoice_statusesWhereInput[]
    id?: IntFilter<"invoice_statuses"> | number
    name?: StringFilter<"invoice_statuses"> | string
    invoices?: InvoicesListRelationFilter
  }

  export type invoice_statusesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    invoices?: invoicesOrderByRelationAggregateInput
  }

  export type invoice_statusesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: invoice_statusesWhereInput | invoice_statusesWhereInput[]
    OR?: invoice_statusesWhereInput[]
    NOT?: invoice_statusesWhereInput | invoice_statusesWhereInput[]
    invoices?: InvoicesListRelationFilter
  }, "id" | "name">

  export type invoice_statusesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: invoice_statusesCountOrderByAggregateInput
    _avg?: invoice_statusesAvgOrderByAggregateInput
    _max?: invoice_statusesMaxOrderByAggregateInput
    _min?: invoice_statusesMinOrderByAggregateInput
    _sum?: invoice_statusesSumOrderByAggregateInput
  }

  export type invoice_statusesScalarWhereWithAggregatesInput = {
    AND?: invoice_statusesScalarWhereWithAggregatesInput | invoice_statusesScalarWhereWithAggregatesInput[]
    OR?: invoice_statusesScalarWhereWithAggregatesInput[]
    NOT?: invoice_statusesScalarWhereWithAggregatesInput | invoice_statusesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoice_statuses"> | number
    name?: StringWithAggregatesFilter<"invoice_statuses"> | string
  }

  export type invoice_paymentsWhereInput = {
    AND?: invoice_paymentsWhereInput | invoice_paymentsWhereInput[]
    OR?: invoice_paymentsWhereInput[]
    NOT?: invoice_paymentsWhereInput | invoice_paymentsWhereInput[]
    id?: IntFilter<"invoice_payments"> | number
    invoice_id?: IntFilter<"invoice_payments"> | number
    amount?: DecimalFilter<"invoice_payments"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"invoice_payments"> | Date | string
    method?: StringNullableFilter<"invoice_payments"> | string | null
    notes?: StringNullableFilter<"invoice_payments"> | string | null
    invoices?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
  }

  export type invoice_paymentsOrderByWithRelationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    method?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    invoices?: invoicesOrderByWithRelationInput
  }

  export type invoice_paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invoice_paymentsWhereInput | invoice_paymentsWhereInput[]
    OR?: invoice_paymentsWhereInput[]
    NOT?: invoice_paymentsWhereInput | invoice_paymentsWhereInput[]
    invoice_id?: IntFilter<"invoice_payments"> | number
    amount?: DecimalFilter<"invoice_payments"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"invoice_payments"> | Date | string
    method?: StringNullableFilter<"invoice_payments"> | string | null
    notes?: StringNullableFilter<"invoice_payments"> | string | null
    invoices?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
  }, "id">

  export type invoice_paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    method?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: invoice_paymentsCountOrderByAggregateInput
    _avg?: invoice_paymentsAvgOrderByAggregateInput
    _max?: invoice_paymentsMaxOrderByAggregateInput
    _min?: invoice_paymentsMinOrderByAggregateInput
    _sum?: invoice_paymentsSumOrderByAggregateInput
  }

  export type invoice_paymentsScalarWhereWithAggregatesInput = {
    AND?: invoice_paymentsScalarWhereWithAggregatesInput | invoice_paymentsScalarWhereWithAggregatesInput[]
    OR?: invoice_paymentsScalarWhereWithAggregatesInput[]
    NOT?: invoice_paymentsScalarWhereWithAggregatesInput | invoice_paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoice_payments"> | number
    invoice_id?: IntWithAggregatesFilter<"invoice_payments"> | number
    amount?: DecimalWithAggregatesFilter<"invoice_payments"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"invoice_payments"> | Date | string
    method?: StringNullableWithAggregatesFilter<"invoice_payments"> | string | null
    notes?: StringNullableWithAggregatesFilter<"invoice_payments"> | string | null
  }

  export type categoriesCreateInput = {
    name?: string | null
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name?: string | null
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type categoriesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companiesCreateInput = {
    name?: string | null
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    users?: usersCreateNestedOneWithoutCompaniesInput
    customers?: customersCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateInput = {
    id?: number
    name?: string | null
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
    customers?: customersUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutCompaniesNestedInput
    customers?: customersUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    customers?: customersUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesCreateManyInput = {
    id?: number
    name?: string | null
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
  }

  export type companiesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type customersCreateInput = {
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    companies?: companiesCreateNestedOneWithoutCustomersInput
    users?: usersCreateNestedOneWithoutCustomersInput
    invoices?: invoicesCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    id?: number
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    company_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
    invoices?: invoicesUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companies?: companiesUpdateOneWithoutCustomersNestedInput
    users?: usersUpdateOneWithoutCustomersNestedInput
    invoices?: invoicesUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    invoices?: invoicesUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersCreateManyInput = {
    id?: number
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    company_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
  }

  export type customersUpdateManyMutationInput = {
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type invoicesCreateInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    payment_date?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
    invoice_payments?: invoice_paymentsCreateNestedManyWithoutInvoicesInput
    invoice_statuses?: invoice_statusesCreateNestedOneWithoutInvoicesInput
    users?: usersCreateNestedOneWithoutInvoicesInput
    customers: customersCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateInput = {
    id?: number
    customer_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    user_id?: number | null
    payment_date?: Date | string | null
    status_id?: number | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
    invoice_payments?: invoice_paymentsUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesUpdateInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
    invoice_payments?: invoice_paymentsUpdateManyWithoutInvoicesNestedInput
    invoice_statuses?: invoice_statusesUpdateOneWithoutInvoicesNestedInput
    users?: usersUpdateOneWithoutInvoicesNestedInput
    customers?: customersUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
    invoice_payments?: invoice_paymentsUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesCreateManyInput = {
    id?: number
    customer_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    user_id?: number | null
    payment_date?: Date | string | null
    status_id?: number | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
  }

  export type invoicesUpdateManyMutationInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type invoicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type productsCreateInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    description?: string | null
    invoice_items?: invoice_itemsCreateNestedManyWithoutProductsInput
    users?: usersCreateNestedOneWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
    providers?: providersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    provider_id?: number | null
    description?: string | null
    category_id?: number | null
    user_id?: number | null
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_items?: invoice_itemsUpdateManyWithoutProductsNestedInput
    users?: usersUpdateOneWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
    providers?: providersUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    provider_id?: number | null
    description?: string | null
    category_id?: number | null
    user_id?: number | null
  }

  export type productsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type providersCreateInput = {
    name: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    products?: productsCreateNestedManyWithoutProvidersInput
    users?: usersCreateNestedOneWithoutProvidersInput
  }

  export type providersUncheckedCreateInput = {
    id?: number
    name: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
    products?: productsUncheckedCreateNestedManyWithoutProvidersInput
  }

  export type providersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUpdateManyWithoutProvidersNestedInput
    users?: usersUpdateOneWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productsUncheckedUpdateManyWithoutProvidersNestedInput
  }

  export type providersCreateManyInput = {
    id?: number
    name: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
  }

  export type providersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type providersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rolesCreateInput = {
    name: string
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id?: number
    name: string
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id?: number
    name: string
  }

  export type rolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    username: string
    password: string
    email: string
    companies?: companiesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
    providers?: providersCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    role_id?: number | null
    companies?: companiesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
    providers?: providersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    products?: productsUpdateManyWithoutUsersNestedInput
    providers?: providersUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    companies?: companiesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
    providers?: providersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    role_id?: number | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type invoice_itemsCreateInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    item_custom_price?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    item_discount_value?: Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: Decimal | DecimalJsLike | number | string | null
    invoices: invoicesCreateNestedOneWithoutInvoice_itemsInput
    products: productsCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateInput = {
    id?: number
    invoice_id: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    item_custom_price?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    item_discount_value?: Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_discount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoices?: invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput
    products?: productsUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_discount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsCreateManyInput = {
    id?: number
    invoice_id: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    item_custom_price?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    item_discount_value?: Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_discount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_discount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_statusesCreateInput = {
    name: string
    invoices?: invoicesCreateNestedManyWithoutInvoice_statusesInput
  }

  export type invoice_statusesUncheckedCreateInput = {
    id?: number
    name: string
    invoices?: invoicesUncheckedCreateNestedManyWithoutInvoice_statusesInput
  }

  export type invoice_statusesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    invoices?: invoicesUpdateManyWithoutInvoice_statusesNestedInput
  }

  export type invoice_statusesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    invoices?: invoicesUncheckedUpdateManyWithoutInvoice_statusesNestedInput
  }

  export type invoice_statusesCreateManyInput = {
    id?: number
    name: string
  }

  export type invoice_statusesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type invoice_statusesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type invoice_paymentsCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    method?: string | null
    notes?: string | null
    invoices: invoicesCreateNestedOneWithoutInvoice_paymentsInput
  }

  export type invoice_paymentsUncheckedCreateInput = {
    id?: number
    invoice_id: number
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    method?: string | null
    notes?: string | null
  }

  export type invoice_paymentsUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    invoices?: invoicesUpdateOneRequiredWithoutInvoice_paymentsNestedInput
  }

  export type invoice_paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoice_paymentsCreateManyInput = {
    id?: number
    invoice_id: number
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    method?: string | null
    notes?: string | null
  }

  export type invoice_paymentsUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoice_paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type CustomersListRelationFilter = {
    every?: customersWhereInput
    some?: customersWhereInput
    none?: customersWhereInput
  }

  export type customersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type companiesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type companiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type companiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type companiesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CompaniesNullableScalarRelationFilter = {
    is?: companiesWhereInput | null
    isNot?: companiesWhereInput | null
  }

  export type InvoicesListRelationFilter = {
    every?: invoicesWhereInput
    some?: invoicesWhereInput
    none?: invoicesWhereInput
  }

  export type invoicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    company_id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    company_id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    company_id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Invoice_itemsListRelationFilter = {
    every?: invoice_itemsWhereInput
    some?: invoice_itemsWhereInput
    none?: invoice_itemsWhereInput
  }

  export type Invoice_paymentsListRelationFilter = {
    every?: invoice_paymentsWhereInput
    some?: invoice_paymentsWhereInput
    none?: invoice_paymentsWhereInput
  }

  export type Invoice_statusesNullableScalarRelationFilter = {
    is?: invoice_statusesWhereInput | null
    isNot?: invoice_statusesWhereInput | null
  }

  export type CustomersScalarRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type invoice_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invoice_paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invoicesCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    due_date?: SortOrder
    user_id?: SortOrder
    payment_date?: SortOrder
    status_id?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
  }

  export type invoicesAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    status_id?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
  }

  export type invoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    due_date?: SortOrder
    user_id?: SortOrder
    payment_date?: SortOrder
    status_id?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
  }

  export type invoicesMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    due_date?: SortOrder
    user_id?: SortOrder
    payment_date?: SortOrder
    status_id?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
  }

  export type invoicesSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    status_id?: SortOrder
    subtotal?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type ProvidersNullableScalarRelationFilter = {
    is?: providersWhereInput | null
    isNot?: providersWhereInput | null
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    custom_price?: SortOrder
    quantity?: SortOrder
    provider_id?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    custom_price?: SortOrder
    quantity?: SortOrder
    provider_id?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    custom_price?: SortOrder
    quantity?: SortOrder
    provider_id?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    custom_price?: SortOrder
    quantity?: SortOrder
    provider_id?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    custom_price?: SortOrder
    quantity?: SortOrder
    provider_id?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type providersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type providersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type providersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type providersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    country?: SortOrder
    user_id?: SortOrder
  }

  export type providersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompaniesListRelationFilter = {
    every?: companiesWhereInput
    some?: companiesWhereInput
    none?: companiesWhereInput
  }

  export type ProvidersListRelationFilter = {
    every?: providersWhereInput
    some?: providersWhereInput
    none?: providersWhereInput
  }

  export type RolesNullableScalarRelationFilter = {
    is?: rolesWhereInput | null
    isNot?: rolesWhereInput | null
  }

  export type companiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type providersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type InvoicesScalarRelationFilter = {
    is?: invoicesWhereInput
    isNot?: invoicesWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type invoice_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    item_custom_price?: SortOrder
    subtotal?: SortOrder
    item_discount_value?: SortOrder
    item_discount_amount?: SortOrder
    subtotal_after_discount?: SortOrder
  }

  export type invoice_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    item_custom_price?: SortOrder
    subtotal?: SortOrder
    item_discount_value?: SortOrder
    item_discount_amount?: SortOrder
    subtotal_after_discount?: SortOrder
  }

  export type invoice_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    item_custom_price?: SortOrder
    subtotal?: SortOrder
    item_discount_value?: SortOrder
    item_discount_amount?: SortOrder
    subtotal_after_discount?: SortOrder
  }

  export type invoice_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    item_custom_price?: SortOrder
    subtotal?: SortOrder
    item_discount_value?: SortOrder
    item_discount_amount?: SortOrder
    subtotal_after_discount?: SortOrder
  }

  export type invoice_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    item_custom_price?: SortOrder
    subtotal?: SortOrder
    item_discount_value?: SortOrder
    item_discount_amount?: SortOrder
    subtotal_after_discount?: SortOrder
  }

  export type invoice_statusesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type invoice_statusesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type invoice_statusesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type invoice_statusesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type invoice_statusesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type invoice_paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    method?: SortOrder
    notes?: SortOrder
  }

  export type invoice_paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
  }

  export type invoice_paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    method?: SortOrder
    notes?: SortOrder
  }

  export type invoice_paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    method?: SortOrder
    notes?: SortOrder
  }

  export type invoice_paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    amount?: SortOrder
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<usersCreateWithoutCompaniesInput, usersUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCompaniesInput
    connect?: usersWhereUniqueInput
  }

  export type customersCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<customersCreateWithoutCompaniesInput, customersUncheckedCreateWithoutCompaniesInput> | customersCreateWithoutCompaniesInput[] | customersUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: customersCreateOrConnectWithoutCompaniesInput | customersCreateOrConnectWithoutCompaniesInput[]
    createMany?: customersCreateManyCompaniesInputEnvelope
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
  }

  export type customersUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<customersCreateWithoutCompaniesInput, customersUncheckedCreateWithoutCompaniesInput> | customersCreateWithoutCompaniesInput[] | customersUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: customersCreateOrConnectWithoutCompaniesInput | customersCreateOrConnectWithoutCompaniesInput[]
    createMany?: customersCreateManyCompaniesInputEnvelope
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
  }

  export type usersUpdateOneWithoutCompaniesNestedInput = {
    create?: XOR<usersCreateWithoutCompaniesInput, usersUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCompaniesInput
    upsert?: usersUpsertWithoutCompaniesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCompaniesInput, usersUpdateWithoutCompaniesInput>, usersUncheckedUpdateWithoutCompaniesInput>
  }

  export type customersUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<customersCreateWithoutCompaniesInput, customersUncheckedCreateWithoutCompaniesInput> | customersCreateWithoutCompaniesInput[] | customersUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: customersCreateOrConnectWithoutCompaniesInput | customersCreateOrConnectWithoutCompaniesInput[]
    upsert?: customersUpsertWithWhereUniqueWithoutCompaniesInput | customersUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: customersCreateManyCompaniesInputEnvelope
    set?: customersWhereUniqueInput | customersWhereUniqueInput[]
    disconnect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    delete?: customersWhereUniqueInput | customersWhereUniqueInput[]
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    update?: customersUpdateWithWhereUniqueWithoutCompaniesInput | customersUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: customersUpdateManyWithWhereWithoutCompaniesInput | customersUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: customersScalarWhereInput | customersScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type customersUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<customersCreateWithoutCompaniesInput, customersUncheckedCreateWithoutCompaniesInput> | customersCreateWithoutCompaniesInput[] | customersUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: customersCreateOrConnectWithoutCompaniesInput | customersCreateOrConnectWithoutCompaniesInput[]
    upsert?: customersUpsertWithWhereUniqueWithoutCompaniesInput | customersUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: customersCreateManyCompaniesInputEnvelope
    set?: customersWhereUniqueInput | customersWhereUniqueInput[]
    disconnect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    delete?: customersWhereUniqueInput | customersWhereUniqueInput[]
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    update?: customersUpdateWithWhereUniqueWithoutCompaniesInput | customersUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: customersUpdateManyWithWhereWithoutCompaniesInput | customersUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: customersScalarWhereInput | customersScalarWhereInput[]
  }

  export type companiesCreateNestedOneWithoutCustomersInput = {
    create?: XOR<companiesCreateWithoutCustomersInput, companiesUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutCustomersInput
    connect?: companiesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCustomersInput = {
    create?: XOR<usersCreateWithoutCustomersInput, usersUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCustomersInput
    connect?: usersWhereUniqueInput
  }

  export type invoicesCreateNestedManyWithoutCustomersInput = {
    create?: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput> | invoicesCreateWithoutCustomersInput[] | invoicesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomersInput | invoicesCreateOrConnectWithoutCustomersInput[]
    createMany?: invoicesCreateManyCustomersInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput> | invoicesCreateWithoutCustomersInput[] | invoicesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomersInput | invoicesCreateOrConnectWithoutCustomersInput[]
    createMany?: invoicesCreateManyCustomersInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type companiesUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<companiesCreateWithoutCustomersInput, companiesUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutCustomersInput
    upsert?: companiesUpsertWithoutCustomersInput
    disconnect?: companiesWhereInput | boolean
    delete?: companiesWhereInput | boolean
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutCustomersInput, companiesUpdateWithoutCustomersInput>, companiesUncheckedUpdateWithoutCustomersInput>
  }

  export type usersUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<usersCreateWithoutCustomersInput, usersUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCustomersInput
    upsert?: usersUpsertWithoutCustomersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCustomersInput, usersUpdateWithoutCustomersInput>, usersUncheckedUpdateWithoutCustomersInput>
  }

  export type invoicesUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput> | invoicesCreateWithoutCustomersInput[] | invoicesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomersInput | invoicesCreateOrConnectWithoutCustomersInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutCustomersInput | invoicesUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: invoicesCreateManyCustomersInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutCustomersInput | invoicesUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutCustomersInput | invoicesUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type invoicesUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput> | invoicesCreateWithoutCustomersInput[] | invoicesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomersInput | invoicesCreateOrConnectWithoutCustomersInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutCustomersInput | invoicesUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: invoicesCreateManyCustomersInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutCustomersInput | invoicesUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutCustomersInput | invoicesUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type invoice_itemsCreateNestedManyWithoutInvoicesInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type invoice_paymentsCreateNestedManyWithoutInvoicesInput = {
    create?: XOR<invoice_paymentsCreateWithoutInvoicesInput, invoice_paymentsUncheckedCreateWithoutInvoicesInput> | invoice_paymentsCreateWithoutInvoicesInput[] | invoice_paymentsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_paymentsCreateOrConnectWithoutInvoicesInput | invoice_paymentsCreateOrConnectWithoutInvoicesInput[]
    createMany?: invoice_paymentsCreateManyInvoicesInputEnvelope
    connect?: invoice_paymentsWhereUniqueInput | invoice_paymentsWhereUniqueInput[]
  }

  export type invoice_statusesCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<invoice_statusesCreateWithoutInvoicesInput, invoice_statusesUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: invoice_statusesCreateOrConnectWithoutInvoicesInput
    connect?: invoice_statusesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvoicesInput
    connect?: usersWhereUniqueInput
  }

  export type customersCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: customersCreateOrConnectWithoutInvoicesInput
    connect?: customersWhereUniqueInput
  }

  export type invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type invoice_paymentsUncheckedCreateNestedManyWithoutInvoicesInput = {
    create?: XOR<invoice_paymentsCreateWithoutInvoicesInput, invoice_paymentsUncheckedCreateWithoutInvoicesInput> | invoice_paymentsCreateWithoutInvoicesInput[] | invoice_paymentsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_paymentsCreateOrConnectWithoutInvoicesInput | invoice_paymentsCreateOrConnectWithoutInvoicesInput[]
    createMany?: invoice_paymentsCreateManyInvoicesInputEnvelope
    connect?: invoice_paymentsWhereUniqueInput | invoice_paymentsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type invoice_itemsUpdateManyWithoutInvoicesNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutInvoicesInput | invoice_itemsUpdateManyWithWhereWithoutInvoicesInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type invoice_paymentsUpdateManyWithoutInvoicesNestedInput = {
    create?: XOR<invoice_paymentsCreateWithoutInvoicesInput, invoice_paymentsUncheckedCreateWithoutInvoicesInput> | invoice_paymentsCreateWithoutInvoicesInput[] | invoice_paymentsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_paymentsCreateOrConnectWithoutInvoicesInput | invoice_paymentsCreateOrConnectWithoutInvoicesInput[]
    upsert?: invoice_paymentsUpsertWithWhereUniqueWithoutInvoicesInput | invoice_paymentsUpsertWithWhereUniqueWithoutInvoicesInput[]
    createMany?: invoice_paymentsCreateManyInvoicesInputEnvelope
    set?: invoice_paymentsWhereUniqueInput | invoice_paymentsWhereUniqueInput[]
    disconnect?: invoice_paymentsWhereUniqueInput | invoice_paymentsWhereUniqueInput[]
    delete?: invoice_paymentsWhereUniqueInput | invoice_paymentsWhereUniqueInput[]
    connect?: invoice_paymentsWhereUniqueInput | invoice_paymentsWhereUniqueInput[]
    update?: invoice_paymentsUpdateWithWhereUniqueWithoutInvoicesInput | invoice_paymentsUpdateWithWhereUniqueWithoutInvoicesInput[]
    updateMany?: invoice_paymentsUpdateManyWithWhereWithoutInvoicesInput | invoice_paymentsUpdateManyWithWhereWithoutInvoicesInput[]
    deleteMany?: invoice_paymentsScalarWhereInput | invoice_paymentsScalarWhereInput[]
  }

  export type invoice_statusesUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<invoice_statusesCreateWithoutInvoicesInput, invoice_statusesUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: invoice_statusesCreateOrConnectWithoutInvoicesInput
    upsert?: invoice_statusesUpsertWithoutInvoicesInput
    disconnect?: invoice_statusesWhereInput | boolean
    delete?: invoice_statusesWhereInput | boolean
    connect?: invoice_statusesWhereUniqueInput
    update?: XOR<XOR<invoice_statusesUpdateToOneWithWhereWithoutInvoicesInput, invoice_statusesUpdateWithoutInvoicesInput>, invoice_statusesUncheckedUpdateWithoutInvoicesInput>
  }

  export type usersUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: usersCreateOrConnectWithoutInvoicesInput
    upsert?: usersUpsertWithoutInvoicesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInvoicesInput, usersUpdateWithoutInvoicesInput>, usersUncheckedUpdateWithoutInvoicesInput>
  }

  export type customersUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: customersCreateOrConnectWithoutInvoicesInput
    upsert?: customersUpsertWithoutInvoicesInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutInvoicesInput, customersUpdateWithoutInvoicesInput>, customersUncheckedUpdateWithoutInvoicesInput>
  }

  export type invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput> | invoice_itemsCreateWithoutInvoicesInput[] | invoice_itemsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoicesInput | invoice_itemsCreateOrConnectWithoutInvoicesInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput[]
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput | invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutInvoicesInput | invoice_itemsUpdateManyWithWhereWithoutInvoicesInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type invoice_paymentsUncheckedUpdateManyWithoutInvoicesNestedInput = {
    create?: XOR<invoice_paymentsCreateWithoutInvoicesInput, invoice_paymentsUncheckedCreateWithoutInvoicesInput> | invoice_paymentsCreateWithoutInvoicesInput[] | invoice_paymentsUncheckedCreateWithoutInvoicesInput[]
    connectOrCreate?: invoice_paymentsCreateOrConnectWithoutInvoicesInput | invoice_paymentsCreateOrConnectWithoutInvoicesInput[]
    upsert?: invoice_paymentsUpsertWithWhereUniqueWithoutInvoicesInput | invoice_paymentsUpsertWithWhereUniqueWithoutInvoicesInput[]
    createMany?: invoice_paymentsCreateManyInvoicesInputEnvelope
    set?: invoice_paymentsWhereUniqueInput | invoice_paymentsWhereUniqueInput[]
    disconnect?: invoice_paymentsWhereUniqueInput | invoice_paymentsWhereUniqueInput[]
    delete?: invoice_paymentsWhereUniqueInput | invoice_paymentsWhereUniqueInput[]
    connect?: invoice_paymentsWhereUniqueInput | invoice_paymentsWhereUniqueInput[]
    update?: invoice_paymentsUpdateWithWhereUniqueWithoutInvoicesInput | invoice_paymentsUpdateWithWhereUniqueWithoutInvoicesInput[]
    updateMany?: invoice_paymentsUpdateManyWithWhereWithoutInvoicesInput | invoice_paymentsUpdateManyWithWhereWithoutInvoicesInput[]
    deleteMany?: invoice_paymentsScalarWhereInput | invoice_paymentsScalarWhereInput[]
  }

  export type invoice_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<invoice_itemsCreateWithoutProductsInput, invoice_itemsUncheckedCreateWithoutProductsInput> | invoice_itemsCreateWithoutProductsInput[] | invoice_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutProductsInput | invoice_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: invoice_itemsCreateManyProductsInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutProductsInput = {
    create?: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProductsInput
    connect?: usersWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type providersCreateNestedOneWithoutProductsInput = {
    create?: XOR<providersCreateWithoutProductsInput, providersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: providersCreateOrConnectWithoutProductsInput
    connect?: providersWhereUniqueInput
  }

  export type invoice_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<invoice_itemsCreateWithoutProductsInput, invoice_itemsUncheckedCreateWithoutProductsInput> | invoice_itemsCreateWithoutProductsInput[] | invoice_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutProductsInput | invoice_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: invoice_itemsCreateManyProductsInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type invoice_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutProductsInput, invoice_itemsUncheckedCreateWithoutProductsInput> | invoice_itemsCreateWithoutProductsInput[] | invoice_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutProductsInput | invoice_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutProductsInput | invoice_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: invoice_itemsCreateManyProductsInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutProductsInput | invoice_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutProductsInput | invoice_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutProductsNestedInput = {
    create?: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProductsInput
    upsert?: usersUpsertWithoutProductsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProductsInput, usersUpdateWithoutProductsInput>, usersUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type providersUpdateOneWithoutProductsNestedInput = {
    create?: XOR<providersCreateWithoutProductsInput, providersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: providersCreateOrConnectWithoutProductsInput
    upsert?: providersUpsertWithoutProductsInput
    disconnect?: providersWhereInput | boolean
    delete?: providersWhereInput | boolean
    connect?: providersWhereUniqueInput
    update?: XOR<XOR<providersUpdateToOneWithWhereWithoutProductsInput, providersUpdateWithoutProductsInput>, providersUncheckedUpdateWithoutProductsInput>
  }

  export type invoice_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutProductsInput, invoice_itemsUncheckedCreateWithoutProductsInput> | invoice_itemsCreateWithoutProductsInput[] | invoice_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutProductsInput | invoice_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutProductsInput | invoice_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: invoice_itemsCreateManyProductsInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutProductsInput | invoice_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutProductsInput | invoice_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type productsCreateNestedManyWithoutProvidersInput = {
    create?: XOR<productsCreateWithoutProvidersInput, productsUncheckedCreateWithoutProvidersInput> | productsCreateWithoutProvidersInput[] | productsUncheckedCreateWithoutProvidersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutProvidersInput | productsCreateOrConnectWithoutProvidersInput[]
    createMany?: productsCreateManyProvidersInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutProvidersInput = {
    create?: XOR<usersCreateWithoutProvidersInput, usersUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProvidersInput
    connect?: usersWhereUniqueInput
  }

  export type productsUncheckedCreateNestedManyWithoutProvidersInput = {
    create?: XOR<productsCreateWithoutProvidersInput, productsUncheckedCreateWithoutProvidersInput> | productsCreateWithoutProvidersInput[] | productsUncheckedCreateWithoutProvidersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutProvidersInput | productsCreateOrConnectWithoutProvidersInput[]
    createMany?: productsCreateManyProvidersInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUpdateManyWithoutProvidersNestedInput = {
    create?: XOR<productsCreateWithoutProvidersInput, productsUncheckedCreateWithoutProvidersInput> | productsCreateWithoutProvidersInput[] | productsUncheckedCreateWithoutProvidersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutProvidersInput | productsCreateOrConnectWithoutProvidersInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutProvidersInput | productsUpsertWithWhereUniqueWithoutProvidersInput[]
    createMany?: productsCreateManyProvidersInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutProvidersInput | productsUpdateWithWhereUniqueWithoutProvidersInput[]
    updateMany?: productsUpdateManyWithWhereWithoutProvidersInput | productsUpdateManyWithWhereWithoutProvidersInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutProvidersNestedInput = {
    create?: XOR<usersCreateWithoutProvidersInput, usersUncheckedCreateWithoutProvidersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProvidersInput
    upsert?: usersUpsertWithoutProvidersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProvidersInput, usersUpdateWithoutProvidersInput>, usersUncheckedUpdateWithoutProvidersInput>
  }

  export type productsUncheckedUpdateManyWithoutProvidersNestedInput = {
    create?: XOR<productsCreateWithoutProvidersInput, productsUncheckedCreateWithoutProvidersInput> | productsCreateWithoutProvidersInput[] | productsUncheckedCreateWithoutProvidersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutProvidersInput | productsCreateOrConnectWithoutProvidersInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutProvidersInput | productsUpsertWithWhereUniqueWithoutProvidersInput[]
    createMany?: productsCreateManyProvidersInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutProvidersInput | productsUpdateWithWhereUniqueWithoutProvidersInput[]
    updateMany?: productsUpdateManyWithWhereWithoutProvidersInput | productsUpdateManyWithWhereWithoutProvidersInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type companiesCreateNestedManyWithoutUsersInput = {
    create?: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput> | companiesCreateWithoutUsersInput[] | companiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: companiesCreateOrConnectWithoutUsersInput | companiesCreateOrConnectWithoutUsersInput[]
    createMany?: companiesCreateManyUsersInputEnvelope
    connect?: companiesWhereUniqueInput | companiesWhereUniqueInput[]
  }

  export type customersCreateNestedManyWithoutUsersInput = {
    create?: XOR<customersCreateWithoutUsersInput, customersUncheckedCreateWithoutUsersInput> | customersCreateWithoutUsersInput[] | customersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: customersCreateOrConnectWithoutUsersInput | customersCreateOrConnectWithoutUsersInput[]
    createMany?: customersCreateManyUsersInputEnvelope
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
  }

  export type invoicesCreateNestedManyWithoutUsersInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type productsCreateNestedManyWithoutUsersInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type providersCreateNestedManyWithoutUsersInput = {
    create?: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput> | providersCreateWithoutUsersInput[] | providersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: providersCreateOrConnectWithoutUsersInput | providersCreateOrConnectWithoutUsersInput[]
    createMany?: providersCreateManyUsersInputEnvelope
    connect?: providersWhereUniqueInput | providersWhereUniqueInput[]
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type companiesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput> | companiesCreateWithoutUsersInput[] | companiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: companiesCreateOrConnectWithoutUsersInput | companiesCreateOrConnectWithoutUsersInput[]
    createMany?: companiesCreateManyUsersInputEnvelope
    connect?: companiesWhereUniqueInput | companiesWhereUniqueInput[]
  }

  export type customersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<customersCreateWithoutUsersInput, customersUncheckedCreateWithoutUsersInput> | customersCreateWithoutUsersInput[] | customersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: customersCreateOrConnectWithoutUsersInput | customersCreateOrConnectWithoutUsersInput[]
    createMany?: customersCreateManyUsersInputEnvelope
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type providersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput> | providersCreateWithoutUsersInput[] | providersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: providersCreateOrConnectWithoutUsersInput | providersCreateOrConnectWithoutUsersInput[]
    createMany?: providersCreateManyUsersInputEnvelope
    connect?: providersWhereUniqueInput | providersWhereUniqueInput[]
  }

  export type companiesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput> | companiesCreateWithoutUsersInput[] | companiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: companiesCreateOrConnectWithoutUsersInput | companiesCreateOrConnectWithoutUsersInput[]
    upsert?: companiesUpsertWithWhereUniqueWithoutUsersInput | companiesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: companiesCreateManyUsersInputEnvelope
    set?: companiesWhereUniqueInput | companiesWhereUniqueInput[]
    disconnect?: companiesWhereUniqueInput | companiesWhereUniqueInput[]
    delete?: companiesWhereUniqueInput | companiesWhereUniqueInput[]
    connect?: companiesWhereUniqueInput | companiesWhereUniqueInput[]
    update?: companiesUpdateWithWhereUniqueWithoutUsersInput | companiesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: companiesUpdateManyWithWhereWithoutUsersInput | companiesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: companiesScalarWhereInput | companiesScalarWhereInput[]
  }

  export type customersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<customersCreateWithoutUsersInput, customersUncheckedCreateWithoutUsersInput> | customersCreateWithoutUsersInput[] | customersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: customersCreateOrConnectWithoutUsersInput | customersCreateOrConnectWithoutUsersInput[]
    upsert?: customersUpsertWithWhereUniqueWithoutUsersInput | customersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: customersCreateManyUsersInputEnvelope
    set?: customersWhereUniqueInput | customersWhereUniqueInput[]
    disconnect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    delete?: customersWhereUniqueInput | customersWhereUniqueInput[]
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    update?: customersUpdateWithWhereUniqueWithoutUsersInput | customersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: customersUpdateManyWithWhereWithoutUsersInput | customersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: customersScalarWhereInput | customersScalarWhereInput[]
  }

  export type invoicesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutUsersInput | invoicesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutUsersInput | invoicesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutUsersInput | invoicesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type productsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutUsersInput | productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutUsersInput | productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: productsUpdateManyWithWhereWithoutUsersInput | productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type providersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput> | providersCreateWithoutUsersInput[] | providersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: providersCreateOrConnectWithoutUsersInput | providersCreateOrConnectWithoutUsersInput[]
    upsert?: providersUpsertWithWhereUniqueWithoutUsersInput | providersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: providersCreateManyUsersInputEnvelope
    set?: providersWhereUniqueInput | providersWhereUniqueInput[]
    disconnect?: providersWhereUniqueInput | providersWhereUniqueInput[]
    delete?: providersWhereUniqueInput | providersWhereUniqueInput[]
    connect?: providersWhereUniqueInput | providersWhereUniqueInput[]
    update?: providersUpdateWithWhereUniqueWithoutUsersInput | providersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: providersUpdateManyWithWhereWithoutUsersInput | providersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: providersScalarWhereInput | providersScalarWhereInput[]
  }

  export type rolesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    disconnect?: rolesWhereInput | boolean
    delete?: rolesWhereInput | boolean
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type companiesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput> | companiesCreateWithoutUsersInput[] | companiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: companiesCreateOrConnectWithoutUsersInput | companiesCreateOrConnectWithoutUsersInput[]
    upsert?: companiesUpsertWithWhereUniqueWithoutUsersInput | companiesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: companiesCreateManyUsersInputEnvelope
    set?: companiesWhereUniqueInput | companiesWhereUniqueInput[]
    disconnect?: companiesWhereUniqueInput | companiesWhereUniqueInput[]
    delete?: companiesWhereUniqueInput | companiesWhereUniqueInput[]
    connect?: companiesWhereUniqueInput | companiesWhereUniqueInput[]
    update?: companiesUpdateWithWhereUniqueWithoutUsersInput | companiesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: companiesUpdateManyWithWhereWithoutUsersInput | companiesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: companiesScalarWhereInput | companiesScalarWhereInput[]
  }

  export type customersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<customersCreateWithoutUsersInput, customersUncheckedCreateWithoutUsersInput> | customersCreateWithoutUsersInput[] | customersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: customersCreateOrConnectWithoutUsersInput | customersCreateOrConnectWithoutUsersInput[]
    upsert?: customersUpsertWithWhereUniqueWithoutUsersInput | customersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: customersCreateManyUsersInputEnvelope
    set?: customersWhereUniqueInput | customersWhereUniqueInput[]
    disconnect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    delete?: customersWhereUniqueInput | customersWhereUniqueInput[]
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    update?: customersUpdateWithWhereUniqueWithoutUsersInput | customersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: customersUpdateManyWithWhereWithoutUsersInput | customersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: customersScalarWhereInput | customersScalarWhereInput[]
  }

  export type invoicesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput> | invoicesCreateWithoutUsersInput[] | invoicesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutUsersInput | invoicesCreateOrConnectWithoutUsersInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutUsersInput | invoicesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: invoicesCreateManyUsersInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutUsersInput | invoicesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutUsersInput | invoicesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutUsersInput | productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutUsersInput | productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: productsUpdateManyWithWhereWithoutUsersInput | productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type providersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput> | providersCreateWithoutUsersInput[] | providersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: providersCreateOrConnectWithoutUsersInput | providersCreateOrConnectWithoutUsersInput[]
    upsert?: providersUpsertWithWhereUniqueWithoutUsersInput | providersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: providersCreateManyUsersInputEnvelope
    set?: providersWhereUniqueInput | providersWhereUniqueInput[]
    disconnect?: providersWhereUniqueInput | providersWhereUniqueInput[]
    delete?: providersWhereUniqueInput | providersWhereUniqueInput[]
    connect?: providersWhereUniqueInput | providersWhereUniqueInput[]
    update?: providersUpdateWithWhereUniqueWithoutUsersInput | providersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: providersUpdateManyWithWhereWithoutUsersInput | providersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: providersScalarWhereInput | providersScalarWhereInput[]
  }

  export type invoicesCreateNestedOneWithoutInvoice_itemsInput = {
    create?: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_itemsInput
    connect?: invoicesWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutInvoice_itemsInput = {
    create?: XOR<productsCreateWithoutInvoice_itemsInput, productsUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutInvoice_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput = {
    create?: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_itemsInput
    upsert?: invoicesUpsertWithoutInvoice_itemsInput
    connect?: invoicesWhereUniqueInput
    update?: XOR<XOR<invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput, invoicesUpdateWithoutInvoice_itemsInput>, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutInvoice_itemsNestedInput = {
    create?: XOR<productsCreateWithoutInvoice_itemsInput, productsUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutInvoice_itemsInput
    upsert?: productsUpsertWithoutInvoice_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutInvoice_itemsInput, productsUpdateWithoutInvoice_itemsInput>, productsUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type invoicesCreateNestedManyWithoutInvoice_statusesInput = {
    create?: XOR<invoicesCreateWithoutInvoice_statusesInput, invoicesUncheckedCreateWithoutInvoice_statusesInput> | invoicesCreateWithoutInvoice_statusesInput[] | invoicesUncheckedCreateWithoutInvoice_statusesInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_statusesInput | invoicesCreateOrConnectWithoutInvoice_statusesInput[]
    createMany?: invoicesCreateManyInvoice_statusesInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutInvoice_statusesInput = {
    create?: XOR<invoicesCreateWithoutInvoice_statusesInput, invoicesUncheckedCreateWithoutInvoice_statusesInput> | invoicesCreateWithoutInvoice_statusesInput[] | invoicesUncheckedCreateWithoutInvoice_statusesInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_statusesInput | invoicesCreateOrConnectWithoutInvoice_statusesInput[]
    createMany?: invoicesCreateManyInvoice_statusesInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type invoicesUpdateManyWithoutInvoice_statusesNestedInput = {
    create?: XOR<invoicesCreateWithoutInvoice_statusesInput, invoicesUncheckedCreateWithoutInvoice_statusesInput> | invoicesCreateWithoutInvoice_statusesInput[] | invoicesUncheckedCreateWithoutInvoice_statusesInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_statusesInput | invoicesCreateOrConnectWithoutInvoice_statusesInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutInvoice_statusesInput | invoicesUpsertWithWhereUniqueWithoutInvoice_statusesInput[]
    createMany?: invoicesCreateManyInvoice_statusesInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutInvoice_statusesInput | invoicesUpdateWithWhereUniqueWithoutInvoice_statusesInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutInvoice_statusesInput | invoicesUpdateManyWithWhereWithoutInvoice_statusesInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type invoicesUncheckedUpdateManyWithoutInvoice_statusesNestedInput = {
    create?: XOR<invoicesCreateWithoutInvoice_statusesInput, invoicesUncheckedCreateWithoutInvoice_statusesInput> | invoicesCreateWithoutInvoice_statusesInput[] | invoicesUncheckedCreateWithoutInvoice_statusesInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_statusesInput | invoicesCreateOrConnectWithoutInvoice_statusesInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutInvoice_statusesInput | invoicesUpsertWithWhereUniqueWithoutInvoice_statusesInput[]
    createMany?: invoicesCreateManyInvoice_statusesInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutInvoice_statusesInput | invoicesUpdateWithWhereUniqueWithoutInvoice_statusesInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutInvoice_statusesInput | invoicesUpdateManyWithWhereWithoutInvoice_statusesInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type invoicesCreateNestedOneWithoutInvoice_paymentsInput = {
    create?: XOR<invoicesCreateWithoutInvoice_paymentsInput, invoicesUncheckedCreateWithoutInvoice_paymentsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_paymentsInput
    connect?: invoicesWhereUniqueInput
  }

  export type invoicesUpdateOneRequiredWithoutInvoice_paymentsNestedInput = {
    create?: XOR<invoicesCreateWithoutInvoice_paymentsInput, invoicesUncheckedCreateWithoutInvoice_paymentsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_paymentsInput
    upsert?: invoicesUpsertWithoutInvoice_paymentsInput
    connect?: invoicesWhereUniqueInput
    update?: XOR<XOR<invoicesUpdateToOneWithWhereWithoutInvoice_paymentsInput, invoicesUpdateWithoutInvoice_paymentsInput>, invoicesUncheckedUpdateWithoutInvoice_paymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type productsCreateWithoutCategoriesInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    description?: string | null
    invoice_items?: invoice_itemsCreateNestedManyWithoutProductsInput
    users?: usersCreateNestedOneWithoutProductsInput
    providers?: providersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    provider_id?: number | null
    description?: string | null
    user_id?: number | null
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    custom_price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"products"> | number | null
    provider_id?: IntNullableFilter<"products"> | number | null
    description?: StringNullableFilter<"products"> | string | null
    category_id?: IntNullableFilter<"products"> | number | null
    user_id?: IntNullableFilter<"products"> | number | null
  }

  export type usersCreateWithoutCompaniesInput = {
    username: string
    password: string
    email: string
    customers?: customersCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
    providers?: providersCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCompaniesInput = {
    id?: number
    username: string
    password: string
    email: string
    role_id?: number | null
    customers?: customersUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
    providers?: providersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCompaniesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCompaniesInput, usersUncheckedCreateWithoutCompaniesInput>
  }

  export type customersCreateWithoutCompaniesInput = {
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    users?: usersCreateNestedOneWithoutCustomersInput
    invoices?: invoicesCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateWithoutCompaniesInput = {
    id?: number
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
    invoices?: invoicesUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersCreateOrConnectWithoutCompaniesInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutCompaniesInput, customersUncheckedCreateWithoutCompaniesInput>
  }

  export type customersCreateManyCompaniesInputEnvelope = {
    data: customersCreateManyCompaniesInput | customersCreateManyCompaniesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCompaniesInput = {
    update: XOR<usersUpdateWithoutCompaniesInput, usersUncheckedUpdateWithoutCompaniesInput>
    create: XOR<usersCreateWithoutCompaniesInput, usersUncheckedCreateWithoutCompaniesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCompaniesInput, usersUncheckedUpdateWithoutCompaniesInput>
  }

  export type usersUpdateWithoutCompaniesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    customers?: customersUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    products?: productsUpdateManyWithoutUsersNestedInput
    providers?: providersUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    customers?: customersUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
    providers?: providersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type customersUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: customersWhereUniqueInput
    update: XOR<customersUpdateWithoutCompaniesInput, customersUncheckedUpdateWithoutCompaniesInput>
    create: XOR<customersCreateWithoutCompaniesInput, customersUncheckedCreateWithoutCompaniesInput>
  }

  export type customersUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: customersWhereUniqueInput
    data: XOR<customersUpdateWithoutCompaniesInput, customersUncheckedUpdateWithoutCompaniesInput>
  }

  export type customersUpdateManyWithWhereWithoutCompaniesInput = {
    where: customersScalarWhereInput
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type customersScalarWhereInput = {
    AND?: customersScalarWhereInput | customersScalarWhereInput[]
    OR?: customersScalarWhereInput[]
    NOT?: customersScalarWhereInput | customersScalarWhereInput[]
    id?: IntFilter<"customers"> | number
    identifier?: StringNullableFilter<"customers"> | string | null
    name?: StringFilter<"customers"> | string
    email?: StringNullableFilter<"customers"> | string | null
    phone?: StringNullableFilter<"customers"> | string | null
    notes?: StringNullableFilter<"customers"> | string | null
    company_id?: IntNullableFilter<"customers"> | number | null
    street?: StringNullableFilter<"customers"> | string | null
    city?: StringNullableFilter<"customers"> | string | null
    state?: StringNullableFilter<"customers"> | string | null
    zip_code?: StringNullableFilter<"customers"> | string | null
    country?: StringNullableFilter<"customers"> | string | null
    user_id?: IntNullableFilter<"customers"> | number | null
  }

  export type companiesCreateWithoutCustomersInput = {
    name?: string | null
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    users?: usersCreateNestedOneWithoutCompaniesInput
  }

  export type companiesUncheckedCreateWithoutCustomersInput = {
    id?: number
    name?: string | null
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
  }

  export type companiesCreateOrConnectWithoutCustomersInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutCustomersInput, companiesUncheckedCreateWithoutCustomersInput>
  }

  export type usersCreateWithoutCustomersInput = {
    username: string
    password: string
    email: string
    companies?: companiesCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
    providers?: providersCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCustomersInput = {
    id?: number
    username: string
    password: string
    email: string
    role_id?: number | null
    companies?: companiesUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
    providers?: providersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCustomersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCustomersInput, usersUncheckedCreateWithoutCustomersInput>
  }

  export type invoicesCreateWithoutCustomersInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    payment_date?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
    invoice_payments?: invoice_paymentsCreateNestedManyWithoutInvoicesInput
    invoice_statuses?: invoice_statusesCreateNestedOneWithoutInvoicesInput
    users?: usersCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutCustomersInput = {
    id?: number
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    user_id?: number | null
    payment_date?: Date | string | null
    status_id?: number | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
    invoice_payments?: invoice_paymentsUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesCreateOrConnectWithoutCustomersInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput>
  }

  export type invoicesCreateManyCustomersInputEnvelope = {
    data: invoicesCreateManyCustomersInput | invoicesCreateManyCustomersInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutCustomersInput = {
    update: XOR<companiesUpdateWithoutCustomersInput, companiesUncheckedUpdateWithoutCustomersInput>
    create: XOR<companiesCreateWithoutCustomersInput, companiesUncheckedCreateWithoutCustomersInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutCustomersInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutCustomersInput, companiesUncheckedUpdateWithoutCustomersInput>
  }

  export type companiesUpdateWithoutCustomersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUpsertWithoutCustomersInput = {
    update: XOR<usersUpdateWithoutCustomersInput, usersUncheckedUpdateWithoutCustomersInput>
    create: XOR<usersCreateWithoutCustomersInput, usersUncheckedCreateWithoutCustomersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCustomersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCustomersInput, usersUncheckedUpdateWithoutCustomersInput>
  }

  export type usersUpdateWithoutCustomersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    products?: productsUpdateManyWithoutUsersNestedInput
    providers?: providersUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    companies?: companiesUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
    providers?: providersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type invoicesUpsertWithWhereUniqueWithoutCustomersInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutCustomersInput, invoicesUncheckedUpdateWithoutCustomersInput>
    create: XOR<invoicesCreateWithoutCustomersInput, invoicesUncheckedCreateWithoutCustomersInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutCustomersInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutCustomersInput, invoicesUncheckedUpdateWithoutCustomersInput>
  }

  export type invoicesUpdateManyWithWhereWithoutCustomersInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutCustomersInput>
  }

  export type invoicesScalarWhereInput = {
    AND?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    OR?: invoicesScalarWhereInput[]
    NOT?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    id?: IntFilter<"invoices"> | number
    customer_id?: IntFilter<"invoices"> | number
    amount?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFilter<"invoices"> | Date | string
    due_date?: DateTimeFilter<"invoices"> | Date | string
    user_id?: IntNullableFilter<"invoices"> | number | null
    payment_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    status_id?: IntNullableFilter<"invoices"> | number | null
    subtotal?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    tax_amount?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
    discount_amount?: DecimalNullableFilter<"invoices"> | Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsCreateWithoutInvoicesInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    item_custom_price?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    item_discount_value?: Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: Decimal | DecimalJsLike | number | string | null
    products: productsCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateWithoutInvoicesInput = {
    id?: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    item_custom_price?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    item_discount_value?: Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsCreateOrConnectWithoutInvoicesInput = {
    where: invoice_itemsWhereUniqueInput
    create: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_itemsCreateManyInvoicesInputEnvelope = {
    data: invoice_itemsCreateManyInvoicesInput | invoice_itemsCreateManyInvoicesInput[]
    skipDuplicates?: boolean
  }

  export type invoice_paymentsCreateWithoutInvoicesInput = {
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    method?: string | null
    notes?: string | null
  }

  export type invoice_paymentsUncheckedCreateWithoutInvoicesInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    method?: string | null
    notes?: string | null
  }

  export type invoice_paymentsCreateOrConnectWithoutInvoicesInput = {
    where: invoice_paymentsWhereUniqueInput
    create: XOR<invoice_paymentsCreateWithoutInvoicesInput, invoice_paymentsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_paymentsCreateManyInvoicesInputEnvelope = {
    data: invoice_paymentsCreateManyInvoicesInput | invoice_paymentsCreateManyInvoicesInput[]
    skipDuplicates?: boolean
  }

  export type invoice_statusesCreateWithoutInvoicesInput = {
    name: string
  }

  export type invoice_statusesUncheckedCreateWithoutInvoicesInput = {
    id?: number
    name: string
  }

  export type invoice_statusesCreateOrConnectWithoutInvoicesInput = {
    where: invoice_statusesWhereUniqueInput
    create: XOR<invoice_statusesCreateWithoutInvoicesInput, invoice_statusesUncheckedCreateWithoutInvoicesInput>
  }

  export type usersCreateWithoutInvoicesInput = {
    username: string
    password: string
    email: string
    companies?: companiesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
    providers?: providersCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutInvoicesInput = {
    id?: number
    username: string
    password: string
    email: string
    role_id?: number | null
    companies?: companiesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
    providers?: providersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutInvoicesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
  }

  export type customersCreateWithoutInvoicesInput = {
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    companies?: companiesCreateNestedOneWithoutCustomersInput
    users?: usersCreateNestedOneWithoutCustomersInput
  }

  export type customersUncheckedCreateWithoutInvoicesInput = {
    id?: number
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    company_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
  }

  export type customersCreateOrConnectWithoutInvoicesInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput = {
    where: invoice_itemsWhereUniqueInput
    update: XOR<invoice_itemsUpdateWithoutInvoicesInput, invoice_itemsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<invoice_itemsCreateWithoutInvoicesInput, invoice_itemsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput = {
    where: invoice_itemsWhereUniqueInput
    data: XOR<invoice_itemsUpdateWithoutInvoicesInput, invoice_itemsUncheckedUpdateWithoutInvoicesInput>
  }

  export type invoice_itemsUpdateManyWithWhereWithoutInvoicesInput = {
    where: invoice_itemsScalarWhereInput
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyWithoutInvoicesInput>
  }

  export type invoice_itemsScalarWhereInput = {
    AND?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
    OR?: invoice_itemsScalarWhereInput[]
    NOT?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
    id?: IntFilter<"invoice_items"> | number
    invoice_id?: IntFilter<"invoice_items"> | number
    product_id?: IntFilter<"invoice_items"> | number
    quantity?: IntFilter<"invoice_items"> | number
    unit_price?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    item_custom_price?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    item_discount_value?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: DecimalNullableFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_paymentsUpsertWithWhereUniqueWithoutInvoicesInput = {
    where: invoice_paymentsWhereUniqueInput
    update: XOR<invoice_paymentsUpdateWithoutInvoicesInput, invoice_paymentsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<invoice_paymentsCreateWithoutInvoicesInput, invoice_paymentsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_paymentsUpdateWithWhereUniqueWithoutInvoicesInput = {
    where: invoice_paymentsWhereUniqueInput
    data: XOR<invoice_paymentsUpdateWithoutInvoicesInput, invoice_paymentsUncheckedUpdateWithoutInvoicesInput>
  }

  export type invoice_paymentsUpdateManyWithWhereWithoutInvoicesInput = {
    where: invoice_paymentsScalarWhereInput
    data: XOR<invoice_paymentsUpdateManyMutationInput, invoice_paymentsUncheckedUpdateManyWithoutInvoicesInput>
  }

  export type invoice_paymentsScalarWhereInput = {
    AND?: invoice_paymentsScalarWhereInput | invoice_paymentsScalarWhereInput[]
    OR?: invoice_paymentsScalarWhereInput[]
    NOT?: invoice_paymentsScalarWhereInput | invoice_paymentsScalarWhereInput[]
    id?: IntFilter<"invoice_payments"> | number
    invoice_id?: IntFilter<"invoice_payments"> | number
    amount?: DecimalFilter<"invoice_payments"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"invoice_payments"> | Date | string
    method?: StringNullableFilter<"invoice_payments"> | string | null
    notes?: StringNullableFilter<"invoice_payments"> | string | null
  }

  export type invoice_statusesUpsertWithoutInvoicesInput = {
    update: XOR<invoice_statusesUpdateWithoutInvoicesInput, invoice_statusesUncheckedUpdateWithoutInvoicesInput>
    create: XOR<invoice_statusesCreateWithoutInvoicesInput, invoice_statusesUncheckedCreateWithoutInvoicesInput>
    where?: invoice_statusesWhereInput
  }

  export type invoice_statusesUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: invoice_statusesWhereInput
    data: XOR<invoice_statusesUpdateWithoutInvoicesInput, invoice_statusesUncheckedUpdateWithoutInvoicesInput>
  }

  export type invoice_statusesUpdateWithoutInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type invoice_statusesUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpsertWithoutInvoicesInput = {
    update: XOR<usersUpdateWithoutInvoicesInput, usersUncheckedUpdateWithoutInvoicesInput>
    create: XOR<usersCreateWithoutInvoicesInput, usersUncheckedCreateWithoutInvoicesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInvoicesInput, usersUncheckedUpdateWithoutInvoicesInput>
  }

  export type usersUpdateWithoutInvoicesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUsersNestedInput
    products?: productsUpdateManyWithoutUsersNestedInput
    providers?: providersUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    companies?: companiesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUsersNestedInput
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
    providers?: providersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type customersUpsertWithoutInvoicesInput = {
    update: XOR<customersUpdateWithoutInvoicesInput, customersUncheckedUpdateWithoutInvoicesInput>
    create: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutInvoicesInput, customersUncheckedUpdateWithoutInvoicesInput>
  }

  export type customersUpdateWithoutInvoicesInput = {
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companies?: companiesUpdateOneWithoutCustomersNestedInput
    users?: usersUpdateOneWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type invoice_itemsCreateWithoutProductsInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    item_custom_price?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    item_discount_value?: Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: Decimal | DecimalJsLike | number | string | null
    invoices: invoicesCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateWithoutProductsInput = {
    id?: number
    invoice_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    item_custom_price?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    item_discount_value?: Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsCreateOrConnectWithoutProductsInput = {
    where: invoice_itemsWhereUniqueInput
    create: XOR<invoice_itemsCreateWithoutProductsInput, invoice_itemsUncheckedCreateWithoutProductsInput>
  }

  export type invoice_itemsCreateManyProductsInputEnvelope = {
    data: invoice_itemsCreateManyProductsInput | invoice_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProductsInput = {
    username: string
    password: string
    email: string
    companies?: companiesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    providers?: providersCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProductsInput = {
    id?: number
    username: string
    password: string
    email: string
    role_id?: number | null
    companies?: companiesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    providers?: providersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProductsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
  }

  export type categoriesCreateWithoutProductsInput = {
    name?: string | null
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name?: string | null
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type providersCreateWithoutProductsInput = {
    name: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    users?: usersCreateNestedOneWithoutProvidersInput
  }

  export type providersUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
  }

  export type providersCreateOrConnectWithoutProductsInput = {
    where: providersWhereUniqueInput
    create: XOR<providersCreateWithoutProductsInput, providersUncheckedCreateWithoutProductsInput>
  }

  export type invoice_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: invoice_itemsWhereUniqueInput
    update: XOR<invoice_itemsUpdateWithoutProductsInput, invoice_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<invoice_itemsCreateWithoutProductsInput, invoice_itemsUncheckedCreateWithoutProductsInput>
  }

  export type invoice_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: invoice_itemsWhereUniqueInput
    data: XOR<invoice_itemsUpdateWithoutProductsInput, invoice_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type invoice_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: invoice_itemsScalarWhereInput
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type usersUpsertWithoutProductsInput = {
    update: XOR<usersUpdateWithoutProductsInput, usersUncheckedUpdateWithoutProductsInput>
    create: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProductsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProductsInput, usersUncheckedUpdateWithoutProductsInput>
  }

  export type usersUpdateWithoutProductsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    providers?: providersUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    companies?: companiesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    providers?: providersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type providersUpsertWithoutProductsInput = {
    update: XOR<providersUpdateWithoutProductsInput, providersUncheckedUpdateWithoutProductsInput>
    create: XOR<providersCreateWithoutProductsInput, providersUncheckedCreateWithoutProductsInput>
    where?: providersWhereInput
  }

  export type providersUpdateToOneWithWhereWithoutProductsInput = {
    where?: providersWhereInput
    data: XOR<providersUpdateWithoutProductsInput, providersUncheckedUpdateWithoutProductsInput>
  }

  export type providersUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsCreateWithoutProvidersInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    description?: string | null
    invoice_items?: invoice_itemsCreateNestedManyWithoutProductsInput
    users?: usersCreateNestedOneWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProvidersInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    description?: string | null
    category_id?: number | null
    user_id?: number | null
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProvidersInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProvidersInput, productsUncheckedCreateWithoutProvidersInput>
  }

  export type productsCreateManyProvidersInputEnvelope = {
    data: productsCreateManyProvidersInput | productsCreateManyProvidersInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProvidersInput = {
    username: string
    password: string
    email: string
    companies?: companiesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProvidersInput = {
    id?: number
    username: string
    password: string
    email: string
    role_id?: number | null
    companies?: companiesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProvidersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProvidersInput, usersUncheckedCreateWithoutProvidersInput>
  }

  export type productsUpsertWithWhereUniqueWithoutProvidersInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutProvidersInput, productsUncheckedUpdateWithoutProvidersInput>
    create: XOR<productsCreateWithoutProvidersInput, productsUncheckedCreateWithoutProvidersInput>
  }

  export type productsUpdateWithWhereUniqueWithoutProvidersInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutProvidersInput, productsUncheckedUpdateWithoutProvidersInput>
  }

  export type productsUpdateManyWithWhereWithoutProvidersInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutProvidersInput>
  }

  export type usersUpsertWithoutProvidersInput = {
    update: XOR<usersUpdateWithoutProvidersInput, usersUncheckedUpdateWithoutProvidersInput>
    create: XOR<usersCreateWithoutProvidersInput, usersUncheckedCreateWithoutProvidersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProvidersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProvidersInput, usersUncheckedUpdateWithoutProvidersInput>
  }

  export type usersUpdateWithoutProvidersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    products?: productsUpdateManyWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    companies?: companiesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutRolesInput = {
    username: string
    password: string
    email: string
    companies?: companiesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUsersInput
    invoices?: invoicesCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
    providers?: providersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRolesInput = {
    id?: number
    username: string
    password: string
    email: string
    companies?: companiesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUsersInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
    providers?: providersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersCreateManyRolesInputEnvelope = {
    data: usersCreateManyRolesInput | usersCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
  }

  export type usersUpdateManyWithWhereWithoutRolesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRolesInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    role_id?: IntNullableFilter<"users"> | number | null
  }

  export type companiesCreateWithoutUsersInput = {
    name?: string | null
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    customers?: customersCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string | null
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    customers?: customersUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesCreateOrConnectWithoutUsersInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
  }

  export type companiesCreateManyUsersInputEnvelope = {
    data: companiesCreateManyUsersInput | companiesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type customersCreateWithoutUsersInput = {
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    companies?: companiesCreateNestedOneWithoutCustomersInput
    invoices?: invoicesCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateWithoutUsersInput = {
    id?: number
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    company_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    invoices?: invoicesUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersCreateOrConnectWithoutUsersInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutUsersInput, customersUncheckedCreateWithoutUsersInput>
  }

  export type customersCreateManyUsersInputEnvelope = {
    data: customersCreateManyUsersInput | customersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type invoicesCreateWithoutUsersInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    payment_date?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
    invoice_payments?: invoice_paymentsCreateNestedManyWithoutInvoicesInput
    invoice_statuses?: invoice_statusesCreateNestedOneWithoutInvoicesInput
    customers: customersCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutUsersInput = {
    id?: number
    customer_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    payment_date?: Date | string | null
    status_id?: number | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
    invoice_payments?: invoice_paymentsUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesCreateOrConnectWithoutUsersInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput>
  }

  export type invoicesCreateManyUsersInputEnvelope = {
    data: invoicesCreateManyUsersInput | invoicesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutUsersInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    description?: string | null
    invoice_items?: invoice_itemsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
    providers?: providersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    provider_id?: number | null
    description?: string | null
    category_id?: number | null
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutUsersInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput>
  }

  export type productsCreateManyUsersInputEnvelope = {
    data: productsCreateManyUsersInput | productsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type providersCreateWithoutUsersInput = {
    name: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    products?: productsCreateNestedManyWithoutProvidersInput
  }

  export type providersUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    products?: productsUncheckedCreateNestedManyWithoutProvidersInput
  }

  export type providersCreateOrConnectWithoutUsersInput = {
    where: providersWhereUniqueInput
    create: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput>
  }

  export type providersCreateManyUsersInputEnvelope = {
    data: providersCreateManyUsersInput | providersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type rolesCreateWithoutUsersInput = {
    name: string
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type companiesUpsertWithWhereUniqueWithoutUsersInput = {
    where: companiesWhereUniqueInput
    update: XOR<companiesUpdateWithoutUsersInput, companiesUncheckedUpdateWithoutUsersInput>
    create: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
  }

  export type companiesUpdateWithWhereUniqueWithoutUsersInput = {
    where: companiesWhereUniqueInput
    data: XOR<companiesUpdateWithoutUsersInput, companiesUncheckedUpdateWithoutUsersInput>
  }

  export type companiesUpdateManyWithWhereWithoutUsersInput = {
    where: companiesScalarWhereInput
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyWithoutUsersInput>
  }

  export type companiesScalarWhereInput = {
    AND?: companiesScalarWhereInput | companiesScalarWhereInput[]
    OR?: companiesScalarWhereInput[]
    NOT?: companiesScalarWhereInput | companiesScalarWhereInput[]
    id?: IntFilter<"companies"> | number
    name?: StringNullableFilter<"companies"> | string | null
    phone?: StringNullableFilter<"companies"> | string | null
    email?: StringNullableFilter<"companies"> | string | null
    street?: StringNullableFilter<"companies"> | string | null
    city?: StringNullableFilter<"companies"> | string | null
    state?: StringNullableFilter<"companies"> | string | null
    zip_code?: StringNullableFilter<"companies"> | string | null
    country?: StringNullableFilter<"companies"> | string | null
    user_id?: IntNullableFilter<"companies"> | number | null
  }

  export type customersUpsertWithWhereUniqueWithoutUsersInput = {
    where: customersWhereUniqueInput
    update: XOR<customersUpdateWithoutUsersInput, customersUncheckedUpdateWithoutUsersInput>
    create: XOR<customersCreateWithoutUsersInput, customersUncheckedCreateWithoutUsersInput>
  }

  export type customersUpdateWithWhereUniqueWithoutUsersInput = {
    where: customersWhereUniqueInput
    data: XOR<customersUpdateWithoutUsersInput, customersUncheckedUpdateWithoutUsersInput>
  }

  export type customersUpdateManyWithWhereWithoutUsersInput = {
    where: customersScalarWhereInput
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyWithoutUsersInput>
  }

  export type invoicesUpsertWithWhereUniqueWithoutUsersInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutUsersInput, invoicesUncheckedUpdateWithoutUsersInput>
    create: XOR<invoicesCreateWithoutUsersInput, invoicesUncheckedCreateWithoutUsersInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutUsersInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutUsersInput, invoicesUncheckedUpdateWithoutUsersInput>
  }

  export type invoicesUpdateManyWithWhereWithoutUsersInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutUsersInput>
  }

  export type productsUpsertWithWhereUniqueWithoutUsersInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutUsersInput, productsUncheckedUpdateWithoutUsersInput>
    create: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput>
  }

  export type productsUpdateWithWhereUniqueWithoutUsersInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutUsersInput, productsUncheckedUpdateWithoutUsersInput>
  }

  export type productsUpdateManyWithWhereWithoutUsersInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutUsersInput>
  }

  export type providersUpsertWithWhereUniqueWithoutUsersInput = {
    where: providersWhereUniqueInput
    update: XOR<providersUpdateWithoutUsersInput, providersUncheckedUpdateWithoutUsersInput>
    create: XOR<providersCreateWithoutUsersInput, providersUncheckedCreateWithoutUsersInput>
  }

  export type providersUpdateWithWhereUniqueWithoutUsersInput = {
    where: providersWhereUniqueInput
    data: XOR<providersUpdateWithoutUsersInput, providersUncheckedUpdateWithoutUsersInput>
  }

  export type providersUpdateManyWithWhereWithoutUsersInput = {
    where: providersScalarWhereInput
    data: XOR<providersUpdateManyMutationInput, providersUncheckedUpdateManyWithoutUsersInput>
  }

  export type providersScalarWhereInput = {
    AND?: providersScalarWhereInput | providersScalarWhereInput[]
    OR?: providersScalarWhereInput[]
    NOT?: providersScalarWhereInput | providersScalarWhereInput[]
    id?: IntFilter<"providers"> | number
    name?: StringFilter<"providers"> | string
    street?: StringNullableFilter<"providers"> | string | null
    city?: StringNullableFilter<"providers"> | string | null
    state?: StringNullableFilter<"providers"> | string | null
    zip_code?: StringNullableFilter<"providers"> | string | null
    country?: StringNullableFilter<"providers"> | string | null
    user_id?: IntNullableFilter<"providers"> | number | null
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type invoicesCreateWithoutInvoice_itemsInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    payment_date?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_payments?: invoice_paymentsCreateNestedManyWithoutInvoicesInput
    invoice_statuses?: invoice_statusesCreateNestedOneWithoutInvoicesInput
    users?: usersCreateNestedOneWithoutInvoicesInput
    customers: customersCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutInvoice_itemsInput = {
    id?: number
    customer_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    user_id?: number | null
    payment_date?: Date | string | null
    status_id?: number | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_payments?: invoice_paymentsUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesCreateOrConnectWithoutInvoice_itemsInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
  }

  export type productsCreateWithoutInvoice_itemsInput = {
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    description?: string | null
    users?: usersCreateNestedOneWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
    providers?: providersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutInvoice_itemsInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    provider_id?: number | null
    description?: string | null
    category_id?: number | null
    user_id?: number | null
  }

  export type productsCreateOrConnectWithoutInvoice_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutInvoice_itemsInput, productsUncheckedCreateWithoutInvoice_itemsInput>
  }

  export type invoicesUpsertWithoutInvoice_itemsInput = {
    update: XOR<invoicesUpdateWithoutInvoice_itemsInput, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
    create: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    where?: invoicesWhereInput
  }

  export type invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput = {
    where?: invoicesWhereInput
    data: XOR<invoicesUpdateWithoutInvoice_itemsInput, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type invoicesUpdateWithoutInvoice_itemsInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_payments?: invoice_paymentsUpdateManyWithoutInvoicesNestedInput
    invoice_statuses?: invoice_statusesUpdateOneWithoutInvoicesNestedInput
    users?: usersUpdateOneWithoutInvoicesNestedInput
    customers?: customersUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutInvoice_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_payments?: invoice_paymentsUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type productsUpsertWithoutInvoice_itemsInput = {
    update: XOR<productsUpdateWithoutInvoice_itemsInput, productsUncheckedUpdateWithoutInvoice_itemsInput>
    create: XOR<productsCreateWithoutInvoice_itemsInput, productsUncheckedCreateWithoutInvoice_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutInvoice_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutInvoice_itemsInput, productsUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type productsUpdateWithoutInvoice_itemsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
    providers?: providersUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutInvoice_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type invoicesCreateWithoutInvoice_statusesInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    payment_date?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
    invoice_payments?: invoice_paymentsCreateNestedManyWithoutInvoicesInput
    users?: usersCreateNestedOneWithoutInvoicesInput
    customers: customersCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutInvoice_statusesInput = {
    id?: number
    customer_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    user_id?: number | null
    payment_date?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
    invoice_payments?: invoice_paymentsUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesCreateOrConnectWithoutInvoice_statusesInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutInvoice_statusesInput, invoicesUncheckedCreateWithoutInvoice_statusesInput>
  }

  export type invoicesCreateManyInvoice_statusesInputEnvelope = {
    data: invoicesCreateManyInvoice_statusesInput | invoicesCreateManyInvoice_statusesInput[]
    skipDuplicates?: boolean
  }

  export type invoicesUpsertWithWhereUniqueWithoutInvoice_statusesInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutInvoice_statusesInput, invoicesUncheckedUpdateWithoutInvoice_statusesInput>
    create: XOR<invoicesCreateWithoutInvoice_statusesInput, invoicesUncheckedCreateWithoutInvoice_statusesInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutInvoice_statusesInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutInvoice_statusesInput, invoicesUncheckedUpdateWithoutInvoice_statusesInput>
  }

  export type invoicesUpdateManyWithWhereWithoutInvoice_statusesInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutInvoice_statusesInput>
  }

  export type invoicesCreateWithoutInvoice_paymentsInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    payment_date?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoicesInput
    invoice_statuses?: invoice_statusesCreateNestedOneWithoutInvoicesInput
    users?: usersCreateNestedOneWithoutInvoicesInput
    customers: customersCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutInvoice_paymentsInput = {
    id?: number
    customer_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    user_id?: number | null
    payment_date?: Date | string | null
    status_id?: number | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput
  }

  export type invoicesCreateOrConnectWithoutInvoice_paymentsInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutInvoice_paymentsInput, invoicesUncheckedCreateWithoutInvoice_paymentsInput>
  }

  export type invoicesUpsertWithoutInvoice_paymentsInput = {
    update: XOR<invoicesUpdateWithoutInvoice_paymentsInput, invoicesUncheckedUpdateWithoutInvoice_paymentsInput>
    create: XOR<invoicesCreateWithoutInvoice_paymentsInput, invoicesUncheckedCreateWithoutInvoice_paymentsInput>
    where?: invoicesWhereInput
  }

  export type invoicesUpdateToOneWithWhereWithoutInvoice_paymentsInput = {
    where?: invoicesWhereInput
    data: XOR<invoicesUpdateWithoutInvoice_paymentsInput, invoicesUncheckedUpdateWithoutInvoice_paymentsInput>
  }

  export type invoicesUpdateWithoutInvoice_paymentsInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
    invoice_statuses?: invoice_statusesUpdateOneWithoutInvoicesNestedInput
    users?: usersUpdateOneWithoutInvoicesNestedInput
    customers?: customersUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutInvoice_paymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type productsCreateManyCategoriesInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    provider_id?: number | null
    description?: string | null
    user_id?: number | null
  }

  export type productsUpdateWithoutCategoriesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_items?: invoice_itemsUpdateManyWithoutProductsNestedInput
    users?: usersUpdateOneWithoutProductsNestedInput
    providers?: providersUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type customersCreateManyCompaniesInput = {
    id?: number
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
    user_id?: number | null
  }

  export type customersUpdateWithoutCompaniesInput = {
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutCustomersNestedInput
    invoices?: invoicesUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    invoices?: invoicesUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateManyWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type invoicesCreateManyCustomersInput = {
    id?: number
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    user_id?: number | null
    payment_date?: Date | string | null
    status_id?: number | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
  }

  export type invoicesUpdateWithoutCustomersInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
    invoice_payments?: invoice_paymentsUpdateManyWithoutInvoicesNestedInput
    invoice_statuses?: invoice_statusesUpdateOneWithoutInvoicesNestedInput
    users?: usersUpdateOneWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
    invoice_payments?: invoice_paymentsUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateManyWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsCreateManyInvoicesInput = {
    id?: number
    product_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    item_custom_price?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    item_discount_value?: Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_paymentsCreateManyInvoicesInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    method?: string | null
    notes?: string | null
  }

  export type invoice_itemsUpdateWithoutInvoicesInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_discount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    products?: productsUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_discount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsUncheckedUpdateManyWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_discount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_paymentsUpdateWithoutInvoicesInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoice_paymentsUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoice_paymentsUncheckedUpdateManyWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoice_itemsCreateManyProductsInput = {
    id?: number
    invoice_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    item_custom_price?: Decimal | DecimalJsLike | number | string | null
    subtotal?: Decimal | DecimalJsLike | number | string
    item_discount_value?: Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_discount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoices?: invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_discount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type invoice_itemsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoice_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_discount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    item_discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_after_discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type productsCreateManyProvidersInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    description?: string | null
    category_id?: number | null
    user_id?: number | null
  }

  export type productsUpdateWithoutProvidersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_items?: invoice_itemsUpdateManyWithoutProductsNestedInput
    users?: usersUpdateOneWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateManyRolesInput = {
    id?: number
    username: string
    password: string
    email: string
  }

  export type usersUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUpdateManyWithoutUsersNestedInput
    products?: productsUpdateManyWithoutUsersNestedInput
    providers?: providersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companies?: companiesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUsersNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutUsersNestedInput
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
    providers?: providersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type companiesCreateManyUsersInput = {
    id?: number
    name?: string | null
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
  }

  export type customersCreateManyUsersInput = {
    id?: number
    identifier?: string | null
    name: string
    email?: string | null
    phone?: string | null
    notes?: string | null
    company_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
  }

  export type invoicesCreateManyUsersInput = {
    id?: number
    customer_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    payment_date?: Date | string | null
    status_id?: number | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
  }

  export type productsCreateManyUsersInput = {
    id?: number
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    custom_price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    provider_id?: number | null
    description?: string | null
    category_id?: number | null
  }

  export type providersCreateManyUsersInput = {
    id?: number
    name: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    country?: string | null
  }

  export type companiesUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: customersUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: customersUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUpdateWithoutUsersInput = {
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    companies?: companiesUpdateOneWithoutCustomersNestedInput
    invoices?: invoicesUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    invoices?: invoicesUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoicesUpdateWithoutUsersInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
    invoice_payments?: invoice_paymentsUpdateManyWithoutInvoicesNestedInput
    invoice_statuses?: invoice_statusesUpdateOneWithoutInvoicesNestedInput
    customers?: customersUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
    invoice_payments?: invoice_paymentsUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type productsUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_items?: invoice_itemsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
    providers?: providersUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custom_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    provider_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type providersUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUpdateManyWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUncheckedUpdateManyWithoutProvidersNestedInput
  }

  export type providersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type invoicesCreateManyInvoice_statusesInput = {
    id?: number
    customer_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string
    due_date: Date | string
    user_id?: number | null
    payment_date?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    tax_amount?: Decimal | DecimalJsLike | number | string | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
  }

  export type invoicesUpdateWithoutInvoice_statusesInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUpdateManyWithoutInvoicesNestedInput
    invoice_payments?: invoice_paymentsUpdateManyWithoutInvoicesNestedInput
    users?: usersUpdateOneWithoutInvoicesNestedInput
    customers?: customersUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutInvoice_statusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput
    invoice_payments?: invoice_paymentsUncheckedUpdateManyWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateManyWithoutInvoice_statusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tax_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}