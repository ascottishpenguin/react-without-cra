import { useFetch } from "../fetch-data-service/call-api-effect";

export type CatImageType = { id: string; url: string, width: number, height: number };

export class catsCatsCats {

  private fetchThoseCats(category?: string) {
    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set('x-api-key', 'a22c7dfd-ade5-4dd0-bfa7-17396f948ad8')
    if (category) {
      const data = useFetch<[CatImageType]>({
        url: `https://api.thecatapi.com/v1/images/search?category_ids=${category}`,
        init: {
          headers: requestHeaders
        }
      });
      return data
    }


    else {
      const data = useFetch<[CatImageType]>({
        url: "https://api.thecatapi.com/v1/images/search?",
        init: {
          headers: requestHeaders
        }
      });
      return data
    }
  }


  public getCatsByCategory(category: {category: string}) {
    return this.fetchThoseCats(category.category)
    }


  public getCats() { return this.fetchThoseCats() }

}
