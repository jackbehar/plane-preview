import * as React from "react";
export type TModuleStatus = "backlog" | "planned" | "in-progress" | "paused" | "completed" | "cancelled";
type Props = {
    status: TModuleStatus;
    className?: string;
    height?: string;
    width?: string;
};
export declare const ModuleStatusIcon: React.FC<Props>;
export {};
//# sourceMappingURL=module-status-icon.d.ts.map