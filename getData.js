export const getData = async (url, options, renderFc) => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        renderFc(result);
    } catch (error) {
        console.error(error);
    }
}
