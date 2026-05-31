import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model StatusNode
 *
 */
export type StatusNodeModel = runtime.Types.Result.DefaultSelection<Prisma.$StatusNodePayload>;
export type AggregateStatusNode = {
    _count: StatusNodeCountAggregateOutputType | null;
    _avg: StatusNodeAvgAggregateOutputType | null;
    _sum: StatusNodeSumAggregateOutputType | null;
    _min: StatusNodeMinAggregateOutputType | null;
    _max: StatusNodeMaxAggregateOutputType | null;
};
export type StatusNodeAvgAggregateOutputType = {
    port: number | null;
    latency: number | null;
    cpu: number | null;
    memory: number | null;
    disk: number | null;
};
export type StatusNodeSumAggregateOutputType = {
    port: number | null;
    latency: number | null;
    cpu: number | null;
    memory: number | null;
    disk: number | null;
};
export type StatusNodeMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    ip: string | null;
    location: string | null;
    type: string | null;
    port: number | null;
    protocol: string | null;
    status: string | null;
    latency: number | null;
    lastChecked: Date | null;
    cpu: number | null;
    memory: number | null;
    disk: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StatusNodeMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    ip: string | null;
    location: string | null;
    type: string | null;
    port: number | null;
    protocol: string | null;
    status: string | null;
    latency: number | null;
    lastChecked: Date | null;
    cpu: number | null;
    memory: number | null;
    disk: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StatusNodeCountAggregateOutputType = {
    id: number;
    name: number;
    ip: number;
    location: number;
    type: number;
    port: number;
    protocol: number;
    status: number;
    latency: number;
    lastChecked: number;
    cpu: number;
    memory: number;
    disk: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StatusNodeAvgAggregateInputType = {
    port?: true;
    latency?: true;
    cpu?: true;
    memory?: true;
    disk?: true;
};
export type StatusNodeSumAggregateInputType = {
    port?: true;
    latency?: true;
    cpu?: true;
    memory?: true;
    disk?: true;
};
export type StatusNodeMinAggregateInputType = {
    id?: true;
    name?: true;
    ip?: true;
    location?: true;
    type?: true;
    port?: true;
    protocol?: true;
    status?: true;
    latency?: true;
    lastChecked?: true;
    cpu?: true;
    memory?: true;
    disk?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StatusNodeMaxAggregateInputType = {
    id?: true;
    name?: true;
    ip?: true;
    location?: true;
    type?: true;
    port?: true;
    protocol?: true;
    status?: true;
    latency?: true;
    lastChecked?: true;
    cpu?: true;
    memory?: true;
    disk?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StatusNodeCountAggregateInputType = {
    id?: true;
    name?: true;
    ip?: true;
    location?: true;
    type?: true;
    port?: true;
    protocol?: true;
    status?: true;
    latency?: true;
    lastChecked?: true;
    cpu?: true;
    memory?: true;
    disk?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StatusNodeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StatusNode to aggregate.
     */
    where?: Prisma.StatusNodeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StatusNodes to fetch.
     */
    orderBy?: Prisma.StatusNodeOrderByWithRelationInput | Prisma.StatusNodeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StatusNodeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StatusNodes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StatusNodes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned StatusNodes
    **/
    _count?: true | StatusNodeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: StatusNodeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: StatusNodeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StatusNodeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StatusNodeMaxAggregateInputType;
};
export type GetStatusNodeAggregateType<T extends StatusNodeAggregateArgs> = {
    [P in keyof T & keyof AggregateStatusNode]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStatusNode[P]> : Prisma.GetScalarType<T[P], AggregateStatusNode[P]>;
};
export type StatusNodeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatusNodeWhereInput;
    orderBy?: Prisma.StatusNodeOrderByWithAggregationInput | Prisma.StatusNodeOrderByWithAggregationInput[];
    by: Prisma.StatusNodeScalarFieldEnum[] | Prisma.StatusNodeScalarFieldEnum;
    having?: Prisma.StatusNodeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StatusNodeCountAggregateInputType | true;
    _avg?: StatusNodeAvgAggregateInputType;
    _sum?: StatusNodeSumAggregateInputType;
    _min?: StatusNodeMinAggregateInputType;
    _max?: StatusNodeMaxAggregateInputType;
};
export type StatusNodeGroupByOutputType = {
    id: string;
    name: string;
    ip: string;
    location: string;
    type: string;
    port: number;
    protocol: string;
    status: string;
    latency: number | null;
    lastChecked: Date | null;
    cpu: number | null;
    memory: number | null;
    disk: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: StatusNodeCountAggregateOutputType | null;
    _avg: StatusNodeAvgAggregateOutputType | null;
    _sum: StatusNodeSumAggregateOutputType | null;
    _min: StatusNodeMinAggregateOutputType | null;
    _max: StatusNodeMaxAggregateOutputType | null;
};
export type GetStatusNodeGroupByPayload<T extends StatusNodeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StatusNodeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StatusNodeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StatusNodeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StatusNodeGroupByOutputType[P]>;
}>>;
export type StatusNodeWhereInput = {
    AND?: Prisma.StatusNodeWhereInput | Prisma.StatusNodeWhereInput[];
    OR?: Prisma.StatusNodeWhereInput[];
    NOT?: Prisma.StatusNodeWhereInput | Prisma.StatusNodeWhereInput[];
    id?: Prisma.StringFilter<"StatusNode"> | string;
    name?: Prisma.StringFilter<"StatusNode"> | string;
    ip?: Prisma.StringFilter<"StatusNode"> | string;
    location?: Prisma.StringFilter<"StatusNode"> | string;
    type?: Prisma.StringFilter<"StatusNode"> | string;
    port?: Prisma.IntFilter<"StatusNode"> | number;
    protocol?: Prisma.StringFilter<"StatusNode"> | string;
    status?: Prisma.StringFilter<"StatusNode"> | string;
    latency?: Prisma.IntNullableFilter<"StatusNode"> | number | null;
    lastChecked?: Prisma.DateTimeNullableFilter<"StatusNode"> | Date | string | null;
    cpu?: Prisma.FloatNullableFilter<"StatusNode"> | number | null;
    memory?: Prisma.IntNullableFilter<"StatusNode"> | number | null;
    disk?: Prisma.IntNullableFilter<"StatusNode"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"StatusNode"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StatusNode"> | Date | string;
};
export type StatusNodeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    protocol?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latency?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastChecked?: Prisma.SortOrderInput | Prisma.SortOrder;
    cpu?: Prisma.SortOrderInput | Prisma.SortOrder;
    memory?: Prisma.SortOrderInput | Prisma.SortOrder;
    disk?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatusNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StatusNodeWhereInput | Prisma.StatusNodeWhereInput[];
    OR?: Prisma.StatusNodeWhereInput[];
    NOT?: Prisma.StatusNodeWhereInput | Prisma.StatusNodeWhereInput[];
    name?: Prisma.StringFilter<"StatusNode"> | string;
    ip?: Prisma.StringFilter<"StatusNode"> | string;
    location?: Prisma.StringFilter<"StatusNode"> | string;
    type?: Prisma.StringFilter<"StatusNode"> | string;
    port?: Prisma.IntFilter<"StatusNode"> | number;
    protocol?: Prisma.StringFilter<"StatusNode"> | string;
    status?: Prisma.StringFilter<"StatusNode"> | string;
    latency?: Prisma.IntNullableFilter<"StatusNode"> | number | null;
    lastChecked?: Prisma.DateTimeNullableFilter<"StatusNode"> | Date | string | null;
    cpu?: Prisma.FloatNullableFilter<"StatusNode"> | number | null;
    memory?: Prisma.IntNullableFilter<"StatusNode"> | number | null;
    disk?: Prisma.IntNullableFilter<"StatusNode"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"StatusNode"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StatusNode"> | Date | string;
}, "id">;
export type StatusNodeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    protocol?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latency?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastChecked?: Prisma.SortOrderInput | Prisma.SortOrder;
    cpu?: Prisma.SortOrderInput | Prisma.SortOrder;
    memory?: Prisma.SortOrderInput | Prisma.SortOrder;
    disk?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StatusNodeCountOrderByAggregateInput;
    _avg?: Prisma.StatusNodeAvgOrderByAggregateInput;
    _max?: Prisma.StatusNodeMaxOrderByAggregateInput;
    _min?: Prisma.StatusNodeMinOrderByAggregateInput;
    _sum?: Prisma.StatusNodeSumOrderByAggregateInput;
};
export type StatusNodeScalarWhereWithAggregatesInput = {
    AND?: Prisma.StatusNodeScalarWhereWithAggregatesInput | Prisma.StatusNodeScalarWhereWithAggregatesInput[];
    OR?: Prisma.StatusNodeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StatusNodeScalarWhereWithAggregatesInput | Prisma.StatusNodeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StatusNode"> | string;
    name?: Prisma.StringWithAggregatesFilter<"StatusNode"> | string;
    ip?: Prisma.StringWithAggregatesFilter<"StatusNode"> | string;
    location?: Prisma.StringWithAggregatesFilter<"StatusNode"> | string;
    type?: Prisma.StringWithAggregatesFilter<"StatusNode"> | string;
    port?: Prisma.IntWithAggregatesFilter<"StatusNode"> | number;
    protocol?: Prisma.StringWithAggregatesFilter<"StatusNode"> | string;
    status?: Prisma.StringWithAggregatesFilter<"StatusNode"> | string;
    latency?: Prisma.IntNullableWithAggregatesFilter<"StatusNode"> | number | null;
    lastChecked?: Prisma.DateTimeNullableWithAggregatesFilter<"StatusNode"> | Date | string | null;
    cpu?: Prisma.FloatNullableWithAggregatesFilter<"StatusNode"> | number | null;
    memory?: Prisma.IntNullableWithAggregatesFilter<"StatusNode"> | number | null;
    disk?: Prisma.IntNullableWithAggregatesFilter<"StatusNode"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StatusNode"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StatusNode"> | Date | string;
};
export type StatusNodeCreateInput = {
    id?: string;
    name: string;
    ip: string;
    location: string;
    type?: string;
    port?: number;
    protocol?: string;
    status?: string;
    latency?: number | null;
    lastChecked?: Date | string | null;
    cpu?: number | null;
    memory?: number | null;
    disk?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StatusNodeUncheckedCreateInput = {
    id?: string;
    name: string;
    ip: string;
    location: string;
    type?: string;
    port?: number;
    protocol?: string;
    status?: string;
    latency?: number | null;
    lastChecked?: Date | string | null;
    cpu?: number | null;
    memory?: number | null;
    disk?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StatusNodeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    port?: Prisma.IntFieldUpdateOperationsInput | number;
    protocol?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latency?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lastChecked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cpu?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    memory?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    disk?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatusNodeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    port?: Prisma.IntFieldUpdateOperationsInput | number;
    protocol?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latency?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lastChecked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cpu?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    memory?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    disk?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatusNodeCreateManyInput = {
    id?: string;
    name: string;
    ip: string;
    location: string;
    type?: string;
    port?: number;
    protocol?: string;
    status?: string;
    latency?: number | null;
    lastChecked?: Date | string | null;
    cpu?: number | null;
    memory?: number | null;
    disk?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StatusNodeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    port?: Prisma.IntFieldUpdateOperationsInput | number;
    protocol?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latency?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lastChecked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cpu?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    memory?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    disk?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatusNodeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    port?: Prisma.IntFieldUpdateOperationsInput | number;
    protocol?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    latency?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lastChecked?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cpu?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    memory?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    disk?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatusNodeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    protocol?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latency?: Prisma.SortOrder;
    lastChecked?: Prisma.SortOrder;
    cpu?: Prisma.SortOrder;
    memory?: Prisma.SortOrder;
    disk?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatusNodeAvgOrderByAggregateInput = {
    port?: Prisma.SortOrder;
    latency?: Prisma.SortOrder;
    cpu?: Prisma.SortOrder;
    memory?: Prisma.SortOrder;
    disk?: Prisma.SortOrder;
};
export type StatusNodeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    protocol?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latency?: Prisma.SortOrder;
    lastChecked?: Prisma.SortOrder;
    cpu?: Prisma.SortOrder;
    memory?: Prisma.SortOrder;
    disk?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatusNodeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    protocol?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latency?: Prisma.SortOrder;
    lastChecked?: Prisma.SortOrder;
    cpu?: Prisma.SortOrder;
    memory?: Prisma.SortOrder;
    disk?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatusNodeSumOrderByAggregateInput = {
    port?: Prisma.SortOrder;
    latency?: Prisma.SortOrder;
    cpu?: Prisma.SortOrder;
    memory?: Prisma.SortOrder;
    disk?: Prisma.SortOrder;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type StatusNodeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    ip?: boolean;
    location?: boolean;
    type?: boolean;
    port?: boolean;
    protocol?: boolean;
    status?: boolean;
    latency?: boolean;
    lastChecked?: boolean;
    cpu?: boolean;
    memory?: boolean;
    disk?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["statusNode"]>;
export type StatusNodeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    ip?: boolean;
    location?: boolean;
    type?: boolean;
    port?: boolean;
    protocol?: boolean;
    status?: boolean;
    latency?: boolean;
    lastChecked?: boolean;
    cpu?: boolean;
    memory?: boolean;
    disk?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["statusNode"]>;
export type StatusNodeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    ip?: boolean;
    location?: boolean;
    type?: boolean;
    port?: boolean;
    protocol?: boolean;
    status?: boolean;
    latency?: boolean;
    lastChecked?: boolean;
    cpu?: boolean;
    memory?: boolean;
    disk?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["statusNode"]>;
export type StatusNodeSelectScalar = {
    id?: boolean;
    name?: boolean;
    ip?: boolean;
    location?: boolean;
    type?: boolean;
    port?: boolean;
    protocol?: boolean;
    status?: boolean;
    latency?: boolean;
    lastChecked?: boolean;
    cpu?: boolean;
    memory?: boolean;
    disk?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StatusNodeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "ip" | "location" | "type" | "port" | "protocol" | "status" | "latency" | "lastChecked" | "cpu" | "memory" | "disk" | "createdAt" | "updatedAt", ExtArgs["result"]["statusNode"]>;
export type $StatusNodePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StatusNode";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        ip: string;
        location: string;
        type: string;
        port: number;
        protocol: string;
        status: string;
        latency: number | null;
        lastChecked: Date | null;
        cpu: number | null;
        memory: number | null;
        disk: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["statusNode"]>;
    composites: {};
};
export type StatusNodeGetPayload<S extends boolean | null | undefined | StatusNodeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StatusNodePayload, S>;
export type StatusNodeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StatusNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StatusNodeCountAggregateInputType | true;
};
export interface StatusNodeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StatusNode'];
        meta: {
            name: 'StatusNode';
        };
    };
    /**
     * Find zero or one StatusNode that matches the filter.
     * @param {StatusNodeFindUniqueArgs} args - Arguments to find a StatusNode
     * @example
     * // Get one StatusNode
     * const statusNode = await prisma.statusNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusNodeFindUniqueArgs>(args: Prisma.SelectSubset<T, StatusNodeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StatusNodeClient<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one StatusNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusNodeFindUniqueOrThrowArgs} args - Arguments to find a StatusNode
     * @example
     * // Get one StatusNode
     * const statusNode = await prisma.statusNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusNodeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StatusNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatusNodeClient<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StatusNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusNodeFindFirstArgs} args - Arguments to find a StatusNode
     * @example
     * // Get one StatusNode
     * const statusNode = await prisma.statusNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusNodeFindFirstArgs>(args?: Prisma.SelectSubset<T, StatusNodeFindFirstArgs<ExtArgs>>): Prisma.Prisma__StatusNodeClient<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StatusNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusNodeFindFirstOrThrowArgs} args - Arguments to find a StatusNode
     * @example
     * // Get one StatusNode
     * const statusNode = await prisma.statusNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusNodeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StatusNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatusNodeClient<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more StatusNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusNodes
     * const statusNodes = await prisma.statusNode.findMany()
     *
     * // Get first 10 StatusNodes
     * const statusNodes = await prisma.statusNode.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const statusNodeWithIdOnly = await prisma.statusNode.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StatusNodeFindManyArgs>(args?: Prisma.SelectSubset<T, StatusNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a StatusNode.
     * @param {StatusNodeCreateArgs} args - Arguments to create a StatusNode.
     * @example
     * // Create one StatusNode
     * const StatusNode = await prisma.statusNode.create({
     *   data: {
     *     // ... data to create a StatusNode
     *   }
     * })
     *
     */
    create<T extends StatusNodeCreateArgs>(args: Prisma.SelectSubset<T, StatusNodeCreateArgs<ExtArgs>>): Prisma.Prisma__StatusNodeClient<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many StatusNodes.
     * @param {StatusNodeCreateManyArgs} args - Arguments to create many StatusNodes.
     * @example
     * // Create many StatusNodes
     * const statusNode = await prisma.statusNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StatusNodeCreateManyArgs>(args?: Prisma.SelectSubset<T, StatusNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many StatusNodes and returns the data saved in the database.
     * @param {StatusNodeCreateManyAndReturnArgs} args - Arguments to create many StatusNodes.
     * @example
     * // Create many StatusNodes
     * const statusNode = await prisma.statusNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many StatusNodes and only return the `id`
     * const statusNodeWithIdOnly = await prisma.statusNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StatusNodeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StatusNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a StatusNode.
     * @param {StatusNodeDeleteArgs} args - Arguments to delete one StatusNode.
     * @example
     * // Delete one StatusNode
     * const StatusNode = await prisma.statusNode.delete({
     *   where: {
     *     // ... filter to delete one StatusNode
     *   }
     * })
     *
     */
    delete<T extends StatusNodeDeleteArgs>(args: Prisma.SelectSubset<T, StatusNodeDeleteArgs<ExtArgs>>): Prisma.Prisma__StatusNodeClient<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one StatusNode.
     * @param {StatusNodeUpdateArgs} args - Arguments to update one StatusNode.
     * @example
     * // Update one StatusNode
     * const statusNode = await prisma.statusNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StatusNodeUpdateArgs>(args: Prisma.SelectSubset<T, StatusNodeUpdateArgs<ExtArgs>>): Prisma.Prisma__StatusNodeClient<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more StatusNodes.
     * @param {StatusNodeDeleteManyArgs} args - Arguments to filter StatusNodes to delete.
     * @example
     * // Delete a few StatusNodes
     * const { count } = await prisma.statusNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StatusNodeDeleteManyArgs>(args?: Prisma.SelectSubset<T, StatusNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StatusNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusNodes
     * const statusNode = await prisma.statusNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StatusNodeUpdateManyArgs>(args: Prisma.SelectSubset<T, StatusNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StatusNodes and returns the data updated in the database.
     * @param {StatusNodeUpdateManyAndReturnArgs} args - Arguments to update many StatusNodes.
     * @example
     * // Update many StatusNodes
     * const statusNode = await prisma.statusNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more StatusNodes and only return the `id`
     * const statusNodeWithIdOnly = await prisma.statusNode.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatusNodeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StatusNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one StatusNode.
     * @param {StatusNodeUpsertArgs} args - Arguments to update or create a StatusNode.
     * @example
     * // Update or create a StatusNode
     * const statusNode = await prisma.statusNode.upsert({
     *   create: {
     *     // ... data to create a StatusNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusNode we want to update
     *   }
     * })
     */
    upsert<T extends StatusNodeUpsertArgs>(args: Prisma.SelectSubset<T, StatusNodeUpsertArgs<ExtArgs>>): Prisma.Prisma__StatusNodeClient<runtime.Types.Result.GetResult<Prisma.$StatusNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of StatusNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusNodeCountArgs} args - Arguments to filter StatusNodes to count.
     * @example
     * // Count the number of StatusNodes
     * const count = await prisma.statusNode.count({
     *   where: {
     *     // ... the filter for the StatusNodes we want to count
     *   }
     * })
    **/
    count<T extends StatusNodeCountArgs>(args?: Prisma.Subset<T, StatusNodeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StatusNodeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a StatusNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusNodeAggregateArgs>(args: Prisma.Subset<T, StatusNodeAggregateArgs>): Prisma.PrismaPromise<GetStatusNodeAggregateType<T>>;
    /**
     * Group by StatusNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusNodeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends StatusNodeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StatusNodeGroupByArgs['orderBy'];
    } : {
        orderBy?: StatusNodeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StatusNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the StatusNode model
     */
    readonly fields: StatusNodeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for StatusNode.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StatusNodeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the StatusNode model
 */
export interface StatusNodeFieldRefs {
    readonly id: Prisma.FieldRef<"StatusNode", 'String'>;
    readonly name: Prisma.FieldRef<"StatusNode", 'String'>;
    readonly ip: Prisma.FieldRef<"StatusNode", 'String'>;
    readonly location: Prisma.FieldRef<"StatusNode", 'String'>;
    readonly type: Prisma.FieldRef<"StatusNode", 'String'>;
    readonly port: Prisma.FieldRef<"StatusNode", 'Int'>;
    readonly protocol: Prisma.FieldRef<"StatusNode", 'String'>;
    readonly status: Prisma.FieldRef<"StatusNode", 'String'>;
    readonly latency: Prisma.FieldRef<"StatusNode", 'Int'>;
    readonly lastChecked: Prisma.FieldRef<"StatusNode", 'DateTime'>;
    readonly cpu: Prisma.FieldRef<"StatusNode", 'Float'>;
    readonly memory: Prisma.FieldRef<"StatusNode", 'Int'>;
    readonly disk: Prisma.FieldRef<"StatusNode", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"StatusNode", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StatusNode", 'DateTime'>;
}
/**
 * StatusNode findUnique
 */
export type StatusNodeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * Filter, which StatusNode to fetch.
     */
    where: Prisma.StatusNodeWhereUniqueInput;
};
/**
 * StatusNode findUniqueOrThrow
 */
export type StatusNodeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * Filter, which StatusNode to fetch.
     */
    where: Prisma.StatusNodeWhereUniqueInput;
};
/**
 * StatusNode findFirst
 */
export type StatusNodeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * Filter, which StatusNode to fetch.
     */
    where?: Prisma.StatusNodeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StatusNodes to fetch.
     */
    orderBy?: Prisma.StatusNodeOrderByWithRelationInput | Prisma.StatusNodeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StatusNodes.
     */
    cursor?: Prisma.StatusNodeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StatusNodes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StatusNodes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StatusNodes.
     */
    distinct?: Prisma.StatusNodeScalarFieldEnum | Prisma.StatusNodeScalarFieldEnum[];
};
/**
 * StatusNode findFirstOrThrow
 */
export type StatusNodeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * Filter, which StatusNode to fetch.
     */
    where?: Prisma.StatusNodeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StatusNodes to fetch.
     */
    orderBy?: Prisma.StatusNodeOrderByWithRelationInput | Prisma.StatusNodeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StatusNodes.
     */
    cursor?: Prisma.StatusNodeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StatusNodes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StatusNodes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StatusNodes.
     */
    distinct?: Prisma.StatusNodeScalarFieldEnum | Prisma.StatusNodeScalarFieldEnum[];
};
/**
 * StatusNode findMany
 */
export type StatusNodeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * Filter, which StatusNodes to fetch.
     */
    where?: Prisma.StatusNodeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StatusNodes to fetch.
     */
    orderBy?: Prisma.StatusNodeOrderByWithRelationInput | Prisma.StatusNodeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing StatusNodes.
     */
    cursor?: Prisma.StatusNodeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StatusNodes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StatusNodes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StatusNodes.
     */
    distinct?: Prisma.StatusNodeScalarFieldEnum | Prisma.StatusNodeScalarFieldEnum[];
};
/**
 * StatusNode create
 */
