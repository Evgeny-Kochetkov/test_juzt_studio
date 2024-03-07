import { autoData } from './auto'
import { NextResponse } from 'next/server'

let autoDataArray = autoData

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    let currentAuto = autoDataArray

    if(id) {
        currentAuto = autoDataArray.filter(auto => auto.id === id)
    }

    return NextResponse.json(currentAuto)
}

export async function POST(req: Request) {
    const body = await req.json()

    autoDataArray.push(body)

    console.log(body)
    
    return NextResponse.json({ message: 'POST request', autoData: autoDataArray })
}