import { WorkflowStage } from '../types';

export const workflowStages: WorkflowStage[] = [
  {
    id: 1,
    title: 'Problem Definition',
    description: 'Define objectives, success metrics, and constraints',
    activities: [
      'Identify business/clinical need',
      'Define target variable',
      'Establish evaluation metrics'
    ]
  },
  {
    id: 2,
    title: 'Data Collection',
    description: 'Gather relevant data from various sources',
    activities: [
      'Identify data sources',
      'Extract data',
      'Ensure data privacy/compliance'
    ]
  },
  {
    id: 3,
    title: 'Data Exploration (EDA)',
    description: 'Understand data structure, distributions, and relationships',
    activities: [
      'Summary statistics',
      'Visualizations',
      'Identify patterns & anomalies'
    ]
  },
  {
    id: 4,
    title: 'Data Preprocessing',
    description: 'Clean and prepare data for modeling',
    activities: [
      'Handle missing values',
      'Remove duplicates',
      'Encode categorical variables',
      'Scale/normalize features'
    ]
  },
  {
    id: 5,
    title: 'Feature Engineering',
    description: 'Create and select relevant features',
    activities: [
      'Create new features',
      'Feature selection',
      'Handle feature interactions'
    ]
  },
  {
    id: 6,
    title: 'Model Selection',
    description: 'Choose appropriate algorithms',
    activities: [
      'Consider problem type',
      'Evaluate model complexity',
      'Balance interpretability vs accuracy'
    ]
  },
  {
    id: 7,
    title: 'Model Training',
    description: 'Train models on prepared data',
    activities: [
      'Split data (train/val/test)',
      'Train multiple models',
      'Tune hyperparameters'
    ]
  },
  {
    id: 8,
    title: 'Model Evaluation',
    description: 'Assess model performance',
    activities: [
      'Calculate metrics (accuracy, AUC, etc.)',
      'Cross-validation',
      'Compare models',
      'Check for overfitting'
    ]
  },
  {
    id: 9,
    title: 'Model Deployment',
    description: 'Deploy model to production environment',
    activities: [
      'Integration with systems',
      'API development',
      'Scalability considerations'
    ]
  },
  {
    id: 10,
    title: 'Monitoring & Maintenance',
    description: 'Continuously monitor and update model',
    activities: [
      'Track performance',
      'Detect data drift',
      'Retrain periodically',
      'Update based on feedback'
    ]
  }
];
