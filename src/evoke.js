import { utilAppendChild, utilSetContext, utilSetId, utilSetClass, utilSetText, utilSetAtributes } from './utils.js'

const contexts = {}

export default class Evoke {
  static create(elementType = 'div', parent = 'body', context = undefined, id = undefined, classes = undefined, text = undefined, attributes = undefined) {
    const element = document.createElement(elementType) // Create element (could be custom => different function)
    let parentElement
    utilAppendChild(parent, parentElement, element)
    utilSetContext(context, contexts, element, parentElement)
    utilSetId(element, id)
    utilSetClass(element, classes)
    utilSetText(element, text)
    utilSetAtributes(element, attributes)
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
