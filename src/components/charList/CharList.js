import './charList.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useMarvelService from '../../services/MarvelService';
import { useState, useEffect, useRef} from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';


const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);


    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])


    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true
        }

        setCharList((charList) => {
            const charSet = new Set(charList.map(char => char.id));
            const uniqueNewCharList = newCharList.filter(char => !charSet.has(char.id));
            return [...charList, ...uniqueNewCharList];
        });

        setNewItemLoading(newItemLoading => false);
        setOffset((offset) => offset + 9);
        setCharEnded(charEnded => ended);

    }

    const itemRefs = useRef([]);


    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    const handleKeyDown = (event, id, i) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            props.onCharSelected(id);
            focusOnItem(i);
        }
    }

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }


            return (
                <CSSTransition key={item.id} timeout={500} classNames="char__item">
                    <li 
                        className="char__item"
                        key={item.id} 
                        ref={el => itemRefs.current[i] = el}
                        tabIndex={0}
                        onClick={() => {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }}
                        onKeyDown={(e) => handleKeyDown(e, item.id, i)}
                        >
                        <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                        <div className='char__name'>{item.name}</div>
                    </li>
                </CSSTransition>

            )
        });
        return (
            <ul className='char__grid'>
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        )
    }
    
    const items = renderItems(charList)

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                onClick={() => onRequest(offset)}
                style={{'display' : charEnded ? 'none' : 'block'}}>
                <div className="inner">load more</div>
            </button>
        </div>
    );  

}

export default CharList;