import { RouteObject } from "react-router-dom";
import HomePage from "src/pages/home/page";

const routes: RouteObject[] = [
	{
		path: "",
		element: <HomePage />
	}
];

export default routes;