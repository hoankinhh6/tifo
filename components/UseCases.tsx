
import React from 'react';

interface UseCaseCardProps {
    image: string;
    title: string;
    description: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ image, title, description }) => (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden group border border-gray-700/50 transition-all duration-300 hover:border-fuchsia-500/50 hover:-translate-y-1">
        <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-gray-400">{description}</p>
        </div>
    </div>
);


const UseCases: React.FC = () => {
    const cases = [
        {
            image: "https://images.unsplash.com/photo-1549499232-23806c35c362?q=80&w=600&h=400&auto=format&fit=crop",
            title: "Video Marketing",
            description: "Tạo hàng loạt quảng cáo sản phẩm, video giới thiệu cho các chiến dịch marketing đa kênh."
        },
        {
            image: "https://images.unsplash.com/photo-1611162616805-6a40c6a8c7d5?q=80&w=600&h=400&auto=format&fit=crop",
            title: "Nội dung Mạng xã hội",
            description: "Sản xuất nhanh chóng các video ngắn cho TikTok, Instagram Reels, YouTube Shorts để thu hút tương tác."
        },
        {
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&h=400&auto=format&fit=crop",
            title: "Đào tạo & E-learning",
            description: "Chuyển đổi tài liệu đào tạo thành các bài giảng video hấp dẫn một cách dễ dàng và hiệu quả."
        }
    ];

    return (
        <section className="py-20 sm:py-24 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Ứng dụng không giới hạn</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Tsoft phù hợp cho mọi nhu cầu, từ marketing, bán hàng đến giáo dục và giải trí.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map(c => <UseCaseCard key={c.title} {...c} />)}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
