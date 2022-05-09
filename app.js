"use strict"

    function asyncLink(url, todo){
        if(todo)
            fetch(url)
                .then((resp) => {
                   return resp.text()
                })
                .then((content) =>{
                    todo(content)
                })
        else{
            console.log('Second parameter for getPages(url, todo) must be given!')
        }
    }


//MAIN FUNCTION
function main(arg){
    console.log(`Developed by ${arg.author}\n Dependencies needed:`)

    for(const[key, value] of Object.entries(arg.dependencies)){
        console.log(`${key} : ${value}\n`)
    }

        let links = document.querySelectorAll('a')
            
            links.forEach(element => {
                if(element.hasAttribute('async')){ //Async links setting
                    
                    for(const[key, value] of Object.entries(arg.route)){
                        if(element.getAttribute('href') == key){
                            element.onclick = (e) => {
                                e.preventDefault()
                                   asyncLink(value, (a)=>{
                                       document.getElementById(conf.content.id).innerHTML = a
                                   })
                            }
                        } 
                    }

                }
            });

            
}


//LOAD CONFIG AND START MAIN()
(async ()=>{
    let req = await fetch('/conf.json')
        if(req.ok){
            window.conf = await req.json()
                main(conf)
        }
        else{
            console.log(req.status)
        }
})();