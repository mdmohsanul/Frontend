 import { NextRequest } from "next/server";
import { comments } from "./data";

// export async function GET(){
// return new Response("Hello World")
// }

export async function GET(request:NextRequest){
   const searchParams = request.nextUrl.searchParams
   const query = searchParams.get("query")
   const filteredComments = query ? comments.filter(item => item.text.includes(query)) : comments
return  Response.json(filteredComments)
}

// Each route handler function get standard web request object as a parameter.
export async function POST(request:Request){
   const comment =  await request.json()
   const newComment = {
    id:comment.length + 1,
    text  : comment.text
   }
   comments.push(newComment)

   return new Response(JSON.stringify(newComment), {
    headers:{"Content-Type":"application/json"},
    status:201
   })
}