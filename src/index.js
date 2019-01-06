import VuelidateErrorHelper from 'vuelidate-error-helper'

import Icon from './components/Commons/Icon.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import Menu from './components/Menu.vue'
import MenuItem from './components/MenuItem.vue'
import FormGroup from './components/Form/FormGroup.vue'
import Input from './components/Inputs/Input.vue'
import Textarea from './components/Inputs/Textarea.vue'
import Checkbox from './components/Inputs/Checkbox.vue'

const components = [
  Button,
  Card,
  Icon,
  Menu,
  MenuItem,
  FormGroup,
  Input,
  Textarea,
  Checkbox
]

const install = (Vue) => {
  Vue.use(VuelidateErrorHelper, {
    messages: {
      required() {
        return 'Este campo é obrigatório'
      },
      requiredIf() {
        return 'Este campo é obrigatório'
      },
      minLength(rule) {
        return `Este campo requer no mínimo ${rule.min} carácteres`
      },
      maxLength(rule) {
        return `Este campo requer no máximo ${rule.max} carácteres`
      },
      email() {
        return 'Isto não parece um email válido'
      },
    },
  })

  Object.keys(components).forEach(index => {
    const component = components[index]

    Vue.component(`At${component.name}`, component)
  })
}

export default install
