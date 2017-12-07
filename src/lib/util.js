export const renderIf = (test, component) => test? component : undefined

export const classToggler = (option) => Object.keys(option).filter(key => !!option[key].join(' '))

// x == this
export const toggleState = (key, x) => {
  const currentState = x.state[key]
  x.setState({key : !currentState})
}

export const log = (act, msg) => {
  __DEBUG__ ? act == '__ERROR__'? console.error(act, msg):console.debug(act, msg) : ''
}
