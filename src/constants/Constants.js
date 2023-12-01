const customBreakpoints = {
    values: {
        xs: 0,
        sm: 400,
        md: 700,
        lg: 1200,
        xl: 1536,
    },
};

const baseUrl = "https://rickandmortyapi.com/api/character/";

const cacheExpTime = 1 * 60 * 60 * 1000; //1 hours in milliseconds

export { baseUrl, cacheExpTime, customBreakpoints }