

function Footer() {

    const icons = [
        {
            name: 'fa-brands fa-github',
            link: 'https://github.com/aimeedarling'
        },
        {
            name: 'fa-brands fa-linkedin-in',
            link: 'https://www.linkedin.com/in/aimeedarlingdev/'
        },
        {
            name: "fa-solid fa-envelope",
            link: 'mailto:aimeedarlingdev@gmail.com'
        },

    ]

    return (
        <footer className="d-flex justify-content-center align-items-center">
                {icons.map(icon =>
                    <div className='px-2 gradient-text opacity-75' key={icon.name}>
                        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                    </div>
                )}
        </footer>
    );
}

export default Footer;