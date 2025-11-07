import WebsitePreview from '../WebsitePreview';

export default function WebsitePreviewExample() {
  const sampleData = {
    coupleName: "Sarah & Ahmad",
    groomName: "Ahmad",
    brideName: "Sarah",
    weddingDate: "25 Desember 2025",
    ceremonyTime: "08:00 - 10:00 WIB",
    ceremonyLocation: "Masjid Istiqlal, Jakarta Pusat",
    receptionTime: "11:00 - 14:00 WIB",
    receptionLocation: "Balai Kartini, Jakarta Selatan",
    ourStory: "Kami bertemu di sebuah kafe kecil di musim semi. Dari pertemuan sederhana itu, kami tahu bahwa ini adalah awal dari sesuatu yang istimewa.",
    primaryColor: "#c9a961",
    fontFamily: "Inter"
  };

  return <WebsitePreview data={sampleData} />;
}
