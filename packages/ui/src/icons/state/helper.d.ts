export interface IStateGroupIcon {
    className?: string;
    color?: string;
    stateGroup: TStateGroups;
    height?: string;
    width?: string;
}
export type TStateGroups = "backlog" | "unstarted" | "started" | "completed" | "cancelled";
export declare const STATE_GROUP_COLORS: {
    [key in TStateGroups]: string;
};
//# sourceMappingURL=helper.d.ts.map