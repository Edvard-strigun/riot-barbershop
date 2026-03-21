<script setup lang="ts">
  const { locale } = useI18n();
  const route = useRoute();

  const widgetUrl = computed(() => {
    const isEn = locale.value === 'en' || route.path.startsWith('/en');
    return isEn ? CONSTANTS.widgetUrlEn : CONSTANTS.widgetUrlUk;
  });
</script>

<template>
  <a
    :key="locale"
    href="#"
    :data-url="widgetUrl"
    class="ms_booking mx-auto mb-12 flex h-12 w-max cursor-pointer items-center justify-center bg-gold px-8 text-ink-black"
  >
    <span><slot /></span>
  </a>
</template>
