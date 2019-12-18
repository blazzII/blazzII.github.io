// pass an argument like Date.prototype

Object.getOwnPropertyNames(Array.prototype)
    .filter(name => name.startsWith('to'))
    .map(method => `${method}: ${(new Date())[method]()}`)