
const getImages = (async ()=>{
    try{
        const response = await fetch('https://api.jonathanczyzyk.com/api/v1/images/small', {
            method: 'GET',
            headers: {
                'x-api-key': 'api-key-6eed70cd-be94-49ca-8aba-3febf300b989',
            }
        });

        return (response.json());
    }catch(error){
        console.warn(error)
    }
});

export default  getImages;