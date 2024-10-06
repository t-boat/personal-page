import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PreviewPage from "./pages/previewPage";
import AboutMe from "./pages/aboutMe";
import SkillTile from "./pages/skillTile";
import Education from "./pages/education";
import Works from "./pages/works";
import EducationTile from "./section-components/educationTile";
import ProjectInfo from "./section-components/projectInfo";
import ExperienceTile from "./section-components/experienceTile";
import MyDropdownMenu from "./section-components/myDropdownMenu";


function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <PreviewPage />
    },

    {
      path: "/about",
      element: <AboutMe />
    },

    {
      path: "/skills",
      element: <SkillTile />
    },

    {
      path: "/education",
      element: <Education />
    },

    {
      path: "/projects",
      element: <Works />
    },
    
    {
      path: "/drop-down",
      element: <MyDropdownMenu />
    },
    
    {
      path: "/edu-data",
      element: <EducationTile />
    },
    
    {
      path: "/project-data",
      element: <ProjectInfo />
    },

    {
      path: "/experience",
      element: <ExperienceTile />
    },

  ]);


  return <RouterProvider router={router} /> ;
}

export default App
