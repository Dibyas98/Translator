import { useEffect, useState } from 'react';
import './App.css';
import ButtonTranslate from './component/ButtonTranslate';
import Heading from './component/Heading';
import TextBox from './component/TextBox';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [Source, setSource] = useState();
  const [Target, setTarget] = useState();
  const [sourceText, setsourceText] = useState()
  const [TargetText, setTargetText] = useState('')
  const [click, setclick] = useState(0)
  const[btn,setBtn]=useState('Translate')
  const HandelTranslate = (arg) => {
    const a = click + 1;
    setclick(a)
    setBtn('Loading...')
    // setTargetText(sourceText)
  }
  useEffect(() => {
    async function fetchData() {
      if(Source === undefined && sourceText === undefined && Target === undefined){
        toast('Enter the required fiels')
      }
      else if(Source === undefined ){
        toast.warning('Enter the source language')
      }
      else if(sourceText === undefined ){
        toast.warning('Enter the text')
      }
      else if(Target === undefined ){
        toast.warning('Enter the target language')
      }
      else{
        const url = 'https://text-translator2.p.rapidapi.com/translate';
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '00c70e864fmsh295e2826a1bb966p14cb30jsne12f4f59c15c',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
          source_language: Source,
          target_language: Target,
          text: sourceText
        })
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        if(result.status === 'success'){
          setTargetText(result.data.translatedText)
          // console.log(result.data.translatedText);
          // console.log(TargetText);
          toast.success('successfully Translate')
          setBtn('Translate')
        }else{
          setTargetText('oppps........This language is not available now')
          toast.error('Not Available')
          setBtn('Translate')
        }
      } catch (error) {
        console.error(error);
      }
      }
      setBtn('Translate')
    }
    fetchData()
  }, [click])
// console.log(Source);
  const handleSetSourceText = (text, sou) => {
    setsourceText(text);
    setSource(sou)

  };
  const handletarget = (text, sou) => {
    setTarget(sou)
    console.log(sou);
  };

  return (
    <>
      <Heading></Heading>
      <div className='cont'>
        <TextBox change={handleSetSourceText} tra={''}></TextBox>
        <ToastContainer />
        <ButtonTranslate click={HandelTranslate} se={btn}></ButtonTranslate>
        <TextBox disabled={true} change={handletarget} tra={TargetText}></TextBox>
      </div>
    </>
  );
}

export default App;
