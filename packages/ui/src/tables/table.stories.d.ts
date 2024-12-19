import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./table";
declare const meta: Meta<typeof Table>;
export default meta;
type TTableData = {
    id: string;
    name: string;
    age: number;
};
type Story = StoryObj<typeof Table<TTableData>>;
export declare const Default: Story;
//# sourceMappingURL=table.stories.d.ts.map