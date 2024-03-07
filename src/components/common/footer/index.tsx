import Image from 'next/image'
import Link from 'next/link'

import { navUlConfig } from './config'

import {
    SFooter,
    SHr,
    SNavUl,
    SBottomFooter,
    SPolicy
} from './style'

import { SNavLi } from '../header/style'

import logo from '../../../../public/images/logo.svg'

export const Footer = () => {
    return (
        <SFooter>
            <Image
                src={logo}
                alt='AUTO'
                height={48}
                style={{ 'objectFit': 'contain' }}
            />
            <SHr/>
            <SNavUl>
                {navUlConfig.map(({name, path, numAuto}) => {
                    return (
                        <SNavLi
                            key={name}
                            data-numauto={numAuto}
                            $numAuto={numAuto}
                        >
                            <Link
                                id={name}
                                href={`/${path}`}
                            >
                                {name}
                            </Link>
                        </SNavLi>
                    )
                })}
            </SNavUl>
            <SHr/>
            <SBottomFooter>
                <SPolicy>
                    {`${new Date().getFullYear()} © AUTO AGENCY`}
                    <br/>
                    <a href='https://juzt.studio/' target='_blank' rel='noopener noreferrer nofollow'>
                        The site was developed by Juzt Studio
                    </a>
                </SPolicy>
                <Link
                    href='#'
                >
                    Privacy Policy
                </Link>
            </SBottomFooter>
        </SFooter>
    )
}