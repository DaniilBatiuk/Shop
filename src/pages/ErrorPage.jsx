import {useRouteError} from "react-router-dom";
export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    return <>
    <h2>Oops!</h2>
    <div>The page requested not found!</div>
    <div>{error.status}. {error.statusText}</div>
    <div><i>{error.error.message}</i></div>
    </>
}