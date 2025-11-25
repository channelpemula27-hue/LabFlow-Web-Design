import { GoogleGenAI } from "@google/genai";

// Ensure API key is present
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

// --- TRAINING DATA / KNOWLEDGE BASE ---
// This acts as the "brain" for the agent. Update this text to "train" it on new info.
const LABFLOW_KNOWLEDGE_BASE = `
COMPANY PROFILE:
Name: LabFlow
Tagline: Intelligent Lab Automation
Mission: Reimagining the Future of Laboratory Systems.
Core Value: We transform laboratories into orchestrated powerhouses using Automation, AI Agents, and Agentic AI.

SERVICES:
1. Adaptive Automation:
   - Flexible AI automation agents based on unique SOPs.
   - Uses n8n systems.
   - Benefit: Workflow efficiency and ease of technology adoption.

2. Integrated Ecosystem:
   - Real-time data synchronization between instruments, reagents, and admin.
   - IoT integration.
   - Benefit: Single source of truth.

3. Audit Readiness:
   - ISO standard compliance.
   - Automatic data traceability.
   - Benefit: Peace of mind during audits, human error 0%.

4. Products:
   - LabFlow Inventory
   - Instrument Integration
   - SampleManager LIMS
   - Lab Consultation

CONTACT INFO:
- Email: farrel@labflow.my.id
- Phone: +62 856 4152 5681
- Location: Jakarta, Indonesia

SUCCESS STORIES (Reference only):
- Ivan Sarifudin (CEO, Labmania): Workflow optimized.
- Ayu Melinda (Trainer): 30% Growth, Zero Error.

TONE & BEHAVIOR:
- You are an expert Laboratory Automation Consultant.
- Professional, empathetic, and innovative.
- If you don't know the answer, ask the user to contact the team directly via the "Talk to Us" button.
- Do NOT make up pricing.
`;

export const generateSmartConsultation = async (userProblem: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please check your configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `SYSTEM INSTRUCTION:
              Use the following "Knowledge Base" to answer the user's question. 
              Always link the user's problem back to LabFlow's specific services (Adaptive Automation, Integrated Ecosystem, Audit Readiness).
              
              --- START KNOWLEDGE BASE ---
              ${LABFLOW_KNOWLEDGE_BASE}
              --- END KNOWLEDGE BASE ---
              
              USER INPUT: "${userProblem}"
              
              YOUR TASK:
              1. Analyze the user's pain point.
              2. Propose a solution strictly using the LabFlow services listed above.
              3. Be concise and persuasive.`
            }
          ]
        }
      ],
      config: {
        thinkingConfig: { thinkingBudget: 2048 }, // Adjusted budget for faster responses
      }
    });

    return response.text || "I apologize, I couldn't generate a solution at this moment.";
  } catch (error) {
    console.error("Error generating consultation:", error);
    return "An error occurred while analyzing your request. Please try again later.";
  }
};