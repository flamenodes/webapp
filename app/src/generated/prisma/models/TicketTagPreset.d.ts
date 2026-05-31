import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model TicketTagPreset
 *
 */
export type TicketTagPresetModel = runtime.Types.Result.DefaultSelection<Prisma.$TicketTagPresetPayload>;
export type AggregateTicketTagPreset = {
    _count: TicketTagPresetCountAggregateOutputType | null;
    _min: TicketTagPresetMinAggregateOutputType | null;
    _max: TicketTagPresetMaxAggregateOutputType | null;
};
export type TicketTagPresetMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type TicketTagPresetMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type TicketTagPresetCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    _all: number;
};
export type TicketTagPresetMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
};
export type TicketTagPresetMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
};
export type TicketTagPresetCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
};
export type TicketTagPresetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTagPreset to aggregate.
     */
    where?: Prisma.TicketTagPresetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TicketTagPresets to fetch.
     */
    orderBy?: Prisma.TicketTagPresetOrderByWithRelationInput | Prisma.TicketTagPresetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TicketTagPresetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TicketTagPresets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TicketTagPresets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TicketTagPresets
    **/
    _count?: true | TicketTagPresetCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TicketTagPresetMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TicketTagPresetMaxAggregateInputType;
};
export type GetTicketTagPresetAggregateType<T extends TicketTagPresetAggregateArgs> = {
    [P in keyof T & keyof AggregateTicketTagPreset]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTicketTagPreset[P]> : Prisma.GetScalarType<T[P], AggregateTicketTagPreset[P]>;
};
export type TicketTagPresetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketTagPresetWhereInput;
    orderBy?: Prisma.TicketTagPresetOrderByWithAggregationInput | Prisma.TicketTagPresetOrderByWithAggregationInput[];
    by: Prisma.TicketTagPresetScalarFieldEnum[] | Prisma.TicketTagPresetScalarFieldEnum;
    having?: Prisma.TicketTagPresetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TicketTagPresetCountAggregateInputType | true;
    _min?: TicketTagPresetMinAggregateInputType;
    _max?: TicketTagPresetMaxAggregateInputType;
};
export type TicketTagPresetGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    _count: TicketTagPresetCountAggregateOutputType | null;
    _min: TicketTagPresetMinAggregateOutputType | null;
    _max: TicketTagPresetMaxAggregateOutputType | null;
};
export type GetTicketTagPresetGroupByPayload<T extends TicketTagPresetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TicketTagPresetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TicketTagPresetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TicketTagPresetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TicketTagPresetGroupByOutputType[P]>;
}>>;
export type TicketTagPresetWhereInput = {
    AND?: Prisma.TicketTagPresetWhereInput | Prisma.TicketTagPresetWhereInput[];
    OR?: Prisma.TicketTagPresetWhereInput[];
    NOT?: Prisma.TicketTagPresetWhereInput | Prisma.TicketTagPresetWhereInput[];
    id?: Prisma.StringFilter<"TicketTagPreset"> | string;
    name?: Prisma.StringFilter<"TicketTagPreset"> | string;
    createdAt?: Prisma.DateTimeFilter<"TicketTagPreset"> | Date | string;
};
export type TicketTagPresetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TicketTagPresetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.TicketTagPresetWhereInput | Prisma.TicketTagPresetWhereInput[];
    OR?: Prisma.TicketTagPresetWhereInput[];
    NOT?: Prisma.TicketTagPresetWhereInput | Prisma.TicketTagPresetWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"TicketTagPreset"> | Date | string;
}, "id" | "name">;
export type TicketTagPresetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TicketTagPresetCountOrderByAggregateInput;
    _max?: Prisma.TicketTagPresetMaxOrderByAggregateInput;
    _min?: Prisma.TicketTagPresetMinOrderByAggregateInput;
};
export type TicketTagPresetScalarWhereWithAggregatesInput = {
    AND?: Prisma.TicketTagPresetScalarWhereWithAggregatesInput | Prisma.TicketTagPresetScalarWhereWithAggregatesInput[];
    OR?: Prisma.TicketTagPresetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TicketTagPresetScalarWhereWithAggregatesInput | Prisma.TicketTagPresetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TicketTagPreset"> | string;
    name?: Prisma.StringWithAggregatesFilter<"TicketTagPreset"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TicketTagPreset"> | Date | string;
};
export type TicketTagPresetCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
};
export type TicketTagPresetUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
};
export type TicketTagPresetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketTagPresetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketTagPresetCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
};
export type TicketTagPresetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketTagPresetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketTagPresetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TicketTagPresetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TicketTagPresetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TicketTagPresetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["ticketTagPreset"]>;
export type TicketTagPresetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["ticketTagPreset"]>;
export type TicketTagPresetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["ticketTagPreset"]>;
export type TicketTagPresetSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
};
export type TicketTagPresetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["ticketTagPreset"]>;
export type $TicketTagPresetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TicketTagPreset";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        createdAt: Date;
    }, ExtArgs["result"]["ticketTagPreset"]>;
    composites: {};
};
export type TicketTagPresetGetPayload<S extends boolean | null | undefined | TicketTagPresetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload, S>;
export type TicketTagPresetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TicketTagPresetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TicketTagPresetCountAggregateInputType | true;
};
export interface TicketTagPresetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TicketTagPreset'];
        meta: {
            name: 'TicketTagPreset';
        };
    };
    /**
     * Find zero or one TicketTagPreset that matches the filter.
     * @param {TicketTagPresetFindUniqueArgs} args - Arguments to find a TicketTagPreset
     * @example
     * // Get one TicketTagPreset
     * const ticketTagPreset = await prisma.ticketTagPreset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketTagPresetFindUniqueArgs>(args: Prisma.SelectSubset<T, TicketTagPresetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TicketTagPresetClient<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TicketTagPreset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketTagPresetFindUniqueOrThrowArgs} args - Arguments to find a TicketTagPreset
     * @example
     * // Get one TicketTagPreset
     * const ticketTagPreset = await prisma.ticketTagPreset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketTagPresetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TicketTagPresetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TicketTagPresetClient<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TicketTagPreset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTagPresetFindFirstArgs} args - Arguments to find a TicketTagPreset
     * @example
     * // Get one TicketTagPreset
     * const ticketTagPreset = await prisma.ticketTagPreset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketTagPresetFindFirstArgs>(args?: Prisma.SelectSubset<T, TicketTagPresetFindFirstArgs<ExtArgs>>): Prisma.Prisma__TicketTagPresetClient<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TicketTagPreset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTagPresetFindFirstOrThrowArgs} args - Arguments to find a TicketTagPreset
     * @example
     * // Get one TicketTagPreset
     * const ticketTagPreset = await prisma.ticketTagPreset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketTagPresetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TicketTagPresetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TicketTagPresetClient<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TicketTagPresets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTagPresetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketTagPresets
     * const ticketTagPresets = await prisma.ticketTagPreset.findMany()
     *
     * // Get first 10 TicketTagPresets
     * const ticketTagPresets = await prisma.ticketTagPreset.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ticketTagPresetWithIdOnly = await prisma.ticketTagPreset.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TicketTagPresetFindManyArgs>(args?: Prisma.SelectSubset<T, TicketTagPresetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TicketTagPreset.
     * @param {TicketTagPresetCreateArgs} args - Arguments to create a TicketTagPreset.
     * @example
     * // Create one TicketTagPreset
     * const TicketTagPreset = await prisma.ticketTagPreset.create({
     *   data: {
     *     // ... data to create a TicketTagPreset
     *   }
     * })
     *
     */
    create<T extends TicketTagPresetCreateArgs>(args: Prisma.SelectSubset<T, TicketTagPresetCreateArgs<ExtArgs>>): Prisma.Prisma__TicketTagPresetClient<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TicketTagPresets.
     * @param {TicketTagPresetCreateManyArgs} args - Arguments to create many TicketTagPresets.
     * @example
     * // Create many TicketTagPresets
     * const ticketTagPreset = await prisma.ticketTagPreset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TicketTagPresetCreateManyArgs>(args?: Prisma.SelectSubset<T, TicketTagPresetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TicketTagPresets and returns the data saved in the database.
     * @param {TicketTagPresetCreateManyAndReturnArgs} args - Arguments to create many TicketTagPresets.
     * @example
     * // Create many TicketTagPresets
     * const ticketTagPreset = await prisma.ticketTagPreset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TicketTagPresets and only return the `id`
     * const ticketTagPresetWithIdOnly = await prisma.ticketTagPreset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TicketTagPresetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TicketTagPresetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TicketTagPreset.
     * @param {TicketTagPresetDeleteArgs} args - Arguments to delete one TicketTagPreset.
     * @example
     * // Delete one TicketTagPreset
     * const TicketTagPreset = await prisma.ticketTagPreset.delete({
     *   where: {
     *     // ... filter to delete one TicketTagPreset
     *   }
     * })
     *
     */
    delete<T extends TicketTagPresetDeleteArgs>(args: Prisma.SelectSubset<T, TicketTagPresetDeleteArgs<ExtArgs>>): Prisma.Prisma__TicketTagPresetClient<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TicketTagPreset.
     * @param {TicketTagPresetUpdateArgs} args - Arguments to update one TicketTagPreset.
     * @example
     * // Update one TicketTagPreset
     * const ticketTagPreset = await prisma.ticketTagPreset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TicketTagPresetUpdateArgs>(args: Prisma.SelectSubset<T, TicketTagPresetUpdateArgs<ExtArgs>>): Prisma.Prisma__TicketTagPresetClient<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TicketTagPresets.
     * @param {TicketTagPresetDeleteManyArgs} args - Arguments to filter TicketTagPresets to delete.
     * @example
     * // Delete a few TicketTagPresets
     * const { count } = await prisma.ticketTagPreset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TicketTagPresetDeleteManyArgs>(args?: Prisma.SelectSubset<T, TicketTagPresetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TicketTagPresets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTagPresetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketTagPresets
     * const ticketTagPreset = await prisma.ticketTagPreset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TicketTagPresetUpdateManyArgs>(args: Prisma.SelectSubset<T, TicketTagPresetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TicketTagPresets and returns the data updated in the database.
     * @param {TicketTagPresetUpdateManyAndReturnArgs} args - Arguments to update many TicketTagPresets.
     * @example
     * // Update many TicketTagPresets
     * const ticketTagPreset = await prisma.ticketTagPreset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TicketTagPresets and only return the `id`
     * const ticketTagPresetWithIdOnly = await prisma.ticketTagPreset.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketTagPresetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TicketTagPresetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TicketTagPreset.
     * @param {TicketTagPresetUpsertArgs} args - Arguments to update or create a TicketTagPreset.
     * @example
     * // Update or create a TicketTagPreset
     * const ticketTagPreset = await prisma.ticketTagPreset.upsert({
     *   create: {
     *     // ... data to create a TicketTagPreset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketTagPreset we want to update
     *   }
     * })
     */
    upsert<T extends TicketTagPresetUpsertArgs>(args: Prisma.SelectSubset<T, TicketTagPresetUpsertArgs<ExtArgs>>): Prisma.Prisma__TicketTagPresetClient<runtime.Types.Result.GetResult<Prisma.$TicketTagPresetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TicketTagPresets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTagPresetCountArgs} args - Arguments to filter TicketTagPresets to count.
     * @example
     * // Count the number of TicketTagPresets
     * const count = await prisma.ticketTagPreset.count({
     *   where: {
     *     // ... the filter for the TicketTagPresets we want to count
     *   }
     * })
    **/
    count<T extends TicketTagPresetCountArgs>(args?: Prisma.Subset<T, TicketTagPresetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TicketTagPresetCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TicketTagPreset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTagPresetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketTagPresetAggregateArgs>(args: Prisma.Subset<T, TicketTagPresetAggregateArgs>): Prisma.PrismaPromise<GetTicketTagPresetAggregateType<T>>;
    /**
     * Group by TicketTagPreset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTagPresetGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TicketTagPresetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TicketTagPresetGroupByArgs['orderBy'];
    } : {
        orderBy?: TicketTagPresetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TicketTagPresetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketTagPresetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TicketTagPreset model
     */
    readonly fields: TicketTagPresetFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TicketTagPreset.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TicketTagPresetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the TicketTagPreset model
 */
export interface TicketTagPresetFieldRefs {
    readonly id: Prisma.FieldRef<"TicketTagPreset", 'String'>;
    readonly name: Prisma.FieldRef<"TicketTagPreset", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TicketTagPreset", 'DateTime'>;
}
/**
 * TicketTagPreset findUnique
 */
export type TicketTagPresetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * Filter, which TicketTagPreset to fetch.
     */
    where: Prisma.TicketTagPresetWhereUniqueInput;
};
/**
 * TicketTagPreset findUniqueOrThrow
 */
export type TicketTagPresetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * Filter, which TicketTagPreset to fetch.
     */
    where: Prisma.TicketTagPresetWhereUniqueInput;
};
/**
 * TicketTagPreset findFirst
 */
export type TicketTagPresetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * Filter, which TicketTagPreset to fetch.
     */
    where?: Prisma.TicketTagPresetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TicketTagPresets to fetch.
     */
    orderBy?: Prisma.TicketTagPresetOrderByWithRelationInput | Prisma.TicketTagPresetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TicketTagPresets.
     */
    cursor?: Prisma.TicketTagPresetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TicketTagPresets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TicketTagPresets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TicketTagPresets.
     */
    distinct?: Prisma.TicketTagPresetScalarFieldEnum | Prisma.TicketTagPresetScalarFieldEnum[];
};
/**
 * TicketTagPreset findFirstOrThrow
 */
