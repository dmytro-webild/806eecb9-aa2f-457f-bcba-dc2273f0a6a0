"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Trang chủ",
          id: "hero",
        },
        {
          name: "Sản phẩm",
          id: "products",
        },
        {
          name: "Về chúng tôi",
          id: "about",
        },
        {
          name: "Công dụng",
          id: "features",
        },
        {
          name: "Liên hệ",
          id: "contact",
        },
      ]}
      brandName="Ngọc Quỳnh Natural"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Tinh Dầu Thiên Nhiên Thuần Khiết"
      description="Sản phẩm tinh dầu nguyên chất, an toàn, được chiết xuất theo tiêu chuẩn dược phẩm."
      buttons={[
        {
          text: "Khám phá sản phẩm",
          href: "#products",
        },
        {
          text: "Liên hệ tư vấn",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/essential-oil-bottles-isolated-white_1182-1133.jpg?_wi=1"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Nguyên liệu 100% thiên nhiên",
          description: "Chiết xuất trực tiếp từ thảo mộc chọn lọc.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-composition-zero-waste-products_23-2148491144.jpg",
          imageAlt: "Front view composition of zero waste products",
        },
        {
          title: "Quy trình đạt chuẩn",
          description: "Sản xuất trong phòng thí nghiệm đạt chuẩn dược phẩm.",
          imageSrc: "http://img.b2bpic.net/free-photo/essential-oil-bottles-isolated-white_1182-1133.jpg?_wi=2",
          imageAlt: "Front view composition of zero waste products",
        },
        {
          title: "Giao hàng toàn quốc",
          description: "Dịch vụ vận chuyển nhanh chóng, an toàn.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-medicinal-leaf-extracts-medicine-bottle-pink-background_181624-43339.jpg?_wi=1",
          imageAlt: "Front view composition of zero waste products",
        },
        {
          title: "Tư vấn 1:1",
          description: "Hỗ trợ khách hàng lựa chọn sản phẩm phù hợp.",
          imageSrc: "http://img.b2bpic.net/free-photo/serum-bottle-plant-with-copy-space_23-2148899360.jpg?_wi=1",
          imageAlt: "Front view composition of zero waste products",
        },
      ]}
      title="Tại sao chọn chúng tôi"
      description="Chất lượng là ưu tiên hàng đầu trong mọi sản phẩm."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "Ngọc Quỳnh",
          name: "Tinh dầu Tràm",
          price: "Liên hệ",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-medicinal-leaf-extracts-medicine-bottle-pink-background_181624-43339.jpg?_wi=2",
        },
        {
          id: "2",
          brand: "Ngọc Quỳnh",
          name: "Tinh dầu Bạc Hà",
          price: "Liên hệ",
          rating: 5,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/serum-bottle-plant-with-copy-space_23-2148899360.jpg?_wi=2",
        },
        {
          id: "3",
          brand: "Ngọc Quỳnh",
          name: "Tinh dầu Sả Chanh",
          price: "Liên hệ",
          rating: 5,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/natural-medicine-concept-top-view_23-2148899366.jpg",
        },
        {
          id: "4",
          brand: "Ngọc Quỳnh",
          name: "Tinh dầu Oải Hương",
          price: "Liên hệ",
          rating: 5,
          reviewCount: "200",
          imageSrc: "http://img.b2bpic.net/free-photo/serum-bottle-flower-arrangement_23-2149249546.jpg",
        },
        {
          id: "5",
          brand: "Ngọc Quỳnh",
          name: "Tinh dầu Quế",
          price: "Liên hệ",
          rating: 5,
          reviewCount: "80",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-jojoba-oil-assortment_23-2149047735.jpg",
        },
        {
          id: "6",
          brand: "Ngọc Quỳnh",
          name: "Tinh dầu Gừng",
          price: "Liên hệ",
          rating: 5,
          reviewCount: "65",
          imageSrc: "http://img.b2bpic.net/free-photo/liquid-facial-skin-care-product-white-background-isolated_169016-26906.jpg",
        },
      ]}
      title="Sản phẩm nổi bật"
      description="Khám phá các sản phẩm tinh dầu nguyên chất của chúng tôi."
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Về chúng tôi"
      buttons={[
        {
          text: "Tìm hiểu thêm",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "10+",
          description: "Năm kinh nghiệm",
        },
        {
          id: "m2",
          value: "50+",
          description: "Sản phẩm tinh dầu",
        },
        {
          id: "m3",
          value: "10k+",
          description: "Khách hàng tin dùng",
        },
        {
          id: "m4",
          value: "63",
          description: "Tỉnh thành phục vụ",
        },
      ]}
      title="Thành tựu của chúng tôi"
      description="Chúng tôi nỗ lực mỗi ngày để mang lại những sản phẩm tốt nhất cho sức khỏe của bạn."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "animated-grid",
      }}
      text="Liên hệ với chúng tôi: 110/13 Đường Số 4, Bình Hưng Hoà A, Bình Hưng Hòa, TP.HCM - 0902 790 788"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Ngọc Quỳnh Natural"
      copyrightText="© 2025 Ngọc Quỳnh Natural Company. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
