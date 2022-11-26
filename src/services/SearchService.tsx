
interface Response {
    headers : Headers,
    body: any, 
    status: number
}

//in milliseconds
const throttilingTime : number = 500;
const pageRecordsNo : number = 10

var canRequest = true;
var timer = new Date();

const SearchService = (searchCategory:string, query: string, gotoPage: number) : Promise<Response> => {
    var url = `https://api.github.com/search/${searchCategory}`;
    var queryString = `?q=${query}&page=${gotoPage}&per_page=${pageRecordsNo}`;

    url = url + queryString;

    var result : Promise<any | void>;
    
    result = new Promise<Response>(
        (resolve, reject) => 
            {   
                if(canRequest){
                    canRequest = false;
                    setTimeout(
                        () => {
                                console.log(`fetching from ${url}`);
                                var currTime = new Date()
                                console.log('from LastTime', (currTime as any - (timer as any)))
                                timer = currTime;

                                fetch(url).then(
                                    async response => {
                                    var body = await response.json();
                                    if(body.errors){
                                        reject(JSON.stringify(body.errors));
                                    }
                                    resolve({
                                        headers: response.headers,
                                        body: body,
                                        status: response.status
                                    })
                                }).catch(
                                    error => {
                                        console.log(error);
                                        reject(error);
                                    }
                                )
                                .finally(
                                    () => {canRequest = true}
                                )
                            }, 
                        throttilingTime)
                }
            });

    return result;
}

export default SearchService