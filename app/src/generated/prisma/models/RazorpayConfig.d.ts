import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model RazorpayConfig
 *
 */
export type RazorpayConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$RazorpayConfigPayload>;
export type AggregateRazorpayConfig = {
    _count: RazorpayConfigCountAggregateOutputType | null;
    _min: RazorpayConfigMinAggregateOutputType | null;
    _max: RazorpayConfigMaxAggregateOutputType | null;
};
export type RazorpayConfigMinAggregateOutputType = {
    id: string | null;
    mode: string | null;
    testKeyId: string | null;
    testKeySecret: string | null;
    prodKeyId: string | null;
    prodKeySecret: string | null;
    gstin: string | null;
    companyName: string | null;
    companyAddress: string | null;
    companyCity: string | null;
    companyZip: string | null;
    companyCountry: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
};
export type RazorpayConfigMaxAggregateOutputType = {
    id: string | null;
    mode: string | null;
    testKeyId: string | null;
    testKeySecret: string | null;
    prodKeyId: string | null;
    prodKeySecret: string | null;
    gstin: string | null;
    companyName: string | null;
    companyAddress: string | null;
    companyCity: string | null;
    companyZip: string | null;
    companyCountry: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
};
export type RazorpayConfigCountAggregateOutputType = {
    id: number;
    mode: number;
    testKeyId: number;
    testKeySecret: number;
    prodKeyId: number;
    prodKeySecret: number;
    gstin: number;
    companyName: number;
    companyAddress: number;
    companyCity: number;
    companyZip: number;
    companyCountry: number;
    updatedAt: number;
    createdAt: number;
    _all: number;
};
export type RazorpayConfigMinAggregateInputType = {
    id?: true;
    mode?: true;
    testKeyId?: true;
    testKeySecret?: true;
    prodKeyId?: true;
    prodKeySecret?: true;
    gstin?: true;
    companyName?: true;
    companyAddress?: true;
    companyCity?: true;
    companyZip?: true;
    companyCountry?: true;
    updatedAt?: true;
    createdAt?: true;
};
export type RazorpayConfigMaxAggregateInputType = {
    id?: true;
    mode?: true;
    testKeyId?: true;
    testKeySecret?: true;
    prodKeyId?: true;
    prodKeySecret?: true;
    gstin?: true;
    companyName?: true;
    companyAddress?: true;
    companyCity?: true;
    companyZip?: true;
    companyCountry?: true;
    updatedAt?: true;
    createdAt?: true;
};
export type RazorpayConfigCountAggregateInputType = {
    id?: true;
    mode?: true;
    testKeyId?: true;
    testKeySecret?: true;
    prodKeyId?: true;
    prodKeySecret?: true;
    gstin?: true;
    companyName?: true;
    companyAddress?: true;
    companyCity?: true;
    companyZip?: true;
    companyCountry?: true;
    updatedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type RazorpayConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RazorpayConfig to aggregate.
     */
    where?: Prisma.RazorpayConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RazorpayConfigs to fetch.
     */
    orderBy?: Prisma.RazorpayConfigOrderByWithRelationInput | Prisma.RazorpayConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RazorpayConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RazorpayConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RazorpayConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RazorpayConfigs
    **/
    _count?: true | RazorpayConfigCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RazorpayConfigMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RazorpayConfigMaxAggregateInputType;
};
export type GetRazorpayConfigAggregateType<T extends RazorpayConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateRazorpayConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRazorpayConfig[P]> : Prisma.GetScalarType<T[P], AggregateRazorpayConfig[P]>;
};
export type RazorpayConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RazorpayConfigWhereInput;
    orderBy?: Prisma.RazorpayConfigOrderByWithAggregationInput | Prisma.RazorpayConfigOrderByWithAggregationInput[];
    by: Prisma.RazorpayConfigScalarFieldEnum[] | Prisma.RazorpayConfigScalarFieldEnum;
    having?: Prisma.RazorpayConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RazorpayConfigCountAggregateInputType | true;
    _min?: RazorpayConfigMinAggregateInputType;
    _max?: RazorpayConfigMaxAggregateInputType;
};
export type RazorpayConfigGroupByOutputType = {
    id: string;
    mode: string;
    testKeyId: string | null;
    testKeySecret: string | null;
    prodKeyId: string | null;
    prodKeySecret: string | null;
    gstin: string | null;
    companyName: string | null;
    companyAddress: string | null;
    companyCity: string | null;
    companyZip: string | null;
    companyCountry: string | null;
    updatedAt: Date;
    createdAt: Date;
    _count: RazorpayConfigCountAggregateOutputType | null;
    _min: RazorpayConfigMinAggregateOutputType | null;
    _max: RazorpayConfigMaxAggregateOutputType | null;
};
export type GetRazorpayConfigGroupByPayload<T extends RazorpayConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RazorpayConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RazorpayConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RazorpayConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RazorpayConfigGroupByOutputType[P]>;
}>>;
export type RazorpayConfigWhereInput = {
    AND?: Prisma.RazorpayConfigWhereInput | Prisma.RazorpayConfigWhereInput[];
    OR?: Prisma.RazorpayConfigWhereInput[];
    NOT?: Prisma.RazorpayConfigWhereInput | Prisma.RazorpayConfigWhereInput[];
    id?: Prisma.StringFilter<"RazorpayConfig"> | string;
    mode?: Prisma.StringFilter<"RazorpayConfig"> | string;
    testKeyId?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    testKeySecret?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    prodKeyId?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    prodKeySecret?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    gstin?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    companyName?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    companyAddress?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    companyCity?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    companyZip?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    companyCountry?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"RazorpayConfig"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RazorpayConfig"> | Date | string;
};
export type RazorpayConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    testKeyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    testKeySecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    prodKeyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    prodKeySecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    gstin?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyName?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyCity?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyZip?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyCountry?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RazorpayConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RazorpayConfigWhereInput | Prisma.RazorpayConfigWhereInput[];
    OR?: Prisma.RazorpayConfigWhereInput[];
    NOT?: Prisma.RazorpayConfigWhereInput | Prisma.RazorpayConfigWhereInput[];
    mode?: Prisma.StringFilter<"RazorpayConfig"> | string;
    testKeyId?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    testKeySecret?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    prodKeyId?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    prodKeySecret?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    gstin?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    companyName?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    companyAddress?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    companyCity?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    companyZip?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    companyCountry?: Prisma.StringNullableFilter<"RazorpayConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"RazorpayConfig"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RazorpayConfig"> | Date | string;
}, "id">;
export type RazorpayConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    testKeyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    testKeySecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    prodKeyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    prodKeySecret?: Prisma.SortOrderInput | Prisma.SortOrder;
    gstin?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyName?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyCity?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyZip?: Prisma.SortOrderInput | Prisma.SortOrder;
    companyCountry?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RazorpayConfigCountOrderByAggregateInput;
    _max?: Prisma.RazorpayConfigMaxOrderByAggregateInput;
    _min?: Prisma.RazorpayConfigMinOrderByAggregateInput;
};
export type RazorpayConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.RazorpayConfigScalarWhereWithAggregatesInput | Prisma.RazorpayConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.RazorpayConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RazorpayConfigScalarWhereWithAggregatesInput | Prisma.RazorpayConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RazorpayConfig"> | string;
    mode?: Prisma.StringWithAggregatesFilter<"RazorpayConfig"> | string;
    testKeyId?: Prisma.StringNullableWithAggregatesFilter<"RazorpayConfig"> | string | null;
    testKeySecret?: Prisma.StringNullableWithAggregatesFilter<"RazorpayConfig"> | string | null;
    prodKeyId?: Prisma.StringNullableWithAggregatesFilter<"RazorpayConfig"> | string | null;
    prodKeySecret?: Prisma.StringNullableWithAggregatesFilter<"RazorpayConfig"> | string | null;
    gstin?: Prisma.StringNullableWithAggregatesFilter<"RazorpayConfig"> | string | null;
    companyName?: Prisma.StringNullableWithAggregatesFilter<"RazorpayConfig"> | string | null;
    companyAddress?: Prisma.StringNullableWithAggregatesFilter<"RazorpayConfig"> | string | null;
    companyCity?: Prisma.StringNullableWithAggregatesFilter<"RazorpayConfig"> | string | null;
    companyZip?: Prisma.StringNullableWithAggregatesFilter<"RazorpayConfig"> | string | null;
    companyCountry?: Prisma.StringNullableWithAggregatesFilter<"RazorpayConfig"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RazorpayConfig"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RazorpayConfig"> | Date | string;
};
export type RazorpayConfigCreateInput = {
    id?: string;
    mode?: string;
    testKeyId?: string | null;
    testKeySecret?: string | null;
    prodKeyId?: string | null;
    prodKeySecret?: string | null;
    gstin?: string | null;
    companyName?: string | null;
    companyAddress?: string | null;
    companyCity?: string | null;
    companyZip?: string | null;
    companyCountry?: string | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type RazorpayConfigUncheckedCreateInput = {
    id?: string;
    mode?: string;
    testKeyId?: string | null;
    testKeySecret?: string | null;
    prodKeyId?: string | null;
    prodKeySecret?: string | null;
    gstin?: string | null;
    companyName?: string | null;
    companyAddress?: string | null;
    companyCity?: string | null;
    companyZip?: string | null;
    companyCountry?: string | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type RazorpayConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.StringFieldUpdateOperationsInput | string;
    testKeyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    testKeySecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodKeyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodKeySecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gstin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyCity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyZip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyCountry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RazorpayConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.StringFieldUpdateOperationsInput | string;
    testKeyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    testKeySecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodKeyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodKeySecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gstin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyCity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyZip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyCountry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RazorpayConfigCreateManyInput = {
    id?: string;
    mode?: string;
    testKeyId?: string | null;
    testKeySecret?: string | null;
    prodKeyId?: string | null;
    prodKeySecret?: string | null;
    gstin?: string | null;
    companyName?: string | null;
    companyAddress?: string | null;
    companyCity?: string | null;
    companyZip?: string | null;
    companyCountry?: string | null;
    updatedAt?: Date | string;
    createdAt?: Date | string;
};
export type RazorpayConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.StringFieldUpdateOperationsInput | string;
    testKeyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    testKeySecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodKeyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodKeySecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gstin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyCity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyZip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyCountry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RazorpayConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mode?: Prisma.StringFieldUpdateOperationsInput | string;
    testKeyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    testKeySecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodKeyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodKeySecret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gstin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyCity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyZip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    companyCountry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RazorpayConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    testKeyId?: Prisma.SortOrder;
    testKeySecret?: Prisma.SortOrder;
    prodKeyId?: Prisma.SortOrder;
    prodKeySecret?: Prisma.SortOrder;
    gstin?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyAddress?: Prisma.SortOrder;
    companyCity?: Prisma.SortOrder;
    companyZip?: Prisma.SortOrder;
    companyCountry?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RazorpayConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    testKeyId?: Prisma.SortOrder;
    testKeySecret?: Prisma.SortOrder;
    prodKeyId?: Prisma.SortOrder;
    prodKeySecret?: Prisma.SortOrder;
    gstin?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyAddress?: Prisma.SortOrder;
    companyCity?: Prisma.SortOrder;
    companyZip?: Prisma.SortOrder;
    companyCountry?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RazorpayConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    testKeyId?: Prisma.SortOrder;
    testKeySecret?: Prisma.SortOrder;
    prodKeyId?: Prisma.SortOrder;
    prodKeySecret?: Prisma.SortOrder;
    gstin?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyAddress?: Prisma.SortOrder;
    companyCity?: Prisma.SortOrder;
    companyZip?: Prisma.SortOrder;
    companyCountry?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RazorpayConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mode?: boolean;
    testKeyId?: boolean;
    testKeySecret?: boolean;
    prodKeyId?: boolean;
    prodKeySecret?: boolean;
    gstin?: boolean;
    companyName?: boolean;
    companyAddress?: boolean;
    companyCity?: boolean;
    companyZip?: boolean;
    companyCountry?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["razorpayConfig"]>;
export type RazorpayConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mode?: boolean;
    testKeyId?: boolean;
    testKeySecret?: boolean;
    prodKeyId?: boolean;
    prodKeySecret?: boolean;
    gstin?: boolean;
    companyName?: boolean;
    companyAddress?: boolean;
    companyCity?: boolean;
    companyZip?: boolean;
    companyCountry?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["razorpayConfig"]>;
export type RazorpayConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mode?: boolean;
    testKeyId?: boolean;
    testKeySecret?: boolean;
    prodKeyId?: boolean;
    prodKeySecret?: boolean;
    gstin?: boolean;
    companyName?: boolean;
    companyAddress?: boolean;
    companyCity?: boolean;
    companyZip?: boolean;
    companyCountry?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["razorpayConfig"]>;
export type RazorpayConfigSelectScalar = {
    id?: boolean;
    mode?: boolean;
    testKeyId?: boolean;
    testKeySecret?: boolean;
    prodKeyId?: boolean;
    prodKeySecret?: boolean;
    gstin?: boolean;
    companyName?: boolean;
    companyAddress?: boolean;
    companyCity?: boolean;
    companyZip?: boolean;
    companyCountry?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
};
export type RazorpayConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "mode" | "testKeyId" | "testKeySecret" | "prodKeyId" | "prodKeySecret" | "gstin" | "companyName" | "companyAddress" | "companyCity" | "companyZip" | "companyCountry" | "updatedAt" | "createdAt", ExtArgs["result"]["razorpayConfig"]>;
export type $RazorpayConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RazorpayConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        mode: string;
        testKeyId: string | null;
        testKeySecret: string | null;
        prodKeyId: string | null;
        prodKeySecret: string | null;
        gstin: string | null;
        companyName: string | null;
        companyAddress: string | null;
        companyCity: string | null;
        companyZip: string | null;
        companyCountry: string | null;
        updatedAt: Date;
        createdAt: Date;
    }, ExtArgs["result"]["razorpayConfig"]>;
    composites: {};
};
export type RazorpayConfigGetPayload<S extends boolean | null | undefined | RazorpayConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload, S>;
export type RazorpayConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RazorpayConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RazorpayConfigCountAggregateInputType | true;
};
export interface RazorpayConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RazorpayConfig'];
        meta: {
            name: 'RazorpayConfig';
        };
    };
    /**
     * Find zero or one RazorpayConfig that matches the filter.
     * @param {RazorpayConfigFindUniqueArgs} args - Arguments to find a RazorpayConfig
     * @example
     * // Get one RazorpayConfig
     * const razorpayConfig = await prisma.razorpayConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RazorpayConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, RazorpayConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RazorpayConfigClient<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RazorpayConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RazorpayConfigFindUniqueOrThrowArgs} args - Arguments to find a RazorpayConfig
     * @example
     * // Get one RazorpayConfig
     * const razorpayConfig = await prisma.razorpayConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RazorpayConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RazorpayConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RazorpayConfigClient<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RazorpayConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayConfigFindFirstArgs} args - Arguments to find a RazorpayConfig
     * @example
     * // Get one RazorpayConfig
     * const razorpayConfig = await prisma.razorpayConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RazorpayConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, RazorpayConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__RazorpayConfigClient<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RazorpayConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayConfigFindFirstOrThrowArgs} args - Arguments to find a RazorpayConfig
     * @example
     * // Get one RazorpayConfig
     * const razorpayConfig = await prisma.razorpayConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RazorpayConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RazorpayConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RazorpayConfigClient<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RazorpayConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RazorpayConfigs
     * const razorpayConfigs = await prisma.razorpayConfig.findMany()
     *
     * // Get first 10 RazorpayConfigs
     * const razorpayConfigs = await prisma.razorpayConfig.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const razorpayConfigWithIdOnly = await prisma.razorpayConfig.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RazorpayConfigFindManyArgs>(args?: Prisma.SelectSubset<T, RazorpayConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RazorpayConfig.
     * @param {RazorpayConfigCreateArgs} args - Arguments to create a RazorpayConfig.
     * @example
     * // Create one RazorpayConfig
     * const RazorpayConfig = await prisma.razorpayConfig.create({
     *   data: {
     *     // ... data to create a RazorpayConfig
     *   }
     * })
     *
     */
    create<T extends RazorpayConfigCreateArgs>(args: Prisma.SelectSubset<T, RazorpayConfigCreateArgs<ExtArgs>>): Prisma.Prisma__RazorpayConfigClient<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RazorpayConfigs.
     * @param {RazorpayConfigCreateManyArgs} args - Arguments to create many RazorpayConfigs.
     * @example
     * // Create many RazorpayConfigs
     * const razorpayConfig = await prisma.razorpayConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RazorpayConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, RazorpayConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RazorpayConfigs and returns the data saved in the database.
     * @param {RazorpayConfigCreateManyAndReturnArgs} args - Arguments to create many RazorpayConfigs.
     * @example
     * // Create many RazorpayConfigs
     * const razorpayConfig = await prisma.razorpayConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RazorpayConfigs and only return the `id`
     * const razorpayConfigWithIdOnly = await prisma.razorpayConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RazorpayConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RazorpayConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RazorpayConfig.
     * @param {RazorpayConfigDeleteArgs} args - Arguments to delete one RazorpayConfig.
     * @example
     * // Delete one RazorpayConfig
     * const RazorpayConfig = await prisma.razorpayConfig.delete({
     *   where: {
     *     // ... filter to delete one RazorpayConfig
     *   }
     * })
     *
     */
    delete<T extends RazorpayConfigDeleteArgs>(args: Prisma.SelectSubset<T, RazorpayConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__RazorpayConfigClient<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RazorpayConfig.
     * @param {RazorpayConfigUpdateArgs} args - Arguments to update one RazorpayConfig.
     * @example
     * // Update one RazorpayConfig
     * const razorpayConfig = await prisma.razorpayConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RazorpayConfigUpdateArgs>(args: Prisma.SelectSubset<T, RazorpayConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__RazorpayConfigClient<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RazorpayConfigs.
     * @param {RazorpayConfigDeleteManyArgs} args - Arguments to filter RazorpayConfigs to delete.
     * @example
     * // Delete a few RazorpayConfigs
     * const { count } = await prisma.razorpayConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RazorpayConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, RazorpayConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RazorpayConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RazorpayConfigs
     * const razorpayConfig = await prisma.razorpayConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RazorpayConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, RazorpayConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RazorpayConfigs and returns the data updated in the database.
     * @param {RazorpayConfigUpdateManyAndReturnArgs} args - Arguments to update many RazorpayConfigs.
     * @example
     * // Update many RazorpayConfigs
     * const razorpayConfig = await prisma.razorpayConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RazorpayConfigs and only return the `id`
     * const razorpayConfigWithIdOnly = await prisma.razorpayConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends RazorpayConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RazorpayConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RazorpayConfig.
     * @param {RazorpayConfigUpsertArgs} args - Arguments to update or create a RazorpayConfig.
     * @example
     * // Update or create a RazorpayConfig
     * const razorpayConfig = await prisma.razorpayConfig.upsert({
     *   create: {
     *     // ... data to create a RazorpayConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RazorpayConfig we want to update
     *   }
     * })
     */
    upsert<T extends RazorpayConfigUpsertArgs>(args: Prisma.SelectSubset<T, RazorpayConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__RazorpayConfigClient<runtime.Types.Result.GetResult<Prisma.$RazorpayConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RazorpayConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayConfigCountArgs} args - Arguments to filter RazorpayConfigs to count.
     * @example
     * // Count the number of RazorpayConfigs
     * const count = await prisma.razorpayConfig.count({
     *   where: {
     *     // ... the filter for the RazorpayConfigs we want to count
     *   }
     * })
    **/
    count<T extends RazorpayConfigCountArgs>(args?: Prisma.Subset<T, RazorpayConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RazorpayConfigCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RazorpayConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RazorpayConfigAggregateArgs>(args: Prisma.Subset<T, RazorpayConfigAggregateArgs>): Prisma.PrismaPromise<GetRazorpayConfigAggregateType<T>>;
    /**
     * Group by RazorpayConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayConfigGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RazorpayConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RazorpayConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: RazorpayConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RazorpayConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRazorpayConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RazorpayConfig model
     */
    readonly fields: RazorpayConfigFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RazorpayConfig.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RazorpayConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the RazorpayConfig model
 */
export interface RazorpayConfigFieldRefs {
    readonly id: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly mode: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly testKeyId: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly testKeySecret: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly prodKeyId: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly prodKeySecret: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly gstin: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly companyName: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly companyAddress: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly companyCity: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly companyZip: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly companyCountry: Prisma.FieldRef<"RazorpayConfig", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"RazorpayConfig", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RazorpayConfig", 'DateTime'>;
}
/**
 * RazorpayConfig findUnique
 */
export type RazorpayConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * Filter, which RazorpayConfig to fetch.
     */
    where: Prisma.RazorpayConfigWhereUniqueInput;
};
/**
 * RazorpayConfig findUniqueOrThrow
 */
export type RazorpayConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * Filter, which RazorpayConfig to fetch.
     */
    where: Prisma.RazorpayConfigWhereUniqueInput;
};
/**
 * RazorpayConfig findFirst
 */
export type RazorpayConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * Filter, which RazorpayConfig to fetch.
     */
    where?: Prisma.RazorpayConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RazorpayConfigs to fetch.
     */
    orderBy?: Prisma.RazorpayConfigOrderByWithRelationInput | Prisma.RazorpayConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RazorpayConfigs.
     */
    cursor?: Prisma.RazorpayConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RazorpayConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RazorpayConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RazorpayConfigs.
     */
    distinct?: Prisma.RazorpayConfigScalarFieldEnum | Prisma.RazorpayConfigScalarFieldEnum[];
};
/**
 * RazorpayConfig findFirstOrThrow
 */
