<script setup lang="ts">
  import IconChevronDown from '~/assets/icons/chevron-down.svg';

  const { locale, locales, setLocale } = useI18n();

  const isOpen = ref(false);
  const focusedIndex = ref(0);

  const selectedIndex = computed(() =>
    locales.value.findIndex((l) => l.code === locale.value)
  );

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
      focusedIndex.value = selectedIndex.value;
    }
  };

  const onListClick = (event: Event) => {
    const target = event.target as HTMLElement;
    const localeCode = target.dataset.localeCode;
    if (localeCode) {
      setLocale(localeCode as typeof locale.value);
      isOpen.value = false;
    }
  };

  const closeDropdown = () => {
    isOpen.value = false;
  };

  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-selector')) {
      closeDropdown();
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeDropdown();
    } else if (event.key === 'ArrowDown' && !isOpen.value) {
      toggleDropdown();
    } else if (isOpen.value) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        focusedIndex.value = (focusedIndex.value + 1) % locales.value.length;
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        focusedIndex.value =
          (focusedIndex.value - 1 + locales.value.length) %
          locales.value.length;
      } else if (event.key === 'Enter') {
        event.preventDefault();
        const newLocale = locales.value[focusedIndex.value];
        if (newLocale) {
          setLocale(newLocale.code);
          isOpen.value = false;
        }
      }
    }
  };
</script>

<template>
  <div class="container mx-auto px-4 pt-4 lg:px-0">
    <div class="language-selector relative ml-auto w-max">
      <button
        :aria-label="$t('header.language.selection')"
        :aria-expanded="isOpen"
        :aria-activedescendant="isOpen ? `lng-opt-${focusedIndex}` : undefined"
        aria-haspopup="listbox"
        class="flex h-12 cursor-pointer items-center gap-2 rounded-md px-2 text-sm font-normal text-platinum outline-platinum focus:outline-0 focus-visible:outline-1 lg:h-6"
        @click="toggleDropdown"
        @keydown="handleKeydown"
      >
        <span>{{ locales[selectedIndex]?.name }}</span>
        <IconChevronDown
          aria-hidden="true"
          class="size-4 fill-current transition-transform"
          :class="{ 'rotate-180': isOpen }"
        />
      </button>
      <ul
        v-show="isOpen"
        role="listbox"
        class="absolute right-0 z-10 mt-1 w-30 overflow-hidden rounded-md bg-ink-black/50 text-sm shadow-md shadow-gold/50"
        @click="onListClick"
      >
        <li
          v-for="(loc, index) in locales"
          :id="`lng-opt-${index}`"
          :key="loc.code"
          role="option"
          :aria-selected="index === selectedIndex"
          class="cursor-pointer px-4 py-2 text-white hover:bg-oxford-navy focus:bg-oxford-navy focus:outline-none"
          :class="{
            'bg-gray-600': index === selectedIndex,
            'bg-oxford-navy': index === focusedIndex && index !== selectedIndex,
          }"
          :data-locale-code="loc.code"
        >
          {{ loc.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
