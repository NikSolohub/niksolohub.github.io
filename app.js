"use strict"
    {
        let conf
            fetch('/conf.json', {
                method: "GET"
            })
                .then(resp => resp.json())
                .then(data => {return conf = data});
        
                console.log(conf.name)
    }
