import { NextResponse } from "next/server";
console.log('useradata====')

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/posts"
export async function GET(request : any){
    console.log('useradata')

    console.log('request')
    // const data = await fetch(DATA_SOURCE_URL)
    // console.log('data', data.json())
    return NextResponse.json(DATA_SOURCE_URL)
}