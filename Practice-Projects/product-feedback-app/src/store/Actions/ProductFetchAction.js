import existingData from '../../data.json';
import axios from 'axios';

import { ProductActions } from '../product-slice'

const idGenerator = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export const fetchExistingData = (requiredData, type='all') => {
    return(
        async (dispatch)=>{
            const LoadData = async (endpoint) =>{
                const response = await axios.get(`https://feedback-app-7c5b3-default-rtdb.asia-southeast1.firebasedatabase.app/${endpoint}.json`);
                if (response.status !== 200) { throw new Error('Something went wrong!')}
                return response.data;
            };
            try{
                const data = await LoadData(requiredData);
                let product=[];
                for (const [key, value] of Object.entries(data)){
                    let commentLength=0;
                    if (!!value.comments){
                            for (const [key, values] of Object.entries(value.comments)){
                                ++commentLength;
                                
                                if (!!values.replies){
                                    commentLength += Object.keys(values.replies).length
                                }
                            }
                    }
                    const setUpProduct = {
                        id: key,
                        commentLength: commentLength,
                        ...value
                    }
                    product.push(setUpProduct);
                }
                
                dispatch(
                    ProductActions.loadProduct(type==='all' ? product : data)
                );
            } catch(error){
                console.log(error.message)
            }
        }
    );
 
};

export const PostData = (submitData) => {

    return(
        async (dispatch) => {
            const PostData = async (submitData) => {
                const response = await axios.post(`https://feedback-app-7c5b3-default-rtdb.asia-southeast1.firebasedatabase.app/productRequests.json`,{
                    title: submitData.title,
                    category: submitData.category,
                    upvotes: 0,
                    status: 'suggestion',
                    description: submitData.content
                })
                if (response.status !== 200) { throw new Error('Something went wrong!')}
                return response;
            }

            try{
            
                const data = await PostData(submitData);
            } catch(error){
                console.log(error.message)
            }
        }
    )
};

export const PutData = (submitData) => {

    return(
        async (dispatch) => {
            const PutData = async (submitData) => {
                const response = await axios.put(`https://feedback-app-7c5b3-default-rtdb.asia-southeast1.firebasedatabase.app/productRequests/${submitData.id}.json`,{
                    title: submitData.title,
                    category: submitData.category,
                    upvotes: 0,
                    status: 'suggestion',
                    description: submitData.content,
                    comments: submitData.comments
                })
                if (response.status !== 200) { throw new Error('Something went wrong!')}
                return response;
            }

            try{
            
                const data = await PutData(submitData);
                console.log(data)
            } catch(error){
                console.log(error.message)
            }
        }
    )
};

export const DeleteData = (submitData) => {

    return(
        async (dispatch) => {
            const DeleteData = async (submitData) => {
                const response = await axios.delete(`https://feedback-app-7c5b3-default-rtdb.asia-southeast1.firebasedatabase.app/productRequests/${submitData.id}.json`)
                if (response.status !== 200) { throw new Error('Something went wrong!')}
                return response;
            }
            try{
            
                const data = await DeleteData(submitData);
                console.log(data)
            } catch(error){
                console.log(error.message)
            }
        }
    )
};

export const PostComment = (submitData , id) => {

    return(
        async (dispatch) => {
            const PostComment = async (submitData, url) => {
                const response = await axios.post(url,{
                    content: submitData.comment,
                    id: idGenerator(),
                    user: submitData.user,
                    replyingTo: submitData.replyTo.slice(1)
                })
                if (response.status !== 200) { throw new Error('Something went wrong!')}
                return response;
            }

            try{
                let baseURL = `https://feedback-app-7c5b3-default-rtdb.asia-southeast1.firebasedatabase.app/productRequests/${id}/comments.json`;
                if (submitData.replyTo && submitData.commentParent) {
                    baseURL = `https://feedback-app-7c5b3-default-rtdb.asia-southeast1.firebasedatabase.app/productRequests/${id}/comments/${submitData.commentParent}/replies.json`
                }
                const data = await PostComment(submitData, baseURL);
                
            } catch(error){
                console.log(error.message)
            }
        }
    )
};