import { expect } from 'chai'
import { shallow } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Hello.vue', () => {
  it('renders "Welcome to my website."', () => {
    const wrapper = shallow(Home, {})
    expect(wrapper.text()).to.include('Welcome to my website.')
  })
})
