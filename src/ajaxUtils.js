class AjaxUtils {

    async get(url) {
        const options = {
            method: 'GET',
            headers: {
                'x-api-key': 'api-key-6eed70cd-be94-49ca-8aba-3febf300b989',
            }
        }
        const request = new Request(url.toString(), options);
        return this._fetch(request);
    }

    async _fetch(request) {
        const fetchResult = await fetch(request);
        try{
            return fetchResult.json();
        }catch (error){
            console.warn(error);
            //TODO: Error page
        }
    }
}


export default new AjaxUtils();