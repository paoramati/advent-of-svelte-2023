
export type NaughtyOrNiceType = {
	name: string,
	tally: number
}

export async function fetchNaughtyOrNiceList() {

	const url = 'https://advent.sveltesociety.dev/data/2023/day-one.json';

	const result = await fetch(url);
	return await result.json() as NaughtyOrNiceType[];
}

export const naughtyOrNiceList: NaughtyOrNiceType[] = await fetchNaughtyOrNiceList();

export async function addChild(child: NaughtyOrNiceType) {
	naughtyOrNiceList.push(child);
}