export type RazorpayConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * Filter, which RazorpayConfig to fetch.
     */
    where?: Prisma.RazorpayConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RazorpayConfigs to fetch.
     */
    orderBy?: Prisma.RazorpayConfigOrderByWithRelationInput | Prisma.RazorpayConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RazorpayConfigs.
     */
    cursor?: Prisma.RazorpayConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RazorpayConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RazorpayConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RazorpayConfigs.
     */
    distinct?: Prisma.RazorpayConfigScalarFieldEnum | Prisma.RazorpayConfigScalarFieldEnum[];
};
/**
 * RazorpayConfig findMany
 */
export type RazorpayConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * Filter, which RazorpayConfigs to fetch.
     */
    where?: Prisma.RazorpayConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RazorpayConfigs to fetch.
     */
    orderBy?: Prisma.RazorpayConfigOrderByWithRelationInput | Prisma.RazorpayConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RazorpayConfigs.
     */
    cursor?: Prisma.RazorpayConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RazorpayConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RazorpayConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RazorpayConfigs.
     */
    distinct?: Prisma.RazorpayConfigScalarFieldEnum | Prisma.RazorpayConfigScalarFieldEnum[];
};
/**
 * RazorpayConfig create
 */
export type RazorpayConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * The data needed to create a RazorpayConfig.
     */
    data: Prisma.XOR<Prisma.RazorpayConfigCreateInput, Prisma.RazorpayConfigUncheckedCreateInput>;
};
/**
 * RazorpayConfig createMany
 */
