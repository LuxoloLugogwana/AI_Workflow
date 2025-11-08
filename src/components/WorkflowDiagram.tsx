import { useState } from 'react';
import { ChevronRight, Info } from 'lucide-react';
import { workflowStages } from '../data/workflowData';
import StageCard from './StageCard';
import InfoPanel from './InfoPanel';

function WorkflowDiagram() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">
          AI Development Workflow
        </h1>
        <p className="text-lg text-slate-600">
          End-to-end process for building AI/ML systems
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflowStages.map((stage, index) => (
              <div key={stage.id} className="relative">
                <StageCard
                  stage={stage}
                  isSelected={selectedStage === stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                />

                {index < workflowStages.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    {index % 2 === 0 && (
                      <ChevronRight className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-slate-900">
                Key Notes
              </h3>
            </div>

            <div className="space-y-4 text-slate-700">
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Iterative Nature
                </h4>
                <p className="text-sm leading-relaxed">
                  The workflow is not strictly linear. You may need to return to earlier stages based on insights from later stages.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Documentation
                </h4>
                <p className="text-sm leading-relaxed">
                  Document decisions, assumptions, and results at each stage for reproducibility and collaboration.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Stakeholder Involvement
                </h4>
                <p className="text-sm leading-relaxed">
                  Engage domain experts and end-users throughout the process, especially in problem definition and evaluation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Ethics & Bias
                </h4>
                <p className="text-sm leading-relaxed">
                  Consider ethical implications and potential biases at every stage, from data collection through deployment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {selectedStage !== null && (
          <InfoPanel
            stage={workflowStages.find(s => s.id === selectedStage)!}
            onClose={() => setSelectedStage(null)}
          />
        )}
      </div>
    </div>
  );
}

export default WorkflowDiagram;
