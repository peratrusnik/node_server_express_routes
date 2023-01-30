let btn = document.querySelector('#one')

btn.addEventListener('click', function () { 
    
    let xml = new XMLHttpRequest();

    // xml.setRequestHeader("Content-Type","application/json") // ovo treba kada je post zahtev u ajax da bi se express.json() upalio 
    
    xml.open('get', '/data')
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            console.log(JSON.parse(xml.responseText));
        }
    }
    xml.send()
 })