import axios from 'axios'
import 'dotenv-safe/config'

export default axios.create({
  baseURL: 'https://sandbox.iexapis.com/stable/',
  params: { token: process.env.IEX_PUBLISHABLE_SANDBOX_TOKEN },
})
