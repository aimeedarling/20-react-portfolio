

function Footer() {

    const icons = [
        {
            name: 'fa-brands fa-github',
            link: 'https://github.com/your-github-username'
        },
        {
            name: 'fa-brands fa-linkedin-in',
            link: 'https://www.linkedin.com/in/your-name-3433'
        },
        {
            name: "fa-solid fa-envelope",
            link: 'mailto:youremail@email.com'
        },

    ]

    return (
        <footer>
            <div className="d-flex justify-content-center align-items-center bg-light ">

                {icons.map(icon =>
                    <div className='px-2 gradient-text opacity-75 fs-5' key={icon.name}>
                        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                    </div>
                )}
            </div>
        </footer>
    );
}

export default Footer;