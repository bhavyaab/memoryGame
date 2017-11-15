export const renderIf = (test, component) => test? component : undefined

export const classToggler = (option) => Object.keys(option).filter(key => !!option[key].join(' '))

export const toggleState = (key) => {
   const currentState = this.state[key]
   this.setState({key : !currentState})
 }
