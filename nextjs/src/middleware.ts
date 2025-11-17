import { NextRequest, NextResponse } from "next/server";


// export function middleware (request:NextRequest){

//     return NextResponse.redirect(new URL("/",request.url))
// }

// export const config = {
//     matcher : "/profile"
// }


// 2nd way using

// export function middleware(request:NextRequest){
//     if(request.nextUrl.pathname === '/profile')
//         // return NextResponse.redirect(new URL("/hello",request.nextUrl))
//         return NextResponse.rewrite(new URL("/hello",request.nextUrl))

// }

// rewrites serve the content without changing the url


// working with cookies

export function middleware(request:NextRequest){
    const response = NextResponse.next()
    const themePreference = request.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme","dark")
    }

    response.headers.set("custom-headers","custom-value")
    return response
}

// working with headers

