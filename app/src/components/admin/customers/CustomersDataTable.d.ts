import * as React from 'react';
import { getCustomers } from '#/serverActions/customers/customers.api';
type CustomerRecord = Awaited<ReturnType<typeof getCustomers>>[number];
declare function CustomersDataTable({ data }: {
    data: CustomerRecord[];
}): React.JSX.Element;
export default CustomersDataTable;
//# sourceMappingURL=CustomersDataTable.d.ts.map