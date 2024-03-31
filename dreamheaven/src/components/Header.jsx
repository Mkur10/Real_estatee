import React, { useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Header = () => {
    const {currentUser} = useSelector(state => state.user);
    const [searchTerm, setsearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery =urlParams.toString();
        navigate(`/search?${searchQuery}`);
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if(searchTermFromUrl)
        {
            setsearchTerm(searchTermFromUrl);
        }
    },[location.search])
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <NavLink to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-500'>dreaM</span>
                    <span className='text-amber-900'>Heaven</span>
                </h1>
                </NavLink>
                <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder='Search.....' className='bg-transparent focus:outline-none w-24 sm:w-64' value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)}/>
                <button>
                <FaSearch className='text-slate-600'/>
                </button>
                </form>
                <div className='flex gap-4'>
                    <NavLink activeclassName='hidden sm:inline text-slate-700 hover:underline' to='/'>Home</NavLink>
                    <NavLink activeclassName='hidden sm:inline text-slate-700 hover:underline' to='/about'>About</NavLink>
                    {currentUser ?(<NavLink to='/profile'><img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'/></NavLink>): (<NavLink activeclassName=' text-slate-700 hover:underline' to='/signin'>SignIn</NavLink>)}
                    
                </div>

            </div>

        </header>
    )
}

export default Header;