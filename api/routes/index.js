// Static
import getHome from './getHome'

// API
import getSearch from './getSearch'
import getCategories from './getCategories'
import postExperiment from './postExperiment'
import getExperiment from './getExperiment'
import getExperimentResults from './getExperimentResults'
import getExperimentSimulation from './getExperimentSimulation'
import postExperimentStart from './postExperimentStart'
import postExperimentReport from './postExperimentReport'

// User
import postRegister from './postRegister'
import postLogin from './postLogin'
import getLogout from './getLogout'
import getProfile from './getProfile'

export default {
  mount: app => {
    app.get ('/', getHome)

    app.get ('/api/:ver/status', (req, res) => res.json({ success: true }))
    app.get ('/api/:ver/search', getSearch)
    app.get ('/api/:ver/categories', getCategories)
    app.post('/api/:ver/experiments', postExperiment)
    app.get ('/api/:ver/experiments/:experimentId', getExperiment)
    app.get ('/api/:ver/experiments/:experimentId/results', getExperimentResults)
    app.get ('/api/:ver/experiments/:experimentId/simulation', getExperimentSimulation)
    app.post('/api/:ver/experiments/:experimentId/start', postExperimentStart)
    app.post('/api/:ver/experiments/:experimentId/report', postExperimentReport)

    app.post('/register', postRegister)
    app.post('/login', postLogin)
    app.get ('/logout', getLogout)
    app.get ('/api/:ver/user', getProfile)
  }
}
