// icons
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

// images
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";
import featured3 from "../assets/featured3.png";
import featured4 from "../assets/featured4.png";
import featured5 from "../assets/featured5.png";
import featured6 from "../assets/featured6.png";
import featured7 from "../assets/featured7.png";
import featured8 from "../assets/featured8.png";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";
import product5 from "../assets/product-5.jpg";
import product6 from "../assets/product-6.jpg";
import product7 from "../assets/product-7.jpg";
import product8 from "../assets/product-8.jpg";

export const links = [
    {
        title: "Inicio",
        path: "home",
        offset: -150,
    },
    {
        title: "Destacados",
        path: "featured",
        offset: -150,
    },
    {
        title: "Nosotros",
        path: "about",
        offset: -150,
    },
    {
        title: "Tienda",
        path: "shop",
        offset: -150,
    },
    {
        title: "Contacto",
        path: "contact",
        offset: -150,
    },
]

export const shoes = [
    {
        thumbnail: thumbnail1,
        shoe: shoe1,
        title: "Zapatillas de Basketball",
        price: "S/. 359"
    },
    {
        thumbnail: thumbnail2,
        shoe: shoe2,
        title: "Zapatillas Running Pro",
        price: "S/. 329"
    },
    {
        thumbnail: thumbnail3,
        shoe: shoe3,
        title: "Zapatillas Training",
        price: "S/. 299"
    },
];

export const featured = [
    {
        shoe: featured1,
        title: "Nike ZoomX Invincible",
        price: "379.00",
        bgColor: "#f42c37"
    },
    {
        shoe: featured2,
        title: "Nike Velocity Pro",
        price: "369.00",
        bgColor: "#0948d1"
    },
    {
        shoe: featured3,
        title: "Nike Dunk Low",
        price: "399.00",
        bgColor: "#fdc62e"
    },
    {
        shoe: featured4,
        title: "Nike Zoom Pegasus",
        price: "449.00",
        bgColor: "#599ffc"
    },
    {
        shoe: featured5,
        title: "Nike Free Run",
        price: "359.00",
        bgColor: "#2dcc6f"
    },
    {
        shoe: featured6,
        title: "Nike Urban Shadow",
        price: "419.00",
        bgColor: "#252424"
    },
    {
        shoe: featured7,
        title: "Nike Air Velocity",
        price: "389.00",
        bgColor: "#d4d3cf"
    },
    {
        shoe: featured8,
        title: "Nike Phantom Surge",
        price: "469.00",
        bgColor: "#152ae6"
    },
];

export const stats = [
    {
        value: "500K+",
        label: "Clientes satisfechos",
        bg: "bg-secondaryRed",
    },
    {
        value: "200+",
        label: "Diseños cada año",
        bg: "bg-secondaryYellow"
    },
    {
        value: "20+",
        label: "Años de experiencia",
        bg: "bg-secondaryGreen",
    },
    {
        value: "250K+",
        label: "Reseñas positivas",
        bg: "bg-secondaryBlue",
    },
];

export const shop = [
    {
        shoe: product1,
        title: "Nike Air Max 90",
        price: "339.00",
    },
    {
        shoe: product2,
        title: "Nike Dunk Low Retro",
        price: "399.00",
    },
    {
        shoe: product3,
        title: "Nike Zoom Pegasus 40",
        price: "299.00",
    },
    {
        shoe: product4,
        title: "Nike Free Run 5.0",
        price: "359.00",
    },
    {
        shoe: product5,
        title: "Nike Air Force 1",
        price: "379.00",
    },
    {
        shoe: product6,
        title: "Nike Revolution 6",
        price: "259.00",
    },
    {
        shoe: product7,
        title: "Nike Downshifter 12",
        price: "229.00",
    },
    {
        shoe: product8,
        title: "Nike Court Vision",
        price: "319.00",
    },
];

export const footerLinks = [
    {
        title: "Información",
        links: [
            "Sobre nosotros",
            "Nuevos ingresos",
            "Ofertas del mes",
            "Diseños populares",
            "Preguntas frecuentes",
            "Política de privacidad",
        ],
    },
    {
        title: "Servicio al cliente",
        links: [
            "Términos y condiciones",
            "Ofertas especiales",
            "Opiniones de clientes",
        ],
    },
]

export const footerContactInfo = {
    title: "Contáctanos",
    links: [
        { label: "Teléfono", value: "+51 987 654 321" },
        { label: "Email", value: "info@luxestep.pe" },
    ],
}

export const socials = {
    title: "Síguenos",
    links: [
        <FaFacebook />,
        <FaInstagram />,
        <FaTwitter />,
        <FaYoutube />,
        <FaLinkedin />,
    ],
}