# MacroMind

MacroMind is an AI-powered health tracking app that simplifies calorie tracking, provides intelligent nutrition suggestions, and integrates with fitness wearables to provide a holistic health overview — all through natural chat interaction.

## Features

- **AI Chat Assistant**: Log meals via natural language
- **Macro Tracking**: Monitor your daily calories, protein, carbs, and fat
- **Fitbit Integration**: Sync daily data (steps, calories burned, heart rate, sleep)
- **Smart Summary Dashboard**: Combines food intake + health indicators
- **Goal Customization**: Set your fitness goals (cut, bulk, maintain)
- **Daily Suggestions**: Get AI-generated nutrition advice

## Getting Started

### Prerequisites

- Node.js (18.x or newer)
- npm
- Supabase account
- OpenAI API key
- Fitbit Developer account (for Fitbit API access)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/macromind.git
cd macromind
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your API keys:

```
# API Keys
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
OPENAI_API_KEY=your-openai-api-key

# Fitbit API credentials
FITBIT_CLIENT_ID=your-fitbit-client-id
FITBIT_CLIENT_SECRET=your-fitbit-client-secret
FITBIT_CALLBACK_URL=http://localhost:3000/api/fitbit/callback
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Tech Stack

- **Frontend**: Next.js with JavaScript
- **Backend**: Supabase
- **Database**: Supabase
- **AI Integration**: OpenAI GPT-4 API
- **Wearable Sync**: Fitbit Web API (OAuth 2.0)
- **Authentication**: Supabase Auth
- **Hosting**: Vercel

## Project Structure

```
macromind/
├── app/
│   ├── components/           # React components
│   ├── services/             # API services
│   ├── utils/                # Utility functions
│   ├── data/                 # Data models and helpers
│   ├── page.js               # Main app page
│   └── layout.js             # App layout
├── public/                   # Static assets
└── ...
```

## Development Roadmap

- Week 1: Finalize designs and user flows
- Week 2: Build food logging interface + chat
- Week 3: Fitbit OAuth setup + sync + basic AI replies
- Week 4: Dashboard, goal setting, and daily summary logic
- Week 5: Test, iterate, polish UX
- Week 6: Internal pilot + user feedback cycle

## License

This project is licensed under the MIT License - see the LICENSE file for details.
