import winston from "winston";

const customLevelsOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5
    }
}

const devLogger = winston.createLogger({
    levels: customLevelsOptions.levels,
    transports: [
        new winston.transports.Console({level: "debug", format: winston.format.simple()}),
        new winston.transports.Console({level: "http",format: winston.format.simple()}),
        new winston.transports.Console({level: "info",format: winston.format.simple()}),
        new winston.transports.Console({level: "warning",format: winston.format.simple()}),
        new winston.transports.Console({level: "error",format: winston.format.simple()}),
        new winston.transports.Console({level: "fatal",format: winston.format.simple()}),        
    ]
})

const prodLogger = winston.createLogger({
    levels: customLevelsOptions.levels,
    transports: [
        new winston.transports.File({filename: '.errors.log', level: "error", format: winston.format.simple()}),
        new winston.transports.File({filename: '.errors.log', level: "fatal", format: winston.format.simple()}),
    ]
})

export const addDevLogger = (req, res, next) => {
    req.devlogger = devLogger
    req.devlogger.debug(`${req.method} en ${req.url} - ${ new Date().toLocaleString()}`),
    req.devlogger.http(`${req.method} en ${req.url} - ${ new Date().toLocaleString()}`),
    req.devlogger.info(`${req.method} en ${req.url} - ${ new Date().toLocaleString()}`),
    req.devlogger.warning(`${req.method} en ${req.url} - ${ new Date().toLocaleString()}`),
    req.devlogger.error(`${req.method} en ${req.url} - ${ new Date().toLocaleString()}`),
    req.devlogger.fatal(`${req.method} en ${req.url} - ${ new Date().toLocaleString()}`),
    next()
}

export const addProdLogger = (req, res, next) => {
    req.prodlogger = prodLogger
    req.prodlogger.error(`${req.method} en ${req.url} - ${ new Date().toLocaleString()}`),
    req.prodlogger.fatal(`${req.method} en ${req.url} - ${ new Date().toLocaleString()}`),
    next()
}