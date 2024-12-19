import React, { ElementType, KeyboardEventHandler, ReactNode, Ref } from "react";
type Props = {
    as?: ElementType | undefined;
    ref?: Ref<HTMLElement> | undefined;
    tabIndex?: number | undefined;
    className?: string | undefined;
    value?: string | string[] | null;
    onChange?: (value: any) => void;
    disabled?: boolean | undefined;
    onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
    multiple?: boolean;
    renderByDefault?: boolean;
    button: ReactNode;
    children: ReactNode;
};
declare const ComboDropDown: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<unknown>>;
declare const ComboOptions: import("@headlessui/react")._internal_ComponentComboboxOptions;
declare const ComboOption: import("@headlessui/react")._internal_ComponentComboboxOption;
declare const ComboInput: import("@headlessui/react")._internal_ComponentComboboxInput;
export { ComboDropDown, ComboOptions, ComboOption, ComboInput };
//# sourceMappingURL=combo-box.d.ts.map