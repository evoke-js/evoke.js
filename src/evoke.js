import { appendChild, setContext, setId, setClass, setText, setAtributes } from './utils.js'

const contexts = {}

export default class Evoke {
  static create(elementType = 'div', parent = 'body', context = undefined, id = undefined, classes = undefined, text = undefined, attributes = undefined) {
    const element = document.createElement(elementType) // Create element (could be custom => different function)
    let parentElement
    appendChild(parent, parentElement, element)
    setContext(context, contexts, element, parentElement)
    setId(element, id)
    setClass(element, classes)
    setText(element, text)
    setAtributes(element, attributes)
    return element
  }
  static update() {

  }
  static delete(element) {
    element.remove()
  }
  static createContext(context) {
    contexts[context] = []
  }
  static get contexts() {
    return contexts
  }
  static deleteContext(context) {
    for (let i = 0; i < contexts[context].length; i++) {
      contexts[context][i].remove()
    }
    contexts[context] = []
  }
}