export type TicketTagPresetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * Filter, which TicketTagPreset to fetch.
     */
    where?: Prisma.TicketTagPresetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TicketTagPresets to fetch.
     */
    orderBy?: Prisma.TicketTagPresetOrderByWithRelationInput | Prisma.TicketTagPresetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TicketTagPresets.
     */
    cursor?: Prisma.TicketTagPresetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TicketTagPresets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TicketTagPresets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TicketTagPresets.
     */
    distinct?: Prisma.TicketTagPresetScalarFieldEnum | Prisma.TicketTagPresetScalarFieldEnum[];
};
/**
 * TicketTagPreset findMany
 */
export type TicketTagPresetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * Filter, which TicketTagPresets to fetch.
     */
    where?: Prisma.TicketTagPresetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TicketTagPresets to fetch.
     */
    orderBy?: Prisma.TicketTagPresetOrderByWithRelationInput | Prisma.TicketTagPresetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TicketTagPresets.
     */
    cursor?: Prisma.TicketTagPresetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TicketTagPresets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TicketTagPresets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TicketTagPresets.
     */
    distinct?: Prisma.TicketTagPresetScalarFieldEnum | Prisma.TicketTagPresetScalarFieldEnum[];
};
/**
 * TicketTagPreset create
 */
export type TicketTagPresetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * The data needed to create a TicketTagPreset.
     */
    data: Prisma.XOR<Prisma.TicketTagPresetCreateInput, Prisma.TicketTagPresetUncheckedCreateInput>;
};
/**
 * TicketTagPreset createMany
 */
