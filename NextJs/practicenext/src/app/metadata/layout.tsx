import { Metadata } from "next"

export const metadata:Metadata = {
    title:{
        default:"Learning Metadata",
        absolute:"",
     template:""
    },
    description: "This is a shared description for the section",
}

export default function RootLayout({
    children
}:{children:React.ReactNode}){
    return (
        <html lang="en">
        <body>
          {children}
        </body>
      </html>
    )
}