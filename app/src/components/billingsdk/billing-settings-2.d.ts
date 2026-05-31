export interface FeatureToggle {
    id: string;
    label: string;
    description: string;
    enabled: boolean;
    onToggle: (enabled: boolean) => void;
}
export interface InputField {
    id: string;
    name: string;
    value?: string;
    defaultValue?: string;
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
    helperText?: string;
    type?: "text" | "email" | "tel" | "url" | "number";
    required?: boolean;
    validation?: {
        minLength?: number;
        maxLength?: number;
        pattern?: RegExp;
        customValidator?: (value: string) => string | null;
    };
}
export interface ValidationError {
    field: string;
    message: string;
}
export interface BillingSettings2Props {
    className?: string;
    title?: string;
    features?: FeatureToggle[];
    inputFields?: InputField[];
    onSave?: () => void;
    onCancel?: () => void;
    saveButtonText?: string;
    cancelButtonText?: string;
    currencies?: string[];
    currencyOptions?: {
        value: string;
        label: string;
    }[];
    defaultCurrency?: string;
    onCurrencyChange?: (value: string) => void;
    enableValidation?: boolean;
    currencyRequired?: boolean;
}
export declare function BillingSettings2({ className, title, features, inputFields, onSave, onCancel, saveButtonText, cancelButtonText, currencies, // Array of specific currency codes to show
currencyOptions, // Custom currency options override
defaultCurrency, onCurrencyChange, enableValidation, currencyRequired, }: BillingSettings2Props): import("react").JSX.Element;
//# sourceMappingURL=billing-settings-2.d.ts.map