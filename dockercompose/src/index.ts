import express from 'express';
import { PrismaClient } from '@prisma/client';


const app = express();
const prisma = new PrismaClient();


app.use(express.json());
app.get("/", async(req, res)=>{

    const data = await prisma.user.findMany();

    res.status(200).json({
        message: "message from get endpoint",
        data: data
    })
    
    
})

app.post("/", async(req, res)=>{
    await prisma.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()  
        }
    })
    res.json({
        message: "message from post endpoint"
    })
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});