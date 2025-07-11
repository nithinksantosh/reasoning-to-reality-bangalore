
import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Brain, Code, Lightbulb, Users, Target, Zap, Database, Heart, TestTube, MessageSquare, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const PresentationWebsite = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const phases = [
    {
      id: 1,
      title: "Foundation & Exploration",
      status: "Completed",
      color: "bg-green-500",
      steps: [
        { title: "Introduction to AI", description: "Understanding AI fundamentals, applications across industries, and future impact." },
        { title: "Innovation Challenge", description: "Team members explored and experimented with AI tools, each creating a small, innovative project." },
        { title: "Project Showcase", description: "Presentations, initial deployment plans, and areas identified for iteration and improvement." }
      ]
    },
    {
      id: 2,
      title: "Technical Foundation & ML Mastery",
      status: "In Progress",
      color: "bg-brand-blue",
      steps: [
        { title: "Python & ML Basics", description: "Hands-on workshops covering Python programming and basic machine learning concepts." },
        { title: "Individual ML Projects", description: "Team members work on mini-projects using provided datasets to solve real-world problems." },
        { title: "Results & Learning", description: "Showcase of model results, sharing key lessons, and planning iterative improvements." },
        { title: "Prompt Engineering", description: "Introduction to the art and science of writing effective prompts for AI tools." }
      ]
    },
    {
      id: 3,
      title: "Advanced AI & LLM Specialization",
      status: "Upcoming",
      color: "bg-brand-orange",
      steps: [
        { title: "Deep Dive into LLMs", description: "Learn about Large Language Models, architecture, fine-tuning, and application." },
        { title: "Model Context Protocol (MCP)", description: "Master structuring context and input for optimal model performance and system design." },
        { title: "Advanced AI Systems", description: "Explore Retrieval-Augmented Generation (RAG), LangChain framework, and AI Agents." }
      ]
    }
  ];

  // Projects with links first, then projects without links
  const projects = [
    { name: "Watch with AI", description: "Recommends Shows Based on Mood", icon: Brain, link: "https://watchwithai.vercel.app/" },
    { name: "Nivara", description: "An emotional companion for mental wellbeing", icon: Heart, link: "https://emotion-wellness.vercel.app/" },
    { name: "Data Quality Checker", description: "Rule-Based Data Validation", icon: Code, link: "https://data-quality-ai-app-h7yjaayuvvyteiytacajme.streamlit.app/" },
    { name: "Process Mining Tool", description: "Operational Insights via Process Mapping", icon: Target, link: "https://flow-discovery-alchemy.lovable.app/" },
    { name: "Blood Report Analysis", description: "OCR Processing Engine", icon: Brain, link: "https://blood-byte-nutrition-guide.lovable.app/" },
    { name: "Craftsnest", description: "Personalized Gift Suggestion Engine", icon: Target, link: "https://splendorous-naiad-221a52.netlify.app" },
    { name: "Ayur Skin Care", description: "Personalized Product Recommendation", icon: Lightbulb, link: "https://preview--ayura-glow-finder-website.lovable.app/" },
    // Projects without links
    { name: "Nature Sip", description: "Herbal Juice Centre with Interactive Ordering", icon: Users },
    { name: "Compliance As a Service (CaaS)", description: "Automated Report Generator", icon: Zap },
    { name: "Snowflake to Postgresql Data migration", description: "Data Migration Tool", icon: Database },
    { name: "NL2Test", description: "AI powered test Automation from natural Language", icon: TestTube },
    { name: "AskAda", description: "your AI data assistant", icon: MessageSquare }
  ];

  const handleFeedbackClick = () => {
    const subject = encodeURIComponent("Feedback on Professional Services Team AI Journey");
    const body = encodeURIComponent("Hi,\n\nI would like to share feedback on the Professional Services Team's AI transformation journey:\n\n");
    const mailtoLink = `mailto:nithin.k@digital.ai,girish.shenoy@digital.ai?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleProjectClick = (project: any) => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className={`max-w-6xl mx-auto px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
              Professional Services Team | Digital.ai Bangalore
            </div>
            <h1 className="text-6xl md:text-7xl font-light tracking-tight text-gray-900 mb-6">
              From Reports to{' '}
              <span className="text-brand-blue font-medium">Reasoning</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
              Our Journey into AI
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Over the past few weeks, the Professional Services team has actively focused on upskilling and 
              transitioning from traditional data warehousing and reporting projects to exploring the exciting 
              world of Artificial Intelligence. Despite limited AI or coding experience, team members built 
              fun, useful AI-powered solutions with remarkable creativity.
            </p>
          </div>

          <Button 
            onClick={() => document.getElementById('phases')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full text-lg font-medium"
          >
            Explore Our Journey
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Phase Timeline */}
      <section id="phases" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Our Transformation Journey</h2>
            <p className="text-xl text-gray-600">Three phases of growth and innovation</p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={phase.id} className="relative">
                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    activePhase === phase.id ? 'shadow-lg border-brand-blue' : 'hover:border-gray-300'
                  }`}
                  onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${phase.color}`}></div>
                        <div>
                          <CardTitle className="text-2xl font-medium text-gray-900">
                            Phase {phase.id}: {phase.title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              phase.status === 'Completed' ? 'bg-green-100 text-green-700' :
                              phase.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                              'bg-orange-100 text-orange-700'
                            }`}>
                              {phase.status}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                      <ArrowRight className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                        activePhase === phase.id ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </CardHeader>

                  {activePhase === phase.id && (
                    <CardContent className="pt-0 animate-accordion-down">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {phase.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="p-6 bg-gray-50 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">{step.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Team Projects Gallery</h2>
            <p className="text-xl text-gray-600">Innovative solutions built with creativity and determination</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  project.link ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleProjectClick(project)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-brand-blue/10 rounded-lg">
                      <project.icon className="h-6 w-6 text-brand-blue" />
                    </div>
                    {project.link && (
                      <ExternalLink className="h-4 w-4 text-gray-400 ml-auto group-hover:text-brand-blue transition-colors" />
                    )}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We invite feedback, collaboration opportunities, and would love to share our learnings 
            and innovations with the broader Digital.ai community.
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={handleFeedbackClick}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 rounded-full"
            >
              Share Feedback
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-8">
    <div className="flex flex-col items-center justify-center space-y-4">
      
      {/* Credit Popup */}
      <Popover>
       <Tooltip>
  <TooltipTrigger asChild>
    <PopoverTrigger asChild>
      <Button
        variant="ghost"
        size="default"
        className="h-12 w-12 rounded-full bg-gray-700 hover:bg-gray-600 text-white text-2xl shadow-md transition-all duration-200"
      >
        👨‍💻
      </Button>
    </PopoverTrigger>
  </TooltipTrigger>
  <TooltipContent>
    Website Credits
  </TooltipContent>
</Tooltip>
        <PopoverContent className="w-64 p-3 text-sm">
          <p className="font-medium mb-2">Built & Maintained by</p>
          <div className="flex flex-col space-y-1">
            <a 
              href="https://nithinsantosh.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline font-medium"
            >
              Nithin
            </a>
            <a 
              href="https://github.com/nithinksantosh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand-blue hover:underline text-xs"
            >
              @nithinksantosh
            </a>
          </div>
        </PopoverContent>
      </Popover>

      {/* Copyright */}
      <p className="text-gray-400 text-center text-sm">
        © {new Date().getFullYear()} Digital.ai Professional Services Team, Bangalore
      </p>

    </div>
  </div>
</footer>
    </div>
  );
};

export default PresentationWebsite;
