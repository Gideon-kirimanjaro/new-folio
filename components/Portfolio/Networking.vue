<template>
  <div id="network" class="mt-3">
    <h3
      class="d-flex justify-content-center mt-3 text-warning font-weight-bold"
    >
      <u>Networking & Support</u>
    </h3>

    <b-container>
      <div
        v-for="(image, i) in images"
        :key="i"
        class="d-md-flex justify-content-around py-4"
      >
        <div class="pl-sm-5">
          <img
            class="mt-2"
            width="320"
            height="330"
            :src="require(`@/static/images/${image.name}`)"
            alt=""
          />
        </div>
        <div class="mt-md-5">
          <a id="header-link" class="px-md-5 text-warning" target="_blank">
            {{ image.header }}
          </a>
          <h4 class="px-md-5 text-light">{{ image.description }}.</h4>
          <div class="px-5">
            <a target="_blank" :href="image.url">
              <b-button variant="success">View it here</b-button></a
            >
          </div>
          <hr
            style="width: 100%; text-align: left; margin-right: 0 height:2px;border;color:gray;background-color:yellow"
          />
        </div>
      </div>
    </b-container>
    <!-- <h4 class="d-flex justify-content-center text-danger">
      More Uploads coming soon!
    </h4> -->
    <div class="d-flex justify-content-center">
      <NuxtLink target="_blank" to="/support">
        <b-button variant="success">Show more</b-button></NuxtLink
      >
    </div>
    <Slider></Slider>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from '../Portfolio/Slider'
export default {
  name: 'Networking',
  components: {
    Slider,
  },
  data: () => {
    return {
      images: [
        {
          id: Math.random(),
          name: 'MOE.png',
          url: 'https://kirim-store.netlify.app/',

          description:
            'I was part of the Digital Literacy Programme spearheaded by the Ministry of Education. I was in charge of Limuru sub-county, Kiambu county where I made sure that technology was seamlessly integrated into education.This is a very big achievement for me as 65 schools and more than 1000 students were helped through my input. This effort was well recognized by the CS for education, Prof. George Magoha when he made a courtesy visit to the sub-county',
          header: 'Ministry of Education',
        },
        {
          id: Math.random(),
          name: 'ODPP.jpg',
          url: 'https://kirim-admin.netlify.app/',
          description:
            'I was a technical support officer and my role ensured the delivery of justice to all Kenyan citizens. My major  achievements include; trainig & support of prosecutors in the use of the Uadilifu case management system. Participating in ICT support, data analysis and cyber security for critical departments  which are:Anti-Corruption, Anti-money laundering, International Crimes, aCounter-Terrorism divisions, international crimes, conventional crimes, county affairs, Prosecution Training Institute (PTI), and corporate services.',
          header: 'Office of the Director of Public Prosecutions',
        },
        {
          id: Math.random(),
          name: 'BAT.jpg',
          url: 'https://kirim-football.netlify.app/',
          description:
            'I was part of a team that did full-building networking and data center installation for the British American Tobacco. This was a big project that required pin point precision and critical thinking. The roles included: correct installation of ethernet cables, termination of end points for telephone and internet, setting up of servers, routers and hubs, splicing of fiber optic cables and ICT equipment installation. This is one of my capstone projects as it re-enforced my skills. ',
          header: 'British American Tobacco',
        },
        {
          id: Math.random(),
          name: 'KTDA.png',
          url: 'https://kirimanjarodev.wordpress.com/',
          description:
            'I was part of a team that did full-building networking and data center installation for the Kenya Tea Development Agency, main office.  The roles included: correct installation of ethernet cables, termination of end points for telephone and internet, setting up of servers, routers and hubs, splicing of fiber optic cables and ICT equipment installation. ',
          header: 'Kenya Tea Development Agency',
        },
      ],
    }
  },
}
</script>

<style scoped>
#network {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Regular.ttf');
  background-color: blueviolet;
}

#header-link {
  color: rgb(116, 168, 11);
  font-size: 23px;
  font-weight: bolder;
}
</style>
