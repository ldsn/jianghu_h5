export default {
    'GET /local'(req, res){
        res.json({a:1})
    },
    'POST /post'(req, res){
        res.json({a:2})
    }
}