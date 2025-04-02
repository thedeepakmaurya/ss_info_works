import Image from "next/image";
import data from "../../public/db/data.json";

export default function About() {
    const { stat } = data;
    return (
        <section className="px-3 text-gray-800 lg:px-20">
            <div className="grid gap-4 lg:grid-cols-2">
                <div className="row-span-2">
                    <h5 className="mb-2 text-lg text-orange-400">How it started</h5>
                    <h2 className="mb-16 text-5xl">
                    Empowering the World Through Digital Innovation
                    </h2>
                    <p className="text-justify">
                        At SS Infoworks Technology, we specialize in delivering top-notch web
                        services tailored to your business needs. From web development and
                        design to cloud solutions and digital marketing, we provide
                        end-to-end solutions that drive growth and innovation. Our team of
                        experts is committed to creating high-performance, secure, and
                        scalable web applications that enhance your online presence. With a
                        focus on cutting-edge technology and customer satisfaction, we
                        ensure seamless experiences for businesses of all sizes. Whether
                        you're a startup or an enterprise, we help you stay ahead in the
                        digital landscape. Partner with us to transform your online journey!
                    </p>
                </div>
                <div className="h-48 rounded-sm">
                    <Image
                        className="h-full rounded-sm object-cover"
                        src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
                        alt="about"
                        width={1200}
                        height={600}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {stat.map(({ title, value }, index) => {
                        return (
                            <div key={index} className="rounded-sm bg-orange-50 p-6">
                                <h3 className="text-3xl">{value}</h3>
                                <p className="text-blue-400 capitalize">{title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
