import React, { FC } from "react";
interface IInputSearch {
    isOpen: boolean;
    query: string;
    updateQuery: (query: string) => void;
    inputIcon?: React.ReactNode;
    inputContainerClassName?: string;
    inputClassName?: string;
    inputPlaceholder?: string;
    isMobile: boolean;
}
export declare const InputSearch: FC<IInputSearch>;
export {};
//# sourceMappingURL=input-search.d.ts.map