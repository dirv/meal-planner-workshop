import { JSDOM } from 'jsdom'

resetDom()

export function resetDom(windowUrl) {
  global.window = new JSDOM('', {url: windowUrl}).window
  global.document = global.window.document
  global.navigator = global.window.navigator
  window.fetch = () => {json: () => ''}
}
