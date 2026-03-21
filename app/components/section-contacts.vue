<script setup lang="ts">
  import IconMapPin from '~/assets/icons/map-pin.svg';
  import IconPhone from '~/assets/icons/phone.svg';
</script>

<template>
  <section id="contacts" class="bg-ink-black/90 px-4">
    <div class="container mx-auto py-12 lg:py-24">
      <div class="flex flex-col gap-6 lg:flex-row lg:gap-12">
        <div class="flex flex-col">
          <h2 class="mt-4 mb-6 text-4xl font-bold text-platinum">
            {{ $t('contacts.heading') }}
          </h2>
          <span class="order-first text-sm tracking-widest text-gold uppercase">
            {{ $t('contacts.title') }}
          </span>
          <p class="mb-12 text-platinum/60">
            {{ $t('contacts.description') }}
          </p>
          <div class="h-card mb-12 space-y-8">
            <div class="flex gap-4">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gold/10"
              >
                <IconMapPin class="size-6 text-gold" aria-hidden="true" />
              </div>
              <div class="adr">
                <p class="mb-1 text-sm text-platinum/60">
                  {{ $t('contacts.address') }}
                </p>
                <p class="street-address mb-1 text-platinum">
                  {{ $t('contacts.address.street') }}
                </p>
                <p class="locality text-sm text-platinum/60">
                  {{ $t('contacts.address.city') }}
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gold/10"
              >
                <IconPhone class="size-6 text-gold" aria-hidden="true" />
              </div>
              <div>
                <p class="mb-1 text-sm text-platinum/60">
                  {{ $t('contacts.phone') }}
                </p>
                <a
                  class="tel mb-1 text-platinum"
                  :href="`tel:${$t('app.phone.unformatted')}`"
                  >{{ $t('app.phone') }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative -mx-4 h-125 overflow-hidden rounded-lg lg:mx-0 lg:grow"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20304.473038859505!2d30.376424099999998!3d50.49585725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdceb3339ad3%3A0x3b5f64f99515e686!2sRiot%20Barbershop!5e0!3m2!1suk!2sua!4v1774104778960!5m2!1suk!2sua"
            width="100%"
            height="100%"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :title="$t('contacts.iframe.map.title')"
            class="border-0"
          ></iframe>
        </div>
      </div>

      <div class="mt-16 rounded-lg bg-ink-black p-12 text-center">
        <h3 class="mb-4 text-3xl font-normal text-white">
          {{ $t('contacts.card.title') }}
        </h3>
        <p class="mx-auto mb-8 max-w-2xl text-platinum/60">
          {{ $t('contacts.card.description') }}
        </p>
        <BtnBookNow>{{ $t('contacts.cta.book') }}</BtnBookNow>
      </div>
    </div>
  </section>
</template>