export type RazorpayConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RazorpayConfigs.
     */
    data: Prisma.RazorpayConfigCreateManyInput | Prisma.RazorpayConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RazorpayConfig createManyAndReturn
 */
export type RazorpayConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * The data used to create many RazorpayConfigs.
     */
    data: Prisma.RazorpayConfigCreateManyInput | Prisma.RazorpayConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RazorpayConfig update
 */
export type RazorpayConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * The data needed to update a RazorpayConfig.
     */
    data: Prisma.XOR<Prisma.RazorpayConfigUpdateInput, Prisma.RazorpayConfigUncheckedUpdateInput>;
    /**
     * Choose, which RazorpayConfig to update.
     */
    where: Prisma.RazorpayConfigWhereUniqueInput;
};
/**
 * RazorpayConfig updateMany
 */
export type RazorpayConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RazorpayConfigs.
     */
    data: Prisma.XOR<Prisma.RazorpayConfigUpdateManyMutationInput, Prisma.RazorpayConfigUncheckedUpdateManyInput>;
    /**
     * Filter which RazorpayConfigs to update
     */
    where?: Prisma.RazorpayConfigWhereInput;
    /**
     * Limit how many RazorpayConfigs to update.
     */
    limit?: number;
};
/**
 * RazorpayConfig updateManyAndReturn
 */
