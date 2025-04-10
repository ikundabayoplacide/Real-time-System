"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Download, Share } from "lucide-react";
import DashboardLayout from '../dashboard/page';

export default function AnalysisResultsPage() {
  // Disease data
  const diseaseData = {
    imageName: "IMG_4532",
    imageNumber: 2,
    totalImages: 5,
    processedDate: "March 02, 2025",
    disease: "Late Blight (Phytophthora infestans)",
    severity: 80,
    spreadRisk: 90,
    confidence: 92,
    description: "Late blight is a destructive disease affecting tomatoes, causing brown lesions on leaves that can quickly spread to stems and fruits. In humid conditions, white mold may form on the underside of leaves. The disease can progress rapidly and potentially destroy entire plants.",
    recommendedActions: [
      "Remove and destroy infected plant parts",
      "Apply copper-based fungicide as soon as possible",
      "Space plants for better air circulation",
      "Water at the base of plants to keep foliage dry",
      "Monitor surrounding plants for early signs of infection"
    ]
  };

  // Analysis history data
  const historyData = [
    {
      date: "Mar 01, 2025",
      imageId: "IMG_4498",
      result: "Healthy",
      severity: "-",
      location: "North Field",
      action: "View"
    },
    {
      date: "Mar 28, 2025",
      imageId: "IMG_4426",
      result: "Leaf Spot",
      severity: "Medium",
      location: "South Field",
      action: "View"
    }
  ];

  return (
    <DashboardLayout activePage="results">
      <div className=" max-w-8xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Analysis Results</h1>
          
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">Image ID: {diseaseData.imageName} • Processed on {diseaseData.processedDate}</p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-lg bg-gray-200 hover:bg-gray-300">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <span>Image {diseaseData.imageNumber} of {diseaseData.totalImages}</span>
                <Button variant="ghost" size="icon" className="rounded-lg bg-gray-200 hover:bg-gray-300">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">Save All</Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white">Export Report</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left section - Image and tabs */}
            <div>
              <div className="bg-white p-4 rounded-lg mb-4">
                <div className="bg-gray-100 h-72 rounded-lg flex items-center justify-center mb-4">
                  {/* This would be your actual image - replacing with SVG visual representation */}
                  <svg width="280" height="200" viewBox="0 0 280 200">
                    <ellipse cx="180" cy="100" rx="100" ry="80" fill="rgba(144, 238, 144, 0.7)" />
                    <ellipse cx="120" cy="100" rx="80" ry="60" fill="rgba(173, 179, 114, 0.7)" />
                    <ellipse cx="150" cy="100" rx="50" ry="30" fill="rgba(210, 105, 30, 0.7)" />
                    <ellipse cx="130" cy="120" rx="30" ry="20" fill="rgba(210, 105, 30, 0.7)" />
                    <ellipse cx="140" cy="90" rx="100" ry="40" fill="rgba(255, 182, 193, 0.4)" strokeWidth="2" stroke="rgba(255, 182, 193, 0.8)" />
                  </svg>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" className="rounded-full bg-gray-200 hover:bg-gray-300">Original</Button>
                  <Button className="rounded-full bg-teal-500 hover:bg-teal-600 text-white">Analyzed</Button>
                  <Button variant="ghost" className="rounded-full bg-gray-200 hover:bg-gray-300">Healthy Ref</Button>
                  <Button variant="ghost" className="rounded-full bg-gray-200 hover:bg-gray-300">Zoom</Button>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h2 className="font-semibold text-lg mb-2">Detected Disease</h2>
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 text-red-800 px-4 py-1 rounded-full">
                    Late Blight
                  </div>
                  <p className="text-gray-700">Confidence: {diseaseData.confidence}%</p>
                </div>
              </div>
            </div>
            
            {/* Right section - Disease Info */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-2">{diseaseData.disease}</h2>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Severity:</span>
                </div>
                <Progress value={diseaseData.severity} className="h-4 bg-gray-200" />
                <div className="text-right text-sm">High ({diseaseData.severity}%)</div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium mb-1">Description:</h3>
                <p className="text-sm text-gray-700">{diseaseData.description}</p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Disease Spread Risk:</span>
                </div>
                <Progress value={diseaseData.spreadRisk} className="h-4 bg-gray-200" />
                <div className="text-right text-sm">Very High ({diseaseData.spreadRisk}%)</div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Recommended Actions:</h3>
                <ul className="space-y-2">
                  {diseaseData.recommendedActions.map((action, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-3 w-3 bg-gray-800 rounded-full mr-2"></div>
                      <p className="text-sm">{action}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                <Button className="flex-1 bg-orange-400 hover:bg-orange-500 text-white">
                  <Share className="w-4 h-4 mr-2" />
                  Share Results
                </Button>
                <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">
                  Treatment Plan
                </Button>
              </div>
            </Card>
          </div>
          
          {/* History Table */}
          <div className="mt-8 bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Recent Analysis History</h2>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-700">
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Image ID</th>
                  <th className="pb-2">Result</th>
                  <th className="pb-2">Severity</th>
                  <th className="pb-2">Location</th>
                  <th className="pb-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-3">{item.date}</td>
                    <td>{item.imageId}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        item.result === "Healthy" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-orange-100 text-orange-800"
                      }`}>
                        {item.result}
                      </span>
                    </td>
                    <td>{item.severity}</td>
                    <td>{item.location}</td>
                    <td>
                      <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white text-xs py-1">
                        {item.action}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}