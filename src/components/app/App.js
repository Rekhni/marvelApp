

import decoration from '../../resources/img/vision.png';
import AppHeader from '../appHeader/AppHeader';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import RandomChar from '../randomChar/RandomChar';
import { useState } from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';


const App = () => {

    const [selectedChar, setChar] = useState(null);


    const onCharSelected = (id) => {
        setChar(id);
    }


    return (
        <div className='app'>
            <AppHeader />
            <main>
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
            </main>
        </div>
    );


}

export default App;
