import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import TodaysDrop from "../components/todaysDrop/TodaysDrop";
import TopSeller from "../components/topSeller/top-seller";
import TopBuyer from "../components/topBuyer/TopBuyer";
import Process from "../components/process/Process";
import LiveAuction from "../components/liveAuction/LiveAuction";
import PopularCollection from "../components/popularCollection/PopularCollection";
import HeroTwo from "../components/hero/HeroTwo";
import CTA from "../components/cta/CTA";
import AppDownload from "../components/appDownload/AppDownload";
import DiscoverTwo from "../components/discover/DiscoverTwo";

export default function HomeTwo() {
    return(
        <>
            <Header />

            <HeroTwo 
                heading="Best NFTs Giveaways"
                subHeading="Who said you have to spend a lot of money to have an amazing NFT? At Lucky NFT we offer you a revolutionary way to have NFTs with very little money. A Draw!." 
                buttonInfo={[
                    {
                        btnColor: "primary",
                        btnText: "TRY YOUR LUCK!",
                        btnURL: "/explore2",
                        btnIcon: "bi bi-gift-fill"
                    }
                ]}
            />

            <LiveAuction 
                backgroundColor="" 
                spinnerColor="danger" 
                title="Current Giveaways"
                buttonText="View All" 
                buttonURL="/live-bidding" 
                buttonColor="primary"
            />

            <Process />

            <Divider />

            <PopularCollection 
                title="Popular items in last"
            />

            <Divider />

            <DiscoverTwo 
                title="Discover Items"
            />

            <Divider />
            
            {/* Todays Drop, Top Seller, Top Buyer */}
            <div className="top-seller-wrapper">
                <div className="container">
                    <div className="row g-4 g-lg-5 justify-content-center">

                        {/* Data: data > todaysDrop > todays-drop.json */}
                        <TodaysDrop 
                            heading="Today's Drops" 
                            buttonText="View All Drops" 
                            buttonURL="featured-items" 
                        />

                        {/* Data: data > topSeller > top-seller.json */}
                        <TopSeller 
                            heading="Top Seller" 
                            buttonText="View All Seller's" 
                            buttonURL="top-seller" 
                        />

                        {/* Data: data > topBuyer > top-buyer.json */}
                        <TopBuyer 
                            heading="Top Buyer" 
                            buttonText="View All Buyer's" 
                            buttonURL="top-buyer"
                        />

                    </div>
                </div>
            </div>            

            <Divider />

            <Footer />
        </>
    )
}