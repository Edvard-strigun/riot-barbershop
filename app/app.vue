<script setup lang="ts">
  import ImageBgDesktop from '~/assets/images/bg-header-desktop.webp?url';
  import ImageBgTablet from '~/assets/images/bg-header-tablet.webp?url';
  import ImageBgMobile from '~/assets/images/bg-header-mobile.webp?url';

  const { locale, t } = useI18n();

  const localeFormatted = computed(() =>
    locale.value === 'uk' ? 'uk_UA' : 'en_US'
  );

  const siteUrl = 'https://edvard-strigun.github.io/riot-barbershop/';

  const pageTitle = computed(() => t('organization.name'));
  const pageDescription = computed(() => t('organization.description'));

  useHead({
    htmlAttrs: {
      lang: locale.value,
    },
    style: [
      {
        innerHTML: `:root { --bg-header-mobile: url('${ImageBgMobile}'); --bg-header-tablet: url('${ImageBgTablet}'); --bg-header-desktop: url('${ImageBgDesktop}'); }`,
      },
    ],
    link: [
      {
        rel: 'preload',
        as: 'image',
        href: ImageBgDesktop,
        fetchpriority: 'high',
        media: '(min-width: 1024px)',
      },
      {
        rel: 'preload',
        as: 'image',
        href: ImageBgTablet,
        fetchpriority: 'high',
        media: '(min-width: 640px) and (max-width: 1023px)',
      },
      {
        rel: 'preload',
        as: 'image',
        href: ImageBgMobile,
        fetchpriority: 'high',
        media: '(max-width: 639px)',
      },
      {
        rel: 'canonical',
        href: siteUrl,
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: `${siteUrl}en`,
      },
      {
        rel: 'alternate',
        hreflang: 'uk',
        href: `${siteUrl}uk`,
      },
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: siteUrl,
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${siteUrl}favicon.ico`,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: `${siteUrl}apple-touch-icon.png`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: `${siteUrl}favicon-96x96.png`,
      },
      {
        rel: 'manifest',
        href: `${siteUrl}site.webmanifest`,
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: () =>
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: t('organization.name'),
            url: siteUrl,
            logo: `${siteUrl}logo.png`,
          }),
      },
      {
        type: 'application/ld+json',
        innerHTML: () =>
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: t('organization.name'),
            image: `${siteUrl}logo.png`,
            description: t('organization.description'),
            address: {
              '@type': 'PostalAddress',
              streetAddress: t('organization.address.street.address'),
              addressLocality: t('organization.address.address.locality'),
              postalCode: t('organization.address.postal.code'),
              addressCountry: t('organization.address.address.country'),
            },
            telephone: t('organization.telephone'),
            priceRange: '$$',
            // openingHoursSpecification: [
            //   {
            //     '@type': 'OpeningHoursSpecification',
            //     dayOfWeek: [
            //       'Monday',
            //       'Tuesday',
            //       'Wednesday',
            //       'Thursday',
            //       'Friday',
            //     ],
            //     opens: '10:00',
            //     closes: '20:00',
            //   },
            //   {
            //     '@type': 'OpeningHoursSpecification',
            //     dayOfWeek: ['Saturday', 'Sunday'],
            //     opens: '10:00',
            //     closes: '18:00',
            //   },
            // ],
          }),
      },
    ],
  });

  useSeoMeta({
    title: pageTitle.value,
    description: pageDescription.value,
    author: t('organization.developer.name'),
    keywords:
      'barbershop, haircut, beard, shaving, Kyiv, RIOT, professional grooming',
    robots: 'index, follow',
    ogTitle: pageTitle.value,
    ogDescription: pageDescription.value,
    ogType: 'profile',
    ogUrl: `${siteUrl}/${locale.value}`,
    ogImage: `${siteUrl}/og-image.png`,
    ogImageAlt: pageTitle.value,
    ogImageWidth: '1200',
    ogImageHeight: '630',
    ogImageType: 'image/png',
    ogLocale: localeFormatted.value,
    ogLocaleAlternate: localeFormatted.value === 'uk_UA' ? 'en_US' : 'uk_UA',
    twitterCard: 'summary_large_image',
    twitterTitle: pageTitle.value,
    twitterDescription: pageDescription.value,
    twitterImage: `${siteUrl}/og-image.png`,
    twitterImageAlt: pageTitle.value,
  });
</script>

<template>
  <NuxtPage />
</template>
