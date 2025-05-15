import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

async function main() {
    const response = await client.user.create(
        {
            data: {
                username: "ABCjdewn",
                password: "wms3md",
                city: "ASR",
                age: 2
            }
            ,select:{
                city:true
            }
        })

    await client.user.findFirst({
        where:{
            id:1
        }, include:{
            todos:true
        }
    })
    console.log(response)
}

main()