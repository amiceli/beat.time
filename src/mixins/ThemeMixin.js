import ThemeStore from '@/stores/ThemeStore'

const ThemeMixin = {
    methods : {
        getThemeClass () {
            return ThemeStore.state.theme === 'light' ? 'is--light' : 'is--dark'
        }
    },
    computed : {
        theme () {
            return ThemeStore.state.theme
        }
    }
}

export default ThemeMixin