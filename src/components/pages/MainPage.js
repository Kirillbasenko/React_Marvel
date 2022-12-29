import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../formChar/CharSearchForm";
import { useState } from 'react';
import ErrorBoundary from "../errorBoundary/ErrorBoundary"

//import decoration from '../../resources/img/vision.png';

const MainPage = () => {
   const [selectedChar, setChar] = useState(null) 

   const onCharSelected = (id) => {
      setChar(id)
   }


   return(
      <>
         <ErrorBoundary>
            <RandomChar onCharSelected={onCharSelected}/>
         </ErrorBoundary>
         <div className="char__content">
            <CharList onCharSelected={onCharSelected}/>
            <div className="char__doc">
               <ErrorBoundary>
                  <CharInfo charId={selectedChar}/>
               </ErrorBoundary>
               <CharSearchForm/>
            </div>
         </div>
         {/*<img className="bg-decoration" src={decoration} alt="vision"/>*/}
      </>
   )
}

export default MainPage