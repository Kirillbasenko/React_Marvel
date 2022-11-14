import Spinner from '../spinner/Spinner';
import { Transition } from 'react-transition-group';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { useState, useEffect } from 'react';
import useMarvelService from '../marvelServises/MarvelServises';
import { Link, } from 'react-router-dom';

import Skeleton from "../skeleton/Skeleton"
import './charInfo.scss';

const CharInfo = (props) => {
    const [char, setChar] = useState(false)

    const {loading, error, clearError, getCharacter} = useMarvelService();

    useEffect(() => {
        updateChar()
    }, [props.charId])

    const updateChar = () => {
        const {charId} = props
        if(!charId){
            return
        }
        clearError()
        getCharacter(charId)
            .then(onCharLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char)
    }

        const skeleton = char || loading || error ? null : <Skeleton/>
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;
        return (
            <div className="char__info">
                    {skeleton}
                    {errorMessage}
                    {spinner}
                    {content}
        </div>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail ,homepaqe, wiki, comics} = char
    if(comics.length > 9){
        comics.length = 10
    }
    let imgStyle = {"objectFit" : "cover"}
    if(thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"){
        imgStyle = {"objectFit" : "contain"}
    }
    return(
    <>
        <div className="char__basics">
                <img src={thumbnail} alt="abyss" style={imgStyle}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepaqe} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
        </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : "There are no comics with this character"} 
                {
                    comics.map((item, i) =>{
                        return(
                            <Link to={`/comics/${item.resourceURI.match(/\d/g).slice(1).join("")}`}
                            key={i} 
                            className="char__comics-item">
                                {item.name}
                            </Link>
                        )
                    })
                }
                
            </ul>
    </>
    )
}



export default CharInfo;