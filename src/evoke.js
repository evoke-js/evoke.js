const contexts = {}

export default class Evoke {
  static create(elementType = 'div', parent = 'body', context = undefined, id = undefined, classes = undefined, text = undefined, attributes = undefined) {
    const element = document.createElement(elementType) // Create element (could be custom => different function)
    let parentElement
    if (parent === 'body') {
      parentElement = document.body
      document.body.appendChild(element)
    } else if (parent === Object(parent)) {
      parentElement = parent
        parent.appendChild(element)
    } else {
      parentElement = document.getElementById(parent)
      if (!parentElement) {
        parentElement = document.getElementsByTagName(parent)[0]
      }
      if (!parentElement) {
        parentElement = document.getElementsByClassName(parent)[0]
      }
      try {
        parentElement.appendChild(element)
      } catch (e) {
        console.error(e)
      }
    }
    if (context) {
      if (!contexts[context]) {
        contexts[context] = []
      }
      contexts[context].push(element)
    } else if (!context) {
      const findParentContext = _ => {
        for (let context in contexts) {
          for (let i = 0; i < contexts[context].length; i++) {
            if (contexts[context][i] === parentElement) {
              return contexts[context]
            }
          }
        }
        return false
      }
      const parentContext = findParentContext()
      if (parentContext) {
        parentContext.push(element)
      } else {
        if (!contexts.default) {
          contexts.default = []
        }
        contexts.default.push(element)
      }
    }
    if (id) {
      element.id = id
    }
    if (Object.prototype.toString.call(classes) === '[object String]') {
      element.classList.add(classes)
    } else if (Object.prototype.toString.call(classes) === '[object Array]') {
      for (let i = 0; i < classes.length; i++) {
        element.classList.add(classes[i])
      }
    }
    if (text) {
      element.textContent = text
    }
    if (attributes) {
      for (var attribute in attributes) {
        if (attributes.hasOwnProperty(attribute)) {
          element.setAttribute(attribute, attributes[attribute])
        }
      }
    }
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
  static deleteContext(context) {
    for (let i = 0; i < contexts[context].length; i++) {
      contexts[context][i].remove()
    }
    contexts[context] = []
  }
}
