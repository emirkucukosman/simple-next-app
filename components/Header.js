import Link from 'next/link'

const classes = {
    navbar: "flex flex-row items-center justify-between min-w-full bg-white shadow-lg",
    navbarTitle: "p-4",
    navbarAuthor: "p-4 underline font-bold"
}

const Header = () => {
    return (
        <div className={classes.navbar}>
            <Link href="/">
                <a className={classes.navbarTitle}>
                    Simple Next App
                </a>
            </Link>
            <Link href="https://github.com/emirkucukosman">
                <a className={classes.navbarAuthor}>
                    Emir Küçükosman
                </a>
            </Link>
        </div>
    )
}

export default Header
