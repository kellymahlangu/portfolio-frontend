import { Code, Database, GitBranch } from "lucide-react";
import { Progress } from "@/components/ui/progress.tsx";

export function Skills() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Column */}
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Code className="mr-2" />
              Frontend
            </h3>
            <ul className="space-y-4">
              {[
                { name: "HTML", progress: 90 },
                { name: "CSS", progress: 85 },
                { name: "JavaScript", progress: 80 },
                { name: "React", progress: 75 },
              ].map((skill) => (
                <li key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="w-full" />
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Column */}
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Database className="mr-2" />
              Backend
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Node.js", progress: 75 },
                { name: "Express", progress: 70 },
                { name: "Python", progress: 65 },
              ].map((skill) => (
                <li key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="w-full" />
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Column */}
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <GitBranch className="mr-2" />
              Tools
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {[{ name: "Git", icon: <GitBranch className="w-6 h-6" /> }].map(
                (tool) => (
                  <li
                    key={tool.name}
                    className="flex items-center space-x-2  rounded-full px-3 py-1"
                  >
                    {tool.icon}
                    <span>{tool.name}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
