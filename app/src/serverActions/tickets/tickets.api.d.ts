export declare const createTicket: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    title: string;
    description: string;
    priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
    channelName: string;
    tags: string[];
}, Promise<{
    success: true;
    ticket: any;
} | undefined>>;
export declare const listTickets: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    take: number;
    skip: number;
    status?: "PENDING" | "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED" | undefined;
    priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT" | undefined;
    channelName?: string | undefined;
    tags?: string[] | undefined;
    search?: string | undefined;
    onlyAssignedToMe?: boolean | undefined;
}, Promise<{
    success: true;
    tickets: any;
} | undefined>>;
export declare const getTicket: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    ticketId: string;
}, Promise<{
    success: true;
    ticket: any;
} | undefined>>;
export declare const sendTicketMessage: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    ticketId: string;
    content: string;
    attachments?: unknown;
}, Promise<{
    success: true;
    message: any;
} | undefined>>;
export declare const updateTicket: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    ticketId: string;
    status?: "PENDING" | "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED" | undefined;
    priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT" | undefined;
    channelName?: string | undefined;
    tags?: string[] | undefined;
    assignedToId?: string | null | undefined;
}, Promise<{
    success: true;
    ticket: any;
} | undefined>>;
export declare const listSupportAgents: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: true;
    users: any;
}>>;
export declare const listTicketTagPresets: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    take: number;
    search?: string | undefined;
}, Promise<{
    success: true;
    tags: any;
} | undefined>>;
export declare const upsertTicketTagPreset: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    name: string;
}, Promise<{
    success: true;
    tag: any;
} | undefined>>;
export declare const deleteTicketTagPreset: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    id: string;
}, Promise<{
    success: true;
} | undefined>>;
/** Owner can delete a CLOSED ticket directly. Admin can request deletion (adds a system message). */
export declare const deleteTicket: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    ticketId: string;
}, Promise<{
    success: true;
    deleted: true;
    requested?: undefined;
} | {
    success: true;
    deleted: false;
    requested: true;
} | undefined>>;
export declare const getUserProfile: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    userId: string;
}, Promise<{
    success: true;
    user: any;
} | undefined>>;
//# sourceMappingURL=tickets.api.d.ts.map