const apiUrl = 'https://assets.breatheco.de/apis/fake/todos/user/juand';


const PutNote = () => async (data) =>  {
    try {
        const putApi = await fetch (apiUrl, {
            method: "PUT",
            body:  JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
        })

        return putApi;
    }

    catch (error){
        console.log(error.message)
    }
}

export default PutNote;