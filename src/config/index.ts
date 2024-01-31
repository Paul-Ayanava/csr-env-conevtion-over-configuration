import { getEnv } from "../utils/getEnv";

export const getApiUrl = () => {
    const env = getEnv()
    switch(env) {
        case 'IT': 
            return {
                // Add rest of the environment specific values here
                apigeeurl: 'it-online-api.example.com/v1',
                aemurl: 'it-online-aem.example.com/content'
            }
        case 'UAT': 
            return {
                apigeeurl: 'uat-online-api.example.com/v1',
                aemurl: 'uat-online-aem.example.com/content'
            }
        case 'DEV': 
            return {
                apigeeurl: 'dev-online-api.example.com/v1',
                aemurl: 'dev-online-aem.example.com/content'
            }
        default:
            return {
                apigeeurl: 'online-api.example.com/v1',
                aemurl: 'online-aem.example.com/content'
            }
    }
}
