import type React from 'react';
type EditableCustomer = {
    id: string;
    name: string;
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    image: string | null;
    displayUsername: string | null;
    banned: boolean | null;
    banReason: string | null;
};
declare const CreateCustomerModal: ({ children, customer, }: {
    children: React.ReactNode;
    customer?: EditableCustomer;
}) => React.JSX.Element;
export default CreateCustomerModal;
//# sourceMappingURL=CreateCustomerModal.d.ts.map