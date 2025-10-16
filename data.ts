export interface SiteData {
  header: {
    navLinks: { name: string; href: string }[];
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaButton1: string;
    ctaButton2: string;
    trialInfo: string;
    videoUrl: string;
  };
  features: {
    title: string;
    subtitle: string;
    featureCards: {
      title: string;
      description: string;
    }[];
  };
  stats: {
    title: string;
    subtitle: string;
    statCards: {
      value: string;
      label: string;
    }[];
    testimonial: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  videoSection: {
    title: string;
    subtitle: string;
    videoTitle: string;
    videoUrl: string;
  };
  videoLibrary: {
    title: string;
    subtitle: string;
    videos: {
      src: string;
      title: string;
    }[];
  };
  download: {
    title: string;
    subtitle: string;
    downloads: {
      href: string;
      os: string;
    }[];
  };
  testimonials: {
    title: string;
    testimonialCards: {
      quote: string;
      author: string;
      title: string;
      avatar: string;
    }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: {
      plan: string;
      price: string;
      priceSuffix: string;
      description: string;
      features: string[];
      popular?: boolean;
    }[];
    policy: {
      title: string;
      trialTitle: string;
      trialDescription: string;
      refundTitle: string;
      refundDescription: string;
    };
    purchaseModal: {
        title: string;
        subtitle: string;
        supportContacts: {
            name: string;
            phone: string;
        }[];
    };
  };
  contact: {
    title: string;
    subtitle: string;
    hotline: {
        title: string;
        description: string;
        phone: string;
    },
    zalo: {
        title: string;
        description: string;
        link: string;
    }
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  footer: {
    copyright: string;
    facebookUrl: string;
    youtubeUrl: string;
  };
}

export const defaultData: SiteData = {
  header: {
    navLinks: [
      { name: 'Trang chủ', href: '#' },
      { name: 'Hướng dẫn sử dụng', href: '#huong-dan' },
      { name: 'Thư viện', href: '#video-library' },
      { name: 'Bảng giá', href: '#bang-gia' },
      { name: 'Liên hệ', href: '#lien-he' },
    ],
  },
  hero: {
    titleLine1: 'Từ Văn Bản & Hình Ảnh thành Video',
    titleLine2: 'Không Giới Hạn',
    subtitle: 'Trải nghiệm sức mạnh của Tsoft: tạo video không giới hạn từ văn bản hoặc hình ảnh, tự động tải về và ghép nối thành một tác phẩm hoàn chỉnh. Nhẹ nhàng, mạnh mẽ và siêu tiết kiệm thời gian.',
    ctaButton1: 'Dùng Thử Miễn Phí',
    ctaButton2: 'Tìm hiểu thêm',
    trialInfo: 'Dùng thử miễn phí 1 ngày. Hoàn tiền trong 3 ngày không cần lý do.',
    videoUrl: 'https://www.youtube.com/embed/GuSWkV-T8WI?si=IY6dcelx5ivDjE_g'
  },
  features: {
    title: 'Tại sao lại chọn Tsoft?',
    subtitle: 'Khám phá những tính năng mạnh mẽ giúp tự động hóa và nâng tầm quy trình sản xuất video của bạn.',
    featureCards: [
      {
        title: 'Sáng Tạo Không Giới Hạn',
        description: 'Sản xuất video không giới hạn số lượng. Biến mọi ý tưởng thành hiện thực mà không còn bất kỳ rào cản nào.',
      },
      {
        title: 'Text & Image to Video',
        description: 'Chuyển đổi tức thì từ kịch bản văn bản hoặc hình ảnh tĩnh sang video sống động, đầy cảm xúc chỉ trong vài giây.',
      },
      {
        title: 'Phần Mềm Siêu Nhẹ',
        description: 'Hoạt động mượt mà trên mọi thiết bị mà không yêu cầu cấu hình phần cứng cao. Dễ dàng cài đặt và sử dụng.',
      },
      {
        title: 'Tự Động Tải & Ghép Nối',
        description: 'Sau khi tạo, tool tự động tải về các clip và ghép chúng thành một video hoàn chỉnh, sẵn sàng để bạn sử dụng.',
      },
    ]
  },
  stats: {
      title: 'Những Con Số Biết Nói',
      subtitle: 'Kể từ ngày mở bán 1/10/2024, Tsoft đã đồng hành cùng cộng đồng và đạt được những kết quả đáng tự hào.',
      statCards: [
        {
            value: "368+",
            label: "Đơn hàng được bán ra"
        },
        {
            value: "568.9k+",
            label: "Video được tạo"
        },
        {
            value: "100%",
            label: "Khách hàng hài lòng về support"
        }
    ],
    testimonial: 'Được tin dùng bởi các <strong class="text-fuchsia-400 font-semibold">Admin, trưởng/phó nhóm</strong> từ những cộng đồng MMO lớn nhất Việt Nam.'
  },
  howItWorks: {
      title: 'Hoạt động như thế nào?',
      subtitle: 'Chỉ với 3 bước đơn giản để biến ý tưởng thành hàng loạt video chuyên nghiệp.',
      steps: [
        {
          title: 'Tạo Kịch Bản & Prompt',
          description: 'Sử dụng tool đồng nhất nhân vật được tặng kèm: chỉ cần đưa dàn ý hoặc ý tưởng kịch bản, chọn phong cách (hoạt hình/điện ảnh), tool sẽ tự động tạo ra các prompt chính xác.',
        },
        {
          title: 'Tải Prompt Lên Tool',
          description: 'Tải toàn bộ prompt bạn đã chuẩn bị ở bước trước lên tool Tsoft để bắt đầu quá trình sản xuất.',
        },
        {
          title: 'Chờ & Nhận Nguyên Liệu',
          description: 'Hệ thống sẽ tự động làm việc. Bạn chỉ cần chờ và nhận về toàn bộ video nguyên liệu để sử dụng.',
        },
      ]
  },
  videoSection: {
      title: 'Hướng dẫn sử dụng',
      subtitle: 'Làm theo các bước hướng dẫn chi tiết để làm chủ Tsoft và tạo ra những video ấn tượng.',
      videoTitle: '1. Hướng Dẫn Tải và Cài đặt Tool',
      videoUrl: 'https://player.vimeo.com/video/1122443628?h=af4ad1a5e6'
  },
  videoLibrary: {
      title: 'Thư viện video được sản xuất từ Tsoft',
      subtitle: 'Khám phá những sản phẩm sáng tạo được thực hiện hoàn toàn bằng công cụ tạo video hàng loạt của chúng tôi.',
      videos: [
        { src: "https://www.youtube.com/embed/sMtPIy-bkp0?si=qeF-v5M4yKgBEcLT", title: "Tsoft Demo Video 1" },
        { src: "https://www.youtube.com/embed/RiKqDcRNHto?si=mXvkBZY0zpOFrShV", title: "Tsoft Demo Video 2" },
        { src: "https://www.youtube.com/embed/s9tZ-mx02oY?si=GHs7TE1TavkA9w1n", title: "Tsoft Demo Video 3" },
        { src: "https://www.youtube.com/embed/E41P1jzJdFQ?si=-t0dpWeafcZfWEK7", title: "Tsoft Demo Video 4" },
      ]
  },
  download: {
      title: 'Link Tải Tool VEO3 1.3.2',
      subtitle: 'Chọn phiên bản phù hợp với hệ điều hành của bạn để bắt đầu.',
      downloads: [
        {
          href: "https://github.com/realvux/toolveo/releases/download/1.3.0/veo3-auto_1.3.2_x64-setup.exe",
          os: "Windows",
        },
        {
          href: "https://github.com/realvux/toolveo/releases/download/1.3.0/veo3-auto_1.3.2_aarch64.dmg",
          os: "macOS (Apple Silicon)",
        },
        {
          href: "https://github.com/realvux/toolveo/releases/download/1.3.0/veo3-auto_1.3.2_x64.dmg",
          os: "macOS (Intel)",
        },
      ]
  },
  testimonials: {
      title: 'Khách hàng nói gì về chúng tôi',
      testimonialCards: [
        {
          quote: "Chính sách bán hàng của Tsoft quá tuyệt vời, đặc biệt là chính sách hoàn tiền. Nhân viên hỗ trợ thì siêu nhiệt tình, trả lời Zalo gần như ngay lập tức mỗi khi tôi cần giúp đỡ.",
          author: "Nguyễn Thị Mai",
          title: "Freelancer",
          avatar: "https://picsum.photos/seed/person1/100/100",
        },
        {
          quote: "Từ ngày biết đến Tsoft, công việc sản xuất video của tôi đã nhanh hơn gấp nhiều lần. Giờ tôi có thể hoàn thành khối lượng công việc của cả tuần chỉ trong một ngày. Thực sự đột phá!",
          author: "Trần Anh Tuấn",
          title: "Marketing Manager",
          avatar: "https://picsum.photos/seed/person2/100/100",
        },
        {
          quote: "Giá quá rẻ so với những gì Tsoft mang lại. Điều tôi ấn tượng nhất là tốc độ support, các bạn phản hồi và giải quyết vấn đề cực kỳ nhanh chóng. Rất đáng tiền!",
          author: "Phạm Văn Hùng",
          title: "Chủ shop online",
          avatar: "https://picsum.photos/seed/person3/100/100",
        },
        {
          quote: "Tool cực nhẹ, không hề ảnh hưởng đến hiệu năng máy. Mình vẫn có thể làm các công việc khác một cách mượt mà trong khi tool chạy nền, dù máy tính của mình cấu hình không cao. Rất hiệu quả!",
          author: "Lê Minh Hà",
          title: "Content Creator",
          avatar: "https://picsum.photos/seed/person4/100/100",
        },
      ]
  },
  pricing: {
      title: 'Bảng giá linh hoạt',
      subtitle: 'Chọn gói phù hợp nhất với nhu cầu của bạn và bắt đầu tạo video ngay hôm nay.',
      plans: [
        {
          plan: 'Gói 1 Tháng',
          price: '400.000đ',
          priceSuffix: '/tháng',
          description: 'Lựa chọn linh hoạt để trải nghiệm toàn bộ sức mạnh của Tsoft.',
          features: [
            'Tạo video không giới hạn',
            'Chất lượng video Full HD 1080p',
            'Tặng tool Kịch bản AI & Đồng nhất nhân vật',
            'Tự động tải & ghép nối',
            'Hỗ trợ qua email & Zalo'
          ],
        },
        {
          plan: 'Gói 3 Tháng',
          price: '800.000đ',
          priceSuffix: '/3 tháng',
          description: 'Tiết kiệm hơn cho các dự án ngắn hạn và chiến dịch marketing.',
          features: [
            'Tạo video không giới hạn',
            'Chất lượng video Full HD 1080p',
            'Tặng tool Kịch bản AI & Đồng nhất nhân vật',
            'Tự động tải & ghép nối',
            'Hỗ trợ qua email & Zalo'
          ],
          popular: true,
        },
        {
          plan: 'Gói 1 Năm',
          price: '1.200.000đ',
          priceSuffix: '/năm',
          description: 'Giải pháp tối ưu và tiết kiệm nhất cho công việc dài hạn.',
          features: [
            'Tạo video không giới hạn',
            'Chất lượng video Full HD 1080p',
            'Tặng tool Kịch bản AI & Đồng nhất nhân vật',
            'Tự động tải & ghép nối',
            'Hỗ trợ ưu tiên'
          ],
        },
      ],
      policy: {
          title: 'Chính Sách Bán Hàng Rõ Ràng',
          trialTitle: 'Dùng Thử Miễn Phí 1 Ngày',
          trialDescription: 'Trải nghiệm đầy đủ tính năng của Tsoft trong 24 giờ trước khi quyết định mua. Không có bất kỳ giới hạn nào trong thời gian dùng thử.',
          refundTitle: 'Hoàn Tiền Trong 3 Ngày',
          refundDescription: 'Chúng tôi tự tin vào sản phẩm của mình. Nếu bạn không hài lòng vì bất kỳ lý do gì, chúng tôi sẽ hoàn lại 100% số tiền trong vòng 3 ngày kể từ ngày mua.'
      },
      purchaseModal: {
          title: 'Liên hệ để đặt mua',
          subtitle: 'Vui lòng liên hệ một trong các support dưới đây qua Zalo để được hướng dẫn thanh toán.',
          supportContacts: [
            { name: 'Thuỷ Tiên', phone: '0392613948' },
            { name: 'Ngọc Thao', phone: '0354269448' },
            { name: 'Lã Hoà', phone: '0968911593' }
          ]
      }
  },
  contact: {
      title: 'Liên hệ với chúng tôi',
      subtitle: 'Bạn có câu hỏi hoặc cần hỗ trợ? Đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ.',
      hotline: {
          title: 'Phản ánh chất lượng dịch vụ',
          description: 'Góp ý của bạn giúp chúng tôi tốt hơn.',
          phone: '0372899999'
      },
      zalo: {
          title: 'Cộng đồng Zalo',
          description: 'Trao đổi & nhận hỗ trợ nhanh nhất.',
          link: 'https://zalo.me/g/qnkofg173'
      }
  },
  cta: {
      title: 'Sẵn sàng để cách mạng hóa việc sản xuất video?',
      subtitle: 'Tham gia cùng hàng ngàn nhà sáng tạo và doanh nghiệp đang tiết kiệm thời gian và tạo ra những video ấn tượng hơn bao giờ hết.',
      buttonText: 'Bắt đầu miễn phí ngay hôm nay'
  },
  footer: {
      copyright: 'Tifomedia. All rights reserved.',
      facebookUrl: '#',
      youtubeUrl: 'https://www.youtube.com/@TifoMedia88'
  }
};