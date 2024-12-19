import * as React from "react";
export declare enum TOAST_TYPE {
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info",
    WARNING = "warning",
    LOADING = "loading"
}
type SetToastProps = {
    type: TOAST_TYPE.LOADING;
    title?: string;
} | {
    id?: string | number;
    type: Exclude<TOAST_TYPE, TOAST_TYPE.LOADING>;
    title: string;
    message?: string;
    actionItems?: React.ReactNode;
};
type PromiseToastCallback<ToastData> = (data: ToastData) => string;
type ActionItemsPromiseToastCallback<ToastData> = (data: ToastData) => JSX.Element;
type PromiseToastData<ToastData> = {
    title: string;
    message?: PromiseToastCallback<ToastData>;
    actionItems?: ActionItemsPromiseToastCallback<ToastData>;
};
type PromiseToastOptions<ToastData> = {
    loading?: string;
    success: PromiseToastData<ToastData>;
    error: PromiseToastData<ToastData>;
};
type ToastProps = {
    theme: "light" | "dark" | "system";
};
export declare const Toast: (props: ToastProps) => React.JSX.Element;
export declare const setToast: (props: SetToastProps) => string | number;
export declare const setPromiseToast: <ToastData>(promise: Promise<ToastData>, options: PromiseToastOptions<ToastData>) => void;
export {};
//# sourceMappingURL=index.d.ts.map