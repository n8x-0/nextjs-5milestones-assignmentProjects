export const blogs = [
    { 
        id: 1,
        title: "Understanding JavaScript Closures",
        blog: "JavaScript closures are a fundamental concept that every JavaScript developer must grasp. A closure is the combination of a function and its lexical environment within which it was declared. This means that even after the outer function has finished execution, the inner function still has access to the variables and parameters of the outer function. Closures enable powerful use cases, such as function currying, creating private variables, and writing concise asynchronous code.",
        image: "/tech3.jpg",
        author: "john.doe@example.com",
        likes: 120,
        comments: [
            { author: "jane.smith@example.com", comment: "Great explanation of closures!" },
            { author: "dev.guru@example.com", comment: "This was very insightful, thanks!" }
        ]
    },
    {
        id: 2,
        title: "The Rise of Serverless Architecture",
        blog: "Serverless computing is a modern approach to building and running applications and services without thinking about servers. It doesn't mean there are no servers involved; rather, the management of server infrastructure is abstracted away to allow developers to focus on writing code. Companies are increasingly adopting serverless platforms like AWS Lambda, Google Cloud Functions, and Azure Functions due to scalability, cost efficiency, and reduced operational complexity.",
        image: "/tech2.avif",
        author: "sarah.connor@example.com",
        likes: 95,
        comments: [
            { author: "john.doe@example.com", comment: "Serverless is definitely the future!" },
            { author: "tech.wizard@example.com", comment: "Great overview of its benefits." }
        ]
    },
    {
        id: 3,
        title: "Demystifying Artificial Intelligence",
        blog: "Artificial intelligence (AI) is transforming the way we live and work. AI refers to the simulation of human intelligence processes by machines, particularly computer systems. These processes include learning, reasoning, and self-correction. AI is present in various industries, from healthcare to finance, helping improve efficiencies and uncover new possibilities. However, there are ethical concerns surrounding AI, such as data privacy and job displacement, which require careful consideration.",
        image: "/tech.jpg",
        author: "ai.expert@example.com",
        likes: 210,
        comments: [
            { author: "future.thinker@example.com", comment: "AI is both exciting and scary!" },
            { author: "sarah.connor@example.com", comment: "We need ethical guidelines for AI development." }
        ]
    }
];
