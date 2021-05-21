import { mount } from '@vue/test-utils'
import LoginButton from '@/components/LoginButton.vue'

describe( 'LoginButton', ()=>{

    test('Если пользователь не вошел, то показывается кнопка «Login»', ()=>{
        const wrapper = mount(LoginButton);
        expect(wrapper.find('button[id="login"]').isVisible()).toBe(true)
    })
    
    test('Если пользователь не вошел, то не показывается кнопка «Logout»', ()=>{
        const wrapper = mount(LoginButton);
        expect(wrapper.find('button[id="logout"]').isVisible()).toBe(false)
    })

    test('Если пользователь вошел, то показывается кнопка «Logout»', async ()=>{
        const wrapper = mount(LoginButton);
        wrapper.setData({ loggedIn: true })
        await wrapper.vm.$nextTick() 
        expect(wrapper.find('button[id="logout"]').isVisible()).toBe(true)
    })

    test('Если пользователь вошел, то не показывается кнопка «Login»', async()=>{
        const wrapper = mount(LoginButton);
        wrapper.setData({ loggedIn: true })
        await wrapper.vm.$nextTick() 
        expect(wrapper.find('button[id="login"]').isVisible()).toBe(false)
    })


} )