type ActivityItem = {
    id: string | number;
    type: string;
    message: string;
    detail: string;
    badge: string;
    time: string;
};
interface ActivityFeedProps {
    activities?: ActivityItem[];
}
export declare function ActivityFeed({ activities }: ActivityFeedProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=ActivityFeed.d.ts.map