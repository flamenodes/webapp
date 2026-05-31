import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getInvoices } from '@/serverActions/invoice/invoice.api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar } from 'lucide-react';
import { formatDistanceToNow } from '@/lib/date-utils';
export const Route = createFileRoute('/_protected/user/invoices')({
    head: () => ({ meta: [{ title: 'My Invoices | Flame Nodes' }] }),
    component: InvoicesPage,
});
function InvoicesPage() {
    const { data: response } = useSuspenseQuery({
        queryKey: ['user-invoices'],
        queryFn: () => getInvoices(),
    });
    const invoices = response?.data || [];
    return (<main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Invoices</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Download and view your invoices
            </p>
          </div>
          <Badge variant="outline" className="text-xs">
            {invoices.length} Total Invoices
          </Badge>
        </div>

        {/* Invoices List */}
        {invoices.length === 0 ? (<Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <FileText className="w-16 h-16 text-muted-foreground/50 mb-4"/>
              <h3 className="text-lg font-semibold mb-2">No invoices yet</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                Invoices will appear here after you complete a payment.
              </p>
            </CardContent>
          </Card>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {invoices.map((invoice) => (<Card key={invoice.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-3 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-primary"/>
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-sm truncate">
                          {invoice.invoiceNumber}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Order #{invoice.order.id.slice(0, 8).toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 py-3">
                  {/* Invoice Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-3 h-3"/>
                      <span className="text-xs">
                        {formatDistanceToNow(new Date(invoice.createdAt))}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="text-muted-foreground">Amount</span>
                      <span className="font-semibold">₹{invoice.order.totalAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Items</span>
                      <span>{invoice.order.items.length} item{invoice.order.items.length !== 1 ? 's' : ''}</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <Button size="sm" className="w-full h-8" onClick={() => window.open(invoice.pdfUrl, '_blank')}>
                    <Download className="w-3 h-3 mr-1.5"/>
                    Download PDF
                  </Button>
                </CardContent>
              </Card>))}
          </div>)}
      </div>
    </main>);
}
//# sourceMappingURL=invoices.js.map