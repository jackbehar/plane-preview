export interface ICycleGroupIcon {
    className?: string;
    color?: string;
    cycleGroup: TCycleGroups;
    height?: string;
    width?: string;
}
export type TCycleGroups = "current" | "upcoming" | "completed" | "draft";
export declare const CYCLE_GROUP_COLORS: {
    [key in TCycleGroups]: string;
};
//# sourceMappingURL=helper.d.ts.map