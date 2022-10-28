export const getItem = (key) => JSON.parse(sessionStorage.getItem(key))

export const setItem = (key , data) => sessionStorage.setItem(key , JSON.stringify(data))