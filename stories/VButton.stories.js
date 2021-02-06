import VButton from "~/components/VButton.vue";

export default {
  title: "VButton",
  component: VButton,
  argTypes: {
    primary: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VButton },
  template: '<v-button @onClick="onClick" v-bind="$props">Button</v-button>',
});

export const Primary = Template.bind({});
Primary.args = { primary: true };

export const Secondary = Template.bind({});
Secondary.args = { primary: false };

export const Large = Template.bind({});
Large.args = { size: "large" };

export const Small = Template.bind({});
Small.args = { size: "small" };
