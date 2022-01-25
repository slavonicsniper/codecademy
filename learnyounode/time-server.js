const net = require('net'), process = require('process');

const port = process.argv[2];

const server = net.createServer(socket => {
    let date_ob = new Date();

    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    // current year
    let year = date_ob.getFullYear();
    
    // current hours
    let hours = ("0" + date_ob.getHours()).slice(-2);
    
    // current minutes
    let minutes = ("0" + date_ob.getMinutes()).slice(-2);
        
    socket.end(year + "-" + month + "-" + date + " " + hours + ":" + minutes + "\n");
})
server.listen(port);