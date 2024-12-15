'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../translations/translations'
import { Button } from '../../components/ui/button'


const projects = [
    {
        id: "e-commerce",
        title: {
            id: "Website E-commerce",
            en: "E-commerce Website"
        },
        description: {
            id: "Platform e-commerce dengan sistem keranjang dan pembayaran.",
            en: "E-commerce platform with shopping cart and payment system."
        },
        technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
        images: [
            "/placeholder.svg?height=400&width=600&text=E-commerce+Homepage",
            "/placeholder.svg?height=400&width=600&text=Product+Listing",
            "/placeholder.svg?height=400&width=600&text=Shopping+Cart",
            "/placeholder.svg?height=400&width=600&text=Checkout+Process"
        ],
        longDescription: {
            id: "Proyek e-commerce ini adalah platform komprehensif yang memungkinkan pengguna untuk menjelajahi produk, menambahkannya ke keranjang, dan menyelesaikan pembelian. Fitur utama termasuk katalog produk yang dapat dicari, sistem keranjang belanja yang dinamis, proses checkout yang aman, dan panel admin untuk manajemen produk dan pesanan.",
            en: "This e-commerce project is a comprehensive platform that allows users to browse products, add them to cart, and complete purchases. Key features include a searchable product catalog, dynamic shopping cart system, secure checkout process, and admin panel for product and order management."
        },
        features: {
            id: [
                "Katalog produk dengan fitur pencarian dan filter",
                "Sistem keranjang belanja real-time",
                "Proses checkout yang aman dengan integrasi Stripe",
                "Panel admin untuk manajemen produk dan pesanan",
                "Sistem ulasan dan rating produk",
                "Rekomendasi produk berdasarkan riwayat pembelian"
            ],
            en: [
                "Product catalog with search and filter features",
                "Real-time shopping cart system",
                "Secure checkout process with Stripe integration",
                "Admin panel for product and order management",
                "Product review and rating system",
                "Product recommendations based on purchase history"
            ]
        },
        challenges: {
            id: "Salah satu tantangan utama dalam proyek ini adalah mengimplementasikan sistem pembayaran yang aman dan dapat diandalkan. Kami menggunakan Stripe untuk menangani transaksi dan memastikan keamanan data pelanggan. Selain itu, optimalisasi performa untuk menangani katalog produk yang besar juga menjadi fokus utama.",
            en: "One of the main challenges in this project was implementing a secure and reliable payment system. We used Stripe to handle transactions and ensure customer data security. Additionally, performance optimization to handle a large product catalog was also a major focus."
        },
        outcome: {
            id: "Platform e-commerce ini berhasil diluncurkan dan telah memproses lebih dari 10.000 transaksi dalam tiga bulan pertama. Feedback pengguna sangat positif, terutama mengenai kemudahan penggunaan dan kecepatan situs.",
            en: "The e-commerce platform was successfully launched and has processed over 10,000 transactions in the first three months. User feedback has been overwhelmingly positive, particularly regarding ease of use and site speed."
        }
    },
    // ... (similar structure for other projects)
]

export default function ProjectDetail() {
    const router = useRouter()
    const { id } = useParams()
    const { language } = useLanguage()
    const t = translations[language]
    const project = projects.find(p => p.id === id)

    if (!project) {
        return <div>Project not found</div>
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Button onClick={() => router.back()} className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t.backToHome}
            </Button>
            <motion.h1
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="text-4xl font-bold mb-6 text-gray-800"
            >
                {project.title[language]}
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={project.images[0]}
                        alt={project.title[language]}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-gray-600 mb-4">{project.longDescription[language]}</p>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">{t.technologies}:</h2>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t.mainFeatures}</h2>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                    {project.features[language].map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-8"
            >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t.projectGallery}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`${project.title[language]} screenshot ${index + 1}`}
                            width={300}
                            height={200}
                            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-8"
            >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t.challengesAndSolutions}</h2>
                <p className="text-gray-600 mb-4">{project.challenges[language]}</p>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t.outcome}</h2>
                <p className="text-gray-600">{project.outcome[language]}</p>
            </motion.div>
        </motion.div>
    )
}

