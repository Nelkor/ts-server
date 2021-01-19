import { connect } from './db'
import { listen } from './server'

connect().then(() => listen(3063))
