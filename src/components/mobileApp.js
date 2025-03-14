export default function MobileApp() {
    return (
        <div className="bg-primary-brand-color flex flex-col md:flex-row justify-between items-center bg-mobile-app md:rounded-lg text-white">
            <div className="flex flex-col gap-y-3 p-10 text-center md:text-left">
                <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
                <p className="font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
                <nav className="mt-5 flex flex-wrap lg:flex-nowrap justify-center gap-2">
                    <a href="https://apps.apple.com" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" 
                             className="md:h-8 lg:h-auto" 
                             alt="App Store'dan indir" />
                    </a>
                    <a href="https://play.google.com" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" 
                             className="md:h-8 lg:h-auto" 
                             alt="Google Play'den indir" />
                    </a>
                    <a href="https://appgallery.huawei.com" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" 
                             className="md:h-8 lg:h-auto" 
                             alt="Huawei AppGallery'den indir" />
                    </a>
                </nav>
            </div>
            <picture className="pt-6 hidden md:block md:self-end">
                <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" 
                     alt="" 
                     aria-hidden="true" />
            </picture>
        </div>
    )
}
