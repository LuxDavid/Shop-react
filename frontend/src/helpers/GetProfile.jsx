import { Global } from "./Global.jsx";

export const GetProfile = async () => {

    const request = await fetch(`${Global.url}session/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data= await request.json();

    return data
}