import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaHeart, FaInstagramSquare, FaLinkedin, FaMailBulk, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="text-center py-4 mt-2 bg-primary text-white font-monospace">
            <h5 className="fs-2">Al - Qur'an V.0.1 &copy; 2021</h5> 
            <h5>
                Muhyi Abdul Basith <FaHeart color={'red'} />
            </h5>
            <div className="">
                <a href="https://www.linkedin.com/in/muhyi-abdul-basith-0aa8a7191/" target="_blank">
                    <FaLinkedin color={'white'} size={30}/></a>
                <a href="https://www.instagram.com/ab._muhyi/" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare color={'white'} size={30}/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100057207440782" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare color={'white'} size={30}/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=6285710560686" target="_blank" rel="noopener noreferrer">
                    <FaWhatsappSquare color={'white'} size={30}/>
                </a>
                <a href="mailto:muhyiabdulbasith@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaMailBulk color={'white'} size={30}/>
                </a>
                <a href="https://twitter.com/basith_muhyi" target="_blank" rel="noopener noreferrer">
                    <FaTwitterSquare color={'white'} size={30}/>
                </a>
                <a href="https://github.com/muhyiabdulb" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare color={'white'} size={30}/>
                </a>
            </div>
        </div>
    )
}

export default Footer