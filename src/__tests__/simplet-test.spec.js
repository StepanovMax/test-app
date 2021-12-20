// import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

// console.log('typeof App.data', typeof App.data)

describe('Simple test 1', () => {
  it('has data 1', () => {
    expect('1' + '3').toBe('13');
  })
})

describe('Simple test 2', () => {
  it('has data 2', () => {
    expect('1' + '4').toBe('14');
  })
})

describe('App data is a func', () => {
  it('has data 3', () => {
    expect(typeof App.data).toBe('function')
  })
})