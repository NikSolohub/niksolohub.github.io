"use strict"
    {

            fetch('/conf.json', {
                method: "POST"
            })
                .then(resp => resp.json())
                .then(data => console.log(data));
        
    }