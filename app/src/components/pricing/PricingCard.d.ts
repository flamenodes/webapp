import React from 'react';
export interface PricingCardData {
    planName: string;
    price: number;
    icon: string;
    currency?: string;
    discount?: {
        percentage: number;
        label: string;
    };
    billingPeriod?: string;
    features: string[];
    featureCategory?: string;
    onSelectPlan?: () => void;
    buttonLabel?: string;
    productId?: string;
}
export interface PricingCardProps {
    data: PricingCardData;
}
export declare const PricingCard: React.FC<PricingCardProps>;
export default PricingCard;
//# sourceMappingURL=PricingCard.d.ts.map