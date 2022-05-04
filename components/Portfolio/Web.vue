<template>
  <div class="mt-3 border border-warning ml-1">
    <h3 class="d-flex justify-content-center mt-3 text-dark font-weight-bold">
      <u>WEB</u>
    </h3>

    <b-container>
      <div
        v-for="(image, i) in images"
        :key="i"
        class="d-md-flex justify-content-around py-4"
      >
        <div class="mt-md-5">
          <a id="header-link" class="px-md-5 text-success" target="_blank">
            {{ image.header }}
          </a>
          <h4 class="px-md-5 text-dark">{{ image.description }}</h4>
          <div class="px-md-5">
            <a target="_blank" :href="image.url">
              <b-button variant="danger">View it here</b-button></a
            >
            <a target="_blank" href="https://github.com/Gideon-kirimanjaro"
              ><b-button variant="success">My Github</b-button></a
            >
          </div>
        </div>
        <div class="ml-xsm-5">
          <img
            class="mt-2"
            width="320"
            height="330"
            :src="require(`~/assets/${image.name}.jpg`)"
            alt=""
          />
          <hr
            style="width: 100%; text-align: left; margin-right: 0 height:2px;border;color:gray;background-color:yellow"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center mb-2">
        <NuxtLink target="_blank" to="/internet">
          <b-button variant="success">Show more</b-button></NuxtLink
        >
      </div>
    </b-container>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'Web',
  components: {},
  data: () => {
    return {
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
    }
  },
}
</script>

<style scoped>
body {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Regular.ttf');
  background-color: #fee715ff;
}

#header-link {
  color: rgb(116, 168, 11);
  font-size: 23px;
  font-weight: bolder;
}
</style>
