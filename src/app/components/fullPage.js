import Image from 'next/image';

const FullPage = ({text, image}) => {
    return (
        <section className="grid grid-cols-2 gap-4 bg-slate-300 overflow-y-hidden">
            <div className="h-full p-12 pt-20 pb-20 bg-slate-200 text-zinc-900 min-h-screen max-h-screen">{text}</div>
            <div className="h-full p-12 bg-slate-200 text-zinc-900 min-h-screen max-h-screen grid place-items-center">
                <Image
                    src="/images/image.png"
                    style={{maskImage: "radial-gradient(circle, white 60%, transparent 80%)"}}
                    layout="responsive"
                    width={100}
                    height={100}
                />
            </div>
        </section>
    );
};

export default FullPage;