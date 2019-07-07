class UI {
    constructor(){
        this.dogs = document.querySelector('.dogs');
    }

    displayDogs(dogsData, index){
            this.dogs.innerHTML = `
            <img style="width: 200px" src="${dogsData[index]}" />
        `;

    }
}