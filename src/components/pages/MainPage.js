import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import RandomChar from '../randomChar/RandomChar';
import CharSearchForm from '../charSearchForm/CharSearchForm';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { useState } from 'react';
import decoration from '../../resources/img/vision.png';
import { Helmet } from 'react-helmet';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);


    const onCharSelected = (id) => {
        setChar(id);
    }
    return (
        <>  
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>   
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <div style={{position: 'sticky', top: '0'}}>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharSearchForm/>
                    </ErrorBoundary>
                </div>
            </div>
            <img src={decoration} alt="vision" className="bg-decoration" />
        </>
    )

}

export default MainPage;