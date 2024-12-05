import { LoremIpsum } from "lorem-ipsum";
import OpenAI from 'openai';
const blah = process.env['OPENAI_API_KEY'];

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export const generateContent = async () => {
    console.log(blah);
    //  return await client.chat.completions.create({
    //     messages: [{ role: 'user', content: 'Say this is a test' }],
    //     model: 'gpt-3.5-turbo',
    //   });
    
    // TODO: Replace with ChatGPT
    const lorem = new LoremIpsum();

    return lorem.generateParagraphs(8);
}