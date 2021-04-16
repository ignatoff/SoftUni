function requestValidator(list) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const sampleURI = /^([A-Za-z\d\.]+)$|^\*$/g;
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const sampleMessage = /^([^<>\\&'"]*)$/g;

    if (!list.hasOwnProperty('method') || !methods.includes(list.method)) {
        throw new Error('Invalid request header: Invalid Method');

    } else if (!list.hasOwnProperty('uri') || !list.uri.match(sampleURI)) {
        throw new Error('Invalid request header: Invalid URI');

    } else if (!list.hasOwnProperty('version') || !versions.includes(list.version)) {
        throw new Error('Invalid request header: Invalid Version');

    } else if (!list.hasOwnProperty('message') || !list.message.match(sampleMessage)) {
        throw new Error('Invalid request header: Invalid Message');

    }
    
    return list;    
}

console.log(requestValidator(
    {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: 'asl<pls'
    }
));

module.exports = requestValidator;