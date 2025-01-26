import { PrismaClient } from '@prisma/client'
import sampleData from './sample-data'

async function main() {
  const parisma = new PrismaClient()
  await parisma.product.deleteMany()

  await parisma.product.createMany({ data: sampleData.products })

  console.log('Databases seeded successfuly!')
}

main()
