import {assert, fixture, html} from '@open-wc/testing'
import '../src/time-select-element'

describe('time-select', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('time-select')
      assert.equal('TIME-SELECT', el.nodeName)
    })

    it('creates from constructor', function () {
      const el = new window.TimeSelectElement()
      assert.equal('TIME-SELECT', el.nodeName)
    })
  })

  describe('after tree insertion', function () {
    beforeEach(async function () {
      await fixture(html` <time-select></time-select>`)
    })

    it('initiates', function () {
      const ce = document.querySelector('time-select')
      assert.equal(ce?.textContent, ':wave:')
    })
  })
})
