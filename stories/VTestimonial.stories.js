import VTestimonial from "~/components/VTestimonial.vue";

export default {
  title: "Testimonial",
  component: VTestimonial,
  argTypes: {
    author: { control: { type: "text" } },
    jobTitle: { control: { type: "text" } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VTestimonial },
  template:
    '<v-testimonial @onClick="onClick" v-bind="$props">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur euismod blandit. Sed sodales ornare nisi, nec porta mauris scelerisque eu. Maecenas a elit in.</v-testimonial>',
});

export const Testimonial = Template.bind({});
Testimonial.args = { author: "John Doe", jobTitle: "CEO at DoeLand" };