export type StatusNodeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * The data needed to create a StatusNode.
     */
    data: Prisma.XOR<Prisma.StatusNodeCreateInput, Prisma.StatusNodeUncheckedCreateInput>;
};
/**
 * StatusNode createMany
 */
export type StatusNodeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusNodes.
     */
    data: Prisma.StatusNodeCreateManyInput | Prisma.StatusNodeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StatusNode createManyAndReturn
 */
export type StatusNodeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * The data used to create many StatusNodes.
     */
    data: Prisma.StatusNodeCreateManyInput | Prisma.StatusNodeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StatusNode update
 */
export type StatusNodeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * The data needed to update a StatusNode.
     */
    data: Prisma.XOR<Prisma.StatusNodeUpdateInput, Prisma.StatusNodeUncheckedUpdateInput>;
    /**
     * Choose, which StatusNode to update.
     */
    where: Prisma.StatusNodeWhereUniqueInput;
};
/**
 * StatusNode updateMany
 */
export type StatusNodeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusNodes.
     */
    data: Prisma.XOR<Prisma.StatusNodeUpdateManyMutationInput, Prisma.StatusNodeUncheckedUpdateManyInput>;
    /**
     * Filter which StatusNodes to update
     */
    where?: Prisma.StatusNodeWhereInput;
    /**
     * Limit how many StatusNodes to update.
     */
    limit?: number;
};
/**
 * StatusNode updateManyAndReturn
 */
