'use strict'

// node built-in modules

import { resolve } from 'path'

// npm modules

import express from 'express'
import webpack from 'webpack'

// global config

import option from './option.json'
import webpack_config from './webpack.config.js'

// webpack setting

const app = express()
const compiler = webpack(webpack_config)

app.use(require('webpack-dev-middleware')(compiler, webpack_config.devServer))
app.use(require('webpack-hot-middleware')(compiler))

app.listen(option.server.port, () => console.log('\x1b[44m\x1b[1m%s\x1b[0m', `Vue-Express project listening on port ${option.server.port}`))
