// Import necessary dependencies
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedMockData() {
  // Create a quiz
  const quiz = await prisma.quiz.create({
    data: {
      title: 'Sample Quiz',
      description: 'This is a sample quiz for testing purposes',
      courseId: 'abfc2f11-bd95-4541-9ff2-2d99772921db',
    },
  });

  // Create questions for the quiz
  const question1 = await prisma.question.create({
    data: {
      text: 'What is the capital of France?',
      options: JSON.stringify(['Paris', 'Berlin', 'Madrid', 'Rome']),
      correctAnswerIndex: 0,
      quizId: quiz.id,
    },
  });

  const question2 = await prisma.question.create({
    data: {
      text: 'Which planet is known as the Red Planet?',
      options: JSON.stringify(['Earth', 'Mars', 'Jupiter', 'Venus']),
      correctAnswerIndex: 1,
      quizId: quiz.id,
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

  // User attempts the quiz (first attempt)
  const attempt1 = await prisma.answer.create({
    data: {
      userId: user.userId,
      questionId: question1.id,
      selectedOptionIndex: 0,
    },
  });

  // User attempts the quiz (second attempt)
  const attempt2 = await prisma.answer.create({
    data: {
      userId: user.userId,
      questionId: question2.id,
      selectedOptionIndex: 1,
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
