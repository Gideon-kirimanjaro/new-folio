import { url, get, setupTest } from '@nuxt/test-utils'
describe('ssr', () => {
  setupTest({ server: true })

  it('renders the index page', async () => {
    // eslint-disable-next-line no-unused-vars
    const thePage = await url('/page')
    // is something like 'http://localhost:6840/page'
  })
})
describe('ssr', () => {
  setupTest({ server: true })

  it('renders the index page', async () => {
    const { body } = await get('/')

    expect(body).toContain('<a>A Link</a>')
  })
})
