import app from '@src/app.vue'
import nameFinder from '@src/components/name-finder/name-finder.vue';


describe('App data is a func', () => {
  it('has data 3', () => {
    expect(typeof App.setup).toBe('function')
  })
})