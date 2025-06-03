import React from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card/card";

export const Pricing: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 font-manrope text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose a plan that fits your hiring needs. Upgrade anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="border rounded-2xl p-8 shadow hover:shadow-lg transition duration-300">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-4xl font-bold text-emerald-500 mb-4">$5</p>
              <p className="text-gray-600 mb-6">10 interviews</p>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={20} />
                  Basic Interview Templates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={20} />
                  Email Support
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Standard Plan */}
          <Card className="border-2 border-emerald-400 rounded-2xl p-8 shadow-lg scale-105">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-4xl font-bold text-emerald-500 mb-4">$10</p>
              <p className="text-gray-600 mb-6">20 interviews</p>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={20} />
                  All Interview Templates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={20} />
                  Priority Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={20} />
                  Basic Analytics
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border rounded-2xl p-8 shadow hover:shadow-lg transition duration-300">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-4xl font-bold text-emerald-500 mb-4">$20</p>
              <p className="text-gray-600 mb-6">50 interviews</p>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={20} />
                  All Interview Templates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={20} />
                  24/7 Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-emerald-400 mr-2" size={20} />
                  Advanced Analytics
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
