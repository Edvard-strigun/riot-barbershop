<script setup lang="ts">
  import IconScissors from '~/assets/icons/scissors.svg';
  import IconMouse from '~/assets/icons/mouse.svg';
  import IconHand from '~/assets/icons/hand.svg';
</script>

<template>
  <header id="header" class="bg-header flex min-h-screen flex-col">
    <div class="container mx-auto my-auto">
      <div
        aria-hidden="true"
        class="mx-auto mb-6 flex w-max items-center gap-4"
      >
        <div class="h-px w-16 bg-linear-to-r from-transparent to-gold"></div>
        <IconScissors class="size-10 fill-gold" />
        <div class="h-px w-16 bg-linear-to-l from-transparent to-gold"></div>
      </div>
      <h1
        class="mb-8 flex flex-col gap-2 text-center font-heading text-5xl font-bold"
      >
        <span class="p-name text-gold">{{ $t('app.riot') }}</span>
        <span>{{ $t('app.barbershop') }}</span>
      </h1>
      <p class="mb-8 text-center font-light">
        {{ $t('app.riot.description') }}
      </p>
      <BtnBookNow>{{ $t('header.action.book') }}</BtnBookNow>
      <a
        href="https://maps.app.goo.gl/2nKV54zg6epBHkhS6"
        target="_blank"
        rel="noopener noreferrer"
        class="text-platinum/60 hover:underline hover:underline-offset-4"
      >
        <address class="adr mb-2 block text-center not-italic">
          <span class="street-address">{{ $t('header.address') }}</span>
        </address>
      </a>
      <a
        class="tel mx-auto block w-max text-gold"
        :href="`tel:${$t('app.phone.unformatted')}`"
      >
        {{ $t('app.phone') }}
      </a>
    </div>
    <IconMouse
      aria-hidden="true"
      class="animate-mouse mx-auto mt-auto mb-6 hidden size-10 text-gold lg:block"
    />
    <div
      class="relative mx-auto mt-auto mb-6 size-10 lg:hidden"
      aria-hidden="true"
    >
      <IconHand class="animated-hand" />
      <div class="circles"></div>
    </div>
    <LangSwitcher class="order-first" />
  </header>
</template>

<style scoped>
  @keyframes mouse-move {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  .animate-mouse {
    animation: mouse-move 3s ease-in-out infinite;
  }

  @keyframes hand-touch {
    0% {
      transform: scale(1) translateY(0);
    }
    25% {
      transform: scale(0.9) translateY(0);
    }
    50% {
      transform: scale(0.9) translateY(-15px);
    }
    75% {
      transform: scale(1) translateY(-15px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  .animated-hand {
    position: absolute;
    top: 0;
    z-index: 10;
    fill: var(--color-gold);
    animation: hand-touch 3s ease-in-out infinite;
  }

  @keyframes move-up {
    0%,
    25% {
      transform: translateY(0);
    }
    50%,
    75% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .circles {
    position: absolute;
    top: 0px;
    left: 11px;
    width: 12px;
    height: 12px;
    animation: move-up 3s ease-in-out infinite;
  }

  @keyframes ripple {
    0%,
    10% {
      transform: scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    75% {
      transform: scale(2);
      opacity: 0;
    }
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .circles::before,
  .circles::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-gold);
    border-radius: 50%;
    animation: ripple 3s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-mouse,
    .animated-hand,
    .circles::before,
    .circles::after {
      animation: none;
    }
  }
</style>
