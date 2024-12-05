import Image from 'next/image';

const Intro = () => {
    return (
        <main className="flex flex-col">
            <section className="min-h-[50vh] max-h-[50vh] w-full justify-end items-center flex flex-col text-gray-950 bg-gradient-to-t from-slate-400 to-slate-200 gap-6 pb-16 relative">
                <div className="bg-[url('/images/textured_paper.png')] w-full h-full absolute top-0 bottom-full right-full left-0"></div>
                <Image src="/images/logo.webp" width={250} height={250} className="relative"/>
                <div className="relative">
                    <h1 className="text-7xl font-bold">Reading</h1>
                    <h1 className="text-7xl font-bold">Rain<span className="text-blue-700">bot</span></h1>
                </div>
            </section>
            <section className="min-h-[50vh] max-h-[50vh] w-full items-center flex flex-col text-gray-50 bg-gradient-to-t from-slate-700 to-slate-900 gap-6 pt-16">
                <p>
                    <em>Empowering children to read through their own imagination</em>
                </p>
                <textarea className="rounded-2xl w-1/2 border-2 border-slate-400 bg-slate-100 text-gray-50 focus:bg-white focus:outline-none focus:border-orange-400 transition duration-500"/>
                <button className="rounded-lg bg-amber-600 text-slate-50 py-1 px-5">GENERATE</button>
            </section>
        </main>
    )
}

export default Intro;