export type RazorpayConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * The data used to update RazorpayConfigs.
     */
    data: Prisma.XOR<Prisma.RazorpayConfigUpdateManyMutationInput, Prisma.RazorpayConfigUncheckedUpdateManyInput>;
    /**
     * Filter which RazorpayConfigs to update
     */
    where?: Prisma.RazorpayConfigWhereInput;
    /**
     * Limit how many RazorpayConfigs to update.
     */
    limit?: number;
};
/**
 * RazorpayConfig upsert
 */
export type RazorpayConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * The filter to search for the RazorpayConfig to update in case it exists.
     */
    where: Prisma.RazorpayConfigWhereUniqueInput;
    /**
     * In case the RazorpayConfig found by the `where` argument doesn't exist, create a new RazorpayConfig with this data.
     */
    create: Prisma.XOR<Prisma.RazorpayConfigCreateInput, Prisma.RazorpayConfigUncheckedCreateInput>;
    /**
     * In case the RazorpayConfig was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RazorpayConfigUpdateInput, Prisma.RazorpayConfigUncheckedUpdateInput>;
};
/**
 * RazorpayConfig delete
 */
export type RazorpayConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
    /**
     * Filter which RazorpayConfig to delete.
     */
    where: Prisma.RazorpayConfigWhereUniqueInput;
};
/**
 * RazorpayConfig deleteMany
 */
export type RazorpayConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RazorpayConfigs to delete
     */
    where?: Prisma.RazorpayConfigWhereInput;
    /**
     * Limit how many RazorpayConfigs to delete.
     */
    limit?: number;
};
/**
 * RazorpayConfig without action
 */
export type RazorpayConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayConfig
     */
    select?: Prisma.RazorpayConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RazorpayConfig
     */
    omit?: Prisma.RazorpayConfigOmit<ExtArgs> | null;
};
//# sourceMappingURL=RazorpayConfig.d.ts.map