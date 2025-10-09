import { comments } from "../data";

// dynamic route handlers

export async function GET(_request:Request,{params}:{params:Promise<{id:string}>}){
  const {id} = await params
  const findComment = comments.find(item => item.id === Number(id))
  return Response.json(findComment)
}

export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}){
    const {id} = await params;
     const body =  await request.json()
    const findIndex = comments.findIndex(item => item.id === parseInt(id))
    comments[findIndex].text = body.text;
    return  Response.json(comments[findIndex])

}

export async function DELETE(request:Request,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const deleteComment = comments.filter(item => item.id !== parseInt(id))
    return Response.json(deleteComment)
}