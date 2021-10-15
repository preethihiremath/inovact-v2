import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import RequestToJoin from '../feed/components/modals/RequestToJoin.tsx/RequestToJoin';
import ViewTeamMembers from '../feed/components/modals/ViewTeamMembers/ViewTeamMembers';
import CommentsOnPost from '../profile/components/RightProfileContent/CommentsOnPost';
import CommentsContainer from './components/CommentsContainer';
import LikedBy from './components/LikedBy';
import Post from './components/Post';
import TeamMembers from './components/TeamMembers';

function PostPage(props: any) {
    const allPosts = useSelector((state: any)=> state.allPosts);
    const allIdeas = useSelector((state: any)=> state.allIdeas);
    // console.log(props);
    let postData: any = {
        id: 1,
        type: 1,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        author: 'Jane Doe',
        time: 10,
        title: 'Project Title',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut!`,
        tags: [
            'OOP',
            'JavaScript',
            'HTML',
            'CSS',
            'ReactJS',
            'NodeJS',
            'MongoDB',
        ],
        images: [
            'https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80',
            'https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
            "https://www.lifewire.com/thmb/cobvsxBXqwdPzm17STO4o8pAdgA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-zoom-and-how-does-it-work-b1cab4b7f8e9474fa46f5b50c8e694e4.jpg",
            "https://www.lifewire.com/thmb/cobvsxBXqwdPzm17STO4o8pAdgA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-zoom-and-how-does-it-work-b1cab4b7f8e9474fa46f5b50c8e694e4.jpg",
            "https://www.lifewire.com/thmb/cobvsxBXqwdPzm17STO4o8pAdgA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-zoom-and-how-does-it-work-b1cab4b7f8e9474fa46f5b50c8e694e4.jpg",
        ],
        numLikes: 250,
        numComments: 250,
        completion: 80,
    };
    // postData = allPosts.find((post: any)=>post.id===props.location.state.post_id);
    const convertDate = (dateISO: any)=>{
        const date = new Date(dateISO);
        return `${date.getDate()} ${months[date.getMonth()]}`
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let { id }: any = useParams();
    let params = useParams();
    allPosts.forEach((ele: any)=>{
        if(ele.id===Number(id)){
            postData={
                id: ele.id,
                type: 1,
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                author: 'Jane Doe',
                time: convertDate(ele.created_at),
                title: ele.title,
                description: ele.description,
                tags: ele.project_tags.map((tag: any)=>{
                    return tag.hashtag.name;
                }),
                images: ele.project_documents.map((image: any)=>{
                    console.log(image.url);
                    return image.url;
                }),
                numLikes: 250,
                numComments: 250,
                completion: 80,
            }
        }
    });
    // allIdeas.
    const [showOverlay, setShowOverlay] = useState(false);
    const [showTeamMembers, setShowTeamMembers] = useState(false);
    const [showRequestJoin, setShowRequestJoin] = useState(false);
    const openModal = ()=>{
        setShowOverlay(true);
        window.scrollTo(0,0);
        document.body.style.overflowY="hidden";
    }
    const closeModal = ()=>{
        setShowOverlay(false);
        setShowTeamMembers(false);
        setShowRequestJoin(false);
        document.body.style.overflowY="scroll";
    }
    const viewTeamMembers = ()=>{
        openModal();
        setShowTeamMembers(true);
    }

    const viewRequestJoin = ()=>{
        openModal();
        setShowRequestJoin(true);
    }
    const handleViewTeamMembers = ()=>{
        document.getElementById("team-members")?.scrollIntoView({behavior: "smooth"});
    }
    return (
        <div className="post-dedicated-page">
            {
                showOverlay &&
                <div>
                    <div className="modal_overlay" onClick={closeModal}></div>
                    {
                            showTeamMembers && 
                            <div>
                                <ViewTeamMembers closeModal={closeModal}/>
                            </div>
                        }
                        {
                            showRequestJoin && 
                            <div>
                                <RequestToJoin closeModal={closeModal}/>
                            </div>
                        }
                </div>
                
            }
            <div className="post-dedicated-page-post">
                <div className="post-dedicated-page-post-container">
                    <Post post={postData} openTeamMember={handleViewTeamMembers} openRequestJoin={viewRequestJoin} />
                    <TeamMembers/>
                </div>
            </div>
            <div className="post-dedicated-page-comments">
                <div className="post-dedicated-page-comments-container">
                    <CommentsContainer/>
                    <LikedBy/>
                </div>
            </div>
        </div>
    )
}

export default PostPage;