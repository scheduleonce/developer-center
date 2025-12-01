import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Getting Started",
    icon: "/img/icon-overview.png",
    description:
      "Learn the fundamentals of the OnceHub API, including authentication, versioning, rate limits, and best practices.",
    link: "/docs/overview/introduction",
  },
  {
    title: "Webhooks",
    icon: "/img/icon-webhooks.png",
    description:
      "Receive real-time notifications about bookings, cancellations, and other events in your OnceHub account.",
    link: "/docs/webhooks/introduction-to-webhooks",
  },
  {
    title: "Client Side API",
    icon: "/img/icon-client-side-api.png",
    description:
      "Embed OnceHub scheduling directly into your website with our JavaScript API and capture booking data in real-time.",
    link: "/docs/client-side-api/introduction",
  },
  {
    title: "API For Booking Calendars",
    icon: "/img/icon-booking-calendars.png",
    description:
      "Manage bookings, contacts, and calendar settings programmatically with our comprehensive REST API.",
    link: "/reference/booking-calendars/",
  },
  {
    title: "API For Booking Pages",
    icon: "/img/icon-booking-pages.png",
    description:
      "Access and manage your Booking Pages (Classic) programmatically to create seamless scheduling workflows.",
    link: "/reference/booking-pages/",
  },
  {
    title: "What's New",
    icon: "/img/icon-whats-new.png",
    description:
      "Stay up to date with the latest API updates, new features, and improvements to the OnceHub platform.",
    link: "https://help.oncehub.com/help/whats-new",
  },
];

function Feature({ title, icon, description, link }: FeatureItem) {
  const isExternalLink = link.startsWith("http");
  return (
    <Link
      to={link}
      className={styles.featureCard}
      {...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <div className={styles.featureIcon}>
        <img src={icon} alt={title} />
      </div>
      <h3 className={styles.featureTitle}>
        {title} <span className={styles.arrow}>&gt;&gt;</span>
      </h3>
      <p className={styles.featureDescription}>{description}</p>
    </Link>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          Get Started with OnceHub API
        </Heading>
        <p className={styles.heroSubtitle}>
          Build powerful integrations with OnceHub's REST API. Access
          scheduling, bookings, webhooks, and more to create seamless
          experiences for your users.
        </p>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featureGrid}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="OnceHub Developer Center"
      description="Get started with OnceHub API - Documentation, webhooks, and API reference"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
