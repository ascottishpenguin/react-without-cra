import { useFetch } from "../fetch-data-service/call-api-effect";

export type CatCategoryType = { id: number; name: string};

export const getCategories = () => {
const requestHeaders: HeadersInit = new Headers()
requestHeaders.set('x-api-key', 'a22c7dfd-ade5-4dd0-bfa7-17396f948ad8')

const data = useFetch<[CatCategoryType]>({
url: "https://api.thecatapi.com/v1/categories",
init: {
  headers: requestHeaders
}
});
return data
}