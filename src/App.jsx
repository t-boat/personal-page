import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PreviewPage from "./pages/previewPage";
import EducationTile from "./section-components/educationTile";
import SkillTile from "./section-components/skillTile";
import AboutMe from "./section-components/aboutMe";
import ProjectInfo from "./section-components/projectInfo";


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
      path: "/education",
      element: <EducationTile />
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
      path: "/projects",
      element: <ProjectInfo />
    },
  ]);


  return <RouterProvider router={router} /> ;
}

export default App
