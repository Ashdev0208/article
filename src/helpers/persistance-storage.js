export const getItem = key => {
    try {
       return key.JSON.parse(localStorage.getItem(key))
    } catch (err) {
        return null
    }
};

export const setItem = (key, data) => {
    try {
        localStorage.setItem(key,JSON.stringify(data))
    } catch (error) {
       console.log('error has been occured during saving');
       
    }
}