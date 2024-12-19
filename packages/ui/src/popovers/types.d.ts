import { MutableRefObject, ReactNode } from "react";
import { Placement } from "@popperjs/core";
export type TPopoverButtonDefaultOptions = {
    button?: ReactNode;
    buttonClassName?: string;
    buttonRefClassName?: string;
    disabled?: boolean;
};
export type TPopoverDefaultOptions = TPopoverButtonDefaultOptions & {
    popperPosition?: Placement | undefined;
    popperPadding?: number | undefined;
    panelClassName?: string;
    popoverClassName?: string;
    popoverButtonRef?: MutableRefObject<HTMLButtonElement | null>;
};
export type TPopover = TPopoverDefaultOptions & {
    children: ReactNode;
};
export type TPopoverMenu<T> = TPopoverDefaultOptions & {
    data: T[];
    keyExtractor: (item: T, index: number) => string;
    render: (item: T, index: number) => ReactNode;
};
//# sourceMappingURL=types.d.ts.map