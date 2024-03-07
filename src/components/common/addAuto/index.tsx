'use client'

import localServise from '@/http/localServise'

import {
    useState,
    useCallback
} from 'react'

import { useDispatch } from 'react-redux'
import { setCustomTooltip } from '@/redux/features/customTooltipSlise'

import { Back } from '@/components/ui/back'

import {
    SForm,
    SInput,
    SLabel,
    SSpan,
    SBtnWrap,
    SButton
} from './style'

import { SFilter } from '../auto/style'

import {
    SSection, 
    SH1
} from '../autoItem/style'

export const AddAuto = () => {

    const dispatch = useDispatch()

    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const [year, setYear] = useState('')
    const [range, setRange] = useState('')
    const [engineType, setEngineType] = useState('petrol')
    const [transmission, setTransmission] = useState('manual')
    const [fileName, setFileName] = useState('ADD FOTO')
    
    const fileNameChange = useCallback((e: any) => {
        const file = e.target.files[0]
        setFileName(file ? file.name : 'ADD FOTO')
    }, [])

    const inputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            case 'brand':
                setBrand(e.target.value)
                break
            case 'model':
                setModel(e.target.value)
                break
            case 'color':
                setColor(e.target.value)
                break
            case 'price': 
                setPrice(e.target.value)
                break
            case 'year':
                setYear(e.target.value)
                break
            case 'range':
                setRange(e.target.value)
                break
            default: return
        }
    }, [])

    const labelChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        const id = event.target.id
        switch(id) {
            case 'engine-type':
                setEngineType(value)
                break
            case 'transmission':
                setTransmission(value)
                break
            default:
                break
        }
    }, [])

    const addAuto = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        try {
            const fileInput = document.getElementById('add_auto_foto') as HTMLInputElement
            if (fileInput) {
                /* const img = fileInput.files?.[0] */
                const id = `${((Math.random()*1e8)).toString(16)}`
                const res = await localServise.addAuto(
                    id,
                    brand,
                    model,
                    color,
                    price,
                    year,
                    engineType,
                    transmission,
                    range ? range : undefined,
                    undefined
                )
                if(res.status === 200) {
                    dispatch(setCustomTooltip({status: 'success', titleText: 'SUCCESS', text: 'YOU HAVE ADDED A CAR'}))
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
        
    return (
        <SSection>
            <Back/>
            <SH1>
                ADD AUTO
            </SH1>
            <SForm>
                <SInput
                    type='text'
                    name='brand'
                    placeholder='BRAND'
                    value={brand}
                    onChange={inputChange}
                />
                <SInput
                    type='text'
                    name='model'
                    placeholder='MODEL'
                    value={model}
                    onChange={inputChange}
                />
                <SInput
                    type='text'
                    name='color'
                    placeholder='COLOR'
                    value={color}
                    onChange={inputChange}
                />
                <SInput
                    type='text'
                    name='price'
                    placeholder='PRICE'
                    value={price}
                    onChange={inputChange}
                />
                <SInput
                    type='text'
                    name='year'
                    placeholder='YEAR'
                    value={year}
                    onChange={inputChange}
                />
                {engineType === 'electric'
                    ? <SInput
                        type='text'
                        name='range'
                        placeholder='RANGE'
                        value={range}
                        onChange={inputChange}
                      />
                    : null
                }
                <SLabel htmlFor='engine-type'>
                    ENGINE TYPE:
                    <SFilter
                        name='engine-type'
                        id='engine-type'
                        value={engineType}
                        onChange={labelChange}
                    >
                        <option value='petrol'>PENROL</option>
                        <option value='diesel'>DIESEL</option>
                        <option value='electric'>ELECTRIC</option>
                    </SFilter>
                </SLabel>
                <SLabel htmlFor='engine-type'>
                    TRANSMISSION:
                    <SFilter
                        name='transmission'
                        id='transmission'
                        value={transmission}
                        onChange={labelChange}
                    >
                        <option value='automatic'>AUTOMATIC</option>
                        <option value='manual'>MANUAL</option>
                        {engineType === 'petrol' || engineType === 'diesel'
                            ? <option value='robotic'>ROBOTIC</option>
                            : null
                        }
                    </SFilter>
                </SLabel>
                <SLabel htmlFor='add_auto_foto' style={{'cursor': 'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M24.3532 6.14375C21.4094 3.2 16.6157 3.2 13.675 6.14375L5.51878 14.2937C5.46565 14.3469 5.43753 14.4187 5.43753 14.4937C5.43753 14.5687 5.46565 14.6406 5.51878 14.6937L6.6719 15.8469C6.72461 15.8994 6.79596 15.9288 6.87034 15.9288C6.94472 15.9288 7.01607 15.8994 7.06878 15.8469L15.225 7.69687C16.2375 6.68437 17.5844 6.12812 19.0157 6.12812C20.4469 6.12812 21.7938 6.68437 22.8032 7.69687C23.8157 8.70937 24.3719 10.0562 24.3719 11.4844C24.3719 12.9156 23.8157 14.2594 22.8032 15.2719L14.4907 23.5812L13.1438 24.9281C11.8844 26.1875 9.83753 26.1875 8.57815 24.9281C7.96878 24.3187 7.6344 23.5094 7.6344 22.6469C7.6344 21.7844 7.96878 20.975 8.57815 20.3656L16.825 12.1219C17.0344 11.9156 17.3094 11.8 17.6032 11.8H17.6063C17.9 11.8 18.1719 11.9156 18.3782 12.1219C18.5875 12.3312 18.7 12.6062 18.7 12.9C18.7 13.1906 18.5844 13.4656 18.3782 13.6719L11.6375 20.4062C11.5844 20.4594 11.5563 20.5312 11.5563 20.6062C11.5563 20.6812 11.5844 20.7531 11.6375 20.8062L12.7907 21.9594C12.8434 22.0119 12.9147 22.0413 12.9891 22.0413C13.0635 22.0413 13.1348 22.0119 13.1875 21.9594L19.925 15.2219C20.5469 14.6 20.8875 13.775 20.8875 12.8969C20.8875 12.0187 20.5438 11.1906 19.925 10.5719C18.6407 9.2875 16.5532 9.29062 15.2688 10.5719L14.4688 11.375L7.02503 18.8156C6.51981 19.3179 6.11934 19.9154 5.84683 20.5736C5.57432 21.2318 5.43519 21.9376 5.43753 22.65C5.43753 24.0969 6.00315 25.4562 7.02503 26.4781C8.0844 27.5344 9.4719 28.0625 10.8594 28.0625C12.2469 28.0625 13.6344 27.5344 14.6907 26.4781L24.3532 16.8219C25.775 15.3969 26.5625 13.5 26.5625 11.4844C26.5657 9.46562 25.7782 7.56875 24.3532 6.14375Z" fill="black"/>
                    </svg>
                    <SSpan>
                        {fileName}
                    </SSpan>
                    <input type='file' id='add_auto_foto' name='add_auto_foto' style={{'display': 'none'}} onChange={fileNameChange}/>
                </SLabel>
                <SBtnWrap>
                    <SButton
                        type='submit'
                        $marginTop='10px'
                        onClick={(e) => addAuto(e)}
                    >
                        ADD AUTO
                    </SButton>
                </SBtnWrap>
            </SForm>
        </SSection>
    )
}