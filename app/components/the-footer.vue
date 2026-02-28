<script setup lang="ts">
  import IconScissors from '~/assets/icons/scissors.svg';
  import IconPhone from '~/assets/icons/phone.svg';
  import IconTelegram from '~/assets/icons/telegram.svg';

  const { locale } = useI18n();
</script>

<template>
  <footer class="border-t border-oxford-navy bg-ink-black px-4 py-12">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="mb-8 grid gap-8 md:grid-cols-4">
        <div class="md:col-span-1">
          <div class="mb-4 flex items-center gap-2">
            <IconScissors class="size-6 fill-gold" />
            <span class="text-xl text-platinum">{{ $t('app.riot') }}</span>
          </div>
          <p class="text-sm text-platinum/60">
            {{ $t('app.riot.description') }}
          </p>
        </div>
        <div>
          <h4 class="mb-4 text-platinum">
            {{ $t('footer.navigation') }}
          </h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#header"
                class="text-sm text-platinum/60 transition-colors hover:text-gold"
              >
                {{ $t('footer.about.us') }}
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                class="text-sm text-platinum/60 transition-colors hover:text-gold"
              >
                {{ $t('footer.contacts') }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="mb-4 text-platinum">
            {{ $t('footer.services') }}
          </h4>
          <ul class="space-y-2">
            <li>
              <span class="text-sm text-platinum/60">
                {{ $t('footer.services.haircut') }}
              </span>
            </li>
            <li>
              <span class="text-sm text-platinum/60">
                {{ $t('footer.services.beard') }}
              </span>
            </li>
            <li>
              <span class="text-sm text-platinum/60">
                {{ $t('footer.services.shaving') }}
              </span>
            </li>
            <li>
              <span class="text-sm text-platinum/60">
                {{ $t('footer.services.hair.care') }}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="mb-4 text-platinum">
            {{ $t('footer.contacts') }}
          </h4>
          <ul class="h-card space-y-3">
            <li class="flex items-center gap-2">
              <IconPhone class="size-6 text-gold" aria-hidden="true" />
              <a
                class="tel text-sm text-platinum/60"
                :href="`tel:${$t('app.phone.unformatted')}`"
              >
                {{ $t('app.phone') }}
              </a>
            </li>
            <li class="flex items-center gap-2">
              <IconTelegram class="size-6 text-gold" aria-hidden="true" />
              <a
                class="text-sm text-platinum/60 transition-colors hover:text-gold"
                :href="`https://t.me/${$t('app.telegram')}`"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="$t('footer.telegram.aria')"
              >
                @{{ $t('app.telegram') }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-col items-center border-t border-oxford-navy pt-8 text-center md:flex-row md:justify-between"
      >
        <p class="text-sm text-platinum/70">
          © {{ new Date().getFullYear() }} {{ $t('app.riot') }}
          {{ $t('app.barbershop') }}
        </p>
        <p class="mt-2 text-xs text-platinum/70">
          {{ $t('footer.developed.by') }}
          <a
            :href="
              locale === 'en'
                ? 'https://yevudo.dev/en'
                : 'https://yevudo.dev/uk'
            "
            target="_blank"
            class="underline underline-offset-4 transition-colors hover:text-gold"
          >
            {{ $t('footer.developer.name') }}
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
