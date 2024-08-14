import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PreviewPage from "./pages/previewPage";
import EducationTile from "./section-components/educationTile";
import SkillTile from "./section-components/skillTile";
import AboutMe from "./section-components/aboutMe";
import ProjectInfo from "./section-components/projectInfo";
import Education from "./section-components/education";
import Works from "./section-components/works";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PreviewPage />
    },

    {
      path: "/home",
      element: <PreviewPage />
    },

    {
      path: "/edu-data",
      element: <EducationTile />
    },

    {
      path: "/education",
      element: <Education />
    },

    {
      path: "/skills",
      element: <SkillTile />
    },

    {
      path: "/about",
      element: <AboutMe />
    },

    {
      path: "/project-data",
      element: <ProjectInfo />
    },

    {
      path: "/projects",
      element: <Works />
    },

  ]);


  return <RouterProvider router={router} /> ;
}

export default App
