import Link from 'next/link';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className="site-header" role="banner" itemScope itemType="http://schema.org/WPHeader">
            <Link href="/">
                <h1 className={`site-title logo ${styles.logo}`} itemScope itemType="http://schema.org/Organization">
                    <div className="logo__image-container">
                        <img className="logo__image" src="/static/logo.svg" alt="10up" /> 
                    </div>
                    <div className="logo__text">blog</div>
                </h1>
            </Link>
            <Navigation/>
        </header>
    );
};

export default Header;
