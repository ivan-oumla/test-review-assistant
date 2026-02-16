# Test Review Assistant

This is a test Next.js application to test the Oumla Review Assistant Slack bot.

## Features

- **PR Analysis**: Automatically analyzes PRs and posts to Slack
- **AI Code Review**: Request automated code reviews with inline comments
- **Interactive Notifications**: Take review, AI review, and snooze buttons
- **Smart Approvals**: Bot automatically approves PRs with no critical issues
- **GitHub App Integration**: Bot has its own identity (oumla-review-assistant[bot])

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## FAQ

**Q: How does the bot analyze PRs?**
A: The Oumla Review Assistant uses Claude AI to analyze code changes, assess risk levels, estimate review time, and provide actionable insights.

**Q: Can the bot automatically approve PRs?**
A: Yes! If the AI review finds no critical or major issues, the bot will automatically approve the PR. Critical issues trigger a "Request Changes" review.

**Q: How do I claim a PR for review?**
A: Click the "👀 Take Review" button in the Slack notification. This marks the PR as yours and prevents duplicate review efforts.

**Q: What happens when I snooze a PR?**
A: Snoozing updates the activity timestamp, preventing nudge notifications for a while. You'll receive a confirmation DM.

**Q: How can I request an AI code review?**
A: Click the "🤖 AI Review" button in Slack. The bot will analyze the code and post inline comments directly on GitHub.
