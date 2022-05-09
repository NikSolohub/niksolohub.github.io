"use strict"
    {

        function request(url){
            let req = await fetch(url),
                res
                
            req.ok ? ()=>{res = await req.json(); return res} : console.log("Error");
        }

            let conf = request('/conf.jsom')
                console.log(conf)

    }
