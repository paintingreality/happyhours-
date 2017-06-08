// const
//   Tweet = require('../models/Tweet.js')
//
//
// module.exports = {
//   index,
//   show,
//   create,
//   update,
//   destroy
// }
//
// function show(req, res) {
//   Tweet.findById(req.params.id, (err, user) => {
//     res.json(tweet)
//   })
// }
//
// function create(req, res) {
//   Tweet.create(req.body, (err, user) => {
//     res.json({success: true, message: "Tweet saved to favorites"})
//   })
// }
//
// function destroy(req, res) {
//   Tweet.findByIdAndRemove(req.params.id, (err, user) => {
//     if (err) return console.log(err)
//     res.json({success: true, message: "Tweet deleted"})
//   })
// }
