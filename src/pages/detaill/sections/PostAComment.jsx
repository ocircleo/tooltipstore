import React from 'react';
import Button from '../../../components/buttons/Button';

const PostAComment = () => {
    const comment = (e) => {
        e.preventDefault()
        let form = e.target;
        let name = form.name.value, email = form.email.value, comment = form.comment.value, rating = form.rating.value;

    }
    return (
        <form onSubmit={comment} className='flex flex-col gap-3 w-full md:w-4/6'>
            <fieldset className='flex flex-col items-stretch'>
                <label htmlFor="name">Name <span className='text-red-500'>*</span></label>
                <input type="text" name='name' id='name' required className='border-2 p-1 rounded' placeholder='Enter your name' />
            </fieldset>
            <fieldset className='flex flex-col items-stretch'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' className='border-2 p-1 rounded' placeholder='Enter your Email' />
            </fieldset>
            <fieldset className='flex flex-col items-stretch'>
                <label htmlFor="comment">Comment <span className='text-red-500'>*</span></label>
                <textarea type="text" name='comment' id='comment' required className='border-2 p-1 rounded min-h-[8rem]' placeholder='Enter your comment'></textarea>
            </fieldset>

            <fieldset className='flex flex-col'>
                <label htmlFor="rating">Rating <span className='text-red-500'>*</span></label>
                <select type="text" name='rating' id='rating' required className='border-2 p-1 rounded ' placeholder='Enter your comment'>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </fieldset>

            <Button type={"submit"} text={"Post A comment"} ></Button>
        </form>
    );
};

export default PostAComment;