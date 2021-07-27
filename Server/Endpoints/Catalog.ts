import { Routes, GET } from "../Decorators";

@Routes('')
export default class Catalog {
  constructor(public req: any) {}


  @GET('catalog/:count')
  public catalog(
    count: number = 100,
    aggLevel: number = 4,
    category: string = 'a0f21ff8',
    mode: string = 'sp',
    pageIndex: number = 0,
    platform: string = 'pc',
    sort: string = 'price', 
    sortDir: string = 'desc'
  ) {
    const url = `https://scapi.rockstargames.com/catalogue/search?aggLevel=${aggLevel}&category[]=${category}&count=${count}&mode=${mode}&pageIndex=${pageIndex}&platform=${platform}&sort=${sort}&sortdir=${sortDir}`;

    return this.req(url, {
      format: (data: any) => data
    })
  }
}