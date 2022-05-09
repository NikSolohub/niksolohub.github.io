"use strict"
    {

            fetch('/conf.json', {
                method: "GET"
            })
                .then(resp => resp.json())
                .then(data => console.log(data));
        
    }
