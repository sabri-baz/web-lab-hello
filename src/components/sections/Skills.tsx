import React from 'react';

export default function Skills() {
  const skills = [
    "Python", "Java", "C#", "Makine Öğrenmesi (AI)", "React", "Node.js", "TypeScript", "Siber Güvenlik", "Tailwind CSS"
  ];

  return (
    <section id="yetenekler" className="pb-16 pt-4 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto flex flex-col items-center md:items-start md:pl-[12.5rem]">
        <ul className="flex flex-wrap justify-center md:justify-start gap-2">
          {skills.map((skill) => (
            <li key={skill} className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
