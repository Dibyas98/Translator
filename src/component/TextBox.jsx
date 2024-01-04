import React, { useState } from 'react'
import LanguageList from './LanguageList'

export default function TextBox({disabled,change,tra}) {
  const [SourceText, setSourceText] = useState(tra)
  const [Sourcelang, setSourcelang] = useState('')
  const HandelText =(e) =>{
    // console.log('before',SourceText);
    setSourceText(e.target.value);
    change(e.target.value,Sourcelang)

  }


  const Handellang =(e) =>{
    setSourcelang(e);
    change(SourceText,e)
  }
  // setSourceText(tra)

  return (
    <div className='textbox'>
      <LanguageList lang={Handellang}/>
      
      <textarea disabled={disabled}  value={tra.length>0?tra:SourceText} className=''  onChange={HandelText}></textarea>
    </div>
  )
}
