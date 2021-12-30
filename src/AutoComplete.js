import {useState} from "react";

const AutoComplete = () => {
  const array = ['Andris', 'Liene', 'Janis', 'Kristaps']
  let suggestion = []
  const [list, setList] = useState('')
  const [value, setValue] = useState('')

  const setInputValue = (e, val) => {
    setValue(val)
  }

  const autoComplete = (e) => {
    setValue(e.target.value)
    array.forEach(item => {
      if (item.substr(0, e.target.value.length).toUpperCase() === e.target.value.toUpperCase()) {
        suggestion.push(item)

        setList(
          suggestion.map((item, index) => {
            return <div key={index} onClick={(e) => setInputValue(e, item)}>{item}</div>
          })
        )
      }
      if (e.target.value.length === 0) {
        setList('')
      }
    })
  }

  return (
    <div id={'auto-complete'}>
      <label htmlFor={'auto-complete-input'}>
        Auto complete
      </label><br/>
      <input id={'auto-complete-input'} onChange={(e) => autoComplete(e)} value={value}/>
      <div>
        {list}
      </div>
    </div>
  )
}

export default AutoComplete
