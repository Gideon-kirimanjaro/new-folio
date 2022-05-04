/* eslint-disable no-console */ /* eslint-disable no-console */
<template>
  <div id="dash" class="d-md-flex p-sm-5 mt-sm-3">
    <b-container>
      <div
        v-for="item in dashBoards"
        :key="item.key"
        class="d-md-flex justify-content-around py-4"
      >
        <div class="pl-sm-5">
          <iframe
            target="_blank"
            :title="item.title"
            width="500"
            height="400"
            :src="item.src"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div class="mt-md-5">
          <a id="header-link" class="px-md-5" target="_blank">
            {{ item.title }}
          </a>
          <h4 class="px-md-5 text-light">{{ item.description }}.</h4>
          <div class="px-5">
            <a target="_blank" href="image.url">
              <b-button variant="success">View it here</b-button></a
            >
          </div>
          <hr
            style="width: 100%; text-align: left; margin-right: 0 height:2px;border;color:gray;background-color:yellow"
          />
        </div>
      </div>
      <Contact />
    </b-container>
  </div>
</template>

<script>
// import FolioCard from '../UI/FolioCard'
import Contact from '../components/Contact/Contact'
export default {
  name: 'Dash',
  components: { Contact },
  data: () => {
    return {
      dashBoards: [
        //
        {
          key: Math.random(),
          title: 'COVID-19 Statics',
          description:
            'This dashboard is an analysis on the state of COVID-19 in all African countries for the year 2020',
          src: 'https://app.powerbi.com/view?r=eyJrIjoiNDg1MTBmYTQtNmI5Ny00MWY3LWI1NTEtZTUyMDk1YmJhYTdlIiwidCI6IjJkYzk0ZDczLWE4ZWMtNGRjYS04NGEwLTBjZjRmMjdmOTVkOCJ9&embedImagePlaceholder=true&pageName=ReportSection3c6f3f86d026ed44ad34',
        },
        {
          key: Math.random(),
          title: 'Suicide Rates',
          description:
            'The analytics of this dashboard tell a story of the suicide rates in select countries',
          src: 'https://app.powerbi.com/view?r=eyJrIjoiMDIwNjA0ODMtNDM4Ni00NWY1LWE2ZmQtODVmODNkZGJjNDRjIiwidCI6IjJkYzk0ZDczLWE4ZWMtNGRjYS04NGEwLTBjZjRmMjdmOTVkOCJ9&embedImagePlaceholder=true&pageName=ReportSection',
        },
        {
          key: Math.random(),
          title: 'Kenya Expenditure',
          description:
            'The dashboard describes the expenditure of each ministry in Kenya for the year 2020',
          src: 'https://app.powerbi.com/view?r=eyJrIjoiZDEyNTUxMGItOWQ2YS00M2I0LWJmYjAtNDZkYmQ1MDU5ZjE5IiwidCI6IjJkYzk0ZDczLWE4ZWMtNGRjYS04NGEwLTBjZjRmMjdmOTVkOCJ9&embedImagePlaceholder=true&pageName=ReportSectionbf055913e7a5b5b2d7c5',
        },
        {
          key: Math.random(),
          title: 'Video Game Sales',
          description:
            'The dashboars tells a story of the sales of the most popular games in the world',
          src: 'https://app.powerbi.com/view?r=eyJrIjoiMjc3OTAyNDEtMmU5Ny00ODBiLTlhZTUtN2UxOGY2MDI4YzUyIiwidCI6IjJkYzk0ZDczLWE4ZWMtNGRjYS04NGEwLTBjZjRmMjdmOTVkOCJ9&embedImagePlaceholder=true&pageName=ReportSection',
        },
      ],
    }
  },
  // created() {
  //   this.fetchDash()
  // },
  methods: {
    fetchDash() {},
  },
}
</script>

<style scoped>
h5,
h4 {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Black.ttf');
  padding: 0%;
  box-sizing: border-box;
  margin: 0%;
}
#dash {
  background-color: #ff69b4;
}
#header-link {
  color: #00ffff;
  font-size: 20px;
  font-weight: bolder;
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Black.ttf');
}
</style>
