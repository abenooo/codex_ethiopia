import  { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const technologies = {
  All: [
    { name: "Android", logo: "src/assets/technology/Andriod.png" },
    { name: "Angular", logo: "src/assets/technology/Angular.png" },
    { name: "C#", logo: "src/assets/technology/Csharp.png" },
    { name: "C++", logo: "src/assets/technology/C++.png" },
    { name: "CSS", logo: "src/assets/technology/Css.png" },
    { name: "Django", logo: "src/assets/technology/Django.png" },
    { name: "Express", logo: "src/assets/technology/Express.png" },
    { name: "ExpressJs", logo: "src/assets/technology/ExpressJs.png" },
    { name: "Flutter", logo: "src/assets/technology/Flutter.png" },
    { name: "Go", logo: "src/assets/technology/Go.png" },
    { name: "Hadoop", logo: "src/assets/technology/hadoop.png" },
    { name: "HTML", logo: "src/assets/technology/Html.png" },
    { name: "Ionic", logo: "src/assets/technology/Ionic.png" },
    { name: "iOS", logo: "src/assets/technology/Ios.png" },
    { name: "Java", logo: "src/assets/technology/Java.png" },
    { name: "JavaScript", logo: "src/assets/technology/Js.png" },
    { name: "Kotlin", logo: "src/assets/technology/Kotlin.png" },
    { name: "Laravel", logo: "src/assets/technology/Laravel.png" },
    { name: "MariaDB", logo: "src/assets/technology/Maria Db.png" },
    { name: "MongoDB", logo: "src/assets/technology/Mongo db.png" },
    { name: "MySQL", logo: "src/assets/technology/Mysql.png" },
    { name: "Node.js", logo: "src/assets/technology/Node.png" },
    { name: "OpenCV", logo: "src/assets/technology/OpenCv.png" },
    { name: "Oracle", logo: "src/assets/technology/Oracle.png" },
    { name: "PHP", logo: "src/assets/technology/Php.png" },
    { name: "PostgreSQL", logo: "src/assets/technology/Postgre sql.png" },
    { name: "Power BI", logo: "src/assets/technology/Power Bi.png" },
    { name: "Python", logo: "src/assets/technology/Python.png" },
    { name: "React Native", logo: "src/assets/technology/React Native.png" },
    { name: "React", logo: "src/assets/technology/React.png" },
    { name: "Redis", logo: "src/assets/technology/Redis.png" },
    { name: "RStudio", logo: "src/assets/technology/Rstudio.png" },
    { name: "Spring", logo: "src/assets/technology/Spring.png" },
    { name: "SQL Server", logo: "src/assets/technology/Sql server.png" },
    { name: "Symfony", logo: "src/assets/technology/Symfony.png" },
    { name: "Vue.js", logo: "src/assets/technology/Vue.png" },
  ],
  Frontend: [
    { name: "Angular", logo: "src/assets/technology/Angular.png" },
    { name: "CSS", logo: "src/assets/technology/Css.png" },
    { name: "HTML", logo: "src/assets/technology/Html.png" },
    { name: "React", logo: "src/assets/technology/React.png" },
    { name: "Vue.js", logo: "src/assets/technology/Vue.png" },
  ],
  Backend: [
    { name: "C#", logo: "src/assets/technology/Csharp.png" },
    { name: "C++", logo: "src/assets/technology/C++.png" },
    { name: "Django", logo: "src/assets/technology/Django.png" },
    { name: "Express", logo: "src/assets/technology/Express.png" },
    { name: "Node.js", logo: "src/assets/technology/Node.png" },
    { name: "PHP", logo: "src/assets/technology/Php.png" },
    { name: "Spring", logo: "src/assets/technology/Spring.png" },
    { name: "Symfony", logo: "src/assets/technology/Symfony.png" },
  ],
  MobileApp: [
    { name: "Android", logo: "src/assets/technology/Andriod.png" },
    { name: "Flutter", logo: "src/assets/technology/Flutter.png" },
    { name: "iOS", logo: "src/assets/technology/Ios.png" },
    { name: "React Native", logo: "src/assets/technology/React Native.png" },
    { name: "Ionic", logo: "src/assets/technology/Ionic.png" },
    { name: "Kotlin", logo: "src/assets/technology/Kotlin.png" },
  ],
  Database: [
    { name: "MariaDB", logo: "src/assets/technology/Maria Db.png" },
    { name: "MongoDB", logo: "src/assets/technology/Mongo db.png" },
    { name: "MySQL", logo: "src/assets/technology/Mysql.png" },
    { name: "PostgreSQL", logo: "src/assets/technology/Postgre sql.png" },
    { name: "Redis", logo: "src/assets/technology/Redis.png" },
    { name: "SQL Server", logo: "src/assets/technology/Sql server.png" },
  ],
  DataScience: [
    { name: "Hadoop", logo: "src/assets/technology/hadoop.png" },
    { name: "Power BI", logo: "src/assets/technology/Power Bi.png" },
    { name: "Python", logo: "src/assets/technology/Python.png" },
    { name: "RStudio", logo: "src/assets/technology/Rstudio.png" },
  ],
  DevOps: [
    { name: "Go", logo: "src/assets/technology/Go.png" },
  ],
  Security: [
    { name: "OpenCV", logo: "src/assets/technology/OpenCv.png" },
  ],
};

const TechnologyComponent = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Technologies</h1>
      <p className="mb-6 text-gray-600">
        Using the right technology for the right problem is our mantra. We are
        agile about learning new processes and tools to save time and reduce
        complexity.
      </p>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="flex overflow-x-auto whitespace-nowrap border-b mb-4">
          {Object.keys(technologies).map((category) => (
      <TabsTrigger
      key={category}
      value={category}
      className={`px-4 py-2 text-sm font-medium ${
        activeTab === category ? "bg-yellow-400 text-black" : ""
      }`}
    >
      {category}
    </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(technologies).map(([category, techList]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {techList.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-16 w-16 object-contain mb-2"
                  />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TechnologyComponent;
