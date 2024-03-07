import { MainScreen } from '@/components/common/mainScreen'
import { Auto } from '@/components/common/auto'

import localServise from '@/http/localServise'

/* Не вижу резона использовать тут axios ведь встроенные запросы на сервер в next намного круче */
/* Допустим я тут не могу настроить ревалидацию данных, и для того чтобы новый айтем отобразился на странице нужно ее обновить */
/* Или это я еще чего то не знаю */

async function getDataWithDelay() {
	await new Promise(resolve => setTimeout(resolve, 1000))
	try {
		const response = await localServise.auto()
		return response.data
	} catch (error) {
	  	console.log(error)
	}
}

export default async function Home() {
	const auto = await getDataWithDelay()
	
	return (
		<main>
			<MainScreen/>
			<Auto auto={auto}/>
			
		</main>
	)
}