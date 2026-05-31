/**
 * Cart Mock Data
 * Contains sample data for the billing cart page
 */
export declare const cartData: {
    product: {
        id: string;
        name: string;
        category: string;
        icon: string;
        pricing: {
            current: {
                monthly: number;
                currency: string;
            };
            original: {
                monthly: number;
                currency: string;
            };
            totalSavings: number;
            period: string;
            totalPrice: number;
            tax: number;
            finalTotal: number;
        };
        renewal: {
            monthly: number;
            duration: string;
            currency: string;
        };
        features: {
            freeDomain: boolean;
            domainDuration: string;
        };
    };
    addons: {
        id: string;
        name: string;
        description: string;
        price: number;
        currency: string;
        period: string;
        recommended: boolean;
        selected: boolean;
    }[];
    locations: {
        id: string;
        name: string;
        latency: string;
        status: string;
        selected: boolean;
    }[];
    operatingSystems: {
        plainOS: string[];
        dockerApplications: string[];
        osWithPanel: string[];
        applications: string[];
    };
    orderSummary: {
        items: {
            label: string;
            value: number;
            currency: string;
        }[];
        total: {
            value: number;
            currency: string;
        };
    };
    trust: {
        items: ({
            icon: string;
            text: string;
            type?: undefined;
            platform?: undefined;
            rating?: undefined;
            reviews?: undefined;
        } | {
            type: string;
            platform: string;
            rating: string;
            reviews: string;
            icon?: undefined;
            text?: undefined;
        })[];
    };
};
//# sourceMappingURL=cartData.d.ts.map