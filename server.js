const express = require("express");

const next = require('next')

const dev = process.env.NODE_ENV != 'production'

const app = next({dev})

const handle = app.getRequestHandler()

app
.prepare()
.then(()=>{
    const server = express()
    server.get('/:id',(req,res)=>{
        const actu = "/Hello"
        const queryParams = {title: req.params.id}
        app.render(req,res, actu, queryParams)

    })
    server.get('*',(req,res)=>{
        return handle(req,res)
    })

    server.listen(3000,err=>{
        if (err) throw err
        console.log("server is working ")
    })
}).catch((err)=>{
    console.log(err)
})