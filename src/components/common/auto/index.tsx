'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
    useState,
    useCallback
} from 'react'

import { IAutoData } from '@/types/autoData'

import {
    SSectionAuto,
    SAuto,
    SAutoCard,
    SH2,
    SMenu,
    SLabel,
    SFilter
} from './style'

import noImage from '../../../../public/images/no_image.png'

export const Auto = ({ auto } : { auto: IAutoData[]; }) => {
    console.log(auto)
    const [sortYear, setSortYear] = useState('0')
    const [sortPrice, setSortPrice] = useState('0')
    const [sortColor, setSortColor] = useState('0')
    const [sortBrand, setSortBrand] = useState('0')

    /* console.log(sortYear, sortPrice, sortColor, sortBrand) */

    const handleSortChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        const id = event.target.id
        switch(id) {
            case 'product-year':
                setSortPrice('0')
                setSortYear(value)
                break
            case 'product-price':
                setSortYear('0')
                setSortPrice(value)
                break
            case 'product-color':
                setSortColor(value)
                break
            case 'product-brand':
                setSortBrand(value)
                break
            default:
                break
        }
    }, [])

    return (
        <SSectionAuto id='auto'>
            <SH2>
                AVAILABLE MODELS
            </SH2>
            <SMenu>
                <SLabel htmlFor='product-year'>
                    Year:
                    <SFilter
                        name='product-year'
                        id='product-year'
                        value={sortYear}
                        onChange={handleSortChange}
                    >
                        <option value='0'>All</option>
                        <option value='1'>Descending</option>
                        <option value='2'>Ascending</option>
                    </SFilter>
                </SLabel>
                <SLabel htmlFor='product-price'>
                    Price:
                    <SFilter
                        name='product-price'
                        id='product-price'
                        value={sortPrice}
                        onChange={handleSortChange}
                    >
                        <option value='0'>All</option>
                        <option value='1'>Descending</option>
                        <option value='2'>Ascending</option>
                    </SFilter>
                </SLabel>
                <SLabel htmlFor='product-color'>
                    Color:
                    <SFilter
                        name='product-color'
                        id='product-color'
                        value={sortColor}
                        onChange={handleSortChange}
                    >
                        <option value='0'>All</option>
                        {Array.from(new Set(auto.map(item => item.color))).map((item, i) => {
                            return (
                                <option key={i+1} value={item}>
                                    {item}
                                </option>
                            )
                        })}
                    </SFilter>
                </SLabel>
                <SLabel htmlFor='product-brand'>
                    Brand:
                    <SFilter
                        name='product-brand'
                        id='product-brand'
                        value={sortBrand}
                        onChange={handleSortChange}
                    >
                        <option value='0'>All</option>
                        {Array.from(new Set(auto.map(item => item.brand))).map((item, i) => {
                            return (
                                <option key={i+1} value={item}>
                                    {item}
                                </option>
                            )
                        })}
                    </SFilter>
                </SLabel>
            </SMenu>
            <SAuto>
                {auto
                .sort((a, b) => {
                    if(sortYear !== '0') {
                        return sortYear === '1' ? +b.year - +a.year : +a.year - +b.year
                    } else if (sortPrice !== '0') {
                        return sortPrice === '1' ? +b.price - +a.price : +a.price - +b.price
                    } else {
                        return Number(a.id) - Number(b.id)
                    }
                })
                .filter((item) => sortColor !== '0' ? item.color === sortColor : item)
                .filter((item) => sortBrand !== '0' ? item.brand === sortBrand : item)
                .map(({id, img, brand, model, color, price, year, engineType, transmission, range}) => {
                    return (
                        <li key={id}>
                            <Link href={`/auto/${id}`}>
                                <SAutoCard>
                                    <Image
                                        src={img ? img : noImage}
                                        alt='AUTO'
                                        width={250}
                                        height={250}
                                        style={{ 'objectFit': 'contain' }}
                                    />
                                    <p>
                                        <strong>Brand:</strong> {brand}
                                    </p>
                                    <p>
                                        <strong>Model:</strong> {model}
                                    </p>
                                    <p>
                                        <strong>Year:</strong> {year}
                                    </p>
                                    <p>
                                        <strong>Price:</strong> {price}
                                    </p>
                                </SAutoCard>
                            </Link>
                        </li>
                    )
                })}
            </SAuto>
        </SSectionAuto>
    )
}