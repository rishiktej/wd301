import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { ThemeContext } from "./context/theme";

// Import the `ProjectsProvider` and `MembersProvider`.
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { CommentsProvider } from "./context/comment/context";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      {/* Wrap the `ProjectsProvider` with the `MembersProvider`. */}
      <MembersProvider>
        <ProjectsProvider>
          <CommentsProvider>
            <RouterProvider router={router} />
          </CommentsProvider>
        </ProjectsProvider>
      </MembersProvider>
    </div>
  );
};
export default App;
