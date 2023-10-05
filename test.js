
const body = {
    email:"rohit@gmail.com"
}
let token = null

setInterval( () => {
    fetch( 'http://localhost:8000', {
        method: 'POST',
        headers: {
            authorization: token
        },
        body: JSON.stringify(body)
    } )
    .then( result => {
        return result.json()
    }) 
    .then( (data) => {
        console.log(`data response: ${data.token}`)
        token = data.token
    }  ).catch( error => {
        console.error(error)
    })
    
}, 3000  )

