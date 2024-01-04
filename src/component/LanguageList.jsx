import React, { useState } from "react";
import './language.css'

export default function LanguageList({lang}) {
    const languageMap = {
        am: "Amharic",
        ar: "Arabic",
        eu: "Basque",
        bn: "Bengali",
        "en-GB": "English (UK)",
        "pt-BR": "Portuguese (Brazil)",
        bg: "Bulgarian",
        ca: "Catalan",
        chr: "Cherokee",
        hr: "Croatian",
        cs: "Czech",
        da: "Danish",
        nl: "Dutch",
        en: "English (US)",
        et: "Estonian",
        fil: "Filipino",
        fi: "Finnish",
        fr: "French",
        de: "German",
        el: "Greek",
        gu: "Gujarati",
        iw: "Hebrew",
        hi: "Hindi",
        hu: "Hungarian",
        is: "Icelandic",
        id: "Indonesian",
        it: "Italian",
        ja: "Japanese",
        kn: "Kannada",
        ko: "Korean",
        lv: "Latvian",
        lt: "Lithuanian",
        ms: "Malay",
        ml: "Malayalam",
        mr: "Marathi",
        no: "Norwegian",
        pl: "Polish",
        "pt-PT": "Portuguese (Portugal)",
        ro: "Romanian",
        ru: "Russian",
        sr: "Serbian",
        "zh-CN": "Chinese (PRC)",
        sk: "Slovak",
        sl: "Slovenian",
        es: "Spanish",
        sw: "Swahili",
        sv: "Swedish",
        ta: "Tamil",
        te: "Telugu",
        th: "Thai",
        "zh-TW": "Chinese (Taiwan)",
        tr: "Turkish",
        ur: "Urdu",
        uk: "Ukrainian",
        vi: "Vietnamese",
        cy: "Welsh",
    };
    const [langw,setlangw] =useState('')
  const HandelOption = (e)=>{
   setlangw(e.target.value)
    lang(e.target.value)
  }
    
  return (
    <div className="language">
      <select name="Select Language" id="" onChange={HandelOption} value={langw} >
        <option value="" className="font-semibold">
          Select Language
        </option>
        {Object.entries(languageMap).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}