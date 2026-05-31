import z from 'zod';
export declare const createPageDocument: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodEnum<{
        PUBLISHED: "PUBLISHED";
        DRAFT: "DRAFT";
    }>;
    content: z.ZodString;
    slug: z.ZodString;
}, z.core.$strict>, Promise<{
    success: true;
    message: "Page created successfully.";
    res: any;
} | undefined>>;
export declare const updatePageDocument: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodEnum<{
        PUBLISHED: "PUBLISHED";
        DRAFT: "DRAFT";
    }>;
    content: z.ZodString;
    slug: z.ZodString;
}, z.core.$strict>, Promise<{
    success: true;
    message: "Page created successfully.";
    res: any;
} | undefined>>;
export declare const getPageDocument: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<{
    resData: any;
} | undefined>>;
export declare const getPageDocumentBySlug: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    slug: z.ZodString;
}, z.core.$strip>, Promise<{
    resData: any;
} | undefined>>;
export declare const getPageDocuments: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    pageCount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, Promise<{
    resData: any;
} | undefined>>;
export declare const deletePageDocumentbySlug: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    slug: z.ZodString;
}, z.core.$strip>, Promise<{
    resData: any;
} | undefined>>;
export declare const deletePageDocumentbyId: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<{
    resData: any;
} | undefined>>;
export declare const deletePageDocuments: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>, Promise<{
    success: true;
    deleted: any;
}>>;
export declare const GetPageDocumentBySlug: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    slug: z.ZodString;
}, z.core.$strip>, Promise<{
    resData: any;
} | undefined>>;
export declare const UpdatePageDocument: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodEnum<{
        PUBLISHED: "PUBLISHED";
        DRAFT: "DRAFT";
    }>;
    content: z.ZodString;
    slug: z.ZodString;
}, z.core.$strict>, Promise<{
    success: true;
    message: "Page created successfully.";
    res: any;
} | undefined>>;
export declare const GetPageDocuments: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    pageCount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, Promise<{
    resData: any;
} | undefined>>;
//# sourceMappingURL=pagedocument.api.d.ts.map