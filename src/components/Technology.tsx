import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const technologies = {
  All: [
    { name: "Android", logo: "../assets/technology/Andriod.png" },
    { name: "Angular", logo: "../assets/technology/Angular.png" },
    { name: "C#", logo: "../assets/technology/Csharp.png" },
    { name: "C++", logo: "../assets/technology/C++.png" },
    { name: "CSS", logo: "../assets/technology/Css.png" },
    { name: "Django", logo: "../assets/technology/Django.png" },
    { name: "Express", logo: "../assets/technology/Express.png" },
    { name: "ExpressJs", logo: "../assets/technology/ExpressJs.png" },
    { name: "Flutter", logo: "../assets/technology/Flutter.png" },
    { name: "Go", logo: "../assets/technology/Go.png" },
    { name: "Hadoop", logo: "../assets/technology/hadoop.png" },
    { name: "HTML", logo: "../assets/technology/Html.png" },
    { name: "Ionic", logo: "../assets/technology/Ionic.png" },
    { name: "iOS", logo: "../assets/technology/Ios.png" },
    { name: "Java", logo: "../assets/technology/Java.png" },
    { name: "JavaScript", logo: "../assets/technology/Js.png" },
    { name: "Kotlin", logo: "../assets/technology/Kotlin.png" },
    { name: "Laravel", logo: "../assets/technology/Laravel.png" },
    { name: "MariaDB", logo: "../assets/technology/Maria Db.png" },
    { name: "MongoDB", logo: "../assets/technology/Mongo db.png" },
    { name: "MySQL", logo: "../assets/technology/Mysql.png" },
    { name: "Node.js", logo: "../assets/technology/Node.png" },
    { name: "OpenCV", logo: "../assets/technology/OpenCv.png" },
    { name: "Oracle", logo: "../assets/technology/Oracle.png" },
    { name: "PHP", logo: "../assets/technology/Php.png" },
    { name: "PostgreSQL", logo: "../assets/technology/Postgre sql.png" },
    { name: "Power BI", logo: "../assets/technology/Power Bi.png" },
    { name: "Python", logo: "../assets/technology/Python.png" },
    { name: "React Native", logo: "../assets/technology/React Native.png" },
    { name: "React", logo: "../assets/technology/React.png" },
    { name: "Redis", logo: "../assets/technology/Redis.png" },
    { name: "RStudio", logo: "../assets/technology/Rstudio.png" },
    { name: "Spring", logo: "../assets/technology/Spring.png" },
    { name: "SQL Server", logo: "../assets/technology/Sql server.png" },
    { name: "Symfony", logo: "../assets/technology/Symfony.png" },
    { name: "Vue.js", logo: "../assets/technology/Vue.png" },
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
  DevOps: [{ name: "Go", logo: "src/assets/technology/Go.png" }],
  Security: [{ name: "OpenCV", logo: "src/assets/technology/OpenCv.png" }],
};

const itemsPerPage = 10; // Display 2 rows of 4 items each

const TechnologyComponent = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const renderTechnologies = (techList:any) => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedTechs = techList.slice(startIndex, endIndex);

    return paginatedTechs.map((tech:any) => (
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
    ));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Technologies</h1>
      <p className="mb-6 text-gray-600">
        Using the right technology for the right problem is our mantra. This
        principle drives our commitment to innovation and efficiency. In today’s
        fast-paced world, staying ahead means constantly evolving. We leverage
        the latest advancements to tackle challenges head-on.
      </p>
      <p className="mb-6 text-gray-600">
        Efficiency and Innovation: Our drive for efficiency and innovation means
        we streamline workflows, optimize resources, and deliver outstanding
        results, providing unparalleled value to our clients.
      </p>
      <p className="mb-6 text-gray-600">
        By embracing change and continuously seeking out the best tools and
        practices, we turn challenges into opportunities, paving the way for a
        brighter, more efficient future.
      </p>
      <Tabs value={activeTab} onValueChange={(value) => {setActiveTab(value); setCurrentPage(0);}}>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {renderTechnologies(techList)}
            </div>
            <div className="flex justify-end gap-5 mt-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage * itemsPerPage + itemsPerPage >= techList.length}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TechnologyComponent;
