/// <reference types="react" />
type TUseDropdownKeyDown = {
    (onOpen: () => void, onClose: () => void, isOpen: boolean, selectActiveItem?: () => void): (event: React.KeyboardEvent<HTMLElement>) => void;
};
export declare const useDropdownKeyDown: TUseDropdownKeyDown;
export {};
//# sourceMappingURL=use-dropdown-key-down.d.ts.map