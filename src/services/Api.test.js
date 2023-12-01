import { getCharacters } from "./ApiService";

it("Api test", async () => {
    let data = await getCharacters(1);
    expect(data.results[0].id).toEqual("1"); 
})