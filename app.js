"use strict"

function MAIN(_){
    console.log(_)
}

async function INIT(a){
    let req = await fetch('config.json')
        if(req.ok){
            MAIN(await req.json())
        }
        else{
            console.log(req.status)
        }
}