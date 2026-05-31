import React from 'react';
import { Check, ShoppingCart } from 'lucide-react';
export const PricingCard = ({ data }) => {
    const { planName, price, icon = '', currency = '$', discount, billingPeriod = '/month', features = [], featureCategory = 'Features included', onSelectPlan, buttonLabel = 'Get started', productId, } = data;
    return (<div className="w-full sm:w-72 md:w-80">
      <div className="
          relative overflow-hidden rounded-2xl
          px-4 sm:px-5 py-4 sm:py-5
          bg-card
          border border-border
          shadow-md dark:shadow-xl
          transition-all duration-300
          hover:shadow-lg dark:hover:shadow-2xl
          hover:-translate-y-0.5
        ">
        {/* Decorative Badge */}
        <div className="
            absolute -top-10 -right-10
            w-24 h-24
            rounded-full
            opacity-40
            bg-secondary
            blur-2xl
          " aria-hidden="true"/>

        <div className="absolute top-4 right-4 z-10">
          <img src={icon} className="size-[30px]"/>
        </div>

        {/* Content */}
        <div className="relative z-20">
          {/* Header */}
          <div className="mb-4">
            <h3 className="
                text-xl sm:text-2xl
                font-semibold
                leading-tight
                tracking-tight
                text-foreground
              ">
              {planName}
            </h3>
          </div>

          {/* Pricing */}
          <div className="mb-4 sm:mb-5">
            <div className="flex items-end gap-1 mb-2">
              <span className="text-lg sm:text-xl font-medium text-muted-foreground opacity-80">
                {currency}
              </span>

              <span className="
                  text-3xl sm:text-4xl
                  font-extrabold
                  leading-none
                  tracking-tight
                  text-foreground
                ">
                {price}
              </span>
            </div>

            {/* Discount */}
            {discount && (<div className="inline-flex items-center gap-1 mb-2">
                <span className="
                    px-2 py-0.5
                    rounded-full
                    text-[10px] sm:text-xs
                    font-medium
                    bg-secondary
                    text-secondary-foreground
                  ">
                  {discount.label}
                </span>
              </div>)}

            {/* Billing */}
            <p className="
                text-xs sm:text-sm
                font-normal
                text-muted-foreground
                opacity-70
              ">
              {billingPeriod}
            </p>
          </div>

          {/* Button */}
          <button onClick={onSelectPlan} className="
              w-full h-10
              rounded-lg
              px-4
              text-sm
              font-medium
              bg-secondary
              hover:bg-secondary/80
              text-secondary-foreground
              transition-all duration-150
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
              shadow-inner
              mb-4 sm:mb-5
              flex items-center justify-center gap-2
            ">
            <ShoppingCart size={16}/>
            {buttonLabel}
          </button>

          {/* Features */}
          <div className="pt-4 sm:pt-5 border-t border-border">
            <h4 className="
                text-sm sm:text-base
                font-semibold
                text-foreground
                mb-3
              ">
              {featureCategory}
            </h4>

            <ul className="space-y-3">
              {features.map((feature, index) => (<li key={index} className="flex items-start gap-2.5">
                  <Check size={13} strokeWidth={2} className="flex-shrink-0 text-muted-foreground mt-0.5"/>

                  <span className="
                      text-xs sm:text-sm
                      font-normal
                      leading-relaxed
                      text-muted-foreground
                    ">
                    {feature}
                  </span>
                </li>))}
            </ul>
          </div>
        </div>
      </div>
    </div>);
};
export default PricingCard;
//# sourceMappingURL=PricingCard.js.map