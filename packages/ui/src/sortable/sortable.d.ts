import React from "react";
type TEnhancedData<T> = T & {
    __uuid__?: string;
};
type Props<T> = {
    data: TEnhancedData<T>[];
    render: (item: T, index: number) => React.ReactNode;
    onChange: (data: T[], movedItem?: T) => void;
    keyExtractor: (item: T, index: number) => string;
    containerClassName?: string;
    id?: string;
};
export declare const Sortable: <T>({ data, render, onChange, keyExtractor, containerClassName, id }: Props<T>) => React.JSX.Element;
export default Sortable;
//# sourceMappingURL=sortable.d.ts.map