export type TicketTagPresetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketTagPresets.
     */
    data: Prisma.TicketTagPresetCreateManyInput | Prisma.TicketTagPresetCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TicketTagPreset createManyAndReturn
 */
export type TicketTagPresetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * The data used to create many TicketTagPresets.
     */
    data: Prisma.TicketTagPresetCreateManyInput | Prisma.TicketTagPresetCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TicketTagPreset update
 */
export type TicketTagPresetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * The data needed to update a TicketTagPreset.
     */
    data: Prisma.XOR<Prisma.TicketTagPresetUpdateInput, Prisma.TicketTagPresetUncheckedUpdateInput>;
    /**
     * Choose, which TicketTagPreset to update.
     */
    where: Prisma.TicketTagPresetWhereUniqueInput;
};
/**
 * TicketTagPreset updateMany
 */
export type TicketTagPresetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketTagPresets.
     */
    data: Prisma.XOR<Prisma.TicketTagPresetUpdateManyMutationInput, Prisma.TicketTagPresetUncheckedUpdateManyInput>;
    /**
     * Filter which TicketTagPresets to update
     */
    where?: Prisma.TicketTagPresetWhereInput;
    /**
     * Limit how many TicketTagPresets to update.
     */
    limit?: number;
};
/**
 * TicketTagPreset updateManyAndReturn
 */
