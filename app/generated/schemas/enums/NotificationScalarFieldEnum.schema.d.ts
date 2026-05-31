import * as z from 'zod';
export declare const NotificationScalarFieldEnumSchema: z.ZodEnum<{
    type: "type";
    message: "message";
    id: "id";
    title: "title";
    createdAt: "createdAt";
    userId: "userId";
    read: "read";
}>;
export type NotificationScalarFieldEnum = z.infer<typeof NotificationScalarFieldEnumSchema>;
//# sourceMappingURL=NotificationScalarFieldEnum.schema.d.ts.map