'use client'

import Image from 'next/image'

import { IAutoData } from '@/types/autoData'
import { Back } from '@/components/ui/back'

import {
    SSection,
    SH1,
    SBlok,
    SInfoBlock
} from './style'

export const AutoItem = ({ item } : { item: IAutoData}) => {
    return (
        <SSection>
            <Back/>
            <SH1>
                {`${item.brand} ${item.model}`}
            </SH1>
            <SBlok>
                {item.img
                    ? <Image
                        src={item.img}
                        alt='auto'
                        priority
                        width={690}
                        height={380}
                        style={{ 'objectFit': 'contain', 'marginTop': '50px' }}
                    />
                    : null
                }
                <SInfoBlock>
                    <p>
                        <strong>Color:</strong> {item.color}
                    </p>
                    <p>
                        <strong>Price:</strong> {item.price} $
                    </p>
                    <p>
                        <strong>Year:</strong> {item.year}
                    </p>
                    <p>
                        <strong>Engine type:</strong> {item.engineType}
                    </p>
                    <p>
                        <strong>Transmission:</strong> {item.transmission}
                    </p>
                    {item.range
                        ? <p>
                            <strong>Range:</strong> {item.range} km
                          </p>
                        : null
                    }
                </SInfoBlock>
            </SBlok>
        </SSection>
    )
}