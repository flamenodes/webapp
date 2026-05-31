import { z } from 'zod';
export declare const createProduct: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    planName: z.ZodString;
    icon: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    badge: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>;
    price: z.ZodNumber;
    features: z.ZodDefault<z.ZodArray<z.ZodString>>;
    inStock: z.ZodDefault<z.ZodBoolean>;
    specs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
    deployMode: z.ZodDefault<z.ZodString>;
    billingOptions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        billingPeriod: z.ZodEnum<{
            HOURLY: "HOURLY";
            DAILY: "DAILY";
            MONTHLY: "MONTHLY";
            QUARTERLY: "QUARTERLY";
            SEMIANNUALLY: "SEMIANNUALLY";
            YEARLY: "YEARLY";
        }>;
        price: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>, Promise<{
    success: true;
    message: "Product created successfully.";
    data: {
        id: any;
        planName: any;
        icon: any;
        badge: any;
        sortOrder: any;
        category: any;
        price: any;
        inStock: any;
        discountId: any;
        deployMode: any;
        features: any;
        specs: {
            [k: string]: string;
        };
        specEntries: {
            id: string;
            key: string;
            value: string;
            sortOrder: number;
        }[];
        billingOptions: any;
        createdAt: any;
        updatedAt: any;
    };
}>>;
export declare const getProducts: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const getProductsByCategory: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    category: z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>;
}, z.core.$strip>, Promise<any>>;
export declare const getProduct: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<{
    id: any;
    planName: any;
    icon: any;
    badge: any;
    sortOrder: any;
    category: any;
    price: any;
    inStock: any;
    discountId: any;
    deployMode: any;
    features: any;
    specs: {
        [k: string]: string;
    };
    specEntries: {
        id: string;
        key: string;
        value: string;
        sortOrder: number;
    }[];
    billingOptions: any;
    createdAt: any;
    updatedAt: any;
}>>;
export declare const updateProduct: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    planName: z.ZodString;
    icon: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    badge: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>;
    price: z.ZodNumber;
    features: z.ZodDefault<z.ZodArray<z.ZodString>>;
    inStock: z.ZodDefault<z.ZodBoolean>;
    specs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
    deployMode: z.ZodDefault<z.ZodString>;
    billingOptions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        billingPeriod: z.ZodEnum<{
            HOURLY: "HOURLY";
            DAILY: "DAILY";
            MONTHLY: "MONTHLY";
            QUARTERLY: "QUARTERLY";
            SEMIANNUALLY: "SEMIANNUALLY";
            YEARLY: "YEARLY";
        }>;
        price: z.ZodNumber;
    }, z.core.$strip>>>;
    id: z.ZodString;
}, z.core.$strip>, Promise<{
    success: true;
    message: "Product updated successfully.";
    data: {
        id: any;
        planName: any;
        icon: any;
        badge: any;
        sortOrder: any;
        category: any;
        price: any;
        inStock: any;
        discountId: any;
        deployMode: any;
        features: any;
        specs: {
            [k: string]: string;
        };
        specEntries: {
            id: string;
            key: string;
            value: string;
            sortOrder: number;
        }[];
        billingOptions: any;
        createdAt: any;
        updatedAt: any;
    };
}>>;
export declare const deleteProduct: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<{
    success: true;
    message: "Product deleted successfully.";
    data: any;
}>>;
export declare const deleteProducts: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>, Promise<{
    success: true;
    message: "Products deleted successfully.";
    data: {
        count: any;
    };
}>>;
export declare const recreateProduct: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<{
    success: true;
    message: "Product recreated successfully.";
    data: {
        id: any;
        planName: any;
        icon: any;
        badge: any;
        sortOrder: any;
        category: any;
        price: any;
        inStock: any;
        discountId: any;
        deployMode: any;
        features: any;
        specs: {
            [k: string]: string;
        };
        specEntries: {
            id: string;
            key: string;
            value: string;
            sortOrder: number;
        }[];
        billingOptions: any;
        createdAt: any;
        updatedAt: any;
    };
}>>;
export declare const reorderProduct: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
    direction: z.ZodEnum<{
        up: "up";
        down: "down";
    }>;
}, z.core.$strip>, Promise<{
    success: true;
    message: "Product order unchanged.";
} | {
    success: true;
    message: "Product order updated successfully.";
}>>;
export declare const reorderProducts: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    orderedIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>, Promise<{
    success: true;
    message: "Product order updated successfully.";
}>>;
//# sourceMappingURL=product.api.d.ts.map