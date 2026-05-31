import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model ProductCategoryConfig
 *
 */
export type ProductCategoryConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductCategoryConfigPayload>;
export type AggregateProductCategoryConfig = {
    _count: ProductCategoryConfigCountAggregateOutputType | null;
    _min: ProductCategoryConfigMinAggregateOutputType | null;
    _max: ProductCategoryConfigMaxAggregateOutputType | null;
};
export type ProductCategoryConfigMinAggregateOutputType = {
    id: string | null;
    category: $Enums.ProductCategory | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCategoryConfigMaxAggregateOutputType = {
    id: string | null;
    category: $Enums.ProductCategory | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCategoryConfigCountAggregateOutputType = {
    id: number;
    category: number;
    billingPeriods: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductCategoryConfigMinAggregateInputType = {
    id?: true;
    category?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductCategoryConfigMaxAggregateInputType = {
    id?: true;
    category?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductCategoryConfigCountAggregateInputType = {
    id?: true;
    category?: true;
    billingPeriods?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductCategoryConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategoryConfig to aggregate.
     */
    where?: Prisma.ProductCategoryConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCategoryConfigs to fetch.
     */
    orderBy?: Prisma.ProductCategoryConfigOrderByWithRelationInput | Prisma.ProductCategoryConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductCategoryConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCategoryConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCategoryConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProductCategoryConfigs
    **/
    _count?: true | ProductCategoryConfigCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryConfigMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryConfigMaxAggregateInputType;
};
export type GetProductCategoryConfigAggregateType<T extends ProductCategoryConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateProductCategoryConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductCategoryConfig[P]> : Prisma.GetScalarType<T[P], AggregateProductCategoryConfig[P]>;
};
export type ProductCategoryConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductCategoryConfigWhereInput;
    orderBy?: Prisma.ProductCategoryConfigOrderByWithAggregationInput | Prisma.ProductCategoryConfigOrderByWithAggregationInput[];
    by: Prisma.ProductCategoryConfigScalarFieldEnum[] | Prisma.ProductCategoryConfigScalarFieldEnum;
    having?: Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCategoryConfigCountAggregateInputType | true;
    _min?: ProductCategoryConfigMinAggregateInputType;
    _max?: ProductCategoryConfigMaxAggregateInputType;
};
export type ProductCategoryConfigGroupByOutputType = {
    id: string;
    category: $Enums.ProductCategory;
    billingPeriods: $Enums.BillingPeriod[];
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCategoryConfigCountAggregateOutputType | null;
    _min: ProductCategoryConfigMinAggregateOutputType | null;
    _max: ProductCategoryConfigMaxAggregateOutputType | null;
};
export type GetProductCategoryConfigGroupByPayload<T extends ProductCategoryConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductCategoryConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductCategoryConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductCategoryConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductCategoryConfigGroupByOutputType[P]>;
}>>;
export type ProductCategoryConfigWhereInput = {
    AND?: Prisma.ProductCategoryConfigWhereInput | Prisma.ProductCategoryConfigWhereInput[];
    OR?: Prisma.ProductCategoryConfigWhereInput[];
    NOT?: Prisma.ProductCategoryConfigWhereInput | Prisma.ProductCategoryConfigWhereInput[];
    id?: Prisma.StringFilter<"ProductCategoryConfig"> | string;
    category?: Prisma.EnumProductCategoryFilter<"ProductCategoryConfig"> | $Enums.ProductCategory;
    billingPeriods?: Prisma.EnumBillingPeriodNullableListFilter<"ProductCategoryConfig">;
    createdAt?: Prisma.DateTimeFilter<"ProductCategoryConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductCategoryConfig"> | Date | string;
};
export type ProductCategoryConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    billingPeriods?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductCategoryConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    category?: $Enums.ProductCategory;
    AND?: Prisma.ProductCategoryConfigWhereInput | Prisma.ProductCategoryConfigWhereInput[];
    OR?: Prisma.ProductCategoryConfigWhereInput[];
    NOT?: Prisma.ProductCategoryConfigWhereInput | Prisma.ProductCategoryConfigWhereInput[];
    billingPeriods?: Prisma.EnumBillingPeriodNullableListFilter<"ProductCategoryConfig">;
    createdAt?: Prisma.DateTimeFilter<"ProductCategoryConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductCategoryConfig"> | Date | string;
}, "id" | "category">;
export type ProductCategoryConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    billingPeriods?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductCategoryConfigCountOrderByAggregateInput;
    _max?: Prisma.ProductCategoryConfigMaxOrderByAggregateInput;
    _min?: Prisma.ProductCategoryConfigMinOrderByAggregateInput;
};
export type ProductCategoryConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput | Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput | Prisma.ProductCategoryConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductCategoryConfig"> | string;
    category?: Prisma.EnumProductCategoryWithAggregatesFilter<"ProductCategoryConfig"> | $Enums.ProductCategory;
    billingPeriods?: Prisma.EnumBillingPeriodNullableListFilter<"ProductCategoryConfig">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProductCategoryConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProductCategoryConfig"> | Date | string;
};
export type ProductCategoryConfigCreateInput = {
    id?: string;
    category: $Enums.ProductCategory;
    billingPeriods?: Prisma.ProductCategoryConfigCreatebillingPeriodsInput | $Enums.BillingPeriod[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductCategoryConfigUncheckedCreateInput = {
    id?: string;
    category: $Enums.ProductCategory;
    billingPeriods?: Prisma.ProductCategoryConfigCreatebillingPeriodsInput | $Enums.BillingPeriod[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductCategoryConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory;
    billingPeriods?: Prisma.ProductCategoryConfigUpdatebillingPeriodsInput | $Enums.BillingPeriod[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCategoryConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory;
    billingPeriods?: Prisma.ProductCategoryConfigUpdatebillingPeriodsInput | $Enums.BillingPeriod[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCategoryConfigCreateManyInput = {
    id?: string;
    category: $Enums.ProductCategory;
    billingPeriods?: Prisma.ProductCategoryConfigCreatebillingPeriodsInput | $Enums.BillingPeriod[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductCategoryConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory;
    billingPeriods?: Prisma.ProductCategoryConfigUpdatebillingPeriodsInput | $Enums.BillingPeriod[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCategoryConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory;
    billingPeriods?: Prisma.ProductCategoryConfigUpdatebillingPeriodsInput | $Enums.BillingPeriod[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnumBillingPeriodNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingPeriod[] | Prisma.ListEnumBillingPeriodFieldRefInput<$PrismaModel> | null;
    has?: $Enums.BillingPeriod | Prisma.EnumBillingPeriodFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.BillingPeriod[] | Prisma.ListEnumBillingPeriodFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.BillingPeriod[] | Prisma.ListEnumBillingPeriodFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ProductCategoryConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    billingPeriods?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductCategoryConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductCategoryConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductCategoryConfigCreatebillingPeriodsInput = {
    set: $Enums.BillingPeriod[];
};
export type ProductCategoryConfigUpdatebillingPeriodsInput = {
    set?: $Enums.BillingPeriod[];
    push?: $Enums.BillingPeriod | $Enums.BillingPeriod[];
};
export type ProductCategoryConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category?: boolean;
    billingPeriods?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["productCategoryConfig"]>;
export type ProductCategoryConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category?: boolean;
    billingPeriods?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["productCategoryConfig"]>;
export type ProductCategoryConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    category?: boolean;
    billingPeriods?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["productCategoryConfig"]>;
export type ProductCategoryConfigSelectScalar = {
    id?: boolean;
    category?: boolean;
    billingPeriods?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductCategoryConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "category" | "billingPeriods" | "createdAt" | "updatedAt", ExtArgs["result"]["productCategoryConfig"]>;
export type $ProductCategoryConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductCategoryConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        category: $Enums.ProductCategory;
        billingPeriods: $Enums.BillingPeriod[];
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["productCategoryConfig"]>;
    composites: {};
};
export type ProductCategoryConfigGetPayload<S extends boolean | null | undefined | ProductCategoryConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload, S>;
export type ProductCategoryConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductCategoryConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCategoryConfigCountAggregateInputType | true;
};
export interface ProductCategoryConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductCategoryConfig'];
        meta: {
            name: 'ProductCategoryConfig';
        };
    };
    /**
     * Find zero or one ProductCategoryConfig that matches the filter.
     * @param {ProductCategoryConfigFindUniqueArgs} args - Arguments to find a ProductCategoryConfig
     * @example
     * // Get one ProductCategoryConfig
     * const productCategoryConfig = await prisma.productCategoryConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoryConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductCategoryConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductCategoryConfigClient<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProductCategoryConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoryConfigFindUniqueOrThrowArgs} args - Arguments to find a ProductCategoryConfig
     * @example
     * // Get one ProductCategoryConfig
     * const productCategoryConfig = await prisma.productCategoryConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoryConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductCategoryConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductCategoryConfigClient<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductCategoryConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryConfigFindFirstArgs} args - Arguments to find a ProductCategoryConfig
     * @example
     * // Get one ProductCategoryConfig
     * const productCategoryConfig = await prisma.productCategoryConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoryConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductCategoryConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductCategoryConfigClient<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductCategoryConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryConfigFindFirstOrThrowArgs} args - Arguments to find a ProductCategoryConfig
     * @example
     * // Get one ProductCategoryConfig
     * const productCategoryConfig = await prisma.productCategoryConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoryConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductCategoryConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductCategoryConfigClient<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProductCategoryConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategoryConfigs
     * const productCategoryConfigs = await prisma.productCategoryConfig.findMany()
     *
     * // Get first 10 ProductCategoryConfigs
     * const productCategoryConfigs = await prisma.productCategoryConfig.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productCategoryConfigWithIdOnly = await prisma.productCategoryConfig.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductCategoryConfigFindManyArgs>(args?: Prisma.SelectSubset<T, ProductCategoryConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProductCategoryConfig.
     * @param {ProductCategoryConfigCreateArgs} args - Arguments to create a ProductCategoryConfig.
     * @example
     * // Create one ProductCategoryConfig
     * const ProductCategoryConfig = await prisma.productCategoryConfig.create({
     *   data: {
     *     // ... data to create a ProductCategoryConfig
     *   }
     * })
     *
     */
    create<T extends ProductCategoryConfigCreateArgs>(args: Prisma.SelectSubset<T, ProductCategoryConfigCreateArgs<ExtArgs>>): Prisma.Prisma__ProductCategoryConfigClient<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProductCategoryConfigs.
     * @param {ProductCategoryConfigCreateManyArgs} args - Arguments to create many ProductCategoryConfigs.
     * @example
     * // Create many ProductCategoryConfigs
     * const productCategoryConfig = await prisma.productCategoryConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCategoryConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCategoryConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProductCategoryConfigs and returns the data saved in the database.
     * @param {ProductCategoryConfigCreateManyAndReturnArgs} args - Arguments to create many ProductCategoryConfigs.
     * @example
     * // Create many ProductCategoryConfigs
     * const productCategoryConfig = await prisma.productCategoryConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProductCategoryConfigs and only return the `id`
     * const productCategoryConfigWithIdOnly = await prisma.productCategoryConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductCategoryConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCategoryConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProductCategoryConfig.
     * @param {ProductCategoryConfigDeleteArgs} args - Arguments to delete one ProductCategoryConfig.
     * @example
     * // Delete one ProductCategoryConfig
     * const ProductCategoryConfig = await prisma.productCategoryConfig.delete({
     *   where: {
     *     // ... filter to delete one ProductCategoryConfig
     *   }
     * })
     *
     */
    delete<T extends ProductCategoryConfigDeleteArgs>(args: Prisma.SelectSubset<T, ProductCategoryConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductCategoryConfigClient<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProductCategoryConfig.
     * @param {ProductCategoryConfigUpdateArgs} args - Arguments to update one ProductCategoryConfig.
     * @example
     * // Update one ProductCategoryConfig
     * const productCategoryConfig = await prisma.productCategoryConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductCategoryConfigUpdateArgs>(args: Prisma.SelectSubset<T, ProductCategoryConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductCategoryConfigClient<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProductCategoryConfigs.
     * @param {ProductCategoryConfigDeleteManyArgs} args - Arguments to filter ProductCategoryConfigs to delete.
     * @example
     * // Delete a few ProductCategoryConfigs
     * const { count } = await prisma.productCategoryConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductCategoryConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductCategoryConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductCategoryConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategoryConfigs
     * const productCategoryConfig = await prisma.productCategoryConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductCategoryConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductCategoryConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductCategoryConfigs and returns the data updated in the database.
     * @param {ProductCategoryConfigUpdateManyAndReturnArgs} args - Arguments to update many ProductCategoryConfigs.
     * @example
     * // Update many ProductCategoryConfigs
     * const productCategoryConfig = await prisma.productCategoryConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProductCategoryConfigs and only return the `id`
     * const productCategoryConfigWithIdOnly = await prisma.productCategoryConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductCategoryConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductCategoryConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProductCategoryConfig.
     * @param {ProductCategoryConfigUpsertArgs} args - Arguments to update or create a ProductCategoryConfig.
     * @example
     * // Update or create a ProductCategoryConfig
     * const productCategoryConfig = await prisma.productCategoryConfig.upsert({
     *   create: {
     *     // ... data to create a ProductCategoryConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategoryConfig we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoryConfigUpsertArgs>(args: Prisma.SelectSubset<T, ProductCategoryConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductCategoryConfigClient<runtime.Types.Result.GetResult<Prisma.$ProductCategoryConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProductCategoryConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryConfigCountArgs} args - Arguments to filter ProductCategoryConfigs to count.
     * @example
     * // Count the number of ProductCategoryConfigs
     * const count = await prisma.productCategoryConfig.count({
     *   where: {
     *     // ... the filter for the ProductCategoryConfigs we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryConfigCountArgs>(args?: Prisma.Subset<T, ProductCategoryConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCategoryConfigCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProductCategoryConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCategoryConfigAggregateArgs>(args: Prisma.Subset<T, ProductCategoryConfigAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryConfigAggregateType<T>>;
    /**
     * Group by ProductCategoryConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryConfigGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProductCategoryConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductCategoryConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductCategoryConfigGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductCategoryConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProductCategoryConfig model
     */
    readonly fields: ProductCategoryConfigFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProductCategoryConfig.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductCategoryConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the ProductCategoryConfig model
 */
export interface ProductCategoryConfigFieldRefs {
    readonly id: Prisma.FieldRef<"ProductCategoryConfig", 'String'>;
    readonly category: Prisma.FieldRef<"ProductCategoryConfig", 'ProductCategory'>;
    readonly billingPeriods: Prisma.FieldRef<"ProductCategoryConfig", 'BillingPeriod[]'>;
    readonly createdAt: Prisma.FieldRef<"ProductCategoryConfig", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProductCategoryConfig", 'DateTime'>;
}
/**
 * ProductCategoryConfig findUnique
 */
export type ProductCategoryConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * Filter, which ProductCategoryConfig to fetch.
     */
    where: Prisma.ProductCategoryConfigWhereUniqueInput;
};
/**
 * ProductCategoryConfig findUniqueOrThrow
 */
export type ProductCategoryConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * Filter, which ProductCategoryConfig to fetch.
     */
    where: Prisma.ProductCategoryConfigWhereUniqueInput;
};
/**
 * ProductCategoryConfig findFirst
 */
export type ProductCategoryConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * Filter, which ProductCategoryConfig to fetch.
     */
    where?: Prisma.ProductCategoryConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCategoryConfigs to fetch.
     */
    orderBy?: Prisma.ProductCategoryConfigOrderByWithRelationInput | Prisma.ProductCategoryConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductCategoryConfigs.
     */
    cursor?: Prisma.ProductCategoryConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCategoryConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCategoryConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductCategoryConfigs.
     */
    distinct?: Prisma.ProductCategoryConfigScalarFieldEnum | Prisma.ProductCategoryConfigScalarFieldEnum[];
};
/**
 * ProductCategoryConfig findFirstOrThrow
 */
export type ProductCategoryConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * Filter, which ProductCategoryConfig to fetch.
     */
    where?: Prisma.ProductCategoryConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCategoryConfigs to fetch.
     */
    orderBy?: Prisma.ProductCategoryConfigOrderByWithRelationInput | Prisma.ProductCategoryConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductCategoryConfigs.
     */
    cursor?: Prisma.ProductCategoryConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCategoryConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCategoryConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductCategoryConfigs.
     */
    distinct?: Prisma.ProductCategoryConfigScalarFieldEnum | Prisma.ProductCategoryConfigScalarFieldEnum[];
};
/**
 * ProductCategoryConfig findMany
 */
export type ProductCategoryConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * Filter, which ProductCategoryConfigs to fetch.
     */
    where?: Prisma.ProductCategoryConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCategoryConfigs to fetch.
     */
    orderBy?: Prisma.ProductCategoryConfigOrderByWithRelationInput | Prisma.ProductCategoryConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProductCategoryConfigs.
     */
    cursor?: Prisma.ProductCategoryConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCategoryConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCategoryConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductCategoryConfigs.
     */
    distinct?: Prisma.ProductCategoryConfigScalarFieldEnum | Prisma.ProductCategoryConfigScalarFieldEnum[];
};
/**
 * ProductCategoryConfig create
 */
export type ProductCategoryConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * The data needed to create a ProductCategoryConfig.
     */
    data: Prisma.XOR<Prisma.ProductCategoryConfigCreateInput, Prisma.ProductCategoryConfigUncheckedCreateInput>;
};
/**
 * ProductCategoryConfig createMany
 */
export type ProductCategoryConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategoryConfigs.
     */
    data: Prisma.ProductCategoryConfigCreateManyInput | Prisma.ProductCategoryConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProductCategoryConfig createManyAndReturn
 */
export type ProductCategoryConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * The data used to create many ProductCategoryConfigs.
     */
    data: Prisma.ProductCategoryConfigCreateManyInput | Prisma.ProductCategoryConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProductCategoryConfig update
 */
export type ProductCategoryConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * The data needed to update a ProductCategoryConfig.
     */
    data: Prisma.XOR<Prisma.ProductCategoryConfigUpdateInput, Prisma.ProductCategoryConfigUncheckedUpdateInput>;
    /**
     * Choose, which ProductCategoryConfig to update.
     */
    where: Prisma.ProductCategoryConfigWhereUniqueInput;
};
/**
 * ProductCategoryConfig updateMany
 */
export type ProductCategoryConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategoryConfigs.
     */
    data: Prisma.XOR<Prisma.ProductCategoryConfigUpdateManyMutationInput, Prisma.ProductCategoryConfigUncheckedUpdateManyInput>;
    /**
     * Filter which ProductCategoryConfigs to update
     */
    where?: Prisma.ProductCategoryConfigWhereInput;
    /**
     * Limit how many ProductCategoryConfigs to update.
     */
    limit?: number;
};
/**
 * ProductCategoryConfig updateManyAndReturn
 */
export type ProductCategoryConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * The data used to update ProductCategoryConfigs.
     */
    data: Prisma.XOR<Prisma.ProductCategoryConfigUpdateManyMutationInput, Prisma.ProductCategoryConfigUncheckedUpdateManyInput>;
    /**
     * Filter which ProductCategoryConfigs to update
     */
    where?: Prisma.ProductCategoryConfigWhereInput;
    /**
     * Limit how many ProductCategoryConfigs to update.
     */
    limit?: number;
};
/**
 * ProductCategoryConfig upsert
 */
export type ProductCategoryConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * The filter to search for the ProductCategoryConfig to update in case it exists.
     */
    where: Prisma.ProductCategoryConfigWhereUniqueInput;
    /**
     * In case the ProductCategoryConfig found by the `where` argument doesn't exist, create a new ProductCategoryConfig with this data.
     */
    create: Prisma.XOR<Prisma.ProductCategoryConfigCreateInput, Prisma.ProductCategoryConfigUncheckedCreateInput>;
    /**
     * In case the ProductCategoryConfig was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductCategoryConfigUpdateInput, Prisma.ProductCategoryConfigUncheckedUpdateInput>;
};
/**
 * ProductCategoryConfig delete
 */
export type ProductCategoryConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
    /**
     * Filter which ProductCategoryConfig to delete.
     */
    where: Prisma.ProductCategoryConfigWhereUniqueInput;
};
/**
 * ProductCategoryConfig deleteMany
 */
export type ProductCategoryConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategoryConfigs to delete
     */
    where?: Prisma.ProductCategoryConfigWhereInput;
    /**
     * Limit how many ProductCategoryConfigs to delete.
     */
    limit?: number;
};
/**
 * ProductCategoryConfig without action
 */
export type ProductCategoryConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryConfig
     */
    select?: Prisma.ProductCategoryConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCategoryConfig
     */
    omit?: Prisma.ProductCategoryConfigOmit<ExtArgs> | null;
};
//# sourceMappingURL=ProductCategoryConfig.d.ts.map