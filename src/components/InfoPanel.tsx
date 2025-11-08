import { X, CheckCircle2 } from 'lucide-react';
import { WorkflowStage } from '../types';

interface InfoPanelProps {
  stage: WorkflowStage;
  onClose: () => void;
}

function InfoPanel({ stage, onClose }: InfoPanelProps) {
  return (
    <div className="lg:w-96 bg-white rounded-xl shadow-lg border border-slate-200 p-6 lg:sticky lg:top-6 h-fit">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
            {stage.id}
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {stage.title}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <p className="text-slate-700 mb-6 leading-relaxed">
        {stage.description}
      </p>

      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
          Key Activities
        </h3>
        <ul className="space-y-2">
          {stage.activities.map((activity, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InfoPanel;
