

import decoration from '../../resources/img/vision.png';
import AppHeader from '../appHeader/AppHeader';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import RandomChar from '../randomChar/RandomChar';
import { Component } from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';


class App extends Component {

    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className='app'>
                <AppHeader />
                <main>
                    <ErrorBoundary>
                        <RandomChar/>   
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={this.onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar}/>
                        </ErrorBoundary>
                    </div>
                    <img src={decoration} alt="vision" className="bg-decoration" />
                </main>
            </div>
        );
    }

}

export default App;
