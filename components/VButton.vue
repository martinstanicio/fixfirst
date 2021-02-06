<template>
  <button
    :class="[
      'button',
      `button--${primary ? 'primary' : 'secondary'}`,
      `button--${size}`,
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    primary: { type: Boolean, default: false },
    size: {
      type: String,
      default: "medium",
      validator: v => ["small", "medium", "large"].includes(v),
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style scoped>
.button {
  @apply font-sans font-bold border-0 rounded-3xl cursor-pointer inline-block leading-none;
}
.button--primary {
  @apply bg-blue-500 text-white;
}
.button--secondary {
  @apply bg-transparent text-blue-700 border border-blue-700;
}
.button--small {
  @apply text-xs px-4 py-3;
}
.button--medium {
  @apply text-sm px-5 py-3.5;
}
.button--large {
  @apply text-base px-6 py-3.5;
}
</style>
