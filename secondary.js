document.addEventListener('DOMContentLoaded', function() {
    const arrayPromise = new Promise((resolve, reject) => {
        const jsonData = window.localStorage.getItem('jsonData')
        try {
            const myArray = JSON.parse(jsonData)
            resolve(myArray)
        } catch(error) {
            reject(error)
        }
    })
    arrayPromise.then(myArray => {
        console.log('Received array: ' + myArray);
    }).catch(error => {
        console.error('Error: ', error)
    }) 
})