// export const config = {
//   "dev": {
//     "username": process.env.POSTGRES_USERNAME,
//     "password": process.env.POSTGRES_PASSWORD,
//     "database": process.env.POSTGRES_DATABASE,
//     "host": process.env.POSTGRES_HOSTNAME,
//     "dialect": "postgres",
//     "aws_region": process.env.AWS_REGION,
//     "aws_profile": process.env.AWS_PROFILE,
//     "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
//   },
//   "prod": {
//     "username": "",
//     "password": "",
//     "database": "udagram_prod",
//     "host": "",
//     "dialect": "postgres"
//   },
//   "jwt": {
//     "secret": process.env.JWT_SECRET
//   }
// }

export const config = {
  "dev": {
    "username": "udagramhakimdev",
    "password": "udagramhakimdev",
    "database": "udagramhakimdev",
    "host": "udagramhakimdev.chlejcfrlxip.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagramhakim-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld"
  }
}
