//PostList.js
//用于展示帖子的所有列表
import React,{ Component } from "react";
import "./PostList.css"
import PostItem from "./PostItem";

class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
        this.timer = null; //定时器
        this.handleVote = this.handleVote.bind(this); //ES6 class中手动绑定方法this的指向
    }
    componentDidMount() {
        //用setTimeout模拟异步从服务器端获取数据
        this.timer = setTimeout( () =>{
            this.setState({
                posts: [
                    { id:1,title:"react使用中碰到的问题",author:"张三",date:"2019-04-01 10:01",vote: 0},
                    { id:2,title:"前端框架哪个好用",author:"李四",date:"2019-04-11 13:01",vote: 0},
                    { id:3,title:"如何选择一个合适的框架",author:"王五",date:"2019-02-11 10:05", vote: 0}
                ]
            });
        },500);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);  //清除定时器
        }
    }

    handleVote(id) {
        //根据帖子id进行过滤，找到待修改vote属性的帖子，返回新的props对象
        const posts = this.state.posts.map(item =>{
            const newItem = item.id === id ? {...item, vote: ++item.vote} : item;
            return newItem;
        });
        //使用新的posts对象设置state
        this.setState({
            posts
        });
    }
    render() {
        return (
            <div className='container'>
                 <h3>帖子列表：</h3>
                <ul>
                    {this.state.posts.map(item =>
                        <PostItem
                            post = {item}
                            onVote = {this.handleVote}
                            />
                )}
             </ul>
            </div>
        );
    }

}
export default PostList;