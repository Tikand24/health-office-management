import { connectDB } from '@/lib/mongodb';
import UserHealth from '@/models/UserHealth';
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  data: any
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  //post
  if (req.method === 'POST') {
    await connectDB();
    console.log(req.body);
    const user = await UserHealth.create(req.body);
    console.log(user);
    res.status(200).json({ data: user })
  }else{
    res.status(200).json({ data: 'Hello from Next.js!' })
  }
}