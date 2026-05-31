import * as React from 'react';
import { getProducts } from '#/serverActions/products/product.api';
type ProductRecord = Awaited<ReturnType<typeof getProducts>>[number];
declare function ProductsDataTable({ data, }: {
    data: ProductRecord[];
}): React.JSX.Element;
export default ProductsDataTable;
//# sourceMappingURL=ProductsDataTable.d.ts.map