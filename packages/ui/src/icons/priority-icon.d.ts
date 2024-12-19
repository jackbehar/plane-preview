import * as React from "react";
type TIssuePriorities = "urgent" | "high" | "medium" | "low" | "none";
interface IPriorityIcon {
    className?: string;
    containerClassName?: string;
    priority: TIssuePriorities | undefined | null;
    size?: number;
    withContainer?: boolean;
}
export declare const PriorityIcon: React.FC<IPriorityIcon>;
export {};
//# sourceMappingURL=priority-icon.d.ts.map