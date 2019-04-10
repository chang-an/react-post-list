//PostItem.js
//负责每一个帖子的展示
import React from "react";
import like from "./images/like-font.svg";
import "./PostItem.css";
function PostItem(props) {
    const handleClick = () =>{
       props.onVote(props.post.id);
        };
    const { post } = props;
    return (
        <li className='item'>
            <div className='title'>
                {post.title}
            </div>
            <div>
                创建人：<span>{post.author}</span>
            </div>
            <div>
                创建时间：<span>{post.date}</span>
            </div>
            <div className='like'>
                <span><img src={like} alt="" onClick={handleClick}/></span>
                <span>{post.vote}</span>
            </div>
        </li>
     );
    }
export default PostItem;