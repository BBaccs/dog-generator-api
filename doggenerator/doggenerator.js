class DogGen {

    async getDogs(){
        const dogsResponse = await fetch('https://dog.ceo/api/breed/hound/images');
        
        const response = await dogsResponse.json();
        return {
            response
        }
    }
}