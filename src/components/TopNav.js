import { DiGithub } from 'react-icons/di'
import { CgSmileMouthOpen } from 'react-icons/cg'

export default function TopNav() {
    return (
        <nav className='navigation'>
            <section className='container'>
                <span className='navigation-title'>
                    <h1 className='title'>React Gists</h1>
                    <span className='topnav-links'>
                        {[
                            {
                                href: 'https://github.com/xmagee/react-gists',
                                css: 'github-link',
                                icon: <DiGithub size={50} />
                            },
                            {
                                href: 'https://alexmagee.com',
                                css: 'my-link',
                                icon: <CgSmileMouthOpen size={43} />
                            }
                        ].map((link, linkIndex) => (
                            <a href={link.href} rel='noreferrer' key={linkIndex}
                                target='_blank'>
                                {link.icon}
                            </a>
                        ))}
                    </span>
                </span>
            </section>
        </nav>
    )
}