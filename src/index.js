import Menu from './components/Menu.vue'
import MenuItem from './components/MenuItem.vue'

const components = [
  Menu,
  MenuItem
]

const install = (Vue) => {
  Object.keys(components).forEach(index => {
    const component = components[index]

    Vue.component(`At${component.name}`, component)
  })
}

export default install
