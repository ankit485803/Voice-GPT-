import OpenAI from 'openai';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const rl = readline.createInterface({ input, output });
console.log("Welcome to ChatGPT API")
const mySecret = process.env['key']
const messages = []



const openai = new OpenAI({
  apiKey: 'mySecret', // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Hey ChatGPT how are you' }],
    model: 'gpt-3.5-turbo',
  });

 // console.log(completion.choices);
  console.log(completion.choices[0]?.message?.content);
}

main();

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  main(input)
  if (input === "q"){
    rl.close();
  }
});
