import { useGlobal } from "../../providers/global";
import Link from 'next/link';


const Navigation = () => {
    const { pages, logOut, loggedIn } = useGlobal();
    return (
        <nav className="site-navigation" role="navigation" itemScope itemType="http://schema.org/SiteNavigationElement">
            <a href="#menu-main-nav" id="js-menu-toggle" className="site-menu-toggle">
                <span className="screen-reader-text">Primary Menu</span>
                <span aria-hidden="true">☰</span>
            </a>

            <ul id="menu-main-nav" className="primary-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
                    <Link href="/">Home</Link>
                </li>
                { pages && pages.map((page) => {
                    const { id, slug, title } = page;
                    return (
                        <li key={id} className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
                            <Link href={`/${slug}`}>{title.rendered}</Link>
                        </li>
                    )
                })}
                { loggedIn ? (
                     <li  className="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
                        <a href="#" onClick={logOut}>Logout</a>
                    </li>
                ) : (
                    <li  className="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
                        <Link href="/login">Login</Link>
                    </li>
                )}
                

               
            </ul>

        </nav>
    );
};

export default Navigation;
