const { Router } = require('express')

const TagsController = require('../controllers/TagsController')

const tagsRoutes = Router()

// function myMiddleware(request, response, next) {
//   if (!request.body.isAdmin /* request*/) {
//     return response.json({
//       message: 'user não autorizado, você não é adm'
//     }) /* response */
//   }

//   next() /*next*/
// }

const tagsController = new TagsController()

tagsRoutes.get('/:user_id', tagsController.index)


module.exports = tagsRoutes;
