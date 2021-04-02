export class AlreadyExists extends Error {
    statusCode = 400;
    constructor(){
        super("item already exists")
    }
}

export class NotFound extends Error {
    statusCode = 404;
    constructor(item: string) {
        super(item+" not found.");
    }
}

export class NotPermitted extends Error {
    statusCode = 403;
    constructor(reason: string) {
        super(reason);
    }
    
}