
fetch("http://localhost:3000/films")
.then(function(response){
    return response.json()
})
.then(function (films){
    console.log(films)
    films.map(function(films){
        const list = document.querySelector("#list")
        const filmList = document.createElement("li")
        filmList.className = ("title")
        list.appendChild(filmList)
        filmList.textContent = films.title

        filmList.addEventListener("click", chooseTitle)

        function chooseTitle(){
            const title =document.getElementById("title")
            const runtime=document.getElementById("runtime")
            const capacity =document.getElementById("capacity")
            const showtime =document.getElementById("showtime")
            const tickets =document.getElementById("tickets")
            const description =document.getElementById("description")
            const image = document.getElementById("image")

            title.textContent = films.title
            runtime.textContent = films.runtime
            capacity.textContent = films.capacity
            showtime.textContent = films.showtime
            tickets.textContent = films.tickets_sold
            description.textContent = films.description
            image.src = films.poster

            document.getElementById("newticket").value = ""

            if(document.getElementById("tickets").textContent === "0" ){
                document.getElementById("button").value = "Soldout"
            }else {
                document.getElementById("button").value = "submit"
            }

        }
    })
})

const press = document.getElementById("button")
press.addEventListener("click", buyTicket)

function buyTicket(e){
    e.preventDefault()
    // alert("Hi")
    let availableTickets = document.getElementById("tickets").textContent;
    let newTicket = document.getElementById("newticket").value;
    const tickets =document.getElementById("tickets")

    availableTickets = parseInt(availableTickets)
    newTicket = parseInt(newTicket)
    capacity = parseInt(capacity)
    console.log(availableTickets)

    if(availableTickets >= newTicket){
        availableTickets = availableTickets - newTicket
        tickets.textContent = availableTickets
    }
    if(document.getElementById("tickets").textContent === "0" ){
        e.target.value = "Soldout"
    }else {
        e.target.value = "submit"
    }
    // console.log (availableTickets)
}