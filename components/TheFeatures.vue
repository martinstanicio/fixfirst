<template>
  <section
    class="flex flex-col justify-evenly items-center gap-10 lg:flex-row lg:items-start"
  >
    <article class="card">
      <ZapIcon size="2x" class="card__icon" />
      <h3 class="card__title">Lighting Speed</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident
        velit quasi quas placeat nam est quis veritatis voluptatem nemo ipsa eos
        consequatur odio dicta harum, totam atque molestias reprehenderit?
      </p>
    </article>
    <article class="card">
      <SmartphoneIcon size="2x" class="card__icon" />
      <h3 class="card__title">Responsiveness & Accesibility</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident
        velit quasi quas placeat nam est quis veritatis voluptatem nemo ipsa eos
        consequatur odio dicta harum, totam atque molestias reprehenderit?
      </p>
    </article>
    <article class="card">
      <PieChartIcon size="2x" class="card__icon" />
      <h3 class="card__title">See Your Results</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident
        velit quasi quas placeat nam est quis veritatis voluptatem nemo ipsa eos
        consequatur odio dicta harum, totam atque molestias reprehenderit?
      </p>
    </article>
  </section>
</template>

<script>
import { ZapIcon, SmartphoneIcon, PieChartIcon } from "vue-feather-icons";

export default {
  name: "TheFeatures",
  components: { ZapIcon, SmartphoneIcon, PieChartIcon },
};
</script>

<style>
.card {
  @apply flex flex-col items-center text-center gap-3 max-w-xl;
}

.card__icon {
  @apply text-accent-500;
}

.card__title {
  @apply text-lg font-bold text-gray-800;
}

@screen lg {
  .card {
    @apply items-start text-left;
  }
}
</style>
