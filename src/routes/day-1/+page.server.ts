import { addChild, naughtyOrNiceList } from "./santa-service";

export async function load() {

	const items = naughtyOrNiceList;

	return {
		naughtyOrNiceList: items
	}
}

export const actions = {
	'add-child': async (event) => {

		console.log(event);

		const formData = await event.request.formData();
		const name = formData.get('name') as string;
		const tally = formData.get('tally') ?? 0;

		await addChild({ name, tally })

	}
}