export type StatusNodeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * The data used to update StatusNodes.
     */
    data: Prisma.XOR<Prisma.StatusNodeUpdateManyMutationInput, Prisma.StatusNodeUncheckedUpdateManyInput>;
    /**
     * Filter which StatusNodes to update
     */
    where?: Prisma.StatusNodeWhereInput;
    /**
     * Limit how many StatusNodes to update.
     */
    limit?: number;
};
/**
 * StatusNode upsert
 */
export type StatusNodeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * The filter to search for the StatusNode to update in case it exists.
     */
    where: Prisma.StatusNodeWhereUniqueInput;
    /**
     * In case the StatusNode found by the `where` argument doesn't exist, create a new StatusNode with this data.
     */
    create: Prisma.XOR<Prisma.StatusNodeCreateInput, Prisma.StatusNodeUncheckedCreateInput>;
    /**
     * In case the StatusNode was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StatusNodeUpdateInput, Prisma.StatusNodeUncheckedUpdateInput>;
};
/**
 * StatusNode delete
 */
export type StatusNodeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
    /**
     * Filter which StatusNode to delete.
     */
    where: Prisma.StatusNodeWhereUniqueInput;
};
/**
 * StatusNode deleteMany
 */
export type StatusNodeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StatusNodes to delete
     */
    where?: Prisma.StatusNodeWhereInput;
    /**
     * Limit how many StatusNodes to delete.
     */
    limit?: number;
};
/**
 * StatusNode without action
 */
export type StatusNodeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusNode
     */
    select?: Prisma.StatusNodeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StatusNode
     */
    omit?: Prisma.StatusNodeOmit<ExtArgs> | null;
};
//# sourceMappingURL=StatusNode.d.ts.map