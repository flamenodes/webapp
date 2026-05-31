export interface PteroDeploymentJob {
    orderId: string;
    orderItemId: string;
    serverId: string;
    name: string;
    user: number;
    nest: number;
    egg: number;
    extraEnv?: Record<string, string>;
    specs: {
        cpu: number;
        memory: number;
        swap: number;
        disk: number;
        database: number;
        allocation: number;
        backups: number;
    };
    type: string;
}
export declare function enqueuePteroDeployment(job: PteroDeploymentJob): Promise<void>;
//# sourceMappingURL=queue.d.ts.map