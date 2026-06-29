
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model EquipmentType
 * 
 */
export type EquipmentType = $Result.DefaultSelection<Prisma.$EquipmentTypePayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model FileData
 * 
 */
export type FileData = $Result.DefaultSelection<Prisma.$FileDataPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model EquipmentSaleRecord
 * 
 */
export type EquipmentSaleRecord = $Result.DefaultSelection<Prisma.$EquipmentSaleRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ApproveStatus: {
  APPROVE: 'APPROVE',
  PENDING: 'PENDING',
  REJECT: 'REJECT'
};

export type ApproveStatus = (typeof ApproveStatus)[keyof typeof ApproveStatus]


export const HistoryStatus: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  APPROVE: 'APPROVE',
  REJECT: 'REJECT'
};

export type HistoryStatus = (typeof HistoryStatus)[keyof typeof HistoryStatus]


export const EntityType: {
  EQUIPMENT: 'EQUIPMENT',
  REQUEST: 'REQUEST',
  USER: 'USER'
};

export type EntityType = (typeof EntityType)[keyof typeof EntityType]


export const AuctionMethod: {
  PUBLIC_VERBAL: 'PUBLIC_VERBAL',
  SPECIFIC: 'SPECIFIC',
  E_BIDDING: 'E_BIDDING',
  OTHER: 'OTHER'
};

export type AuctionMethod = (typeof AuctionMethod)[keyof typeof AuctionMethod]


export const EquipmentStatus: {
  IN_USE: 'IN_USE',
  BROKEN: 'BROKEN',
  MAINTENANCE: 'MAINTENANCE',
  DISPOSED: 'DISPOSED'
};

