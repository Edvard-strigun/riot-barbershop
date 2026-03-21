<script setup lang="ts">
  const { locale } = useI18n();

  const anchor = useTemplateRef('anchor-el');

  function getWidgetUrl() {
    return locale.value === 'en'
      ? CONSTANTS.widgetUrlEn
      : CONSTANTS.widgetUrlUk;
  }

  // Set data-url on client after all i18n redirects have completed
  onMounted(() => {
    if (anchor.value) {
      anchor.value.dataset.url = getWidgetUrl();
    }
  });

  watch(locale, () => {
    nextTick(() => {
      if (anchor.value) {
        anchor.value.dataset.url = getWidgetUrl();
      }
    });
  });
</script>

<template>
  <a
    ref="anchor-el"
    href="#"
    class="ms_booking mx-auto mb-12 flex h-12 w-max cursor-pointer items-center justify-center bg-gold px-8 text-ink-black"
  >
    <span><slot /></span>
  </a>
</template>
