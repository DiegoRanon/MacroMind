// This file provides functions for interacting with the OpenAI API

import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "your-openai-key",
});

/**
 * Analyze food input and extract nutritional data
 * @param {string} userInput - User's food input (e.g., "I ate 2 eggs, toast, and a banana")
 * @returns {Object} - Extracted nutritional data
 */
export async function analyzeFoodInput(userInput) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a nutrition expert. Extract food items with quantities from the user input and provide nutritional information (calories, protein, carbs, fats) for each item. Return as JSON.",
        },
        {
          role: "user",
          content: userInput,
        },
      ],
      response_format: { type: "json_object" },
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error("Error analyzing food input:", error);
    throw error;
  }
}

/**
 * Generate personalized nutrition advice
 * @param {Object} userProfile - User's profile data
 * @param {Object} nutritionData - User's nutrition data for the day
 * @returns {string} - Personalized advice
 */
export async function generateNutritionAdvice(userProfile, nutritionData) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a nutrition coach. Provide personalized advice based on the user's profile and current nutrition data.",
        },
        {
          role: "user",
          content: JSON.stringify({
            profile: userProfile,
            nutrition: nutritionData,
          }),
        },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error generating nutrition advice:", error);
    throw error;
  }
}

export default {
  analyzeFoodInput,
  generateNutritionAdvice,
};
