export const renderIf = (test, component) => test? component : undefined

export const classToggler = (option) => Object.keys(option).filter(key => !!option[key].join(' '))
