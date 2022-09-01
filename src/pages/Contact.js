import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactContent from "../components/contact/ContactContent";
import Divider from "../components/divider/Divider";

const Contact = () => {
    return(
        <>
            <Header />
            
            <Breadcrumb 
                breadcrumbTitle="Contact" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />
            
            {/* Contact Content */}
            <ContactContent 
                contactTitle="Let's talk about all things!" 
                contactSubTitle="Write to us or give us a call. We will reply to you as soon as possible. But yes, it can take up to 24 hours."
                mapIframeSource=""
            />

            <Divider />

            <Footer />
        </>
    )
}

export default Contact;