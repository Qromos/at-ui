import Icon from './components/Commons/Icon.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import Menu from './components/Menu.vue'
import MenuItem from './components/MenuItem.vue'

const components = [
  Button,
  Card,
  Icon,
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
