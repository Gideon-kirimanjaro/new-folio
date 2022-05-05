import Vuex from 'vuex'
import imageModule from './modules/web'

const store = new Vuex.Store({
  modules: {
    imageModule,
  },
})
export default store
export const state = () => ({
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
  netData: [
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
})
// Mutations
export const mutations = {
  sortData(state) {
    // eslint-disable-next-line array-callback-return
  },
}
// Actions
export const actions = {}
// getters
export const getters = {}
