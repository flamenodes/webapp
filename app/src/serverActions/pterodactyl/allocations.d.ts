import z from 'zod';
export declare const allocationSchema: z.ZodObject<{
    mode: z.ZodEnum<{
        balance: "balance";
        specific: "specific";
    }>;
    nodeId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const findPetroAvailableAllocation: (data: z.infer<typeof allocationSchema>) => Promise<{
    nodeId: any;
    allocation: any;
}>;
//# sourceMappingURL=allocations.d.ts.map