import Noti  from './Noti.vue'
import { createApp } from 'vue';

export default {
    install: (app) => {
        const nuxtApp = useNuxtApp();
        let count = 1;
        function createComponent(options) {
            app.component('Noti', Noti);
            const MyComponent = createApp(app.component('Noti'), {
                count: count,
                title: options?.title || 'Notification',
                content: options?.content || 'Show notification!',
                status: options?.status || 'success',
                timeout: options?.timeout || 0,
                elementMinWidth: 300,
                elementMaxWidth: 700,
            })

            const body = document.querySelector('body');
            const divContainer = document.querySelector('.noti-container')
            if(divContainer) {
                // body?.appendChild(divContainer);
                const div = document.createElement('div');
                div.classList.add('notification');
                div.dataset.key = '' + count++;
                div.style.border = '1px solid transparent';
                divContainer.appendChild(div);
                MyComponent.mount(div);
            } else {
                const divCont = document.createElement('div');
                divCont.classList.add('noti-container');
                divCont.style.width = '400px';
                const div = document.createElement('div');
                div.classList.add('notification');
                div.dataset.key = '' + count++;
                
                // div.style.position = 'fixed';
                // div.style.top = '6rem';
                // div.style.right = '1rem';
                div.style.border = '1px solid transparent';
                // div.style.zIndex = '9999';
                body?.appendChild(divCont);
                divCont.appendChild(div);
                MyComponent.mount(div)
            }
            
            return MyComponent
        }

        function init(options: object) {
            // const body = document.querySelector('body');
            // const divRemove = document.querySelector('.notification')
            // if (divRemove && options?.remove) {
            //     body?.removeChild(divRemove)
            // }
            createComponent(options)
        }

        nuxtApp.provide('notification', (options: object) => init(options));
    }
}