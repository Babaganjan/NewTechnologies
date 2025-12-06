import type { BreadcrumbList, Organization, Product, WebSite, WithContext } from 'schema-dts';

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NTOUCH',
    legalName: 'ТОО «Новые Технологии – Тараз»',
    url: 'https://ntouch.kz',
    logo: 'https://ntouch.kz/img/logo.svg',

    description:
      'Комплексные решения по безопасности в Казахстане: видеонаблюдение, СКУД, системы контроля доступа, охранно-пожарная сигнализация, системы пожаротушения и оповещения. Более 500 реализованных проектов, включая проект "Комфортная школа" при поддержке фонда "Самрук-Казына".',

    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        availableLanguage: ['Russian', 'Kazakh'],
        areaServed: 'KZ',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        availableLanguage: ['Russian', 'Kazakh'],
        areaServed: 'KZ',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        availableLanguage: ['Russian', 'Kazakh'],
        areaServed: 'KZ',
      },
    ],

    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Астана',
        addressRegion: 'Нуринскому району',
        addressCountry: 'KZ',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Алматы',
        addressRegion: 'Жамбылская область',
        addressCountry: 'KZ',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Тараз',
        addressRegion: 'Жамбылская область',
        addressCountry: 'KZ',
      },
    ],

    knowsAbout: [
      'Видеонаблюдение',
      'IP-камеры',
      'СКУД',
      'Системы контроля доступа',
      'Турникеты',
      'Охранно-пожарная сигнализация',
      'Системы пожаротушения',
      'Системы оповещения',
      'IT-решения для государственных организаций',
      'IT-решения для частного бизнеса',
      'Проект Комфортная школа',
      'Система Антибуллинг',
      'Сетевое оборудование',
      'Видеорегистраторы NVR',
      'Серверные шкафы',
      'PoE коммутаторы',
    ],

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги и продукция NTOUCH',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Видеонаблюдение под ключ',
            description:
              'Проектирование и монтаж систем видеонаблюдения любой сложности. Установка IP-камер, видеорегистраторов, настройка удаленного доступа.',
            provider: {
              '@type': 'Organization',
              name: 'NTOUCH',
            },
            areaServed: 'KZ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'СКУД - Системы контроля и управления доступом',
            description:
              'Установка и настройка систем контроля доступа, включая турникеты, электронные замки, биометрию.',
            provider: {
              '@type': 'Organization',
              name: 'NTOUCH',
            },
            areaServed: 'KZ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Охранно-пожарная сигнализация (ОПС)',
            description:
              'Проектирование и монтаж охранно-пожарной сигнализации для объектов любой сложности.',
            provider: {
              '@type': 'Organization',
              name: 'NTOUCH',
            },
            areaServed: 'KZ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Системы пожаротушения',
            description: 'Автоматические системы пожаротушения различных типов.',
            provider: {
              '@type': 'Organization',
              name: 'NTOUCH',
            },
            areaServed: 'KZ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Системы оповещения и управления эвакуацией',
            description: 'Установка систем оповещения о пожаре и управления эвакуацией.',
            provider: {
              '@type': 'Organization',
              name: 'NTOUCH',
            },
            areaServed: 'KZ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT-решения для государственных и частных организаций',
            description:
              'Комплексные IT-решения, включая реализацию проекта "Комфортная школа" и системы "Антибуллинг".',
            provider: {
              '@type': 'Organization',
              name: 'NTOUCH',
            },
            areaServed: 'KZ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Обучение работе с оборудованием NTOUCH',
            description:
              'Профессиональные тренинги и семинары для интеграторов и конечных пользователей.',
            provider: {
              '@type': 'Organization',
              name: 'NTOUCH',
            },
            areaServed: 'KZ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'IP-камеры NTOUCH',
            description:
              'Сетевые камеры видеонаблюдения от 2MP до 8MP (4K) с AI-функциями, распознаванием лиц и интеллектуальной аналитикой.',
            brand: {
              '@type': 'Brand',
              name: 'NTOUCH',
            },
            category: 'Видеокамеры наблюдения',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Видеорегистраторы NVR NTOUCH',
            description:
              'Сетевые видеорегистраторы от 8 до 32 каналов с поддержкой AI, распознавания лиц и периметральной охраны.',
            brand: {
              '@type': 'Brand',
              name: 'NTOUCH',
            },
            category: 'Видеорегистраторы',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Турникеты NTOUCH',
            description:
              'Полноростовые, тумбовые турникеты и триподы для контроля доступа с интеграцией в СКУД.',
            brand: {
              '@type': 'Brand',
              name: 'NTOUCH',
            },
            category: 'Системы контроля доступа',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Коммутаторы PoE NTOUCH',
            description:
              'Сетевые коммутаторы с поддержкой PoE от 8 до 24 портов для систем видеонаблюдения.',
            brand: {
              '@type': 'Brand',
              name: 'NTOUCH',
            },
            category: 'Сетевое оборудование',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Серверные шкафы NTOUCH',
            description:
              'Настенные серверные шкафы 19 дюймов серии 450 и 600 для телекоммуникационного оборудования.',
            brand: {
              '@type': 'Brand',
              name: 'NTOUCH',
            },
            category: 'Серверное оборудование',
          },
        },
      ],
    },

    areaServed: {
      '@type': 'Country',
      name: 'Kazakhstan',
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://ntouch.kz${item.url}`,
    })),
  };
}

