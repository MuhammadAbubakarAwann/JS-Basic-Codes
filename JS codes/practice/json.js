function getData(){
    alert("Will get the data here")
    
const xhr = new XMLHttpRequest()
const url = "http://127.0.0.1:5500/practice/data.json"
xhr.open('GET',url)
xhr.onload=()=>{
    console.log("will print the data here")
    console.log(xhr.responseText)
    let data = JSON.parse(xhr.responseText)
    console.log(data)

    for(let key in data){
        let dl = document.createElement('dl')
        let dt = document.createElement('dt')
        dt.innerHTML = `${key}`

        let dd = document.createElement('dd')
        dd.innerHTML = `${data[key]}`

        dl.appendChild(dt)
        dt.appendChild(dd)

        document.getElementById('data').appendChild(dl)
    }

    
}
xhr.send()

}