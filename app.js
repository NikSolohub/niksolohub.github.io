// Developed by Nik Solohub (https://github.com/NikSolohub)

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

    //Loader Display

    class DisplayLoading{
        constructor(id){

            this.elem = document.querySelector('#'+id)

            this._en = ()=>{
                                //ToDo when loading is enabled
                elem.style.display = "block"
            }
            this._dis = ()=>{
                                //ToDo when loading is disabled
                                this._smoothHide()
            }

            this._smoothHide = ()=>{

                function animate({timing, draw, duration}) {

                    let start = performance.now();
                  
                    requestAnimationFrame(function animate(time) {
                      // timeFraction изменяется от 0 до 1
                      let timeFraction = (time - start) / duration;
                      if (timeFraction > 1) timeFraction = 1;
                  
                      // вычисление текущего состояния анимации
                      let progress = timing(timeFraction);
                  
                      draw(progress); // отрисовать её
                  
                      if (timeFraction < 1) {
                        requestAnimationFrame(animate);
                      }
                  
                    });
                  }


                  animate({
                    duration: 300,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        document.querySelector('#'+id).style.opacity = 1 - progress * 1;
                            if (progress == 1)
                            document.querySelector('#'+id).style.display = 'none'
                    }
                  });


            }

        }

            get enable(){
                return this._en()
            }
            
            get disable(){
                return this._dis()
            }
    }

                
    //-------------------------------------------


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

            let Loader = new DisplayLoading('gLdr')
                Loader.disable

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