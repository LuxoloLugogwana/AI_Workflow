import { WorkflowStage } from '../types';

interface StageCardProps {
  stage: WorkflowStage;
  isSelected: boolean;
  onClick: () => void;
}

function StageCard({ stage, isSelected, onClick }: StageCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${
        isSelected
          ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
          : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold ${
            isSelected
              ? 'bg-blue-600 text-white'
              : 'bg-slate-100 text-slate-700'
          }`}
        >
          {stage.id}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 mb-1">
            {stage.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {stage.description}
          </p>
        </div>
      </div>
    </button>
  );
}

export default StageCard;
