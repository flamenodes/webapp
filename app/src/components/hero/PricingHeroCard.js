import * as React from 'react';
import { cn } from '#/lib/utils.ts';
import { Card, CardHeader, CardContent, CardFooter, } from '#/components/ui/card.tsx';
import { Button } from '#/components/ui/button.tsx';
import ElectricBorder from '../ElectricBorder';
import { useNavigate } from '@tanstack/react-router';
const PricingHeroCard = React.forwardRef(({ icon, name, description, price, features, cta, featured = false, to }, ref) => {
    const navigate = useNavigate();
    return (<div onClick={() => navigate({ to })} className="relative h-full md:min-w-[22rem] cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ">
        <div className="absolute h-full w-full">
          {featured ? (<ElectricBorder color="#d21f5e" className="h-full"/>) : (<></>)}
        </div>
        <Card ref={ref} className={cn('rounded-2xl p-6 flex flex-col ', featured && 'border-foreground/30 shadow-lg', !featured && 'border-border')}>
          <CardHeader className="px-0 pb-0">
            <div className="flex flex-col gap-1">
              {icon && <div className="text-3xl">{icon}</div>}
              <h3 className="text-2xl font-semibold text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </CardHeader>

          <div className=" px-0">
            <div className="flex items-end gap-1">
              <span className="text-lg text-muted-foreground font-medium">
                ₹
              </span>
              <span className="text-4xl font-bold text-foreground leading-none">
                {price}
              </span>
              <span className="text-sm text-muted-foreground font-medium pb-1">
                /month
              </span>
            </div>
          </div>

          <CardContent className="px-0 pb-6">
            <Button variant="great" className="w-full h-10 rounded-lg font-semibold cursor-pointer hover:scale-100 z-20" size="default">
              {cta}
            </Button>
          </CardContent>

          <div className="border-t border-border"></div>

          <CardFooter className="flex-col px-0 pt-6 pb-0">
            <h4 className="text-sm font-semibold text-foreground mb-4 w-full">
              Features
            </h4>

            <ul className="space-y-3 w-full">
              {features.map((feature, index) => (<li key={index} className="flex items-start gap-3">
                  {/* Bullet */}
                  <span className="inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0 mt-1.5"></span>

                  {/* Feature Text */}
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>))}
            </ul>
          </CardFooter>
        </Card>
      </div>);
});
PricingHeroCard.displayName = 'PricingHeroCard';
export { PricingHeroCard };
//# sourceMappingURL=PricingHeroCard.js.map