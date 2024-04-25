const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index');

//const UserService = require('./services/user-service')

const app=express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, async() => {
        console.log(`Server Started on Port: ${PORT}`);
        
        /*const service = new UserService();
        const newToken = service.createToken({email: 'vani@admin.com',id:'1'});
        console.log("New Token is ",newToken)
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbmlAYWRtaW4uY29tIiwiaWQiOiIxIiwiaWF0IjoxNzE0MDIzMTQ0LCJleHAiOjE3MTQwMjMxNzR9.I5iWQ338GDWzfZWNpBSxnPE4T9z4Xz7Tkxq1TLEpYNg'
        const response = service.verifyToken(token);
        console.log(response)*/
    });
}

prepareAndStartServer();