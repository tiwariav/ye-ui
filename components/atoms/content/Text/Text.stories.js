import { TEXT_LONG } from "../../../../lib/text";
import Text from "./Text";

const metadata = {
  title: "ye-ui/atoms/content/Text",
  component: Text,
};

export default metadata;

const Template = ({ width, ...args }) => (
  <div style={{ width, border: "1px solid var(--color-black-10)" }}>
    <Text {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  width: 800,
  children: TEXT_LONG,
};

export const FixedLines = Template.bind({});
FixedLines.args = {
  ...Basic.args,
  minLines: 3,
  maxLines: 5,
};

export const Loading = Template.bind({});
Loading.args = {
  ...FixedLines.args,
  loading: true,
};
