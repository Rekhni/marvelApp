import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import RandomChar from '../randomChar/RandomChar';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { useState } from 'react';
import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);


    const onCharSelected = (id) => {
        setChar(id);
    }
    return (
        <>
            <ErrorBoundary>
                <RandomChar/>   
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
            </div>
            <img src={decoration} alt="vision" className="bg-decoration" />
        </>
    )

}

export default MainPage;