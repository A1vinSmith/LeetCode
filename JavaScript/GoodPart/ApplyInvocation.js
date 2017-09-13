var statusObject = {
    status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);
console.info(status);
// status value : 'A-OK'


