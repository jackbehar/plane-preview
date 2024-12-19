import React from "react";
import { EModalPosition, EModalWidth } from "./constants";
export type TModalVariant = "danger" | "primary";
type Props = {
    content: React.ReactNode | string;
    handleClose: () => void;
    handleSubmit: () => void;
    hideIcon?: boolean;
    isSubmitting: boolean;
    isOpen: boolean;
    position?: EModalPosition;
    primaryButtonText?: {
        loading: string;
        default: string;
    };
    secondaryButtonText?: string;
    title: string;
    variant?: TModalVariant;
    width?: EModalWidth;
};
export declare const AlertModalCore: React.FC<Props>;
export {};
//# sourceMappingURL=alert-modal.d.ts.map