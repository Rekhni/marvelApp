import './appHeader.scss';
import ComicsList from '../comicsList/ComicsList';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="#">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="#">Characters</a></li>
                    /
                    <li><a onClick={() => <ComicsList />} href="#">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;
