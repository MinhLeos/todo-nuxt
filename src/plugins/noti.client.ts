
import { h, Teleport, createApp } from 'vue'
import { useShowNotification } from '~/stores/noti'

export default defineNuxtPlugin((nuxtApp) => {
    // nuxtApp.vueApp.provide('noti', (options: object) => {
    //     render(options)
    // })
    nuxtApp.vueApp
    let optionsDefault = {
        active: false,
        title: 'Notification',
        content: 'Show notification!',
        elementMinWidth: 300,
        elementMaxWidth: 700,
    }
    function init(options: object) {
        console.log('options', options)
        const useShowNoti = useShowNotification()
        if (options?.active) {

        }
        const MyComponent = h(
            'div',
            {
                class: 'notification-item',
                style: {
                    display: 'flex',
                    'justify-content': 'space-between',
                    padding: '10px',
                    color: '#fff',
                    'background-color': options?.status === 'error' ? '#f0080896' : '#84c44b',
                    'min-width': options?.elementMinWidth ? `${options.elementMinWidth}` : `${optionsDefault.elementMinWidth}px`,
                    'max-width': options?.elementMaxWidth ? `${options.elementMaxWidth}` : `${optionsDefault.elementMaxWidth}px`,
                }
            },
            [
                h('div', {}, [
                    h('h4', {}, options?.title ? `${options.title}` : `${optionsDefault.title}`),
                    h('p', {}, options?.content ? `${options.content}` : `${optionsDefault.content}`)
                ]),
                h('span', { 
                        style: {rotate: '45deg', display: 'inline-block', 'font-size': '25px', 'line-height': '25px', padding: '10px', cursor: 'pointer'},
                        onClick(event: Event){
                            console.log('click', event)
                            const body = document.querySelector('body')
                            const divRemove = document.querySelector('.notification')
                            if(divRemove){
                                body?.removeChild(divRemove)
                            }
                        }
                    }, 
                '+')
            ]
        )
        const app = createApp(MyComponent)
        const body = document.querySelector('body')
        const divRemove = document.querySelector('.notification')
        if(divRemove){
            body?.removeChild(divRemove)
        }
        const div = document.createElement('div');
        div.id = 'notification'
        div.classList.add('notification');
        div.style.position = 'fixed';
        div.style.top = '6rem';
        div.style.right = '1rem';
        div.style.border = '1px solid transparent';
        div.style.zIndex = '9999';
        if (div) {
            body?.appendChild(div)
            app.mount(div)
        }
    }
    return {
        provide: {
            noti: (options: object) => init(options)
        }
    }
})

