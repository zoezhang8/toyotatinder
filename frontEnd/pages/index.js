const socket = new WebSocket('ws://localhost:3000')
let requests = [];


function sendReq(e) {
    e.preventDefault()
    const input = document.querySelector('input')
    if (input.value) {
        socket.send(input.value)
        requests.push(input.value)
        input.value = ""
        console.log(requests)
    }
    input.focus()
}
function reqServed(e){
  
}

document.querySelector('form')
    .addEventListener('submit', sendReq)

// Listen for messages 
socket.addEventListener("message", ({ data }) => {
    const li = document.createElement('li')
    li.textContent = data
    document.querySelector('ul').appendChild(li)
})