export type EquipmentStatus = (typeof EquipmentStatus)[keyof typeof EquipmentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ApproveStatus = $Enums.ApproveStatus

export const ApproveStatus: typeof $Enums.ApproveStatus

export type HistoryStatus = $Enums.HistoryStatus

export const HistoryStatus: typeof $Enums.HistoryStatus

export type EntityType = $Enums.EntityType

export const EntityType: typeof $Enums.EntityType

export type AuctionMethod = $Enums.AuctionMethod

export const AuctionMethod: typeof $Enums.AuctionMethod

export type EquipmentStatus = $Enums.EquipmentStatus

export const EquipmentStatus: typeof $Enums.EquipmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentType`: Exposes CRUD operations for the **EquipmentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentTypes
    * const equipmentTypes = await prisma.equipmentType.findMany()
    * ```
    */
  get equipmentType(): Prisma.EquipmentTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileData`: Exposes CRUD operations for the **FileData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileData
    * const fileData = await prisma.fileData.findMany()
    * ```
    */
  get fileData(): Prisma.FileDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentSaleRecord`: Exposes CRUD operations for the **EquipmentSaleRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentSaleRecords
    * const equipmentSaleRecords = await prisma.equipmentSaleRecord.findMany()
    * ```
    */
  get equipmentSaleRecord(): Prisma.EquipmentSaleRecordDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Category: 'Category',
    EquipmentType: 'EquipmentType',
    Unit: 'Unit',
    FileData: 'FileData',
    Equipment: 'Equipment',
    EquipmentSaleRecord: 'EquipmentSaleRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "equipmentType" | "unit" | "fileData" | "equipment" | "equipmentSaleRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      EquipmentType: {
        payload: Prisma.$EquipmentTypePayload<ExtArgs>
        fields: Prisma.EquipmentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          findFirst: {
            args: Prisma.EquipmentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          findMany: {
            args: Prisma.EquipmentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>[]
          }
          create: {
            args: Prisma.EquipmentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          createMany: {
            args: Prisma.EquipmentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>[]
          }
          delete: {
            args: Prisma.EquipmentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          update: {
            args: Prisma.EquipmentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          deleteMany: {
            args: Prisma.EquipmentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>[]
          }
          upsert: {
            args: Prisma.EquipmentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          aggregate: {
            args: Prisma.EquipmentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentType>
          }
          groupBy: {
            args: Prisma.EquipmentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentTypeCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      FileData: {
        payload: Prisma.$FileDataPayload<ExtArgs>
        fields: Prisma.FileDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload>
          }
          findFirst: {
            args: Prisma.FileDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload>
          }
          findMany: {
            args: Prisma.FileDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload>[]
          }
          create: {
            args: Prisma.FileDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload>
          }
          createMany: {
            args: Prisma.FileDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload>[]
          }
          delete: {
            args: Prisma.FileDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload>
          }
          update: {
            args: Prisma.FileDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload>
          }
          deleteMany: {
            args: Prisma.FileDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload>[]
          }
          upsert: {
            args: Prisma.FileDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileDataPayload>
          }
          aggregate: {
            args: Prisma.FileDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileData>
          }
          groupBy: {
            args: Prisma.FileDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileDataCountArgs<ExtArgs>
            result: $Utils.Optional<FileDataCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      EquipmentSaleRecord: {
        payload: Prisma.$EquipmentSaleRecordPayload<ExtArgs>
        fields: Prisma.EquipmentSaleRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentSaleRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentSaleRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload>
          }
          findFirst: {
            args: Prisma.EquipmentSaleRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentSaleRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload>
          }
          findMany: {
            args: Prisma.EquipmentSaleRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload>[]
          }
          create: {
            args: Prisma.EquipmentSaleRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload>
          }
          createMany: {
            args: Prisma.EquipmentSaleRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentSaleRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload>[]
          }
          delete: {
            args: Prisma.EquipmentSaleRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload>
          }
          update: {
            args: Prisma.EquipmentSaleRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentSaleRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentSaleRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentSaleRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentSaleRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentSaleRecordPayload>
          }
          aggregate: {
            args: Prisma.EquipmentSaleRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentSaleRecord>
          }
          groupBy: {
            args: Prisma.EquipmentSaleRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentSaleRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentSaleRecordCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentSaleRecordCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    category?: CategoryOmit
    equipmentType?: EquipmentTypeOmit
    unit?: UnitOmit
    fileData?: FileDataOmit
    equipment?: EquipmentOmit
    equipmentSaleRecord?: EquipmentSaleRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    equipments: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | CategoryCountOutputTypeCountEquipmentsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Count Type EquipmentTypeCountOutputType
   */

  export type EquipmentTypeCountOutputType = {
    equipments: number
  }

  export type EquipmentTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | EquipmentTypeCountOutputTypeCountEquipmentsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentTypeCountOutputType without action
   */
  export type EquipmentTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTypeCountOutputType
     */
    select?: EquipmentTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentTypeCountOutputType without action
   */
  export type EquipmentTypeCountOutputTypeCountEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    equipments: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | UnitCountOutputTypeCountEquipmentsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Count Type FileDataCountOutputType
   */

  export type FileDataCountOutputType = {
    attEquipments: number
    refEquipments: number
  }

  export type FileDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attEquipments?: boolean | FileDataCountOutputTypeCountAttEquipmentsArgs
    refEquipments?: boolean | FileDataCountOutputTypeCountRefEquipmentsArgs
  }

  // Custom InputTypes
  /**
   * FileDataCountOutputType without action
   */
  export type FileDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileDataCountOutputType
     */
    select?: FileDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileDataCountOutputType without action
   */
  export type FileDataCountOutputTypeCountAttEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }

  /**
   * FileDataCountOutputType without action
   */
  export type FileDataCountOutputTypeCountRefEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "createdAt" | "updatedAt" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    equipments?: boolean | Category$equipmentsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | Category$equipmentsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      equipments: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipments<T extends Category$equipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Category$equipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.equipments
   */
  export type Category$equipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentType
   */

  export type AggregateEquipmentType = {
    _count: EquipmentTypeCountAggregateOutputType | null
    _avg: EquipmentTypeAvgAggregateOutputType | null
    _sum: EquipmentTypeSumAggregateOutputType | null
    _min: EquipmentTypeMinAggregateOutputType | null
    _max: EquipmentTypeMaxAggregateOutputType | null
  }

  export type EquipmentTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipmentTypeSumAggregateOutputType = {
    id: number | null
  }

  export type EquipmentTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EquipmentTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EquipmentTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type EquipmentTypeAvgAggregateInputType = {
    id?: true
  }

  export type EquipmentTypeSumAggregateInputType = {
    id?: true
  }

  export type EquipmentTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type EquipmentTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type EquipmentTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type EquipmentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentType to aggregate.
     */
    where?: EquipmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTypes to fetch.
     */
    orderBy?: EquipmentTypeOrderByWithRelationInput | EquipmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentTypes
    **/
    _count?: true | EquipmentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentTypeMaxAggregateInputType
  }

  export type GetEquipmentTypeAggregateType<T extends EquipmentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentType[P]>
      : GetScalarType<T[P], AggregateEquipmentType[P]>
  }




  export type EquipmentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentTypeWhereInput
    orderBy?: EquipmentTypeOrderByWithAggregationInput | EquipmentTypeOrderByWithAggregationInput[]
    by: EquipmentTypeScalarFieldEnum[] | EquipmentTypeScalarFieldEnum
    having?: EquipmentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentTypeCountAggregateInputType | true
    _avg?: EquipmentTypeAvgAggregateInputType
    _sum?: EquipmentTypeSumAggregateInputType
    _min?: EquipmentTypeMinAggregateInputType
    _max?: EquipmentTypeMaxAggregateInputType
  }

  export type EquipmentTypeGroupByOutputType = {
    id: number
    name: string
    _count: EquipmentTypeCountAggregateOutputType | null
    _avg: EquipmentTypeAvgAggregateOutputType | null
    _sum: EquipmentTypeSumAggregateOutputType | null
    _min: EquipmentTypeMinAggregateOutputType | null
    _max: EquipmentTypeMaxAggregateOutputType | null
  }

  type GetEquipmentTypeGroupByPayload<T extends EquipmentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentTypeGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    equipments?: boolean | EquipmentType$equipmentsArgs<ExtArgs>
    _count?: boolean | EquipmentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentType"]>

  export type EquipmentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["equipmentType"]>

  export type EquipmentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["equipmentType"]>

  export type EquipmentTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type EquipmentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["equipmentType"]>
  export type EquipmentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | EquipmentType$equipmentsArgs<ExtArgs>
    _count?: boolean | EquipmentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipmentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipmentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentType"
    objects: {
      equipments: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["equipmentType"]>
    composites: {}
  }

  type EquipmentTypeGetPayload<S extends boolean | null | undefined | EquipmentTypeDefaultArgs> = $Result.GetResult<Prisma.$EquipmentTypePayload, S>

  type EquipmentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentTypeCountAggregateInputType | true
    }

  export interface EquipmentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentType'], meta: { name: 'EquipmentType' } }
    /**
     * Find zero or one EquipmentType that matches the filter.
     * @param {EquipmentTypeFindUniqueArgs} args - Arguments to find a EquipmentType
     * @example
     * // Get one EquipmentType
     * const equipmentType = await prisma.equipmentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentTypeFindUniqueArgs>(args: SelectSubset<T, EquipmentTypeFindUniqueArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentTypeFindUniqueOrThrowArgs} args - Arguments to find a EquipmentType
     * @example
     * // Get one EquipmentType
     * const equipmentType = await prisma.equipmentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeFindFirstArgs} args - Arguments to find a EquipmentType
     * @example
     * // Get one EquipmentType
     * const equipmentType = await prisma.equipmentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentTypeFindFirstArgs>(args?: SelectSubset<T, EquipmentTypeFindFirstArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeFindFirstOrThrowArgs} args - Arguments to find a EquipmentType
     * @example
     * // Get one EquipmentType
     * const equipmentType = await prisma.equipmentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentTypes
     * const equipmentTypes = await prisma.equipmentType.findMany()
     * 
     * // Get first 10 EquipmentTypes
     * const equipmentTypes = await prisma.equipmentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentTypeWithIdOnly = await prisma.equipmentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentTypeFindManyArgs>(args?: SelectSubset<T, EquipmentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentType.
     * @param {EquipmentTypeCreateArgs} args - Arguments to create a EquipmentType.
     * @example
     * // Create one EquipmentType
     * const EquipmentType = await prisma.equipmentType.create({
     *   data: {
     *     // ... data to create a EquipmentType
     *   }
     * })
     * 
     */
    create<T extends EquipmentTypeCreateArgs>(args: SelectSubset<T, EquipmentTypeCreateArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentTypes.
     * @param {EquipmentTypeCreateManyArgs} args - Arguments to create many EquipmentTypes.
     * @example
     * // Create many EquipmentTypes
     * const equipmentType = await prisma.equipmentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentTypeCreateManyArgs>(args?: SelectSubset<T, EquipmentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentTypes and returns the data saved in the database.
     * @param {EquipmentTypeCreateManyAndReturnArgs} args - Arguments to create many EquipmentTypes.
     * @example
     * // Create many EquipmentTypes
     * const equipmentType = await prisma.equipmentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentTypes and only return the `id`
     * const equipmentTypeWithIdOnly = await prisma.equipmentType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentType.
     * @param {EquipmentTypeDeleteArgs} args - Arguments to delete one EquipmentType.
     * @example
     * // Delete one EquipmentType
     * const EquipmentType = await prisma.equipmentType.delete({
     *   where: {
     *     // ... filter to delete one EquipmentType
     *   }
     * })
     * 
     */
    delete<T extends EquipmentTypeDeleteArgs>(args: SelectSubset<T, EquipmentTypeDeleteArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentType.
     * @param {EquipmentTypeUpdateArgs} args - Arguments to update one EquipmentType.
     * @example
     * // Update one EquipmentType
     * const equipmentType = await prisma.equipmentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentTypeUpdateArgs>(args: SelectSubset<T, EquipmentTypeUpdateArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentTypes.
     * @param {EquipmentTypeDeleteManyArgs} args - Arguments to filter EquipmentTypes to delete.
     * @example
     * // Delete a few EquipmentTypes
     * const { count } = await prisma.equipmentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentTypeDeleteManyArgs>(args?: SelectSubset<T, EquipmentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentTypes
     * const equipmentType = await prisma.equipmentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentTypeUpdateManyArgs>(args: SelectSubset<T, EquipmentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentTypes and returns the data updated in the database.
     * @param {EquipmentTypeUpdateManyAndReturnArgs} args - Arguments to update many EquipmentTypes.
     * @example
     * // Update many EquipmentTypes
     * const equipmentType = await prisma.equipmentType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentTypes and only return the `id`
     * const equipmentTypeWithIdOnly = await prisma.equipmentType.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipmentTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentType.
     * @param {EquipmentTypeUpsertArgs} args - Arguments to update or create a EquipmentType.
     * @example
     * // Update or create a EquipmentType
     * const equipmentType = await prisma.equipmentType.upsert({
     *   create: {
     *     // ... data to create a EquipmentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentType we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentTypeUpsertArgs>(args: SelectSubset<T, EquipmentTypeUpsertArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeCountArgs} args - Arguments to filter EquipmentTypes to count.
     * @example
     * // Count the number of EquipmentTypes
     * const count = await prisma.equipmentType.count({
     *   where: {
     *     // ... the filter for the EquipmentTypes we want to count
     *   }
     * })
    **/
    count<T extends EquipmentTypeCountArgs>(
      args?: Subset<T, EquipmentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentTypeAggregateArgs>(args: Subset<T, EquipmentTypeAggregateArgs>): Prisma.PrismaPromise<GetEquipmentTypeAggregateType<T>>

    /**
     * Group by EquipmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeGroupByArgs} args - Group by arguments.
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
      T extends EquipmentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentTypeGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipmentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentType model
   */
  readonly fields: EquipmentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipments<T extends EquipmentType$equipmentsArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentType$equipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EquipmentType model
   */
  interface EquipmentTypeFieldRefs {
    readonly id: FieldRef<"EquipmentType", 'Int'>
    readonly name: FieldRef<"EquipmentType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentType findUnique
   */
  export type EquipmentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentType to fetch.
     */
    where: EquipmentTypeWhereUniqueInput
  }

  /**
   * EquipmentType findUniqueOrThrow
   */
  export type EquipmentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentType to fetch.
     */
    where: EquipmentTypeWhereUniqueInput
  }

  /**
   * EquipmentType findFirst
   */
  export type EquipmentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentType to fetch.
     */
    where?: EquipmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTypes to fetch.
     */
    orderBy?: EquipmentTypeOrderByWithRelationInput | EquipmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentTypes.
     */
    cursor?: EquipmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentTypes.
     */
    distinct?: EquipmentTypeScalarFieldEnum | EquipmentTypeScalarFieldEnum[]
  }

  /**
   * EquipmentType findFirstOrThrow
   */
  export type EquipmentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentType to fetch.
     */
    where?: EquipmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTypes to fetch.
     */
    orderBy?: EquipmentTypeOrderByWithRelationInput | EquipmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentTypes.
     */
    cursor?: EquipmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentTypes.
     */
    distinct?: EquipmentTypeScalarFieldEnum | EquipmentTypeScalarFieldEnum[]
  }

  /**
   * EquipmentType findMany
   */
  export type EquipmentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentTypes to fetch.
     */
    where?: EquipmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTypes to fetch.
     */
    orderBy?: EquipmentTypeOrderByWithRelationInput | EquipmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentTypes.
     */
    cursor?: EquipmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentTypes.
     */
    distinct?: EquipmentTypeScalarFieldEnum | EquipmentTypeScalarFieldEnum[]
  }

  /**
   * EquipmentType create
   */
  export type EquipmentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentType.
     */
    data: XOR<EquipmentTypeCreateInput, EquipmentTypeUncheckedCreateInput>
  }

  /**
   * EquipmentType createMany
   */
  export type EquipmentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentTypes.
     */
    data: EquipmentTypeCreateManyInput | EquipmentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentType createManyAndReturn
   */
  export type EquipmentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentTypes.
     */
    data: EquipmentTypeCreateManyInput | EquipmentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentType update
   */
  export type EquipmentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentType.
     */
    data: XOR<EquipmentTypeUpdateInput, EquipmentTypeUncheckedUpdateInput>
    /**
     * Choose, which EquipmentType to update.
     */
    where: EquipmentTypeWhereUniqueInput
  }

  /**
   * EquipmentType updateMany
   */
  export type EquipmentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentTypes.
     */
    data: XOR<EquipmentTypeUpdateManyMutationInput, EquipmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentTypes to update
     */
    where?: EquipmentTypeWhereInput
    /**
     * Limit how many EquipmentTypes to update.
     */
    limit?: number
  }

  /**
   * EquipmentType updateManyAndReturn
   */
  export type EquipmentTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentTypes.
     */
    data: XOR<EquipmentTypeUpdateManyMutationInput, EquipmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentTypes to update
     */
    where?: EquipmentTypeWhereInput
    /**
     * Limit how many EquipmentTypes to update.
     */
    limit?: number
  }

  /**
   * EquipmentType upsert
   */
  export type EquipmentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentType to update in case it exists.
     */
    where: EquipmentTypeWhereUniqueInput
    /**
     * In case the EquipmentType found by the `where` argument doesn't exist, create a new EquipmentType with this data.
     */
    create: XOR<EquipmentTypeCreateInput, EquipmentTypeUncheckedCreateInput>
    /**
     * In case the EquipmentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentTypeUpdateInput, EquipmentTypeUncheckedUpdateInput>
  }

  /**
   * EquipmentType delete
   */
  export type EquipmentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter which EquipmentType to delete.
     */
    where: EquipmentTypeWhereUniqueInput
  }

  /**
   * EquipmentType deleteMany
   */
  export type EquipmentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentTypes to delete
     */
    where?: EquipmentTypeWhereInput
    /**
     * Limit how many EquipmentTypes to delete.
     */
    limit?: number
  }

  /**
   * EquipmentType.equipments
   */
  export type EquipmentType$equipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * EquipmentType without action
   */
  export type EquipmentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    id: number | null
  }

  export type UnitSumAggregateOutputType = {
    id: number | null
  }

  export type UnitMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UnitMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    id?: true
  }

  export type UnitSumAggregateInputType = {
    id?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: number
    name: string
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    equipments?: boolean | Unit$equipmentsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | Unit$equipmentsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      equipments: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipments<T extends Unit$equipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$equipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'Int'>
    readonly name: FieldRef<"Unit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.equipments
   */
  export type Unit$equipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model FileData
   */

  export type AggregateFileData = {
    _count: FileDataCountAggregateOutputType | null
    _avg: FileDataAvgAggregateOutputType | null
    _sum: FileDataSumAggregateOutputType | null
    _min: FileDataMinAggregateOutputType | null
    _max: FileDataMaxAggregateOutputType | null
  }

  export type FileDataAvgAggregateOutputType = {
    fileId: number | null
    fileSize: Decimal | null
  }

  export type FileDataSumAggregateOutputType = {
    fileId: number | null
    fileSize: Decimal | null
  }

  export type FileDataMinAggregateOutputType = {
    fileId: number | null
    fileName: string | null
    fileSize: Decimal | null
    fileType: string | null
    fileUrl: string | null
  }

  export type FileDataMaxAggregateOutputType = {
    fileId: number | null
    fileName: string | null
    fileSize: Decimal | null
    fileType: string | null
    fileUrl: string | null
  }

  export type FileDataCountAggregateOutputType = {
    fileId: number
    fileName: number
    fileSize: number
    fileType: number
    fileUrl: number
    _all: number
  }


  export type FileDataAvgAggregateInputType = {
    fileId?: true
    fileSize?: true
  }

  export type FileDataSumAggregateInputType = {
    fileId?: true
    fileSize?: true
  }

  export type FileDataMinAggregateInputType = {
    fileId?: true
    fileName?: true
    fileSize?: true
    fileType?: true
    fileUrl?: true
  }

  export type FileDataMaxAggregateInputType = {
    fileId?: true
    fileName?: true
    fileSize?: true
    fileType?: true
    fileUrl?: true
  }

  export type FileDataCountAggregateInputType = {
    fileId?: true
    fileName?: true
    fileSize?: true
    fileType?: true
    fileUrl?: true
    _all?: true
  }

  export type FileDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileData to aggregate.
     */
    where?: FileDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileData to fetch.
     */
    orderBy?: FileDataOrderByWithRelationInput | FileDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileData
    **/
    _count?: true | FileDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileDataMaxAggregateInputType
  }

  export type GetFileDataAggregateType<T extends FileDataAggregateArgs> = {
        [P in keyof T & keyof AggregateFileData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileData[P]>
      : GetScalarType<T[P], AggregateFileData[P]>
  }




  export type FileDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileDataWhereInput
    orderBy?: FileDataOrderByWithAggregationInput | FileDataOrderByWithAggregationInput[]
    by: FileDataScalarFieldEnum[] | FileDataScalarFieldEnum
    having?: FileDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileDataCountAggregateInputType | true
    _avg?: FileDataAvgAggregateInputType
    _sum?: FileDataSumAggregateInputType
    _min?: FileDataMinAggregateInputType
    _max?: FileDataMaxAggregateInputType
  }

  export type FileDataGroupByOutputType = {
    fileId: number
    fileName: string
    fileSize: Decimal
    fileType: string
    fileUrl: string
    _count: FileDataCountAggregateOutputType | null
    _avg: FileDataAvgAggregateOutputType | null
    _sum: FileDataSumAggregateOutputType | null
    _min: FileDataMinAggregateOutputType | null
    _max: FileDataMaxAggregateOutputType | null
  }

  type GetFileDataGroupByPayload<T extends FileDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileDataGroupByOutputType[P]>
            : GetScalarType<T[P], FileDataGroupByOutputType[P]>
        }
      >
    >


  export type FileDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    fileUrl?: boolean
    attEquipments?: boolean | FileData$attEquipmentsArgs<ExtArgs>
    refEquipments?: boolean | FileData$refEquipmentsArgs<ExtArgs>
    _count?: boolean | FileDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileData"]>

  export type FileDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    fileUrl?: boolean
  }, ExtArgs["result"]["fileData"]>

  export type FileDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    fileUrl?: boolean
  }, ExtArgs["result"]["fileData"]>

  export type FileDataSelectScalar = {
    fileId?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    fileUrl?: boolean
  }

  export type FileDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fileId" | "fileName" | "fileSize" | "fileType" | "fileUrl", ExtArgs["result"]["fileData"]>
  export type FileDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attEquipments?: boolean | FileData$attEquipmentsArgs<ExtArgs>
    refEquipments?: boolean | FileData$refEquipmentsArgs<ExtArgs>
    _count?: boolean | FileDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FileDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FileDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileData"
    objects: {
      attEquipments: Prisma.$EquipmentPayload<ExtArgs>[]
      refEquipments: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      fileId: number
      fileName: string
      fileSize: Prisma.Decimal
      fileType: string
      fileUrl: string
    }, ExtArgs["result"]["fileData"]>
    composites: {}
  }

  type FileDataGetPayload<S extends boolean | null | undefined | FileDataDefaultArgs> = $Result.GetResult<Prisma.$FileDataPayload, S>

  type FileDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileDataCountAggregateInputType | true
    }

  export interface FileDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileData'], meta: { name: 'FileData' } }
    /**
     * Find zero or one FileData that matches the filter.
     * @param {FileDataFindUniqueArgs} args - Arguments to find a FileData
     * @example
     * // Get one FileData
     * const fileData = await prisma.fileData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileDataFindUniqueArgs>(args: SelectSubset<T, FileDataFindUniqueArgs<ExtArgs>>): Prisma__FileDataClient<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileDataFindUniqueOrThrowArgs} args - Arguments to find a FileData
     * @example
     * // Get one FileData
     * const fileData = await prisma.fileData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileDataFindUniqueOrThrowArgs>(args: SelectSubset<T, FileDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileDataClient<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileDataFindFirstArgs} args - Arguments to find a FileData
     * @example
     * // Get one FileData
     * const fileData = await prisma.fileData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileDataFindFirstArgs>(args?: SelectSubset<T, FileDataFindFirstArgs<ExtArgs>>): Prisma__FileDataClient<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileDataFindFirstOrThrowArgs} args - Arguments to find a FileData
     * @example
     * // Get one FileData
     * const fileData = await prisma.fileData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileDataFindFirstOrThrowArgs>(args?: SelectSubset<T, FileDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileDataClient<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileData
     * const fileData = await prisma.fileData.findMany()
     * 
     * // Get first 10 FileData
     * const fileData = await prisma.fileData.findMany({ take: 10 })
     * 
     * // Only select the `fileId`
     * const fileDataWithFileIdOnly = await prisma.fileData.findMany({ select: { fileId: true } })
     * 
     */
    findMany<T extends FileDataFindManyArgs>(args?: SelectSubset<T, FileDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileData.
     * @param {FileDataCreateArgs} args - Arguments to create a FileData.
     * @example
     * // Create one FileData
     * const FileData = await prisma.fileData.create({
     *   data: {
     *     // ... data to create a FileData
     *   }
     * })
     * 
     */
    create<T extends FileDataCreateArgs>(args: SelectSubset<T, FileDataCreateArgs<ExtArgs>>): Prisma__FileDataClient<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileData.
     * @param {FileDataCreateManyArgs} args - Arguments to create many FileData.
     * @example
     * // Create many FileData
     * const fileData = await prisma.fileData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileDataCreateManyArgs>(args?: SelectSubset<T, FileDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileData and returns the data saved in the database.
     * @param {FileDataCreateManyAndReturnArgs} args - Arguments to create many FileData.
     * @example
     * // Create many FileData
     * const fileData = await prisma.fileData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileData and only return the `fileId`
     * const fileDataWithFileIdOnly = await prisma.fileData.createManyAndReturn({
     *   select: { fileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileDataCreateManyAndReturnArgs>(args?: SelectSubset<T, FileDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileData.
     * @param {FileDataDeleteArgs} args - Arguments to delete one FileData.
     * @example
     * // Delete one FileData
     * const FileData = await prisma.fileData.delete({
     *   where: {
     *     // ... filter to delete one FileData
     *   }
     * })
     * 
     */
    delete<T extends FileDataDeleteArgs>(args: SelectSubset<T, FileDataDeleteArgs<ExtArgs>>): Prisma__FileDataClient<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileData.
     * @param {FileDataUpdateArgs} args - Arguments to update one FileData.
     * @example
     * // Update one FileData
     * const fileData = await prisma.fileData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileDataUpdateArgs>(args: SelectSubset<T, FileDataUpdateArgs<ExtArgs>>): Prisma__FileDataClient<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileData.
     * @param {FileDataDeleteManyArgs} args - Arguments to filter FileData to delete.
     * @example
     * // Delete a few FileData
     * const { count } = await prisma.fileData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDataDeleteManyArgs>(args?: SelectSubset<T, FileDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileData
     * const fileData = await prisma.fileData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileDataUpdateManyArgs>(args: SelectSubset<T, FileDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileData and returns the data updated in the database.
     * @param {FileDataUpdateManyAndReturnArgs} args - Arguments to update many FileData.
     * @example
     * // Update many FileData
     * const fileData = await prisma.fileData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileData and only return the `fileId`
     * const fileDataWithFileIdOnly = await prisma.fileData.updateManyAndReturn({
     *   select: { fileId: true },
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
    updateManyAndReturn<T extends FileDataUpdateManyAndReturnArgs>(args: SelectSubset<T, FileDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileData.
     * @param {FileDataUpsertArgs} args - Arguments to update or create a FileData.
     * @example
     * // Update or create a FileData
     * const fileData = await prisma.fileData.upsert({
     *   create: {
     *     // ... data to create a FileData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileData we want to update
     *   }
     * })
     */
    upsert<T extends FileDataUpsertArgs>(args: SelectSubset<T, FileDataUpsertArgs<ExtArgs>>): Prisma__FileDataClient<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileDataCountArgs} args - Arguments to filter FileData to count.
     * @example
     * // Count the number of FileData
     * const count = await prisma.fileData.count({
     *   where: {
     *     // ... the filter for the FileData we want to count
     *   }
     * })
    **/
    count<T extends FileDataCountArgs>(
      args?: Subset<T, FileDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileDataAggregateArgs>(args: Subset<T, FileDataAggregateArgs>): Prisma.PrismaPromise<GetFileDataAggregateType<T>>

    /**
     * Group by FileData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileDataGroupByArgs} args - Group by arguments.
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
      T extends FileDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileDataGroupByArgs['orderBy'] }
        : { orderBy?: FileDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileData model
   */
  readonly fields: FileDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attEquipments<T extends FileData$attEquipmentsArgs<ExtArgs> = {}>(args?: Subset<T, FileData$attEquipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refEquipments<T extends FileData$refEquipmentsArgs<ExtArgs> = {}>(args?: Subset<T, FileData$refEquipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FileData model
   */
  interface FileDataFieldRefs {
    readonly fileId: FieldRef<"FileData", 'Int'>
    readonly fileName: FieldRef<"FileData", 'String'>
    readonly fileSize: FieldRef<"FileData", 'Decimal'>
    readonly fileType: FieldRef<"FileData", 'String'>
    readonly fileUrl: FieldRef<"FileData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FileData findUnique
   */
  export type FileDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    /**
     * Filter, which FileData to fetch.
     */
    where: FileDataWhereUniqueInput
  }

  /**
   * FileData findUniqueOrThrow
   */
  export type FileDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    /**
     * Filter, which FileData to fetch.
     */
    where: FileDataWhereUniqueInput
  }

  /**
   * FileData findFirst
   */
  export type FileDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    /**
     * Filter, which FileData to fetch.
     */
    where?: FileDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileData to fetch.
     */
    orderBy?: FileDataOrderByWithRelationInput | FileDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileData.
     */
    cursor?: FileDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileData.
     */
    distinct?: FileDataScalarFieldEnum | FileDataScalarFieldEnum[]
  }

  /**
   * FileData findFirstOrThrow
   */
  export type FileDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    /**
     * Filter, which FileData to fetch.
     */
    where?: FileDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileData to fetch.
     */
    orderBy?: FileDataOrderByWithRelationInput | FileDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileData.
     */
    cursor?: FileDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileData.
     */
    distinct?: FileDataScalarFieldEnum | FileDataScalarFieldEnum[]
  }

  /**
   * FileData findMany
   */
  export type FileDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    /**
     * Filter, which FileData to fetch.
     */
    where?: FileDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileData to fetch.
     */
    orderBy?: FileDataOrderByWithRelationInput | FileDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileData.
     */
    cursor?: FileDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileData.
     */
    distinct?: FileDataScalarFieldEnum | FileDataScalarFieldEnum[]
  }

  /**
   * FileData create
   */
  export type FileDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    /**
     * The data needed to create a FileData.
     */
    data: XOR<FileDataCreateInput, FileDataUncheckedCreateInput>
  }

  /**
   * FileData createMany
   */
  export type FileDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileData.
     */
    data: FileDataCreateManyInput | FileDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileData createManyAndReturn
   */
  export type FileDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * The data used to create many FileData.
     */
    data: FileDataCreateManyInput | FileDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileData update
   */
  export type FileDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    /**
     * The data needed to update a FileData.
     */
    data: XOR<FileDataUpdateInput, FileDataUncheckedUpdateInput>
    /**
     * Choose, which FileData to update.
     */
    where: FileDataWhereUniqueInput
  }

  /**
   * FileData updateMany
   */
  export type FileDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileData.
     */
    data: XOR<FileDataUpdateManyMutationInput, FileDataUncheckedUpdateManyInput>
    /**
     * Filter which FileData to update
     */
    where?: FileDataWhereInput
    /**
     * Limit how many FileData to update.
     */
    limit?: number
  }

  /**
   * FileData updateManyAndReturn
   */
  export type FileDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * The data used to update FileData.
     */
    data: XOR<FileDataUpdateManyMutationInput, FileDataUncheckedUpdateManyInput>
    /**
     * Filter which FileData to update
     */
    where?: FileDataWhereInput
    /**
     * Limit how many FileData to update.
     */
    limit?: number
  }

  /**
   * FileData upsert
   */
  export type FileDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    /**
     * The filter to search for the FileData to update in case it exists.
     */
    where: FileDataWhereUniqueInput
    /**
     * In case the FileData found by the `where` argument doesn't exist, create a new FileData with this data.
     */
    create: XOR<FileDataCreateInput, FileDataUncheckedCreateInput>
    /**
     * In case the FileData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileDataUpdateInput, FileDataUncheckedUpdateInput>
  }

  /**
   * FileData delete
   */
  export type FileDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    /**
     * Filter which FileData to delete.
     */
    where: FileDataWhereUniqueInput
  }

  /**
   * FileData deleteMany
   */
  export type FileDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileData to delete
     */
    where?: FileDataWhereInput
    /**
     * Limit how many FileData to delete.
     */
    limit?: number
  }

  /**
   * FileData.attEquipments
   */
  export type FileData$attEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * FileData.refEquipments
   */
  export type FileData$refEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * FileData without action
   */
  export type FileDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    id: number | null
    typeId: number | null
    categoryId: number | null
    unitId: number | null
    referenceDocsId: number | null
    attachFileId: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    id: number | null
    typeId: number | null
    categoryId: number | null
    unitId: number | null
    referenceDocsId: number | null
    attachFileId: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    typeId: number | null
    categoryId: number | null
    unitId: number | null
    brand: string | null
    model: string | null
    description: string | null
    reasonForUse: string | null
    unitPrice: string | null
    referenceDocsId: number | null
    attachFileId: number | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    typeId: number | null
    categoryId: number | null
    unitId: number | null
    brand: string | null
    model: string | null
    description: string | null
    reasonForUse: string | null
    unitPrice: string | null
    referenceDocsId: number | null
    attachFileId: number | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    name: number
    typeId: number
    categoryId: number
    unitId: number
    brand: number
    model: number
    description: number
    reasonForUse: number
    unitPrice: number
    referenceDocsId: number
    attachFileId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    id?: true
    typeId?: true
    categoryId?: true
    unitId?: true
    referenceDocsId?: true
    attachFileId?: true
  }

  export type EquipmentSumAggregateInputType = {
    id?: true
    typeId?: true
    categoryId?: true
    unitId?: true
    referenceDocsId?: true
    attachFileId?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    categoryId?: true
    unitId?: true
    brand?: true
    model?: true
    description?: true
    reasonForUse?: true
    unitPrice?: true
    referenceDocsId?: true
    attachFileId?: true
    createAt?: true
    updatedAt?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    categoryId?: true
    unitId?: true
    brand?: true
    model?: true
    description?: true
    reasonForUse?: true
    unitPrice?: true
    referenceDocsId?: true
    attachFileId?: true
    createAt?: true
    updatedAt?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    categoryId?: true
    unitId?: true
    brand?: true
    model?: true
    description?: true
    reasonForUse?: true
    unitPrice?: true
    referenceDocsId?: true
    attachFileId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: number
    name: string
    typeId: number
    categoryId: number
    unitId: number
    brand: string | null
    model: string | null
    description: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId: number | null
    attachFileId: number | null
    createAt: Date
    updatedAt: Date
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    typeId?: boolean
    categoryId?: boolean
    unitId?: boolean
    brand?: boolean
    model?: boolean
    description?: boolean
    reasonForUse?: boolean
    unitPrice?: boolean
    referenceDocsId?: boolean
    attachFileId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    attachFile?: boolean | Equipment$attachFileArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    referenceDocs?: boolean | Equipment$referenceDocsArgs<ExtArgs>
    type?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    typeId?: boolean
    categoryId?: boolean
    unitId?: boolean
    brand?: boolean
    model?: boolean
    description?: boolean
    reasonForUse?: boolean
    unitPrice?: boolean
    referenceDocsId?: boolean
    attachFileId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    attachFile?: boolean | Equipment$attachFileArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    referenceDocs?: boolean | Equipment$referenceDocsArgs<ExtArgs>
    type?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    typeId?: boolean
    categoryId?: boolean
    unitId?: boolean
    brand?: boolean
    model?: boolean
    description?: boolean
    reasonForUse?: boolean
    unitPrice?: boolean
    referenceDocsId?: boolean
    attachFileId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    attachFile?: boolean | Equipment$attachFileArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    referenceDocs?: boolean | Equipment$referenceDocsArgs<ExtArgs>
    type?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    name?: boolean
    typeId?: boolean
    categoryId?: boolean
    unitId?: boolean
    brand?: boolean
    model?: boolean
    description?: boolean
    reasonForUse?: boolean
    unitPrice?: boolean
    referenceDocsId?: boolean
    attachFileId?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "typeId" | "categoryId" | "unitId" | "brand" | "model" | "description" | "reasonForUse" | "unitPrice" | "referenceDocsId" | "attachFileId" | "createAt" | "updatedAt", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachFile?: boolean | Equipment$attachFileArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    referenceDocs?: boolean | Equipment$referenceDocsArgs<ExtArgs>
    type?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachFile?: boolean | Equipment$attachFileArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    referenceDocs?: boolean | Equipment$referenceDocsArgs<ExtArgs>
    type?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachFile?: boolean | Equipment$attachFileArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    referenceDocs?: boolean | Equipment$referenceDocsArgs<ExtArgs>
    type?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      attachFile: Prisma.$FileDataPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs>
      referenceDocs: Prisma.$FileDataPayload<ExtArgs> | null
      type: Prisma.$EquipmentTypePayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      typeId: number
      categoryId: number
      unitId: number
      brand: string | null
      model: string | null
      description: string | null
      reasonForUse: string
      unitPrice: string
      referenceDocsId: number | null
      attachFileId: number | null
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
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
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachFile<T extends Equipment$attachFileArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$attachFileArgs<ExtArgs>>): Prisma__FileDataClient<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referenceDocs<T extends Equipment$referenceDocsArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$referenceDocsArgs<ExtArgs>>): Prisma__FileDataClient<$Result.GetResult<Prisma.$FileDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    type<T extends EquipmentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentTypeDefaultArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'Int'>
    readonly name: FieldRef<"Equipment", 'String'>
    readonly typeId: FieldRef<"Equipment", 'Int'>
    readonly categoryId: FieldRef<"Equipment", 'Int'>
    readonly unitId: FieldRef<"Equipment", 'Int'>
    readonly brand: FieldRef<"Equipment", 'String'>
    readonly model: FieldRef<"Equipment", 'String'>
    readonly description: FieldRef<"Equipment", 'String'>
    readonly reasonForUse: FieldRef<"Equipment", 'String'>
    readonly unitPrice: FieldRef<"Equipment", 'String'>
    readonly referenceDocsId: FieldRef<"Equipment", 'Int'>
    readonly attachFileId: FieldRef<"Equipment", 'Int'>
    readonly createAt: FieldRef<"Equipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.attachFile
   */
  export type Equipment$attachFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    where?: FileDataWhereInput
  }

  /**
   * Equipment.referenceDocs
   */
  export type Equipment$referenceDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileData
     */
    select?: FileDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileData
     */
    omit?: FileDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileDataInclude<ExtArgs> | null
    where?: FileDataWhereInput
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentSaleRecord
   */

  export type AggregateEquipmentSaleRecord = {
    _count: EquipmentSaleRecordCountAggregateOutputType | null
    _avg: EquipmentSaleRecordAvgAggregateOutputType | null
    _sum: EquipmentSaleRecordSumAggregateOutputType | null
    _min: EquipmentSaleRecordMinAggregateOutputType | null
    _max: EquipmentSaleRecordMaxAggregateOutputType | null
  }

  export type EquipmentSaleRecordAvgAggregateOutputType = {
    id: number | null
    estimatedPrice: Decimal | null
    soldPrice: Decimal | null
  }

  export type EquipmentSaleRecordSumAggregateOutputType = {
    id: number | null
    estimatedPrice: Decimal | null
    soldPrice: Decimal | null
  }

  export type EquipmentSaleRecordMinAggregateOutputType = {
    id: number | null
    title: string | null
    department: string | null
    estimatedPrice: Decimal | null
    auctionMethod: $Enums.AuctionMethod | null
    auctionDate: Date | null
    soldPrice: Decimal | null
    winnerName: string | null
    responsiblePerson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentSaleRecordMaxAggregateOutputType = {
    id: number | null
    title: string | null
    department: string | null
    estimatedPrice: Decimal | null
    auctionMethod: $Enums.AuctionMethod | null
    auctionDate: Date | null
    soldPrice: Decimal | null
    winnerName: string | null
    responsiblePerson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentSaleRecordCountAggregateOutputType = {
    id: number
    title: number
    department: number
    estimatedPrice: number
    auctionMethod: number
    auctionDate: number
    soldPrice: number
    winnerName: number
    responsiblePerson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentSaleRecordAvgAggregateInputType = {
    id?: true
    estimatedPrice?: true
    soldPrice?: true
  }

  export type EquipmentSaleRecordSumAggregateInputType = {
    id?: true
    estimatedPrice?: true
    soldPrice?: true
  }

  export type EquipmentSaleRecordMinAggregateInputType = {
    id?: true
    title?: true
    department?: true
    estimatedPrice?: true
    auctionMethod?: true
    auctionDate?: true
    soldPrice?: true
    winnerName?: true
    responsiblePerson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentSaleRecordMaxAggregateInputType = {
    id?: true
    title?: true
    department?: true
    estimatedPrice?: true
    auctionMethod?: true
    auctionDate?: true
    soldPrice?: true
    winnerName?: true
    responsiblePerson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentSaleRecordCountAggregateInputType = {
    id?: true
    title?: true
    department?: true
    estimatedPrice?: true
    auctionMethod?: true
    auctionDate?: true
    soldPrice?: true
    winnerName?: true
    responsiblePerson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentSaleRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentSaleRecord to aggregate.
     */
    where?: EquipmentSaleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentSaleRecords to fetch.
     */
    orderBy?: EquipmentSaleRecordOrderByWithRelationInput | EquipmentSaleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentSaleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentSaleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentSaleRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentSaleRecords
    **/
    _count?: true | EquipmentSaleRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentSaleRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSaleRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentSaleRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentSaleRecordMaxAggregateInputType
  }

  export type GetEquipmentSaleRecordAggregateType<T extends EquipmentSaleRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentSaleRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentSaleRecord[P]>
      : GetScalarType<T[P], AggregateEquipmentSaleRecord[P]>
  }




  export type EquipmentSaleRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentSaleRecordWhereInput
    orderBy?: EquipmentSaleRecordOrderByWithAggregationInput | EquipmentSaleRecordOrderByWithAggregationInput[]
    by: EquipmentSaleRecordScalarFieldEnum[] | EquipmentSaleRecordScalarFieldEnum
    having?: EquipmentSaleRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentSaleRecordCountAggregateInputType | true
    _avg?: EquipmentSaleRecordAvgAggregateInputType
    _sum?: EquipmentSaleRecordSumAggregateInputType
    _min?: EquipmentSaleRecordMinAggregateInputType
    _max?: EquipmentSaleRecordMaxAggregateInputType
  }

  export type EquipmentSaleRecordGroupByOutputType = {
    id: number
    title: string
    department: string
    estimatedPrice: Decimal
    auctionMethod: $Enums.AuctionMethod
    auctionDate: Date
    soldPrice: Decimal
    winnerName: string
    responsiblePerson: string
    createdAt: Date
    updatedAt: Date
    _count: EquipmentSaleRecordCountAggregateOutputType | null
    _avg: EquipmentSaleRecordAvgAggregateOutputType | null
    _sum: EquipmentSaleRecordSumAggregateOutputType | null
    _min: EquipmentSaleRecordMinAggregateOutputType | null
    _max: EquipmentSaleRecordMaxAggregateOutputType | null
  }

  type GetEquipmentSaleRecordGroupByPayload<T extends EquipmentSaleRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentSaleRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentSaleRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentSaleRecordGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentSaleRecordGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSaleRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    estimatedPrice?: boolean
    auctionMethod?: boolean
    auctionDate?: boolean
    soldPrice?: boolean
    winnerName?: boolean
    responsiblePerson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipmentSaleRecord"]>

  export type EquipmentSaleRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    estimatedPrice?: boolean
    auctionMethod?: boolean
    auctionDate?: boolean
    soldPrice?: boolean
    winnerName?: boolean
    responsiblePerson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipmentSaleRecord"]>

  export type EquipmentSaleRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    estimatedPrice?: boolean
    auctionMethod?: boolean
    auctionDate?: boolean
    soldPrice?: boolean
    winnerName?: boolean
    responsiblePerson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipmentSaleRecord"]>

  export type EquipmentSaleRecordSelectScalar = {
    id?: boolean
    title?: boolean
    department?: boolean
    estimatedPrice?: boolean
    auctionMethod?: boolean
    auctionDate?: boolean
    soldPrice?: boolean
    winnerName?: boolean
    responsiblePerson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentSaleRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "department" | "estimatedPrice" | "auctionMethod" | "auctionDate" | "soldPrice" | "winnerName" | "responsiblePerson" | "createdAt" | "updatedAt", ExtArgs["result"]["equipmentSaleRecord"]>

  export type $EquipmentSaleRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentSaleRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      department: string
      estimatedPrice: Prisma.Decimal
      auctionMethod: $Enums.AuctionMethod
      auctionDate: Date
      soldPrice: Prisma.Decimal
      winnerName: string
      responsiblePerson: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipmentSaleRecord"]>
    composites: {}
  }

  type EquipmentSaleRecordGetPayload<S extends boolean | null | undefined | EquipmentSaleRecordDefaultArgs> = $Result.GetResult<Prisma.$EquipmentSaleRecordPayload, S>

  type EquipmentSaleRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentSaleRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentSaleRecordCountAggregateInputType | true
    }

  export interface EquipmentSaleRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentSaleRecord'], meta: { name: 'EquipmentSaleRecord' } }
    /**
     * Find zero or one EquipmentSaleRecord that matches the filter.
     * @param {EquipmentSaleRecordFindUniqueArgs} args - Arguments to find a EquipmentSaleRecord
     * @example
     * // Get one EquipmentSaleRecord
     * const equipmentSaleRecord = await prisma.equipmentSaleRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentSaleRecordFindUniqueArgs>(args: SelectSubset<T, EquipmentSaleRecordFindUniqueArgs<ExtArgs>>): Prisma__EquipmentSaleRecordClient<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentSaleRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentSaleRecordFindUniqueOrThrowArgs} args - Arguments to find a EquipmentSaleRecord
     * @example
     * // Get one EquipmentSaleRecord
     * const equipmentSaleRecord = await prisma.equipmentSaleRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentSaleRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentSaleRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentSaleRecordClient<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentSaleRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentSaleRecordFindFirstArgs} args - Arguments to find a EquipmentSaleRecord
     * @example
     * // Get one EquipmentSaleRecord
     * const equipmentSaleRecord = await prisma.equipmentSaleRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentSaleRecordFindFirstArgs>(args?: SelectSubset<T, EquipmentSaleRecordFindFirstArgs<ExtArgs>>): Prisma__EquipmentSaleRecordClient<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentSaleRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentSaleRecordFindFirstOrThrowArgs} args - Arguments to find a EquipmentSaleRecord
     * @example
     * // Get one EquipmentSaleRecord
     * const equipmentSaleRecord = await prisma.equipmentSaleRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentSaleRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentSaleRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentSaleRecordClient<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentSaleRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentSaleRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentSaleRecords
     * const equipmentSaleRecords = await prisma.equipmentSaleRecord.findMany()
     * 
     * // Get first 10 EquipmentSaleRecords
     * const equipmentSaleRecords = await prisma.equipmentSaleRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentSaleRecordWithIdOnly = await prisma.equipmentSaleRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentSaleRecordFindManyArgs>(args?: SelectSubset<T, EquipmentSaleRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentSaleRecord.
     * @param {EquipmentSaleRecordCreateArgs} args - Arguments to create a EquipmentSaleRecord.
     * @example
     * // Create one EquipmentSaleRecord
     * const EquipmentSaleRecord = await prisma.equipmentSaleRecord.create({
     *   data: {
     *     // ... data to create a EquipmentSaleRecord
     *   }
     * })
     * 
     */
    create<T extends EquipmentSaleRecordCreateArgs>(args: SelectSubset<T, EquipmentSaleRecordCreateArgs<ExtArgs>>): Prisma__EquipmentSaleRecordClient<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentSaleRecords.
     * @param {EquipmentSaleRecordCreateManyArgs} args - Arguments to create many EquipmentSaleRecords.
     * @example
     * // Create many EquipmentSaleRecords
     * const equipmentSaleRecord = await prisma.equipmentSaleRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentSaleRecordCreateManyArgs>(args?: SelectSubset<T, EquipmentSaleRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentSaleRecords and returns the data saved in the database.
     * @param {EquipmentSaleRecordCreateManyAndReturnArgs} args - Arguments to create many EquipmentSaleRecords.
     * @example
     * // Create many EquipmentSaleRecords
     * const equipmentSaleRecord = await prisma.equipmentSaleRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentSaleRecords and only return the `id`
     * const equipmentSaleRecordWithIdOnly = await prisma.equipmentSaleRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentSaleRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentSaleRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentSaleRecord.
     * @param {EquipmentSaleRecordDeleteArgs} args - Arguments to delete one EquipmentSaleRecord.
     * @example
     * // Delete one EquipmentSaleRecord
     * const EquipmentSaleRecord = await prisma.equipmentSaleRecord.delete({
     *   where: {
     *     // ... filter to delete one EquipmentSaleRecord
     *   }
     * })
     * 
     */
    delete<T extends EquipmentSaleRecordDeleteArgs>(args: SelectSubset<T, EquipmentSaleRecordDeleteArgs<ExtArgs>>): Prisma__EquipmentSaleRecordClient<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentSaleRecord.
     * @param {EquipmentSaleRecordUpdateArgs} args - Arguments to update one EquipmentSaleRecord.
     * @example
     * // Update one EquipmentSaleRecord
     * const equipmentSaleRecord = await prisma.equipmentSaleRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentSaleRecordUpdateArgs>(args: SelectSubset<T, EquipmentSaleRecordUpdateArgs<ExtArgs>>): Prisma__EquipmentSaleRecordClient<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentSaleRecords.
     * @param {EquipmentSaleRecordDeleteManyArgs} args - Arguments to filter EquipmentSaleRecords to delete.
     * @example
     * // Delete a few EquipmentSaleRecords
     * const { count } = await prisma.equipmentSaleRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentSaleRecordDeleteManyArgs>(args?: SelectSubset<T, EquipmentSaleRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentSaleRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentSaleRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentSaleRecords
     * const equipmentSaleRecord = await prisma.equipmentSaleRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentSaleRecordUpdateManyArgs>(args: SelectSubset<T, EquipmentSaleRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentSaleRecords and returns the data updated in the database.
     * @param {EquipmentSaleRecordUpdateManyAndReturnArgs} args - Arguments to update many EquipmentSaleRecords.
     * @example
     * // Update many EquipmentSaleRecords
     * const equipmentSaleRecord = await prisma.equipmentSaleRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentSaleRecords and only return the `id`
     * const equipmentSaleRecordWithIdOnly = await prisma.equipmentSaleRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipmentSaleRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentSaleRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentSaleRecord.
     * @param {EquipmentSaleRecordUpsertArgs} args - Arguments to update or create a EquipmentSaleRecord.
     * @example
     * // Update or create a EquipmentSaleRecord
     * const equipmentSaleRecord = await prisma.equipmentSaleRecord.upsert({
     *   create: {
     *     // ... data to create a EquipmentSaleRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentSaleRecord we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentSaleRecordUpsertArgs>(args: SelectSubset<T, EquipmentSaleRecordUpsertArgs<ExtArgs>>): Prisma__EquipmentSaleRecordClient<$Result.GetResult<Prisma.$EquipmentSaleRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentSaleRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentSaleRecordCountArgs} args - Arguments to filter EquipmentSaleRecords to count.
     * @example
     * // Count the number of EquipmentSaleRecords
     * const count = await prisma.equipmentSaleRecord.count({
     *   where: {
     *     // ... the filter for the EquipmentSaleRecords we want to count
     *   }
     * })
    **/
    count<T extends EquipmentSaleRecordCountArgs>(
      args?: Subset<T, EquipmentSaleRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentSaleRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentSaleRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentSaleRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentSaleRecordAggregateArgs>(args: Subset<T, EquipmentSaleRecordAggregateArgs>): Prisma.PrismaPromise<GetEquipmentSaleRecordAggregateType<T>>

    /**
     * Group by EquipmentSaleRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentSaleRecordGroupByArgs} args - Group by arguments.
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
      T extends EquipmentSaleRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentSaleRecordGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentSaleRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipmentSaleRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentSaleRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentSaleRecord model
   */
  readonly fields: EquipmentSaleRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentSaleRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentSaleRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the EquipmentSaleRecord model
   */
  interface EquipmentSaleRecordFieldRefs {
    readonly id: FieldRef<"EquipmentSaleRecord", 'Int'>
    readonly title: FieldRef<"EquipmentSaleRecord", 'String'>
    readonly department: FieldRef<"EquipmentSaleRecord", 'String'>
    readonly estimatedPrice: FieldRef<"EquipmentSaleRecord", 'Decimal'>
    readonly auctionMethod: FieldRef<"EquipmentSaleRecord", 'AuctionMethod'>
    readonly auctionDate: FieldRef<"EquipmentSaleRecord", 'DateTime'>
    readonly soldPrice: FieldRef<"EquipmentSaleRecord", 'Decimal'>
    readonly winnerName: FieldRef<"EquipmentSaleRecord", 'String'>
    readonly responsiblePerson: FieldRef<"EquipmentSaleRecord", 'String'>
    readonly createdAt: FieldRef<"EquipmentSaleRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"EquipmentSaleRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentSaleRecord findUnique
   */
  export type EquipmentSaleRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * Filter, which EquipmentSaleRecord to fetch.
     */
    where: EquipmentSaleRecordWhereUniqueInput
  }

  /**
   * EquipmentSaleRecord findUniqueOrThrow
   */
  export type EquipmentSaleRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * Filter, which EquipmentSaleRecord to fetch.
     */
    where: EquipmentSaleRecordWhereUniqueInput
  }

  /**
   * EquipmentSaleRecord findFirst
   */
  export type EquipmentSaleRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * Filter, which EquipmentSaleRecord to fetch.
     */
    where?: EquipmentSaleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentSaleRecords to fetch.
     */
    orderBy?: EquipmentSaleRecordOrderByWithRelationInput | EquipmentSaleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentSaleRecords.
     */
    cursor?: EquipmentSaleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentSaleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentSaleRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentSaleRecords.
     */
    distinct?: EquipmentSaleRecordScalarFieldEnum | EquipmentSaleRecordScalarFieldEnum[]
  }

  /**
   * EquipmentSaleRecord findFirstOrThrow
   */
  export type EquipmentSaleRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * Filter, which EquipmentSaleRecord to fetch.
     */
    where?: EquipmentSaleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentSaleRecords to fetch.
     */
    orderBy?: EquipmentSaleRecordOrderByWithRelationInput | EquipmentSaleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentSaleRecords.
     */
    cursor?: EquipmentSaleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentSaleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentSaleRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentSaleRecords.
     */
    distinct?: EquipmentSaleRecordScalarFieldEnum | EquipmentSaleRecordScalarFieldEnum[]
  }

  /**
   * EquipmentSaleRecord findMany
   */
  export type EquipmentSaleRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * Filter, which EquipmentSaleRecords to fetch.
     */
    where?: EquipmentSaleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentSaleRecords to fetch.
     */
    orderBy?: EquipmentSaleRecordOrderByWithRelationInput | EquipmentSaleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentSaleRecords.
     */
    cursor?: EquipmentSaleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentSaleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentSaleRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentSaleRecords.
     */
    distinct?: EquipmentSaleRecordScalarFieldEnum | EquipmentSaleRecordScalarFieldEnum[]
  }

  /**
   * EquipmentSaleRecord create
   */
  export type EquipmentSaleRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a EquipmentSaleRecord.
     */
    data: XOR<EquipmentSaleRecordCreateInput, EquipmentSaleRecordUncheckedCreateInput>
  }

  /**
   * EquipmentSaleRecord createMany
   */
  export type EquipmentSaleRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentSaleRecords.
     */
    data: EquipmentSaleRecordCreateManyInput | EquipmentSaleRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentSaleRecord createManyAndReturn
   */
  export type EquipmentSaleRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentSaleRecords.
     */
    data: EquipmentSaleRecordCreateManyInput | EquipmentSaleRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentSaleRecord update
   */
  export type EquipmentSaleRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a EquipmentSaleRecord.
     */
    data: XOR<EquipmentSaleRecordUpdateInput, EquipmentSaleRecordUncheckedUpdateInput>
    /**
     * Choose, which EquipmentSaleRecord to update.
     */
    where: EquipmentSaleRecordWhereUniqueInput
  }

  /**
   * EquipmentSaleRecord updateMany
   */
  export type EquipmentSaleRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentSaleRecords.
     */
    data: XOR<EquipmentSaleRecordUpdateManyMutationInput, EquipmentSaleRecordUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentSaleRecords to update
     */
    where?: EquipmentSaleRecordWhereInput
    /**
     * Limit how many EquipmentSaleRecords to update.
     */
    limit?: number
  }

  /**
   * EquipmentSaleRecord updateManyAndReturn
   */
  export type EquipmentSaleRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentSaleRecords.
     */
    data: XOR<EquipmentSaleRecordUpdateManyMutationInput, EquipmentSaleRecordUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentSaleRecords to update
     */
    where?: EquipmentSaleRecordWhereInput
    /**
     * Limit how many EquipmentSaleRecords to update.
     */
    limit?: number
  }

  /**
   * EquipmentSaleRecord upsert
   */
  export type EquipmentSaleRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the EquipmentSaleRecord to update in case it exists.
     */
    where: EquipmentSaleRecordWhereUniqueInput
    /**
     * In case the EquipmentSaleRecord found by the `where` argument doesn't exist, create a new EquipmentSaleRecord with this data.
     */
    create: XOR<EquipmentSaleRecordCreateInput, EquipmentSaleRecordUncheckedCreateInput>
    /**
     * In case the EquipmentSaleRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentSaleRecordUpdateInput, EquipmentSaleRecordUncheckedUpdateInput>
  }

  /**
   * EquipmentSaleRecord delete
   */
  export type EquipmentSaleRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
    /**
     * Filter which EquipmentSaleRecord to delete.
     */
    where: EquipmentSaleRecordWhereUniqueInput
  }

  /**
   * EquipmentSaleRecord deleteMany
   */
  export type EquipmentSaleRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentSaleRecords to delete
     */
    where?: EquipmentSaleRecordWhereInput
    /**
     * Limit how many EquipmentSaleRecords to delete.
     */
    limit?: number
  }

  /**
   * EquipmentSaleRecord without action
   */
  export type EquipmentSaleRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentSaleRecord
     */
    select?: EquipmentSaleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentSaleRecord
     */
    omit?: EquipmentSaleRecordOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const EquipmentTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EquipmentTypeScalarFieldEnum = (typeof EquipmentTypeScalarFieldEnum)[keyof typeof EquipmentTypeScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const FileDataScalarFieldEnum: {
    fileId: 'fileId',
    fileName: 'fileName',
    fileSize: 'fileSize',
    fileType: 'fileType',
    fileUrl: 'fileUrl'
  };

  export type FileDataScalarFieldEnum = (typeof FileDataScalarFieldEnum)[keyof typeof FileDataScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    typeId: 'typeId',
    categoryId: 'categoryId',
    unitId: 'unitId',
    brand: 'brand',
    model: 'model',
    description: 'description',
    reasonForUse: 'reasonForUse',
    unitPrice: 'unitPrice',
    referenceDocsId: 'referenceDocsId',
    attachFileId: 'attachFileId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const EquipmentSaleRecordScalarFieldEnum: {
    id: 'id',
    title: 'title',
    department: 'department',
    estimatedPrice: 'estimatedPrice',
    auctionMethod: 'auctionMethod',
    auctionDate: 'auctionDate',
    soldPrice: 'soldPrice',
    winnerName: 'winnerName',
    responsiblePerson: 'responsiblePerson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentSaleRecordScalarFieldEnum = (typeof EquipmentSaleRecordScalarFieldEnum)[keyof typeof EquipmentSaleRecordScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'AuctionMethod'
   */
  export type EnumAuctionMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionMethod'>
    


  /**
   * Reference to a field of type 'AuctionMethod[]'
   */
  export type ListEnumAuctionMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionMethod[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    equipments?: EquipmentListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    equipments?: EquipmentOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    equipments?: EquipmentListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type EquipmentTypeWhereInput = {
    AND?: EquipmentTypeWhereInput | EquipmentTypeWhereInput[]
    OR?: EquipmentTypeWhereInput[]
    NOT?: EquipmentTypeWhereInput | EquipmentTypeWhereInput[]
    id?: IntFilter<"EquipmentType"> | number
    name?: StringFilter<"EquipmentType"> | string
    equipments?: EquipmentListRelationFilter
  }

  export type EquipmentTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    equipments?: EquipmentOrderByRelationAggregateInput
  }

  export type EquipmentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: EquipmentTypeWhereInput | EquipmentTypeWhereInput[]
    OR?: EquipmentTypeWhereInput[]
    NOT?: EquipmentTypeWhereInput | EquipmentTypeWhereInput[]
    equipments?: EquipmentListRelationFilter
  }, "id" | "name">

  export type EquipmentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: EquipmentTypeCountOrderByAggregateInput
    _avg?: EquipmentTypeAvgOrderByAggregateInput
    _max?: EquipmentTypeMaxOrderByAggregateInput
    _min?: EquipmentTypeMinOrderByAggregateInput
    _sum?: EquipmentTypeSumOrderByAggregateInput
  }

  export type EquipmentTypeScalarWhereWithAggregatesInput = {
    AND?: EquipmentTypeScalarWhereWithAggregatesInput | EquipmentTypeScalarWhereWithAggregatesInput[]
    OR?: EquipmentTypeScalarWhereWithAggregatesInput[]
    NOT?: EquipmentTypeScalarWhereWithAggregatesInput | EquipmentTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EquipmentType"> | number
    name?: StringWithAggregatesFilter<"EquipmentType"> | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: IntFilter<"Unit"> | number
    name?: StringFilter<"Unit"> | string
    equipments?: EquipmentListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    equipments?: EquipmentOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    equipments?: EquipmentListRelationFilter
  }, "id" | "name">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Unit"> | number
    name?: StringWithAggregatesFilter<"Unit"> | string
  }

  export type FileDataWhereInput = {
    AND?: FileDataWhereInput | FileDataWhereInput[]
    OR?: FileDataWhereInput[]
    NOT?: FileDataWhereInput | FileDataWhereInput[]
    fileId?: IntFilter<"FileData"> | number
    fileName?: StringFilter<"FileData"> | string
    fileSize?: DecimalFilter<"FileData"> | Decimal | DecimalJsLike | number | string
    fileType?: StringFilter<"FileData"> | string
    fileUrl?: StringFilter<"FileData"> | string
    attEquipments?: EquipmentListRelationFilter
    refEquipments?: EquipmentListRelationFilter
  }

  export type FileDataOrderByWithRelationInput = {
    fileId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    fileUrl?: SortOrder
    attEquipments?: EquipmentOrderByRelationAggregateInput
    refEquipments?: EquipmentOrderByRelationAggregateInput
  }

  export type FileDataWhereUniqueInput = Prisma.AtLeast<{
    fileId?: number
    AND?: FileDataWhereInput | FileDataWhereInput[]
    OR?: FileDataWhereInput[]
    NOT?: FileDataWhereInput | FileDataWhereInput[]
    fileName?: StringFilter<"FileData"> | string
    fileSize?: DecimalFilter<"FileData"> | Decimal | DecimalJsLike | number | string
    fileType?: StringFilter<"FileData"> | string
    fileUrl?: StringFilter<"FileData"> | string
    attEquipments?: EquipmentListRelationFilter
    refEquipments?: EquipmentListRelationFilter
  }, "fileId">

  export type FileDataOrderByWithAggregationInput = {
    fileId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    fileUrl?: SortOrder
    _count?: FileDataCountOrderByAggregateInput
    _avg?: FileDataAvgOrderByAggregateInput
    _max?: FileDataMaxOrderByAggregateInput
    _min?: FileDataMinOrderByAggregateInput
    _sum?: FileDataSumOrderByAggregateInput
  }

  export type FileDataScalarWhereWithAggregatesInput = {
    AND?: FileDataScalarWhereWithAggregatesInput | FileDataScalarWhereWithAggregatesInput[]
    OR?: FileDataScalarWhereWithAggregatesInput[]
    NOT?: FileDataScalarWhereWithAggregatesInput | FileDataScalarWhereWithAggregatesInput[]
    fileId?: IntWithAggregatesFilter<"FileData"> | number
    fileName?: StringWithAggregatesFilter<"FileData"> | string
    fileSize?: DecimalWithAggregatesFilter<"FileData"> | Decimal | DecimalJsLike | number | string
    fileType?: StringWithAggregatesFilter<"FileData"> | string
    fileUrl?: StringWithAggregatesFilter<"FileData"> | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: IntFilter<"Equipment"> | number
    name?: StringFilter<"Equipment"> | string
    typeId?: IntFilter<"Equipment"> | number
    categoryId?: IntFilter<"Equipment"> | number
    unitId?: IntFilter<"Equipment"> | number
    brand?: StringNullableFilter<"Equipment"> | string | null
    model?: StringNullableFilter<"Equipment"> | string | null
    description?: StringNullableFilter<"Equipment"> | string | null
    reasonForUse?: StringFilter<"Equipment"> | string
    unitPrice?: StringFilter<"Equipment"> | string
    referenceDocsId?: IntNullableFilter<"Equipment"> | number | null
    attachFileId?: IntNullableFilter<"Equipment"> | number | null
    createAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    attachFile?: XOR<FileDataNullableScalarRelationFilter, FileDataWhereInput> | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    referenceDocs?: XOR<FileDataNullableScalarRelationFilter, FileDataWhereInput> | null
    type?: XOR<EquipmentTypeScalarRelationFilter, EquipmentTypeWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    reasonForUse?: SortOrder
    unitPrice?: SortOrder
    referenceDocsId?: SortOrderInput | SortOrder
    attachFileId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    attachFile?: FileDataOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    referenceDocs?: FileDataOrderByWithRelationInput
    type?: EquipmentTypeOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    name?: StringFilter<"Equipment"> | string
    typeId?: IntFilter<"Equipment"> | number
    categoryId?: IntFilter<"Equipment"> | number
    unitId?: IntFilter<"Equipment"> | number
    brand?: StringNullableFilter<"Equipment"> | string | null
    model?: StringNullableFilter<"Equipment"> | string | null
    description?: StringNullableFilter<"Equipment"> | string | null
    reasonForUse?: StringFilter<"Equipment"> | string
    unitPrice?: StringFilter<"Equipment"> | string
    referenceDocsId?: IntNullableFilter<"Equipment"> | number | null
    attachFileId?: IntNullableFilter<"Equipment"> | number | null
    createAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    attachFile?: XOR<FileDataNullableScalarRelationFilter, FileDataWhereInput> | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    referenceDocs?: XOR<FileDataNullableScalarRelationFilter, FileDataWhereInput> | null
    type?: XOR<EquipmentTypeScalarRelationFilter, EquipmentTypeWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    reasonForUse?: SortOrder
    unitPrice?: SortOrder
    referenceDocsId?: SortOrderInput | SortOrder
    attachFileId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipment"> | number
    name?: StringWithAggregatesFilter<"Equipment"> | string
    typeId?: IntWithAggregatesFilter<"Equipment"> | number
    categoryId?: IntWithAggregatesFilter<"Equipment"> | number
    unitId?: IntWithAggregatesFilter<"Equipment"> | number
    brand?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    model?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    description?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    reasonForUse?: StringWithAggregatesFilter<"Equipment"> | string
    unitPrice?: StringWithAggregatesFilter<"Equipment"> | string
    referenceDocsId?: IntNullableWithAggregatesFilter<"Equipment"> | number | null
    attachFileId?: IntNullableWithAggregatesFilter<"Equipment"> | number | null
    createAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
  }

  export type EquipmentSaleRecordWhereInput = {
    AND?: EquipmentSaleRecordWhereInput | EquipmentSaleRecordWhereInput[]
    OR?: EquipmentSaleRecordWhereInput[]
    NOT?: EquipmentSaleRecordWhereInput | EquipmentSaleRecordWhereInput[]
    id?: IntFilter<"EquipmentSaleRecord"> | number
    title?: StringFilter<"EquipmentSaleRecord"> | string
    department?: StringFilter<"EquipmentSaleRecord"> | string
    estimatedPrice?: DecimalFilter<"EquipmentSaleRecord"> | Decimal | DecimalJsLike | number | string
    auctionMethod?: EnumAuctionMethodFilter<"EquipmentSaleRecord"> | $Enums.AuctionMethod
    auctionDate?: DateTimeFilter<"EquipmentSaleRecord"> | Date | string
    soldPrice?: DecimalFilter<"EquipmentSaleRecord"> | Decimal | DecimalJsLike | number | string
    winnerName?: StringFilter<"EquipmentSaleRecord"> | string
    responsiblePerson?: StringFilter<"EquipmentSaleRecord"> | string
    createdAt?: DateTimeFilter<"EquipmentSaleRecord"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentSaleRecord"> | Date | string
  }

  export type EquipmentSaleRecordOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    estimatedPrice?: SortOrder
    auctionMethod?: SortOrder
    auctionDate?: SortOrder
    soldPrice?: SortOrder
    winnerName?: SortOrder
    responsiblePerson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentSaleRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipmentSaleRecordWhereInput | EquipmentSaleRecordWhereInput[]
    OR?: EquipmentSaleRecordWhereInput[]
    NOT?: EquipmentSaleRecordWhereInput | EquipmentSaleRecordWhereInput[]
    title?: StringFilter<"EquipmentSaleRecord"> | string
    department?: StringFilter<"EquipmentSaleRecord"> | string
    estimatedPrice?: DecimalFilter<"EquipmentSaleRecord"> | Decimal | DecimalJsLike | number | string
    auctionMethod?: EnumAuctionMethodFilter<"EquipmentSaleRecord"> | $Enums.AuctionMethod
    auctionDate?: DateTimeFilter<"EquipmentSaleRecord"> | Date | string
    soldPrice?: DecimalFilter<"EquipmentSaleRecord"> | Decimal | DecimalJsLike | number | string
    winnerName?: StringFilter<"EquipmentSaleRecord"> | string
    responsiblePerson?: StringFilter<"EquipmentSaleRecord"> | string
    createdAt?: DateTimeFilter<"EquipmentSaleRecord"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentSaleRecord"> | Date | string
  }, "id">

  export type EquipmentSaleRecordOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    estimatedPrice?: SortOrder
    auctionMethod?: SortOrder
    auctionDate?: SortOrder
    soldPrice?: SortOrder
    winnerName?: SortOrder
    responsiblePerson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentSaleRecordCountOrderByAggregateInput
    _avg?: EquipmentSaleRecordAvgOrderByAggregateInput
    _max?: EquipmentSaleRecordMaxOrderByAggregateInput
    _min?: EquipmentSaleRecordMinOrderByAggregateInput
    _sum?: EquipmentSaleRecordSumOrderByAggregateInput
  }

  export type EquipmentSaleRecordScalarWhereWithAggregatesInput = {
    AND?: EquipmentSaleRecordScalarWhereWithAggregatesInput | EquipmentSaleRecordScalarWhereWithAggregatesInput[]
    OR?: EquipmentSaleRecordScalarWhereWithAggregatesInput[]
    NOT?: EquipmentSaleRecordScalarWhereWithAggregatesInput | EquipmentSaleRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EquipmentSaleRecord"> | number
    title?: StringWithAggregatesFilter<"EquipmentSaleRecord"> | string
    department?: StringWithAggregatesFilter<"EquipmentSaleRecord"> | string
    estimatedPrice?: DecimalWithAggregatesFilter<"EquipmentSaleRecord"> | Decimal | DecimalJsLike | number | string
    auctionMethod?: EnumAuctionMethodWithAggregatesFilter<"EquipmentSaleRecord"> | $Enums.AuctionMethod
    auctionDate?: DateTimeWithAggregatesFilter<"EquipmentSaleRecord"> | Date | string
    soldPrice?: DecimalWithAggregatesFilter<"EquipmentSaleRecord"> | Decimal | DecimalJsLike | number | string
    winnerName?: StringWithAggregatesFilter<"EquipmentSaleRecord"> | string
    responsiblePerson?: StringWithAggregatesFilter<"EquipmentSaleRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EquipmentSaleRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EquipmentSaleRecord"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    password: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    equipments?: EquipmentCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    equipments?: EquipmentUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentTypeCreateInput = {
    name: string
    equipments?: EquipmentCreateNestedManyWithoutTypeInput
  }

  export type EquipmentTypeUncheckedCreateInput = {
    id?: number
    name: string
    equipments?: EquipmentUncheckedCreateNestedManyWithoutTypeInput
  }

  export type EquipmentTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUpdateManyWithoutTypeNestedInput
  }

  export type EquipmentTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type EquipmentTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type EquipmentTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UnitCreateInput = {
    name: string
    equipments?: EquipmentCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: number
    name: string
    equipments?: EquipmentUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: number
    name: string
  }

  export type UnitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FileDataCreateInput = {
    fileName: string
    fileSize: Decimal | DecimalJsLike | number | string
    fileType: string
    fileUrl: string
    attEquipments?: EquipmentCreateNestedManyWithoutAttachFileInput
    refEquipments?: EquipmentCreateNestedManyWithoutReferenceDocsInput
  }

  export type FileDataUncheckedCreateInput = {
    fileId?: number
    fileName: string
    fileSize: Decimal | DecimalJsLike | number | string
    fileType: string
    fileUrl: string
    attEquipments?: EquipmentUncheckedCreateNestedManyWithoutAttachFileInput
    refEquipments?: EquipmentUncheckedCreateNestedManyWithoutReferenceDocsInput
  }

  export type FileDataUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    attEquipments?: EquipmentUpdateManyWithoutAttachFileNestedInput
    refEquipments?: EquipmentUpdateManyWithoutReferenceDocsNestedInput
  }

  export type FileDataUncheckedUpdateInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    attEquipments?: EquipmentUncheckedUpdateManyWithoutAttachFileNestedInput
    refEquipments?: EquipmentUncheckedUpdateManyWithoutReferenceDocsNestedInput
  }

  export type FileDataCreateManyInput = {
    fileId?: number
    fileName: string
    fileSize: Decimal | DecimalJsLike | number | string
    fileType: string
    fileUrl: string
  }

  export type FileDataUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type FileDataUncheckedUpdateManyInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateInput = {
    name: string
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    createAt?: Date | string
    updatedAt?: Date | string
    attachFile?: FileDataCreateNestedOneWithoutAttEquipmentsInput
    category: CategoryCreateNestedOneWithoutEquipmentsInput
    referenceDocs?: FileDataCreateNestedOneWithoutRefEquipmentsInput
    type: EquipmentTypeCreateNestedOneWithoutEquipmentsInput
    unit: UnitCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: number
    name: string
    typeId: number
    categoryId: number
    unitId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId?: number | null
    attachFileId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachFile?: FileDataUpdateOneWithoutAttEquipmentsNestedInput
    category?: CategoryUpdateOneRequiredWithoutEquipmentsNestedInput
    referenceDocs?: FileDataUpdateOneWithoutRefEquipmentsNestedInput
    type?: EquipmentTypeUpdateOneRequiredWithoutEquipmentsNestedInput
    unit?: UnitUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    referenceDocsId?: NullableIntFieldUpdateOperationsInput | number | null
    attachFileId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateManyInput = {
    id?: number
    name: string
    typeId: number
    categoryId: number
    unitId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId?: number | null
    attachFileId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    referenceDocsId?: NullableIntFieldUpdateOperationsInput | number | null
    attachFileId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentSaleRecordCreateInput = {
    title: string
    department: string
    estimatedPrice: Decimal | DecimalJsLike | number | string
    auctionMethod: $Enums.AuctionMethod
    auctionDate: Date | string
    soldPrice: Decimal | DecimalJsLike | number | string
    winnerName: string
    responsiblePerson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentSaleRecordUncheckedCreateInput = {
    id?: number
    title: string
    department: string
    estimatedPrice: Decimal | DecimalJsLike | number | string
    auctionMethod: $Enums.AuctionMethod
    auctionDate: Date | string
    soldPrice: Decimal | DecimalJsLike | number | string
    winnerName: string
    responsiblePerson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentSaleRecordUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    auctionMethod?: EnumAuctionMethodFieldUpdateOperationsInput | $Enums.AuctionMethod
    auctionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    soldPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerName?: StringFieldUpdateOperationsInput | string
    responsiblePerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentSaleRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    auctionMethod?: EnumAuctionMethodFieldUpdateOperationsInput | $Enums.AuctionMethod
    auctionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    soldPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerName?: StringFieldUpdateOperationsInput | string
    responsiblePerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentSaleRecordCreateManyInput = {
    id?: number
    title: string
    department: string
    estimatedPrice: Decimal | DecimalJsLike | number | string
    auctionMethod: $Enums.AuctionMethod
    auctionDate: Date | string
    soldPrice: Decimal | DecimalJsLike | number | string
    winnerName: string
    responsiblePerson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentSaleRecordUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    auctionMethod?: EnumAuctionMethodFieldUpdateOperationsInput | $Enums.AuctionMethod
    auctionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    soldPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerName?: StringFieldUpdateOperationsInput | string
    responsiblePerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentSaleRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    estimatedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    auctionMethod?: EnumAuctionMethodFieldUpdateOperationsInput | $Enums.AuctionMethod
    auctionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    soldPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    winnerName?: StringFieldUpdateOperationsInput | string
    responsiblePerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipmentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EquipmentTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipmentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EquipmentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EquipmentTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FileDataCountOrderByAggregateInput = {
    fileId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    fileUrl?: SortOrder
  }

  export type FileDataAvgOrderByAggregateInput = {
    fileId?: SortOrder
    fileSize?: SortOrder
  }

  export type FileDataMaxOrderByAggregateInput = {
    fileId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    fileUrl?: SortOrder
  }

  export type FileDataMinOrderByAggregateInput = {
    fileId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    fileUrl?: SortOrder
  }

  export type FileDataSumOrderByAggregateInput = {
    fileId?: SortOrder
    fileSize?: SortOrder
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

  export type FileDataNullableScalarRelationFilter = {
    is?: FileDataWhereInput | null
    isNot?: FileDataWhereInput | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type EquipmentTypeScalarRelationFilter = {
    is?: EquipmentTypeWhereInput
    isNot?: EquipmentTypeWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    description?: SortOrder
    reasonForUse?: SortOrder
    unitPrice?: SortOrder
    referenceDocsId?: SortOrder
    attachFileId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrder
    referenceDocsId?: SortOrder
    attachFileId?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    description?: SortOrder
    reasonForUse?: SortOrder
    unitPrice?: SortOrder
    referenceDocsId?: SortOrder
    attachFileId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    description?: SortOrder
    reasonForUse?: SortOrder
    unitPrice?: SortOrder
    referenceDocsId?: SortOrder
    attachFileId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrder
    referenceDocsId?: SortOrder
    attachFileId?: SortOrder
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

  export type EnumAuctionMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionMethod | EnumAuctionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionMethod[] | ListEnumAuctionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionMethod[] | ListEnumAuctionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionMethodFilter<$PrismaModel> | $Enums.AuctionMethod
  }

  export type EquipmentSaleRecordCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    estimatedPrice?: SortOrder
    auctionMethod?: SortOrder
    auctionDate?: SortOrder
    soldPrice?: SortOrder
    winnerName?: SortOrder
    responsiblePerson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentSaleRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    estimatedPrice?: SortOrder
    soldPrice?: SortOrder
  }

  export type EquipmentSaleRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    estimatedPrice?: SortOrder
    auctionMethod?: SortOrder
    auctionDate?: SortOrder
    soldPrice?: SortOrder
    winnerName?: SortOrder
    responsiblePerson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentSaleRecordMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    estimatedPrice?: SortOrder
    auctionMethod?: SortOrder
    auctionDate?: SortOrder
    soldPrice?: SortOrder
    winnerName?: SortOrder
    responsiblePerson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentSaleRecordSumOrderByAggregateInput = {
    id?: SortOrder
    estimatedPrice?: SortOrder
    soldPrice?: SortOrder
  }

  export type EnumAuctionMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionMethod | EnumAuctionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionMethod[] | ListEnumAuctionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionMethod[] | ListEnumAuctionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuctionMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionMethodFilter<$PrismaModel>
    _max?: NestedEnumAuctionMethodFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EquipmentCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCategoryInput | EquipmentUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCategoryInput | EquipmentUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCategoryInput | EquipmentUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCategoryInput | EquipmentUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCategoryInput | EquipmentUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCategoryInput | EquipmentUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentCreateNestedManyWithoutTypeInput = {
    create?: XOR<EquipmentCreateWithoutTypeInput, EquipmentUncheckedCreateWithoutTypeInput> | EquipmentCreateWithoutTypeInput[] | EquipmentUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutTypeInput | EquipmentCreateOrConnectWithoutTypeInput[]
    createMany?: EquipmentCreateManyTypeInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<EquipmentCreateWithoutTypeInput, EquipmentUncheckedCreateWithoutTypeInput> | EquipmentCreateWithoutTypeInput[] | EquipmentUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutTypeInput | EquipmentCreateOrConnectWithoutTypeInput[]
    createMany?: EquipmentCreateManyTypeInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUpdateManyWithoutTypeNestedInput = {
    create?: XOR<EquipmentCreateWithoutTypeInput, EquipmentUncheckedCreateWithoutTypeInput> | EquipmentCreateWithoutTypeInput[] | EquipmentUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutTypeInput | EquipmentCreateOrConnectWithoutTypeInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutTypeInput | EquipmentUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: EquipmentCreateManyTypeInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutTypeInput | EquipmentUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutTypeInput | EquipmentUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<EquipmentCreateWithoutTypeInput, EquipmentUncheckedCreateWithoutTypeInput> | EquipmentCreateWithoutTypeInput[] | EquipmentUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutTypeInput | EquipmentCreateOrConnectWithoutTypeInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutTypeInput | EquipmentUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: EquipmentCreateManyTypeInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutTypeInput | EquipmentUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutTypeInput | EquipmentUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentCreateNestedManyWithoutUnitInput = {
    create?: XOR<EquipmentCreateWithoutUnitInput, EquipmentUncheckedCreateWithoutUnitInput> | EquipmentCreateWithoutUnitInput[] | EquipmentUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutUnitInput | EquipmentCreateOrConnectWithoutUnitInput[]
    createMany?: EquipmentCreateManyUnitInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<EquipmentCreateWithoutUnitInput, EquipmentUncheckedCreateWithoutUnitInput> | EquipmentCreateWithoutUnitInput[] | EquipmentUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutUnitInput | EquipmentCreateOrConnectWithoutUnitInput[]
    createMany?: EquipmentCreateManyUnitInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUpdateManyWithoutUnitNestedInput = {
    create?: XOR<EquipmentCreateWithoutUnitInput, EquipmentUncheckedCreateWithoutUnitInput> | EquipmentCreateWithoutUnitInput[] | EquipmentUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutUnitInput | EquipmentCreateOrConnectWithoutUnitInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutUnitInput | EquipmentUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: EquipmentCreateManyUnitInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutUnitInput | EquipmentUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutUnitInput | EquipmentUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<EquipmentCreateWithoutUnitInput, EquipmentUncheckedCreateWithoutUnitInput> | EquipmentCreateWithoutUnitInput[] | EquipmentUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutUnitInput | EquipmentCreateOrConnectWithoutUnitInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutUnitInput | EquipmentUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: EquipmentCreateManyUnitInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutUnitInput | EquipmentUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutUnitInput | EquipmentUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentCreateNestedManyWithoutAttachFileInput = {
    create?: XOR<EquipmentCreateWithoutAttachFileInput, EquipmentUncheckedCreateWithoutAttachFileInput> | EquipmentCreateWithoutAttachFileInput[] | EquipmentUncheckedCreateWithoutAttachFileInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutAttachFileInput | EquipmentCreateOrConnectWithoutAttachFileInput[]
    createMany?: EquipmentCreateManyAttachFileInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentCreateNestedManyWithoutReferenceDocsInput = {
    create?: XOR<EquipmentCreateWithoutReferenceDocsInput, EquipmentUncheckedCreateWithoutReferenceDocsInput> | EquipmentCreateWithoutReferenceDocsInput[] | EquipmentUncheckedCreateWithoutReferenceDocsInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutReferenceDocsInput | EquipmentCreateOrConnectWithoutReferenceDocsInput[]
    createMany?: EquipmentCreateManyReferenceDocsInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutAttachFileInput = {
    create?: XOR<EquipmentCreateWithoutAttachFileInput, EquipmentUncheckedCreateWithoutAttachFileInput> | EquipmentCreateWithoutAttachFileInput[] | EquipmentUncheckedCreateWithoutAttachFileInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutAttachFileInput | EquipmentCreateOrConnectWithoutAttachFileInput[]
    createMany?: EquipmentCreateManyAttachFileInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutReferenceDocsInput = {
    create?: XOR<EquipmentCreateWithoutReferenceDocsInput, EquipmentUncheckedCreateWithoutReferenceDocsInput> | EquipmentCreateWithoutReferenceDocsInput[] | EquipmentUncheckedCreateWithoutReferenceDocsInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutReferenceDocsInput | EquipmentCreateOrConnectWithoutReferenceDocsInput[]
    createMany?: EquipmentCreateManyReferenceDocsInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EquipmentUpdateManyWithoutAttachFileNestedInput = {
    create?: XOR<EquipmentCreateWithoutAttachFileInput, EquipmentUncheckedCreateWithoutAttachFileInput> | EquipmentCreateWithoutAttachFileInput[] | EquipmentUncheckedCreateWithoutAttachFileInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutAttachFileInput | EquipmentCreateOrConnectWithoutAttachFileInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutAttachFileInput | EquipmentUpsertWithWhereUniqueWithoutAttachFileInput[]
    createMany?: EquipmentCreateManyAttachFileInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutAttachFileInput | EquipmentUpdateWithWhereUniqueWithoutAttachFileInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutAttachFileInput | EquipmentUpdateManyWithWhereWithoutAttachFileInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUpdateManyWithoutReferenceDocsNestedInput = {
    create?: XOR<EquipmentCreateWithoutReferenceDocsInput, EquipmentUncheckedCreateWithoutReferenceDocsInput> | EquipmentCreateWithoutReferenceDocsInput[] | EquipmentUncheckedCreateWithoutReferenceDocsInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutReferenceDocsInput | EquipmentCreateOrConnectWithoutReferenceDocsInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutReferenceDocsInput | EquipmentUpsertWithWhereUniqueWithoutReferenceDocsInput[]
    createMany?: EquipmentCreateManyReferenceDocsInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutReferenceDocsInput | EquipmentUpdateWithWhereUniqueWithoutReferenceDocsInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutReferenceDocsInput | EquipmentUpdateManyWithWhereWithoutReferenceDocsInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutAttachFileNestedInput = {
    create?: XOR<EquipmentCreateWithoutAttachFileInput, EquipmentUncheckedCreateWithoutAttachFileInput> | EquipmentCreateWithoutAttachFileInput[] | EquipmentUncheckedCreateWithoutAttachFileInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutAttachFileInput | EquipmentCreateOrConnectWithoutAttachFileInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutAttachFileInput | EquipmentUpsertWithWhereUniqueWithoutAttachFileInput[]
    createMany?: EquipmentCreateManyAttachFileInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutAttachFileInput | EquipmentUpdateWithWhereUniqueWithoutAttachFileInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutAttachFileInput | EquipmentUpdateManyWithWhereWithoutAttachFileInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutReferenceDocsNestedInput = {
    create?: XOR<EquipmentCreateWithoutReferenceDocsInput, EquipmentUncheckedCreateWithoutReferenceDocsInput> | EquipmentCreateWithoutReferenceDocsInput[] | EquipmentUncheckedCreateWithoutReferenceDocsInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutReferenceDocsInput | EquipmentCreateOrConnectWithoutReferenceDocsInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutReferenceDocsInput | EquipmentUpsertWithWhereUniqueWithoutReferenceDocsInput[]
    createMany?: EquipmentCreateManyReferenceDocsInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutReferenceDocsInput | EquipmentUpdateWithWhereUniqueWithoutReferenceDocsInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutReferenceDocsInput | EquipmentUpdateManyWithWhereWithoutReferenceDocsInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type FileDataCreateNestedOneWithoutAttEquipmentsInput = {
    create?: XOR<FileDataCreateWithoutAttEquipmentsInput, FileDataUncheckedCreateWithoutAttEquipmentsInput>
    connectOrCreate?: FileDataCreateOrConnectWithoutAttEquipmentsInput
    connect?: FileDataWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<CategoryCreateWithoutEquipmentsInput, CategoryUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEquipmentsInput
    connect?: CategoryWhereUniqueInput
  }

  export type FileDataCreateNestedOneWithoutRefEquipmentsInput = {
    create?: XOR<FileDataCreateWithoutRefEquipmentsInput, FileDataUncheckedCreateWithoutRefEquipmentsInput>
    connectOrCreate?: FileDataCreateOrConnectWithoutRefEquipmentsInput
    connect?: FileDataWhereUniqueInput
  }

  export type EquipmentTypeCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<EquipmentTypeCreateWithoutEquipmentsInput, EquipmentTypeUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: EquipmentTypeCreateOrConnectWithoutEquipmentsInput
    connect?: EquipmentTypeWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<UnitCreateWithoutEquipmentsInput, UnitUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutEquipmentsInput
    connect?: UnitWhereUniqueInput
  }

  export type FileDataUpdateOneWithoutAttEquipmentsNestedInput = {
    create?: XOR<FileDataCreateWithoutAttEquipmentsInput, FileDataUncheckedCreateWithoutAttEquipmentsInput>
    connectOrCreate?: FileDataCreateOrConnectWithoutAttEquipmentsInput
    upsert?: FileDataUpsertWithoutAttEquipmentsInput
    disconnect?: FileDataWhereInput | boolean
    delete?: FileDataWhereInput | boolean
    connect?: FileDataWhereUniqueInput
    update?: XOR<XOR<FileDataUpdateToOneWithWhereWithoutAttEquipmentsInput, FileDataUpdateWithoutAttEquipmentsInput>, FileDataUncheckedUpdateWithoutAttEquipmentsInput>
  }

  export type CategoryUpdateOneRequiredWithoutEquipmentsNestedInput = {
    create?: XOR<CategoryCreateWithoutEquipmentsInput, CategoryUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEquipmentsInput
    upsert?: CategoryUpsertWithoutEquipmentsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutEquipmentsInput, CategoryUpdateWithoutEquipmentsInput>, CategoryUncheckedUpdateWithoutEquipmentsInput>
  }

  export type FileDataUpdateOneWithoutRefEquipmentsNestedInput = {
    create?: XOR<FileDataCreateWithoutRefEquipmentsInput, FileDataUncheckedCreateWithoutRefEquipmentsInput>
    connectOrCreate?: FileDataCreateOrConnectWithoutRefEquipmentsInput
    upsert?: FileDataUpsertWithoutRefEquipmentsInput
    disconnect?: FileDataWhereInput | boolean
    delete?: FileDataWhereInput | boolean
    connect?: FileDataWhereUniqueInput
    update?: XOR<XOR<FileDataUpdateToOneWithWhereWithoutRefEquipmentsInput, FileDataUpdateWithoutRefEquipmentsInput>, FileDataUncheckedUpdateWithoutRefEquipmentsInput>
  }

  export type EquipmentTypeUpdateOneRequiredWithoutEquipmentsNestedInput = {
    create?: XOR<EquipmentTypeCreateWithoutEquipmentsInput, EquipmentTypeUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: EquipmentTypeCreateOrConnectWithoutEquipmentsInput
    upsert?: EquipmentTypeUpsertWithoutEquipmentsInput
    connect?: EquipmentTypeWhereUniqueInput
    update?: XOR<XOR<EquipmentTypeUpdateToOneWithWhereWithoutEquipmentsInput, EquipmentTypeUpdateWithoutEquipmentsInput>, EquipmentTypeUncheckedUpdateWithoutEquipmentsInput>
  }

  export type UnitUpdateOneRequiredWithoutEquipmentsNestedInput = {
    create?: XOR<UnitCreateWithoutEquipmentsInput, UnitUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutEquipmentsInput
    upsert?: UnitUpsertWithoutEquipmentsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutEquipmentsInput, UnitUpdateWithoutEquipmentsInput>, UnitUncheckedUpdateWithoutEquipmentsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAuctionMethodFieldUpdateOperationsInput = {
    set?: $Enums.AuctionMethod
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumAuctionMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionMethod | EnumAuctionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionMethod[] | ListEnumAuctionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionMethod[] | ListEnumAuctionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionMethodFilter<$PrismaModel> | $Enums.AuctionMethod
  }

  export type NestedEnumAuctionMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionMethod | EnumAuctionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionMethod[] | ListEnumAuctionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionMethod[] | ListEnumAuctionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuctionMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionMethodFilter<$PrismaModel>
    _max?: NestedEnumAuctionMethodFilter<$PrismaModel>
  }

  export type EquipmentCreateWithoutCategoryInput = {
    name: string
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    createAt?: Date | string
    updatedAt?: Date | string
    attachFile?: FileDataCreateNestedOneWithoutAttEquipmentsInput
    referenceDocs?: FileDataCreateNestedOneWithoutRefEquipmentsInput
    type: EquipmentTypeCreateNestedOneWithoutEquipmentsInput
    unit: UnitCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    typeId: number
    unitId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId?: number | null
    attachFileId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutCategoryInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput>
  }

  export type EquipmentCreateManyCategoryInputEnvelope = {
    data: EquipmentCreateManyCategoryInput | EquipmentCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithWhereUniqueWithoutCategoryInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutCategoryInput, EquipmentUncheckedUpdateWithoutCategoryInput>
    create: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutCategoryInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutCategoryInput, EquipmentUncheckedUpdateWithoutCategoryInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutCategoryInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutCategoryInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: IntFilter<"Equipment"> | number
    name?: StringFilter<"Equipment"> | string
    typeId?: IntFilter<"Equipment"> | number
    categoryId?: IntFilter<"Equipment"> | number
    unitId?: IntFilter<"Equipment"> | number
    brand?: StringNullableFilter<"Equipment"> | string | null
    model?: StringNullableFilter<"Equipment"> | string | null
    description?: StringNullableFilter<"Equipment"> | string | null
    reasonForUse?: StringFilter<"Equipment"> | string
    unitPrice?: StringFilter<"Equipment"> | string
    referenceDocsId?: IntNullableFilter<"Equipment"> | number | null
    attachFileId?: IntNullableFilter<"Equipment"> | number | null
    createAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
  }

  export type EquipmentCreateWithoutTypeInput = {
    name: string
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    createAt?: Date | string
    updatedAt?: Date | string
    attachFile?: FileDataCreateNestedOneWithoutAttEquipmentsInput
    category: CategoryCreateNestedOneWithoutEquipmentsInput
    referenceDocs?: FileDataCreateNestedOneWithoutRefEquipmentsInput
    unit: UnitCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    categoryId: number
    unitId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId?: number | null
    attachFileId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutTypeInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutTypeInput, EquipmentUncheckedCreateWithoutTypeInput>
  }

  export type EquipmentCreateManyTypeInputEnvelope = {
    data: EquipmentCreateManyTypeInput | EquipmentCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithWhereUniqueWithoutTypeInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutTypeInput, EquipmentUncheckedUpdateWithoutTypeInput>
    create: XOR<EquipmentCreateWithoutTypeInput, EquipmentUncheckedCreateWithoutTypeInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutTypeInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutTypeInput, EquipmentUncheckedUpdateWithoutTypeInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutTypeInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutTypeInput>
  }

  export type EquipmentCreateWithoutUnitInput = {
    name: string
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    createAt?: Date | string
    updatedAt?: Date | string
    attachFile?: FileDataCreateNestedOneWithoutAttEquipmentsInput
    category: CategoryCreateNestedOneWithoutEquipmentsInput
    referenceDocs?: FileDataCreateNestedOneWithoutRefEquipmentsInput
    type: EquipmentTypeCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutUnitInput = {
    id?: number
    name: string
    typeId: number
    categoryId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId?: number | null
    attachFileId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutUnitInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutUnitInput, EquipmentUncheckedCreateWithoutUnitInput>
  }

  export type EquipmentCreateManyUnitInputEnvelope = {
    data: EquipmentCreateManyUnitInput | EquipmentCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithWhereUniqueWithoutUnitInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutUnitInput, EquipmentUncheckedUpdateWithoutUnitInput>
    create: XOR<EquipmentCreateWithoutUnitInput, EquipmentUncheckedCreateWithoutUnitInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutUnitInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutUnitInput, EquipmentUncheckedUpdateWithoutUnitInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutUnitInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutUnitInput>
  }

  export type EquipmentCreateWithoutAttachFileInput = {
    name: string
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    createAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutEquipmentsInput
    referenceDocs?: FileDataCreateNestedOneWithoutRefEquipmentsInput
    type: EquipmentTypeCreateNestedOneWithoutEquipmentsInput
    unit: UnitCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutAttachFileInput = {
    id?: number
    name: string
    typeId: number
    categoryId: number
    unitId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutAttachFileInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutAttachFileInput, EquipmentUncheckedCreateWithoutAttachFileInput>
  }

  export type EquipmentCreateManyAttachFileInputEnvelope = {
    data: EquipmentCreateManyAttachFileInput | EquipmentCreateManyAttachFileInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentCreateWithoutReferenceDocsInput = {
    name: string
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    createAt?: Date | string
    updatedAt?: Date | string
    attachFile?: FileDataCreateNestedOneWithoutAttEquipmentsInput
    category: CategoryCreateNestedOneWithoutEquipmentsInput
    type: EquipmentTypeCreateNestedOneWithoutEquipmentsInput
    unit: UnitCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutReferenceDocsInput = {
    id?: number
    name: string
    typeId: number
    categoryId: number
    unitId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    attachFileId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutReferenceDocsInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutReferenceDocsInput, EquipmentUncheckedCreateWithoutReferenceDocsInput>
  }

  export type EquipmentCreateManyReferenceDocsInputEnvelope = {
    data: EquipmentCreateManyReferenceDocsInput | EquipmentCreateManyReferenceDocsInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithWhereUniqueWithoutAttachFileInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutAttachFileInput, EquipmentUncheckedUpdateWithoutAttachFileInput>
    create: XOR<EquipmentCreateWithoutAttachFileInput, EquipmentUncheckedCreateWithoutAttachFileInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutAttachFileInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutAttachFileInput, EquipmentUncheckedUpdateWithoutAttachFileInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutAttachFileInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutAttachFileInput>
  }

  export type EquipmentUpsertWithWhereUniqueWithoutReferenceDocsInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutReferenceDocsInput, EquipmentUncheckedUpdateWithoutReferenceDocsInput>
    create: XOR<EquipmentCreateWithoutReferenceDocsInput, EquipmentUncheckedCreateWithoutReferenceDocsInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutReferenceDocsInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutReferenceDocsInput, EquipmentUncheckedUpdateWithoutReferenceDocsInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutReferenceDocsInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutReferenceDocsInput>
  }

  export type FileDataCreateWithoutAttEquipmentsInput = {
    fileName: string
    fileSize: Decimal | DecimalJsLike | number | string
    fileType: string
    fileUrl: string
    refEquipments?: EquipmentCreateNestedManyWithoutReferenceDocsInput
  }

  export type FileDataUncheckedCreateWithoutAttEquipmentsInput = {
    fileId?: number
    fileName: string
    fileSize: Decimal | DecimalJsLike | number | string
    fileType: string
    fileUrl: string
    refEquipments?: EquipmentUncheckedCreateNestedManyWithoutReferenceDocsInput
  }

  export type FileDataCreateOrConnectWithoutAttEquipmentsInput = {
    where: FileDataWhereUniqueInput
    create: XOR<FileDataCreateWithoutAttEquipmentsInput, FileDataUncheckedCreateWithoutAttEquipmentsInput>
  }

  export type CategoryCreateWithoutEquipmentsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutEquipmentsInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutEquipmentsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutEquipmentsInput, CategoryUncheckedCreateWithoutEquipmentsInput>
  }

  export type FileDataCreateWithoutRefEquipmentsInput = {
    fileName: string
    fileSize: Decimal | DecimalJsLike | number | string
    fileType: string
    fileUrl: string
    attEquipments?: EquipmentCreateNestedManyWithoutAttachFileInput
  }

  export type FileDataUncheckedCreateWithoutRefEquipmentsInput = {
    fileId?: number
    fileName: string
    fileSize: Decimal | DecimalJsLike | number | string
    fileType: string
    fileUrl: string
    attEquipments?: EquipmentUncheckedCreateNestedManyWithoutAttachFileInput
  }

  export type FileDataCreateOrConnectWithoutRefEquipmentsInput = {
    where: FileDataWhereUniqueInput
    create: XOR<FileDataCreateWithoutRefEquipmentsInput, FileDataUncheckedCreateWithoutRefEquipmentsInput>
  }

  export type EquipmentTypeCreateWithoutEquipmentsInput = {
    name: string
  }

  export type EquipmentTypeUncheckedCreateWithoutEquipmentsInput = {
    id?: number
    name: string
  }

  export type EquipmentTypeCreateOrConnectWithoutEquipmentsInput = {
    where: EquipmentTypeWhereUniqueInput
    create: XOR<EquipmentTypeCreateWithoutEquipmentsInput, EquipmentTypeUncheckedCreateWithoutEquipmentsInput>
  }

  export type UnitCreateWithoutEquipmentsInput = {
    name: string
  }

  export type UnitUncheckedCreateWithoutEquipmentsInput = {
    id?: number
    name: string
  }

  export type UnitCreateOrConnectWithoutEquipmentsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutEquipmentsInput, UnitUncheckedCreateWithoutEquipmentsInput>
  }

  export type FileDataUpsertWithoutAttEquipmentsInput = {
    update: XOR<FileDataUpdateWithoutAttEquipmentsInput, FileDataUncheckedUpdateWithoutAttEquipmentsInput>
    create: XOR<FileDataCreateWithoutAttEquipmentsInput, FileDataUncheckedCreateWithoutAttEquipmentsInput>
    where?: FileDataWhereInput
  }

  export type FileDataUpdateToOneWithWhereWithoutAttEquipmentsInput = {
    where?: FileDataWhereInput
    data: XOR<FileDataUpdateWithoutAttEquipmentsInput, FileDataUncheckedUpdateWithoutAttEquipmentsInput>
  }

  export type FileDataUpdateWithoutAttEquipmentsInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    refEquipments?: EquipmentUpdateManyWithoutReferenceDocsNestedInput
  }

  export type FileDataUncheckedUpdateWithoutAttEquipmentsInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    refEquipments?: EquipmentUncheckedUpdateManyWithoutReferenceDocsNestedInput
  }

  export type CategoryUpsertWithoutEquipmentsInput = {
    update: XOR<CategoryUpdateWithoutEquipmentsInput, CategoryUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<CategoryCreateWithoutEquipmentsInput, CategoryUncheckedCreateWithoutEquipmentsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutEquipmentsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutEquipmentsInput, CategoryUncheckedUpdateWithoutEquipmentsInput>
  }

  export type CategoryUpdateWithoutEquipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutEquipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FileDataUpsertWithoutRefEquipmentsInput = {
    update: XOR<FileDataUpdateWithoutRefEquipmentsInput, FileDataUncheckedUpdateWithoutRefEquipmentsInput>
    create: XOR<FileDataCreateWithoutRefEquipmentsInput, FileDataUncheckedCreateWithoutRefEquipmentsInput>
    where?: FileDataWhereInput
  }

  export type FileDataUpdateToOneWithWhereWithoutRefEquipmentsInput = {
    where?: FileDataWhereInput
    data: XOR<FileDataUpdateWithoutRefEquipmentsInput, FileDataUncheckedUpdateWithoutRefEquipmentsInput>
  }

  export type FileDataUpdateWithoutRefEquipmentsInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    attEquipments?: EquipmentUpdateManyWithoutAttachFileNestedInput
  }

  export type FileDataUncheckedUpdateWithoutRefEquipmentsInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    attEquipments?: EquipmentUncheckedUpdateManyWithoutAttachFileNestedInput
  }

  export type EquipmentTypeUpsertWithoutEquipmentsInput = {
    update: XOR<EquipmentTypeUpdateWithoutEquipmentsInput, EquipmentTypeUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<EquipmentTypeCreateWithoutEquipmentsInput, EquipmentTypeUncheckedCreateWithoutEquipmentsInput>
    where?: EquipmentTypeWhereInput
  }

  export type EquipmentTypeUpdateToOneWithWhereWithoutEquipmentsInput = {
    where?: EquipmentTypeWhereInput
    data: XOR<EquipmentTypeUpdateWithoutEquipmentsInput, EquipmentTypeUncheckedUpdateWithoutEquipmentsInput>
  }

  export type EquipmentTypeUpdateWithoutEquipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentTypeUncheckedUpdateWithoutEquipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UnitUpsertWithoutEquipmentsInput = {
    update: XOR<UnitUpdateWithoutEquipmentsInput, UnitUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<UnitCreateWithoutEquipmentsInput, UnitUncheckedCreateWithoutEquipmentsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutEquipmentsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutEquipmentsInput, UnitUncheckedUpdateWithoutEquipmentsInput>
  }

  export type UnitUpdateWithoutEquipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UnitUncheckedUpdateWithoutEquipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateManyCategoryInput = {
    id?: number
    name: string
    typeId: number
    unitId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId?: number | null
    attachFileId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachFile?: FileDataUpdateOneWithoutAttEquipmentsNestedInput
    referenceDocs?: FileDataUpdateOneWithoutRefEquipmentsNestedInput
    type?: EquipmentTypeUpdateOneRequiredWithoutEquipmentsNestedInput
    unit?: UnitUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    referenceDocsId?: NullableIntFieldUpdateOperationsInput | number | null
    attachFileId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    referenceDocsId?: NullableIntFieldUpdateOperationsInput | number | null
    attachFileId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateManyTypeInput = {
    id?: number
    name: string
    categoryId: number
    unitId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId?: number | null
    attachFileId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachFile?: FileDataUpdateOneWithoutAttEquipmentsNestedInput
    category?: CategoryUpdateOneRequiredWithoutEquipmentsNestedInput
    referenceDocs?: FileDataUpdateOneWithoutRefEquipmentsNestedInput
    unit?: UnitUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    referenceDocsId?: NullableIntFieldUpdateOperationsInput | number | null
    attachFileId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    referenceDocsId?: NullableIntFieldUpdateOperationsInput | number | null
    attachFileId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateManyUnitInput = {
    id?: number
    name: string
    typeId: number
    categoryId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId?: number | null
    attachFileId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateWithoutUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachFile?: FileDataUpdateOneWithoutAttEquipmentsNestedInput
    category?: CategoryUpdateOneRequiredWithoutEquipmentsNestedInput
    referenceDocs?: FileDataUpdateOneWithoutRefEquipmentsNestedInput
    type?: EquipmentTypeUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    referenceDocsId?: NullableIntFieldUpdateOperationsInput | number | null
    attachFileId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyWithoutUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    referenceDocsId?: NullableIntFieldUpdateOperationsInput | number | null
    attachFileId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateManyAttachFileInput = {
    id?: number
    name: string
    typeId: number
    categoryId: number
    unitId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    referenceDocsId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateManyReferenceDocsInput = {
    id?: number
    name: string
    typeId: number
    categoryId: number
    unitId: number
    brand?: string | null
    model?: string | null
    description?: string | null
    reasonForUse: string
    unitPrice: string
    attachFileId?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateWithoutAttachFileInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutEquipmentsNestedInput
    referenceDocs?: FileDataUpdateOneWithoutRefEquipmentsNestedInput
    type?: EquipmentTypeUpdateOneRequiredWithoutEquipmentsNestedInput
    unit?: UnitUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutAttachFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    referenceDocsId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyWithoutAttachFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    referenceDocsId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUpdateWithoutReferenceDocsInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachFile?: FileDataUpdateOneWithoutAttEquipmentsNestedInput
    category?: CategoryUpdateOneRequiredWithoutEquipmentsNestedInput
    type?: EquipmentTypeUpdateOneRequiredWithoutEquipmentsNestedInput
    unit?: UnitUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutReferenceDocsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    attachFileId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyWithoutReferenceDocsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    unitId?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reasonForUse?: StringFieldUpdateOperationsInput | string
    unitPrice?: StringFieldUpdateOperationsInput | string
    attachFileId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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