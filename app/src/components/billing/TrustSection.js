import { ShieldCheck, Star } from 'lucide-react';
export function TrustSection({ items }) {
    return (<div className="rounded-2xl border border-border bg-card p-5 shadow-sm dark:border-dark-border">
      <div className="space-y-4">
        {items.map((item, index) => {
            if (item.type === 'rating') {
                return (<div key={index} className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400"/>))}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.platform} - {item.rating}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.reviews}</p>
                </div>
              </div>);
            }
            return (<div key={index} className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-green-600 dark:text-green-500"/>
              <p className="text-sm text-foreground">{item.text}</p>
            </div>);
        })}
      </div>
    </div>);
}
//# sourceMappingURL=TrustSection.js.map