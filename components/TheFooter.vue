<template>
  <footer
    class="bg-blue-900 text-blue-50 flex flex-col justify-between items-center gap-8 p-12 lg:flex-row"
  >
    <VLogo inverted />
    <ul
      class="flex flex-wrap justify-center items-center gap-4 text-center lg:justify-between lg:items-end"
    >
      <li>Privacy policy</li>
      <li>Terms and conditions</li>
      <li>Support</li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
