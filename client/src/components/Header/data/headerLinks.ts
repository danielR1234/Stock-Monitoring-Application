export const primaryLinks: primaryCollectionType = {
  stocks: [
    {
      text: 'stock',
      items: [
        {
          url: '/stock/data',
          text: 'data',
        },
        {
          url: '/stock/news',
          text: 'news',
        },
      ],
    },
  ],

  crypto: [
    {
      text: 'crypto',
      items: [
        {
          url: '/stock/data',
          text: 'data',
        },
        {
          url: '/stock/news',
          text: 'news',
        },
      ],
    },
  ],
}

export const userLinks: userCollectionType = {
  user: [
    { url: '/profile', text: 'profile' },
    { url: '/yourstocks', text: 'your stocks' },
    { url: '/yourcryptos', text: 'your crypos' },
    { url: '/yourstocknews', text: 'your stock news' },
    { url: '/yourcryptonews', text: 'your crypto news' },
  ],
}

type primaryCollectionType = {
  stocks: navLinkType[]
  crypto: navLinkType[]
}

type userCollectionType = {
  user: navLinkType[]
}

export type navLinkType = {
  text: string
  url?: string
  items?: navLinkType[]
}

export default { primaryLinks, userLinks }