export type TicketTagPresetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * The data used to update TicketTagPresets.
     */
    data: Prisma.XOR<Prisma.TicketTagPresetUpdateManyMutationInput, Prisma.TicketTagPresetUncheckedUpdateManyInput>;
    /**
     * Filter which TicketTagPresets to update
     */
    where?: Prisma.TicketTagPresetWhereInput;
    /**
     * Limit how many TicketTagPresets to update.
     */
    limit?: number;
};
/**
 * TicketTagPreset upsert
 */
export type TicketTagPresetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * The filter to search for the TicketTagPreset to update in case it exists.
     */
    where: Prisma.TicketTagPresetWhereUniqueInput;
    /**
     * In case the TicketTagPreset found by the `where` argument doesn't exist, create a new TicketTagPreset with this data.
     */
    create: Prisma.XOR<Prisma.TicketTagPresetCreateInput, Prisma.TicketTagPresetUncheckedCreateInput>;
    /**
     * In case the TicketTagPreset was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TicketTagPresetUpdateInput, Prisma.TicketTagPresetUncheckedUpdateInput>;
};
/**
 * TicketTagPreset delete
 */
export type TicketTagPresetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
    /**
     * Filter which TicketTagPreset to delete.
     */
    where: Prisma.TicketTagPresetWhereUniqueInput;
};
/**
 * TicketTagPreset deleteMany
 */
export type TicketTagPresetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTagPresets to delete
     */
    where?: Prisma.TicketTagPresetWhereInput;
    /**
     * Limit how many TicketTagPresets to delete.
     */
    limit?: number;
};
/**
 * TicketTagPreset without action
 */
export type TicketTagPresetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTagPreset
     */
    select?: Prisma.TicketTagPresetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TicketTagPreset
     */
    omit?: Prisma.TicketTagPresetOmit<ExtArgs> | null;
};
//# sourceMappingURL=TicketTagPreset.d.ts.map