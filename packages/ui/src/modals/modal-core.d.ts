import React from "react";
import { EModalPosition, EModalWidth } from "./constants";
type Props = {
    children: React.ReactNode;
    handleClose?: () => void;
    isOpen: boolean;
    position?: EModalPosition;
    width?: EModalWidth;
    className?: string;
};
export declare const ModalCore: React.FC<Props>;
export {};
//# sourceMappingURL=modal-core.d.ts.map