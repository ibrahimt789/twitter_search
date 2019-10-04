export const SearchBarActions = {
	UpdateValue: "SearchBarActions.UpdateValue",
	LoadInitialData: "SearchBarActions.LoadInitialData",
	StoreSearchObject: "SearchBarActions.StoreSearchObject",
}

export function doHandleChange(value: any) {
	return {
		type: SearchBarActions.UpdateValue,
		value,
	}
}

export function doLoadInitialData(twitterData: any) {
	return {
		type: SearchBarActions.LoadInitialData,
		twitterData,
	}
}

export function doSearchKeyword(keyword: string, twitterData: any) {
	//here need to match the string ba
	const searchedKey = new RegExp(keyword, "gi");
	let result: any = [];
	if (keyword) {

		const twitterResult = twitterData.forEach((t: any) => {
			if (t.text.match(searchedKey)) { result.push(t) }
		})
	}
	return {
		type: SearchBarActions.StoreSearchObject,
		twitterResult: result.length > 0 ? result : []
	}
}
