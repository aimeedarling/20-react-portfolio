import { Link } from 'react-router-dom';
import Navbar from './Navbar'

export default function Nav() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light" to="/">
                    About
                </Link>,
                <Link key={1} className="nav-link text-light" to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={2} className="nav-link text-light" to="/contact">
                    Contact
                </Link>,
                <Link key={1} className="nav-link text-light" to="/resume">
                    Resume
                </Link>,
            ]}
        />
    );
}

