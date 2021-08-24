export const convertAndGetTime = (dateStr) => {
    return new Date(dateStr.split('/').reverse().join('-')).getTime()
}