import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import androidLogo from "../assets/technology/Andriod.png";
import angularLogo from "../assets/technology/Angular.png";
import csharpLogo from "../assets/technology/Csharp.png";
import cppLogo from "../assets/technology/C++.png";
import cssLogo from "../assets/technology/Css.png";
import djangoLogo from "../assets/technology/Django.png";
import expressLogo from "../assets/technology/Express.png";
import expressJsLogo from "../assets/technology/ExpressJs.png";
import flutterLogo from "../assets/technology/Flutter.png";
import goLogo from "../assets/technology/Go.png";
import hadoopLogo from "../assets/technology/hadoop.png";
import htmlLogo from "../assets/technology/Html.png";
import ionicLogo from "../assets/technology/Ionic.png";
import iosLogo from "../assets/technology/Ios.png";
import javaLogo from "../assets/technology/Java.png";
import jsLogo from "../assets/technology/Js.png";
import kotlinLogo from "../assets/technology/Kotlin.png";
import laravelLogo from "../assets/technology/Laravel.png";
import mariaDbLogo from "../assets/technology/Maria Db.png";
import mongoDbLogo from "../assets/technology/Mongo db.png";
import mysqlLogo from "../assets/technology/Mysql.png";
import nodeLogo from "../assets/technology/Node.png";
import openCvLogo from "../assets/technology/OpenCv.png";
import oracleLogo from "../assets/technology/Oracle.png";
import phpLogo from "../assets/technology/Php.png";
import postgreSqlLogo from "../assets/technology/Postgre sql.png";
import powerBiLogo from "../assets/technology/Power Bi.png";
import pythonLogo from "../assets/technology/Python.png";
import reactNativeLogo from "../assets/technology/React Native.png";
import reactLogo from "../assets/technology/React.png";
import redisLogo from "../assets/technology/Redis.png";
import rstudioLogo from "../assets/technology/Rstudio.png";
import springLogo from "../assets/technology/Spring.png";
import sqlServerLogo from "../assets/technology/Sql server.png";
import symfonyLogo from "../assets/technology/Symfony.png";
import vueLogo from "../assets/technology/Vue.png";

const technologies = {
  All: [
    { name: "Android", logo: androidLogo },
    { name: "Angular", logo: angularLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Django", logo: djangoLogo },
    { name: "Express", logo: expressLogo },
    { name: "ExpressJs", logo: expressJsLogo },
    { name: "Flutter", logo: flutterLogo },
    { name: "Hadoop", logo: hadoopLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "Ionic", logo: ionicLogo },
    { name: "iOS", logo: iosLogo },
    { name: "Java", logo: javaLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "Kotlin", logo: kotlinLogo },
    { name: "Laravel", logo: laravelLogo },
    { name: "MariaDB", logo: mariaDbLogo },
    { name: "MongoDB", logo: mongoDbLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "OpenCV", logo: openCvLogo },
    { name: "Oracle", logo: oracleLogo },
    { name: "PHP", logo: phpLogo },
    { name: "PostgreSQL", logo: postgreSqlLogo },
    { name: "Power BI", logo: powerBiLogo },
    { name: "Python", logo: pythonLogo },
    { name: "React Native", logo: reactNativeLogo },
    { name: "React", logo: reactLogo },
    { name: "Redis", logo: redisLogo },
    { name: "Spring", logo: springLogo },
    { name: "SQL Server", logo: sqlServerLogo },
    { name: "Vue.js", logo: vueLogo },
  ],
  Frontend: [
    { name: "Angular", logo: angularLogo },
    { name: "CSS", logo: cssLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "React", logo: reactLogo },
    { name: "Vue.js", logo: vueLogo },
  ],
  Backend: [
    { name: "Django", logo: djangoLogo },
    { name: "Express", logo: expressLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "PHP", logo: phpLogo },
    { name: "Spring", logo: springLogo },
  ],
  MobileApp: [
    { name: "Android", logo: androidLogo },
    { name: "Flutter", logo: flutterLogo },
    { name: "React Native", logo: reactNativeLogo },
    { name: "Kotlin", logo: kotlinLogo },
  ],
  Database: [
    { name: "MariaDB", logo: mariaDbLogo },
    { name: "MongoDB", logo: mongoDbLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "PostgreSQL", logo: postgreSqlLogo },
    { name: "Redis", logo: redisLogo },
    { name: "SQL Server", logo: sqlServerLogo },
  ],
  DataScience: [
    { name: "Power BI", logo: powerBiLogo },
    { name: "Python", logo: pythonLogo },
    { name: "RStudio", logo: rstudioLogo },
  ],
  DevOps: [{ name: "Go", logo: goLogo }],
  Security: [{ name: "OpenCV", logo: openCvLogo }],
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

  const renderTechnologies = (techList: any) => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedTechs = techList.slice(startIndex, endIndex);

    return paginatedTechs.map((tech: any) => (
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
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value);
          setCurrentPage(0);
        }}
      >
        <TabsList className="flex overflow-x-auto whitespace-nowrap  py-6">
          {Object.keys(technologies).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className={`px-4 py-2 mt-3 text-sm font-medium rounded-full ${
                activeTab === category
                  ? "bg-white text-black"
                  : "bg-gray-700 text-white"
              } mx-2`}
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
                disabled={
                  currentPage * itemsPerPage + itemsPerPage >= techList.length
                }
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
