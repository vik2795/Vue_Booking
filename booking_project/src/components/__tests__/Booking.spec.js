import { describe, it, expect, beforeEach } from 'vitest'
import ArtistView from '../ArtistsView.vue'
import BookingView from '../BookingView.vue'
import {useCounterStore} from '@/stores/counter'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

describe('Booking',()=>
{
  beforeEach(()=>{
    setActivePinia(createPinia())
  })

  it('megjelenés',()=>{
    const wrapper=mount(BookingView)
    expect(wrapper.text().toContain('Booking'))
  })

  it('megjelenés',()=>{
    const wrapper=mount(ArtistView)
    expect(wrapper.text().toContain('Artist'))
  })

})

