// Import necessary dependencies
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedMockData() {
  // Create a quiz
  const quiz = await prisma.quiz.create({
    data: {
      title: 'Sample Quiz',
      courseId: 'abfc2f11-bd95-4541-9ff2-2d99772921db',
    },
  });

  // Create questions for the quiz
  const question1 = await prisma.question.create({
    data: {
      text: 'What is the capital of France?',
      quizId: quiz.id,
      correctOption: 'Paris',
      options: {
        create: [
          { text: 'Paris' },
          { text: 'Berlin' },
          { text: 'Madrid' },
          { text: 'Rome' },
        ],
      },
    },
  });

  const question2 = await prisma.question.create({
    data: {
      text: 'Which planet is known as the Red Planet?',
      quizId: quiz.id,
      correctOption: 'Mars',
      options: {
        create: [
          { text: 'Earth' },
          { text: 'Mars' },
          { text: 'Jupiter' },
          { text: 'Venus' },
        ],
      },
    },
  });

  // Create a user
  const user = await prisma.userProgress.create({
    data: {
      userId: 'user_2Z6vIgjaffrLhFlLJtuesBQpvRR',
      chapterId: '',
      isCompleted: false,
    },
  });

  // User responses to the questions
  const response1 = await prisma.response.create({
    data: {
      userId: user.userId,
      questionId: question1.id,
      selectedOption: 'Paris',
      isCorrect: true,
    },
  });

  const response2 = await prisma.response.create({
    data: {
      userId: user.userId,
      questionId: question2.id,
      selectedOption: 'Mars',
      isCorrect: true,
    },
  });

  console.log('Mock data seeded successfully');
}

seedMockData()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
