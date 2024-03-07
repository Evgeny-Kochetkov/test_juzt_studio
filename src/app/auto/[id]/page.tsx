import { notFound } from 'next/navigation'

import { AutoItem } from '@/components/common/autoItem'
import localServise from '@/http/localServise'


async function getData(id: string) {
	await new Promise(resolve => setTimeout(resolve, 1000))
	try {
		const response = await localServise.autoItem(id)
        console.log(response.data)
		return response.data
	} catch (error) {
	  	console.log(error)
        notFound()
	}
}

export default async function AutoPage ({
    params: { id },
}: {
    params: { id: string }
}) {

    const autoItem = await getData(id)

    return (
        <AutoItem item={autoItem[0]}/>
    )
}