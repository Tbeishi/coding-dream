import { OpenAIApi,Configuration } from "openai"; //

const configuration = new Configuration({
    apiKey:'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'
})

const openai = new OpenAIApi(configuration)

async function chat(input){
    //chatgpt 的业务代码 admin system(gpt) user(用户)
    //为什么是数组？
    const messages = [{role:'user', content:input}]
    const response = await openai.createChatCompletion({
        model:'gpt-3.5-turbo',
        messages,
        temperature:0,
    },{
        proxy:{
            host: '127.0.0.1',
            port: 7890
        }
    })
    return response.data.choices[0].message.content
}

const question = "what is the capital of France"
chat(question).then(response => console.log(response))
.catch(error => console.log(error))