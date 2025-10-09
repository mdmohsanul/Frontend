
import { headers,cookies } from "next/headers";
import { NextRequest } from "next/server";

// two ways to extract data from headers
export async function GET(request:NextRequest){
    // const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders.get("Authorization"))

    const headersrequest = await headers()
    console.log(headersrequest.get("Authorization"))

    // to read cookies
    const theme = request.cookies.get("theme")
    console.log(theme)

    // second way to set and get cookie
    const cookieStore = await cookies()
cookieStore.set("resultsPerPage", "20")
console.log(cookieStore.get("resultsPerPage"))

    return new Response("Profile API data",{
        headers:{
            "Content-Type":"application/json",
            "Set-Cookie":"theme=dark"
        }
    })
}