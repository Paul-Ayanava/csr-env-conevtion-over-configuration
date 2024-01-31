export type Environment = 'IT' | 'UAT' | 'DEV' | 'Prod'

export const getEnv = (): Environment => {
    const hostname = window.location.hostname
    const environmentPrefix = hostname.split('-')[0].toLocaleLowerCase()
    if(environmentPrefix.startsWith('it')) {
        return 'IT'
    } else if(environmentPrefix.startsWith('uat')) {
        return 'UAT'
    } else if(environmentPrefix.startsWith('dev')) {
        return 'DEV'
    } else {
        return 'Prod'
    }
}