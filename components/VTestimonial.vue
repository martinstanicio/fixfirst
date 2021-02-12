<template>
  <figure class="testimonial">
    <blockquote class="testimonial__quote"><slot></slot></blockquote>
    <figcaption class="testimonial__author">
      {{ author }}<template v-if="jobTitle">, {{ jobTitle }}</template>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "VTestimonial",
  props: {
    author: { type: String, required: true },
    jobTitle: { type: String, default: "" },
  },
};
</script>

<style>
.testimonial {
  @apply text-center max-w-3xl;
}

.testimonial__quote {
  @apply text-xl;

  quotes: "“" "”" "‘" "’";
}

.testimonial__quote::before,
.testimonial__quote::after {
  @apply font-script text-2xl text-accent-900;
}

.testimonial__quote::before {
  content: open-quote;
}

.testimonial__quote::after {
  content: close-quote;
}

.testimonial__author {
  @apply text-base text-accent-500 font-bold mt-2;
}

@screen md {
  .testimonial__quote {
    @apply text-2xl;
  }

  .testimonial__quote::before,
  .testimonial__quote::after {
    @apply text-3xl;
  }

  .testimonial__author {
    @apply text-lg;
  }
}
</style>
