export default utilAppendChild = (parent, parentElement, element) => {
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
}

export default utilSetContext = (context, contexts, element, parentElement) => {
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
}

export default utilSetId = (element, id) => {
  if (id) {
    element.id = id
  }
}

export default utilSetClass = (element, classes) => {
  if (Object.prototype.toString.call(classes) === '[object String]') {
    element.classList.add(classes)
  } else if (Object.prototype.toString.call(classes) === '[object Array]') {
    for (let i = 0; i < classes.length; i++) {
      element.classList.add(classes[i])
    }
  }
}

export default utilSetText = (element, text) => {
  if (text) {
    element.textContent = text
  }
}

export default utilSetAtributes = (element, attributes) => {
  if (attributes) {
    for (var attribute in attributes) {
      if (attributes.hasOwnProperty(attribute)) {
        element.setAttribute(attribute, attributes[attribute])
      }
    }
  }
}
