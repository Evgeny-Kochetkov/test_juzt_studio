import $api from '.'

import { AxiosResponse } from 'axios'

export default class localServise {
    static async login(username: string, password: string): Promise<AxiosResponse> {
        return $api.post('/login', {username, password})
    }

    static async registration(email: string, username: string, password: string): Promise<AxiosResponse> {
        return $api.post('/register', {email, username, password})
    }

    /* static async refreshToken(): Promise<AxiosResponse> {
        return $api.post('/refresh')
    } */

    static async auto(): Promise<AxiosResponse> {
        return $api.get('/auto')
    }
/* 
    static async autoLength(): Promise<AxiosResponse> {
        return $api.get('/auto?length')
    } */

    static async autoItem(id: string): Promise<AxiosResponse> {
        return $api.get(`/auto?id=${id}`)
    }

    static async addAuto(
        id: string,
        brand: string,
        model: string,
        color: string,
        price: string,
        year: string,
        engineType: string,
        transmission: string,
        range?: string,
        img?: string
    ): Promise<AxiosResponse> {
        return $api.post(`/api/auto`, JSON.stringify({
            id: id,
            brand: brand,
            model: model,
            color: color,
            price: price,
            year: year,
            engineType: engineType,
            transmission: transmission,
            range: range,
            img: img
        }))
    }
}