export function generateCameraProductSchema(camera: {
  model: string;
  name: string;
  description: string;
  image: string;
  resolution?: string;
  features?: string[];
}): WithContext<Product> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${camera.name} ${camera.model}`,
    model: camera.model,
    description: camera.description,
    brand: {
      '@type': 'Brand',
      name: 'NTOUCH',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'NTOUCH',
    },
    image: camera.image,
    category: 'IP-камеры видеонаблюдения',
    ...(camera.resolution && {
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Разрешение',
          value: camera.resolution,
        },
        ...(camera.features || []).map((feature) => ({
          '@type': 'PropertyValue' as const,
          name: 'Особенность',
          value: feature,
        })),
      ],
    }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'KZT',
      seller: {
        '@type': 'Organization',
        name: 'NTOUCH',
        url: 'https://ntouch.kz',
      },
    },
  };
}

export function generateNVRProductSchema(nvr: {
  model: string;
  name: string;
  description: string;
  image: string;
  channels?: string;
  resolution?: string;
  features?: string[];
}): WithContext<Product> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${nvr.name} ${nvr.model}`,
    model: nvr.model,
    description: nvr.description,
    brand: {
      '@type': 'Brand',
      name: 'NTOUCH',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'NTOUCH',
    },
    image: nvr.image,
    category: 'Сетевые видеорегистраторы',
    ...(nvr.channels && {
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Количество каналов',
          value: nvr.channels,
        },
        ...(nvr.resolution
          ? [
              {
                '@type': 'PropertyValue' as const,
                name: 'Максимальное разрешение',
                value: nvr.resolution,
              },
            ]
          : []),
        ...(nvr.features || []).map((feature) => ({
          '@type': 'PropertyValue' as const,
          name: 'Особенность',
          value: feature,
        })),
      ],
    }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'KZT',
      seller: {
        '@type': 'Organization',
        name: 'NTOUCH',
        url: 'https://ntouch.kz',
      },
    },
  };
}

export function generateTurnstileProductSchema(turnstile: {
  model: string;
  name: string;
  description: string;
  image: string;
  features?: string[];
}): WithContext<Product> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${turnstile.name} ${turnstile.model}`,
    model: turnstile.model,
    description: turnstile.description,
    brand: {
      '@type': 'Brand',
      name: 'NTOUCH',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'NTOUCH',
    },
    image: turnstile.image,
    category: 'Турникеты и системы контроля доступа',
    ...(turnstile.features &&
      turnstile.features.length > 0 && {
        additionalProperty: turnstile.features.map((feature) => ({
          '@type': 'PropertyValue' as const,
          name: 'Особенность',
          value: feature,
        })),
      }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'KZT',
      seller: {
        '@type': 'Organization',
        name: 'NTOUCH',
        url: 'https://ntouch.kz',
      },
    },
  };
}

export function generateSwitchProductSchema(switchProduct: {
  model: string;
  name: string;
  description: string;
  image: string;
  ports?: string;
  power?: string;
  features?: string[];
}): WithContext<Product> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${switchProduct.name} ${switchProduct.model}`,
    model: switchProduct.model,
    description: switchProduct.description,
    brand: {
      '@type': 'Brand',
      name: 'NTOUCH',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'NTOUCH',
    },
    image: switchProduct.image,
    category: 'Сетевые коммутаторы PoE',
    ...(switchProduct.ports && {
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Количество портов',
          value: switchProduct.ports,
        },
        ...(switchProduct.power
          ? [
              {
                '@type': 'PropertyValue' as const,
                name: 'Мощность PoE',
                value: switchProduct.power,
              },
            ]
          : []),
        ...(switchProduct.features || []).map((feature) => ({
          '@type': 'PropertyValue' as const,
          name: 'Особенность',
          value: feature,
        })),
      ],
    }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'KZT',
      seller: {
        '@type': 'Organization',
        name: 'NTOUCH',
        url: 'https://ntouch.kz',
      },
    },
  };
}

export function generateServerCabinetProductSchema(cabinet: {
  model: string;
  name: string;
  description: string;
  image: string;
  size?: string;
  features?: string[];
}): WithContext<Product> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${cabinet.name} ${cabinet.model}`,
    model: cabinet.model,
    description: cabinet.description,
    brand: {
      '@type': 'Brand',
      name: 'NTOUCH',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'NTOUCH',
    },
    image: cabinet.image,
    category: 'Серверные шкафы 19 дюймов',
    ...(cabinet.size && {
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Размер',
          value: cabinet.size,
        },
        ...(cabinet.features || []).map((feature) => ({
          '@type': 'PropertyValue' as const,
          name: 'Особенность',
          value: feature,
        })),
      ],
    }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'KZT',
      seller: {
        '@type': 'Organization',
        name: 'NTOUCH',
        url: 'https://ntouch.kz',
      },
    },
  };
}

export function generateWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NTOUCH',
    alternateName: 'ТОО «Новые Технологии – Тараз»',
    url: 'https://ntouch.kz',
    description:
      'Системы безопасности и видеонаблюдения в Казахстане. Видеонаблюдение, СКУД, ОПС, турникеты, сетевое оборудование.',
    inLanguage: 'ru-RU',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ntouch.kz/search?q={search_term_string}',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'NTOUCH',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ntouch.kz/logo.png',
      },
    },
  };
}
