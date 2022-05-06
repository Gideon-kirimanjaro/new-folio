export const state = () => ({
  images: [
    {
      id: Math.random(),
      name: 'site0',
      url: 'https://limuru-moe-visitors-app.netlify.app/',
      hub: 'https://github.com/Gideon-kirimanjaro/visitors-App-React',
      description:
        ' I was tired of the old boring visitors book that most offices still use so I decided to make a web app. The oldies had resisted it but they soon came to love it. When you see a problem, dont sulk, make an app.',
      header: 'Visitors web App',
    },
    {
      id: Math.random(),
      name: 'site1',
      url: 'https://kirim-store.netlify.app/',
      hub: 'https://github.com/Gideon-kirimanjaro/kirim-market-site/tree/master/client-site',
      description:
        'This is a simple market place for vendors to sell their products through Whatsapp. This was one of my first projects when I learnt how to code. ',
      header: 'Fruit Market',
    },
    {
      id: Math.random(),
      name: 'site2',
      url: 'https://kirim-admin.netlify.app/',
      description:
        'This is a prototype of a football analytics dashboard with fixtures, standings and full analytics. The fixtures are stored in a firebase database through an API.',
      header: 'Football Admin Dashboard',
    },
    {
      id: Math.random(),
      name: 'site3',
      url: 'https://kirim-football.netlify.app/',
      description:
        'This the client side of the football Admin dashboard above. The site Fetches data from a Firebase database through a select API. ',
      header: 'Football Analytics',
    },
    {
      id: Math.random(),
      name: 'site4',
      url: 'https://kirimanjarodev.wordpress.com/',
      description:
        'This is my personal blog where I blog about Programming, Mathematics, technology and current Issues facing our society. This blog has more than 800 subscribers.',
      header: 'Personal blog',
    },
    {
      id: Math.random(),
      name: 'site5',
      url: 'https://cema.africa/',
      description:
        'This is a website that belongs to the University of Nairobi. The Centre for Epidimiological Modelling and Analysis (CEMA) site was a joint project with my mentor Christopher "GoodLife" Ndugo, tech lead @ UX Craft Ltd. The site is made on Nuxt JS and the Ghost CMS.',
      header: 'CEMA Website',
    },
  ],
})
// mutations: { ... },
// actions: { ... },
// getters: { ... }
