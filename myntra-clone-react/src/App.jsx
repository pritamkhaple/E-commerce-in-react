import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HomeItem } from "./components/HomeItem"


function App() {

    const item = {
            id: '001',
            image: 'images/1.jpg',
            company: 'Carlton London',
            item_name: 'Rhodium-Plated CZ Floral Studs',
            original_price: 1045,
            current_price: 606,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.5,
                count: 1400,
            },
        
    }

  return (
    <>
    {/* <header>
        <div className="logo_container">
            <a href="#"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></a>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
                <span className="material-symbols-outlined action_icon">person</span>
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                <span className="material-symbols-outlined action_icon">favorite</span>
                <span className="action_name">Wishlist</span>
            </div>

            <a className="action_container" href="pages/bag.html">
                <span className="material-symbols-outlined action_icon">shopping_bag</span>
                <span className="action_name">Bag</span>
                <span className="bag-item-count">0</span>
            </a>
        </div>
    </header> */}
    <Header></Header>
    <main>
        <div className="items-container">
            <HomeItem item={item} ></HomeItem>
        </div>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
