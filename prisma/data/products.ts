// prisma/data/products.ts
import { Prisma } from "@prisma/client";

export const dataProducts: Prisma.ProductCreateInput[] = [
  {
    name: "Bayam Segar",
    slug: "bayam-segar",
    description:
      "Bayam organik segar pilihan, kaya akan nutrisi dan vitamin. Dipetik langsung dari kebun organik kami dengan standar kualitas tertinggi. Daun bayam hijau segar, renyah, dan bebas pestisida. Cocok untuk salad, tumis, atau campuran smoothie sehat. Mengandung zat besi, kalsium, dan vitamin A yang melimpah untuk mendukung kesehatan optimal.",
    price: 50000,
    inventory: 100,
    organic: true,
    weightInGrams: 250,
    images: [
      "https://ucarecdn.com/a8a33e3a-98c3-4e17-a646-1892fc00ef1b/-/preview/500x500/",
    ],
    category: {
      connectOrCreate: {
        where: { name: "Sayuran Hijau" },
        create: { name: "Sayuran Hijau" },
      },
    },
  },
  {
    name: "Sawi Hijau",
    slug: "sawi-hijau",
    description:
      "Sawi hijau organik berkualitas premium, dipanen dengan hati-hati dari kebun lokal kami. Bertekstur renyah dengan warna hijau cerah yang menandakan kesegaran maksimal. Kaya akan serat, vitamin C, dan antioksidan. Sempurna untuk tumisan, sup, atau sebagai campuran dalam masakan Asia tradisional. Bebas dari bahan kimia berbahaya dan diproduksi dengan praktik pertanian berkelanjutan.",
    price: 60000,
    inventory: 75,
    organic: true,
    weightInGrams: 300,
    images: [
      "https://ucarecdn.com/e44a6a14-4366-447b-a30f-585423403138/-/preview/500x500/",
    ],
    category: {
      connectOrCreate: {
        where: { name: "Sayuran Hijau" },
        create: { name: "Sayuran Hijau" },
      },
    },
  },
  {
    name: "Wortel Organik",
    slug: "wortel-organik",
    description:
      "Wortel organik premium dengan warna oranye cerah, dipanen dari tanah subur tanpa penggunaan pestisida kimia. Manis, renyah, dan kaya akan beta-karoten yang baik untuk kesehatan mata dan kulit. Cocok untuk dimakan mentah, dibuat jus, dimasak, atau dijadikan camilan sehat. Mengandung serat tinggi dan nutrisi esensial untuk mendukung sistem kekebalan tubuh.",
    price: 80000,
    inventory: 150,
    organic: true,
    weightInGrams: 500,
    images: [
      "https://ucarecdn.com/c21260fd-203d-4ece-ab35-2b1146b2ab67/-/preview/500x500/",
    ],
    category: {
      connectOrCreate: {
        where: { name: "Sayuran Akar" },
        create: { name: "Sayuran Akar" },
      },
    },
  },
  {
    name: "Tomat Merah",
    slug: "tomat-merah",
    description:
      "Tomat merah organik segar, dipetik langsung dari kebun dengan tingkat kematangan sempurna. Bertekstur lembut, berair, dengan rasa manis alami yang khas. Kaya akan likopen, vitamin C, dan antioksidan yang membantu melawan radikal bebas. Ideal untuk salad, saus, masakan rumahan, atau dimakan langsung. Dijamin bebas bahan kimia berbahaya dan diproduksi dengan metode ramah lingkungan.",
    price: 70000,
    inventory: 200,
    organic: true,
    weightInGrams: 400,
    images: [
      "https://ucarecdn.com/4bb77da9-5a52-4f6f-ad75-6b50113ceae8/-/preview/500x500/",
    ],
    category: {
      connectOrCreate: {
        where: { name: "Sayuran Buah" },
        create: { name: "Sayuran Buah" },
      },
    },
  },
  {
    name: "Kentang Premium",
    slug: "kentang-premium",
    description:
      "Kentang organik premium pilihan, berasal dari dataran tinggi dengan tanah paling subur. Bertekstur halus, berukuran seragam, dan memiliki rasa gurih alami. Kaya akan karbohidrat kompleks, vitamin C, dan kalium. Sempurna untuk dipanggang, direbus, digoreng, atau dijadikan puree. Cocok untuk berbagai hidangan dari masakan tradisional hingga internasional. Diproduksi dengan standar organik tertinggi.",
    price: 100000,
    inventory: 120,
    organic: true,
    weightInGrams: 1000,
    images: [
      "https://ucarecdn.com/4eef5163-ecc6-43ec-a515-db9d40e8c746/-/preview/500x500/",
    ],
    category: {
      connectOrCreate: {
        where: { name: "Sayuran Akar" },
        create: { name: "Sayuran Akar" },
      },
    },
  },
  {
    name: "Bawang Merah",
    slug: "bawang-merah",
    description:
      "Bawang merah organik berkualitas tinggi, dipetik dari kebun tradisional kami. Memiliki aroma kuat dan rasa pedas yang khas. Kaya akan senyawa antiperadangan dan antioksidan yang membantu meningkatkan sistem kekebalan tubuh. Ideal untuk bumbu masakan, campuran sambal, atau bahan dasar berbagai hidangan Indonesia. Dijamin segar, bersih, dan bebas dari bahan kimia berbahaya.",
    price: 120000,
    inventory: 90,
    organic: true,
    weightInGrams: 250,
    images: [
      "https://ucarecdn.com/1e523ea5-7af8-4c90-9850-e2f4133bb466/-/preview/500x500/",
    ],
    category: {
      connectOrCreate: {
        where: { name: "Bumbu Dapur" },
        create: { name: "Bumbu Dapur" },
      },
    },
  },
  {
    name: "Bawang Putih",
    slug: "bawang-putih",
    description:
      "Bawang putih organik pilihan, dipanen dengan teknik khusus untuk memaksimalkan kandungan nutrisi. Memiliki aroma tajam dan rasa pedas yang khas, dengan berbagai manfaat kesehatan. Kaya akan allicin, senyawa yang dikenal memiliki sifat antibakteri dan antivirus. Sangat baik untuk meningkatkan sistem kekebalan tubuh, menurunkan tekanan darah, dan mendukung kesehatan jantung. Cocok untuk berbagai masakan, baik sebagai bumbu maupun obat alami.",
    price: 150000,
    inventory: 80,
    organic: true,
    weightInGrams: 200,
    images: [
      "https://ucarecdn.com/a10c76ec-3d3e-47ce-9184-2099ab0e3dc7/-/preview/500x500/",
    ],
    category: {
      connectOrCreate: {
        where: { name: "Bumbu Dapur" },
        create: { name: "Bumbu Dapur" },
      },
    },
  },
];
