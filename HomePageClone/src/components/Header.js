import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
      <a href='/'><img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'/></a>
      <div className='Header_nav'>
        <ul>
            <li>홈</li>
            <li>시리즈</li>
            <li>영화</li>
            <li>NEW! 요즘 대세 콘텐츠</li>
            <li>내가 찜한 콘텐츠</li>
        </ul>
        <div className='Header_nav_img'>
            <img src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon1/ul-search.svg'/>
            <img className='backImg' src='https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon1/ul-bell.svg'/>
            <img src='https://occ-0-3683-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS5zyiA_uDE4vs9AaQKq7KpZzp9enMkWlZ8tEAVdupwBwH-xsA7pN7Y3cUUYWGtKARFEBN-mUEpPigEi2COFrSUSp7tf3zE.png?r=bd7'/>
        </div>
      </div>
    </div>
  )
}

export default Header