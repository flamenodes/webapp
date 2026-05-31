interface ChatComposerProps {
    onSend?: (message: string) => void;
    onTyping?: () => void;
    onStopTyping?: () => void;
    disabled?: boolean;
}
export declare function ChatComposer({ onSend, onTyping, onStopTyping, disabled }: ChatComposerProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=ChatComposer.d.ts.map