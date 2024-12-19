import type { Meta, StoryObj } from "@storybook/react";
import { PopoverMenu } from "./popover-menu";
declare const meta: Meta<typeof PopoverMenu>;
export default meta;
type TPopoverMenu = {
    id: number;
    name: string;
};
type Story = StoryObj<typeof PopoverMenu<TPopoverMenu>>;
export declare const Default: Story;
//# sourceMappingURL=popover-menu.stories.d.ts.map