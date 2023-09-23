export class SuccessServerResult {
    constructor (public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResult {
    constructor (public httpCode: number, public message: string) {}
}

export function getResult(result: SuccessServerResult) {
    if (result.httpCode === 200) {
        return result.resultObject;
    } else {
        return (result as any as ErrorServerResult).message;
    }
}