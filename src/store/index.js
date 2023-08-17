import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: 'orange',
    isLogoTexture: true,
    isFullTexture: false,
    logoDeCal: './threejs.png',
    fullDeCal: './threejs.png'
})

export default state