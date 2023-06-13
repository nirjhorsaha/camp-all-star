import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Instractor from "../pages/Instractor/Instractor";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddClass from "../components/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClass from "../components/Dashboard/InstructorDashboard/MyClass/MyClass";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/instractors",
                element: <Instractor />
            },
            {
                path: "/classes",
                element: <Classes />
            },
            {
                path: "/login",
                element: <SignInPage />
            },
            {
                path: "/signup",
                element:<SignUpPage/>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard/addClass",
                element: <AddClass/>
            },
            {
                path: "/dashboard/myClass",
                element: <MyClass/>
            },
        ]
    }
]);