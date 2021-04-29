module.exports = {
    configureWebpack:{
        devServer:{
            before(app){
                //材料员数据
                let userLIst = [
                    //user属性：id、姓名、密码、级别（普通员工1、管理员0）、状态（0在职，1失效）
                    {id:1, user:'aa',password:'123',level:'0',statue:'0'},
                    {id:2, user:'bb',password:'123',level:'1',statue:'0'},
                    {id:3, user:'cc',password:'123',level:'1',statue:'0'}
                ]
    
                //材料员登陆接口
                app.get('/api/dept/login', (req,res)=>{
                    const {user, password} = req.query
                    const exist = userLIst.filter(v=>{
                        if(v.user==user&&v.password==password){
                            return true
                        }else{
                            return false
                        }
                    })
                    if(exist){
                        res.json({
                            code:'0',
                            msg:'登陆成功！'
    
                        })
                    }else{
                        res.json({
                            code:'1',
                            msg:'登陆失败！'
                        })
                    }
                    
                })
    
            }
        }
        
    }
}
