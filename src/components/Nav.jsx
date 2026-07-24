import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <>
      <div class="nav">
            <div class="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7Xh2Ws2bUg2L-zL-JLgKNuw_m4onDNpbRbgspgPMBQ&s=10" alt=""/>
                </div>
                 
                <div class="deliver">
                <p class="firstletter">deliver to</p>
                <p class="secondletter"><b>India</b></p>
                </div>
        <div class="bar">
        <div class="all">
            <select>
                    <i class="fa-solid fa-caret-down"></i>
                    <option value="" selected disabled>All</option>
                    <option value="">Amazon Fashion</option>
                    <option value="">Amazon Fresh</option>
                    <option value="">Amazon Pharmacy</option>
                    <option value="">Appliances</option>
                    <option value="">Apps & Games</option>
                    <option value="">Audible Audiobooks</option>
                    <option value="">Baby</option>
                    <option value="">Beauty</option>
                    <option value="">Books</option>
                    <option value="">Car & Motorbikes</option>
                    </select>
                    </div>
                    <div class="search">
                <form action="">
                    <input type="text" placeholder="Search Amazon.in"/>
                </form>
                </div>
                <div class="icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
        </div>
        <div class="language">
        <select name="" id="">
            <option value="">English</option>
            <option value="">Hindi</option>
            <option value="">French</option>
            <option value="">Spanish</option>
            <option value="">Italian</option>
            <option value="">Urdu</option>
            <option value="">Arabic</option>
            <option value="">Greece</option>
            <option value="">Tamil</option>
        </select>
        <div class="sign">
        <h5>Accounts & lists</h5>
        <div class="list">
        <p class="one">Returns</p>
        <p class="two">& Orders</p>
        </div>
        </div>
        <div class="last">
         <div class="cart">
            <i class="fa-solid fa-cart-arrow-down"></i>
            </div>
            <p><b>Cart</b></p>
         </div>
        </div>
        </div>
        <div class="content">

            <div class="almost">
            <i class="fa-solid fa-bars"></i>
            <h4>All</h4>
            </div>

            <div class="fresh">
            <h4>Fresh</h4>
            </div>

            <div class="player">
                <h4>MX Player</h4>
            </div>

            <div class="sell">
                <h4>Sell</h4>
            </div>

            <div class="bestseller">
                <h4>Bestsellers</h4>
            </div>
             <div class="deals">
                <h4>Today's Deal</h4>
             </div>

             <div class="prime">
                <h4>Prime</h4>
             </div>

             <div class="mobile">
                <h4>Mobiles</h4>
             </div>

             <div class="release">
                <h4>New Release</h4>
             </div>

             <div class="service">
                <h4>Customer Service</h4>
             </div>

             <div class="pay">
                <h4>Amazon Pay</h4>
             </div>

             <div class="electronic">
                <h4>Electronics</h4>
             </div>
        </div>
    </>
    
  )
}

export default Nav

