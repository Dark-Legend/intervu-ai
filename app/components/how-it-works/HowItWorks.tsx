import React from "react";
import {
  LogIn,
  LayoutDashboard,
  FilePlus,
  Bot,
  Send,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card/card";

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How <span className="text-emerald-400">Intervu</span>AI Works
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Automate interviews in just a few steps — from job setup to sharing
          intelligent, AI-powered interview links.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
            <CardTitle>
              <LogIn className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Login & Access Dashboard
              </h3>
            </CardTitle>
            <CardContent>
              <p className="text-gray-600">
                Sign in to your IntervuAI account to access your personal
                dashboard. This is where all your interviews are managed.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
            <CardTitle>
              <LayoutDashboard className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Create a New Interview
              </h3>
            </CardTitle>
            <CardContent>
              <p className="text-gray-600">
                Click on <strong>Create New Interview</strong> and fill in the
                job title, detailed description, interview duration, and select
                the interview type —{" "}
                <em>
                  Technical, Behavioral, Experience-based, Problem Solving, or
                  Leadership
                </em>
                .
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
            <CardTitle>
              <Bot className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Generate Smart Questions
              </h3>
            </CardTitle>
            <CardContent>
              <p className="text-gray-600">
                Hit the <strong>Generate Questions</strong> button. Our AI
                instantly generates customized, relevant interview questions
                tailored to the role and type you&apos;ve selected.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
            <CardTitle>
              <FilePlus className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Review & Finalize Interview
              </h3>
            </CardTitle>
            <CardContent>
              <p className="text-gray-600">
                Review the generated questions, make any changes if needed, then
                click <strong>Create Interview</strong> to finalize and publish.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
            <CardTitle>
              <Send className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                5. Share Interview Link
              </h3>
            </CardTitle>
            <CardContent>
              <p className="text-gray-600">
                Share the generated interview link with candidates. They can
                take the interview anytime — no scheduling required.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
            <CardTitle>
              <BarChart3 className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                6. Get AI-Generated Reports
              </h3>
            </CardTitle>
            <CardContent>
              <p className="text-gray-600">
                Once completed, you&apos;ll receive a detailed report with
                candidate responses, scoring, behavioral insights, and our
                AI&apos;s recommendations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
