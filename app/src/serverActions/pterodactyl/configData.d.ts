import z from 'zod';
export declare const pteroServerSchema: z.ZodObject<{
    name: z.ZodString;
    user: z.ZodNumber;
    egg: z.ZodNumber;
    nest: z.ZodNumber;
    specs: z.ZodObject<{
        cpu: z.ZodNumber;
        memory: z.ZodNumber;
        swap: z.ZodNumber;
        disk: z.ZodNumber;
        database: z.ZodNumber;
        allocation: z.ZodNumber;
        backups: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const petroEggSchema: z.ZodObject<{
    docker_image: z.ZodString;
    startup: z.ZodString;
    environment: z.ZodAny;
}, z.core.$strip>;
export type PteroEgg = z.infer<typeof petroEggSchema>;
export declare const getPetroEggData: ({ nestId, eggId, }: {
    nestId: number;
    eggId: number;
}) => Promise<any>;
export declare const pteroServerData: (data: z.infer<typeof pteroServerSchema>) => Promise<{
    name: string;
    user: number;
    egg: number;
    nest: number;
    docker_image: string;
    startup: string;
    environment: Record<string, string>;
    limits: {
        memory: number;
        swap: number;
        disk: number;
        io: number;
        cpu: number;
        oom_disabled: boolean;
    };
    feature_limits: {
        databases: number;
        allocations: number;
        backups: number;
    };
    allocation: {
        default: any;
    };
}>;
/** Build specs for a Pterodactyl server from a product's specs JSON field */
export declare function extractPteroSpecsFromProduct(productSpecs: unknown): {
    cpu: number;
    memory: number;
    swap: number;
    disk: number;
    database: number;
    allocation: number;
    backups: number;
};
//# sourceMappingURL=configData.d.ts.map