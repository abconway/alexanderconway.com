import { expect } from 'chai'
import { shallow } from '@vue/test-utils'
import Bio from '@/components/Bio.vue'

describe('Bio.vue', () => {
  it('renders "I am a former Chemical Engineer and self-taught Software Engineer."', () => {
    const wrapper = shallow(Bio, {})
    expect(wrapper.text()).to.include('I am a former Chemical Engineer and self-taught Software Engineer.')
  })
  it('renders "I am currently a Lead Software Engineer at Voxy, an online platform for English language learning."', () => {
    const wrapper = shallow(Bio, {})
    expect(wrapper.text()).to.include('I am currently a Lead Software Engineer at Voxy, an online platform for English language learning.')
  })
  it('renders "In my free time I enjoy cooking, playing board games, and seeing Broadway shows."', () => {
    const wrapper = shallow(Bio, {})
    expect(wrapper.text()).to.include('In my free time I enjoy cooking, playing board games, and seeing Broadway shows.')
  })
})
