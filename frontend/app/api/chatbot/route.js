import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//TODO - If I have time create custom functions for the chatbot to call that can call all available dates and then a function that the chatbot can call to schedule a class for the user
//TODO - Give the chatbot the necessary information to answer all questions related to the website
//TODO - Test that the chatbot doesn't hallucinate
//TODO - Create an intention array for the chatbot to infer the clients intention and then respond accordingly
//TODO - Depending on the authorization of the user the chatbot will respond differently and only give the user the information they are authorized to see

const personality = {
  helpful: "I am a helpful chatbot assistant on a website here to help users with their questions and queries about this dance website owned by Priyanka Raghuaraman",
  cheerful: "I am a cheerful enthusiastic chatbot assistant on a website here to give a joyful enthusiastic experiernce to users on this dance website owned by Priyanka Raghuaraman I will help answer the users questions and queries with a cheerful manner.",
  friendly: "I am a friendly chatbot assistant on a website here to help users with their questions and queries about this dance website owned by Priyanka Raghuaraman",
  joking: "I am a jokative chatbot assistant on a website here to help users with their questions and queries about this dance website owned by Priyanka Raghuaraman",
}

//? Sample Completions Object from OpenAI
// {
//   "id": "chatcmpl-123",
//   "object": "chat.completion",
//   "created": 1677652288,
//   "model": "gpt-3.5-turbo-0613",
//   "choices": [{
//     "index": 0,
//     "message": {
//       "role": "assistant",
//       "content": "\n\nHello there, how may I assist you today?",
//     },
//     "finish_reason": "stop"
//   }],
//   "usage": {
//     "prompt_tokens": 9,
//     "completion_tokens": 12,
//     "total_tokens": 21
//   }
// }

export async function POST(request) {
  const { input } = request.body;
  console.log(input);


  try {
    // Test if this works
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `${personality.helpful}`
        }, 
        {
          role: "assistant",
          content: `Hi how can I help you today? Would you like to know about the dance classes or the dance teacher?
                    I can also tell you about available classes and possibly help you schedule a class.
                    I can also tell you about the dance teacher and her background.`
        },
        {
          role: "user",
          content: `${input}`
        }
      ],
      n: 1,
      temperature: 0.8,
      max_tokens: 200 // either use this or top_p with top_p utilizing the top probability inside the vector database of Open AI
    })

    const chatBotReply = completion.choices[0].message.content;

    return Response.json(chatBotReply)

  } catch (error) {
    console.error("Error generating Chatbot Response:", error);
    return Response.json({ message: "An error occurred while generating chatbot response" });
  }
}


