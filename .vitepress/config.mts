import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    base: '/',
    title: "DMNTK",
    description: "Decision Model and Notation Toolkit",
    head: [['link', {rel: 'icon', href: '/dsntk-small.svg'}]],
    themeConfig: {
        logo: '/dsntk-small.svg',
        nav: [
            {
                text: 'Guide',
                items: [
                    {text: 'Overview', link: '/guide/overview'},
                    {text: 'Installation', link: '/guide/installation'},
                    {text: 'Getting started', link: '/guide/getting-started'}
                ]
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    {text: 'Overview', link: '/guide/overview'},
                    {text: 'Installation', link: '/guide/installation'},
                    {text: 'Getting started', link: '/guide/getting-started'}
                ]
            }
        ],
        search: {
            provider: 'local'
        }
    },
    srcDir: "pages"
})
